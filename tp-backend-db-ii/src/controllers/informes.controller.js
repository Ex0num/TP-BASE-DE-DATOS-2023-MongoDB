import ticket from "../models/ticket";

// ---------------------------------CONTROL DE ATENCION-----------------------------------------//
export const control_atencion_primerInforme = async (req, res) => {
    try {
        const resultado_1_segundoInforme = await ticket.aggregate([
            { $group: {
                _id: "$ultimo_asignado",
                count: { $sum: 1 }
            }},
            { $match: { _id: { $ne: "" } } }, // Excluir documentos con campo "ultimo_asignado" vacío
            { $sort: { count: -1 }},
            { $limit: 1 }
        ]);

        //console.log(resultado_1_segundoInforme);
        res.status(200).json({ resultado_1_segundoInforme });
    } catch {
        res.json("Hubo un error en la consulta");
        res.status(404); /* Not found */
    }
};
export const control_atencion_segundoInforme = async (req, res) => 
{
    try {
        const resultado_2_primerInforme = await ticket.aggregate([
            { $match: { estado: { $ne: "resuelto" } } },
            { $count: "total" }
        ]);

        //console.log(resultado_2_primerInforme);
        res.status(200).json({ resultado_2_primerInforme });
    } 
    catch {
        res.json("Hubo un error en la consulta");
        res.status(404); /* Not found */
    }
};

// ---------------------------------CONTROL DE INCIDENTES-----------------------------------------//
export const control_incidentes_primerInforme = async (req, res) => {
    try {
        const resultado_1_primerInforme = await ticket.aggregate([
            { 
                $group: {
                _id: "$asunto", //Agrupo por el asunto y contabilizo (sum) todos. Ordeno asc. y me quedo con 1
                count: { $sum: 1 }
            }},
            { $sort: { count: -1 }},
            { $limit: 1 },
            { $project: 
                {
                    _id: 0,
                    desperfecto: "$_id",
                    count: 1
                }}
        ]);

        //console.log(resultado_1_primerInforme);
        res.status(200).json({ resultado_1_primerInforme });
    } catch {
        res.json("Hubo un error en la consulta");
        res.status(404); /* Not found */
    }
};
export const control_incidentes_segundoInforme = async (req, res) => {
    try {
        const resultado_2_segundoInforme = await ticket.aggregate([
            { $match: { estado: "resuelto" }},
            { $group: {
                _id: "$asunto",
                count: { $sum: 1 }
            }},
            { $sort: { count: -1 }},
            { $limit: 1 },
            { $project: {
                _id: 0,
                asunto: "$_id",
                count: 1
            }}
        ]);

        //console.log(resultado_2_segundoInforme);
        res.status(200).json({ resultado_2_segundoInforme });
    } catch {
        res.json("Hubo un error en la consulta");
        res.status(404); /* Not found */
    }
};

// -------------------------------------DATOS ZONALES---------------------------------------------//
export const datos_zonales_primerInforme = async (req, res) => 
{
    try {
        const resultado = await ticket.aggregate([
            { $group: {
                _id: "$coordenadas_localizacion_afectado",
                totalTickets: { $sum: 1 }
            }},
            { $sort: { totalTickets: -1 } },
            { $limit: 1 }
        ]);

        //console.log(resultado);
        res.status(200).json(resultado);
    } catch {
        res.json("Hubo un error en la consulta");
        res.status(404);
    }
};
export const datos_zonales_segundoInforme = async (req, res) => {
    try {
        const resultado = await ticket.aggregate([
            {
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: [-34.5987, -58.3974] // Coordenadas de la empresa
                    },
                    distanceField: "distancia",
                    maxDistance: 5000, // Radio de 5 km en metros
                    spherical: true
                }
            },
            { $group: {
                _id: "$coordenadas_localizacion_afectado",
                totalTickets: { $sum: 1 }
            }},
            { $sort: { totalTickets: -1 } },
            { $limit: 1 }
        ]);

        //console.log(resultado);
        res.status(200).json(resultado);
    } catch {
        res.json("Hubo un error en la consulta");
        res.status(404);
    }
};

// ---------------------------------CONTROL DE INCIDENTES-----------------------------------------//
export const datos_de_clientes_primerInforme = async (req, res) => 
{
    try {
        const resultado = await ticket.aggregate([
            { $group: {
                _id: "$usuario_afectado",
                totalTickets: { $sum: 1 }
            }},
            { $sort: { totalTickets: -1 } },
            { $limit: 1 },
            { $project: 
                { 
                    _id: 1,
                    totalTickets: 1
                } 
            }
        ]);

        //console.log(resultado);
        res.status(200).json(resultado);
    } catch {
        res.json("Hubo un error en la consulta");
        res.status(404);
    }
};
export const datos_de_clientes_segundoInforme = async (req, res) => 
{
    try {
        const resultado = await ticket.aggregate([
            { $group: {
                _id: "$usuario_afectado",
                totalTickets: { $sum: 1 }
            }},
            { $match: { totalTickets: { $gt: 2 } } },
            { $count: "totalClientes" }
        ]);

        //console.log(resultado);
        res.status(200).json(resultado);
    } catch {
        res.json("Hubo un error en la consulta");
        res.status(404);
    }
};