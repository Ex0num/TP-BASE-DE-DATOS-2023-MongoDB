import ticket from "../models/ticket";

// ---------------------------------OP. DE PROYECCION--------------------------------------------//
export const op_project = async (req, res) => {
    try {
        const resultado = await ticket.aggregate([
            { $match: { estado: "resuelto" } },
            { $match: { usuario_afectado: "julio.lopez" } },
            { $project: {
                historial_derivaciones: 0,
                historial_conversacion: 0,
                coordenadas_localizacion_afectado: 0,
                packs_de_canales_adquiridos: 0,
            }}]);

        // console.log(resultado);
        res.status(200).json(resultado);
    } 
    catch (e) {
        console.error(e.stack);
        res.status(404).json("Hubo un error en la consulta");
    }
}
export const op_expr = async (req, res) => {
    try 
    {
        const resultado = await ticket.aggregate([{
                $match: {
                    $expr: {
                        $and: [
                            { $eq: ["$ultimo_asignado", "$asignador"] }, // Compara si el valor 1 es igual al valor 2
                            { $ne: ["$ultimo_asignado", ""] }, // Filtra los valores vacíos en el campo "ultimo_asignado"
                            { $ne: ["$asignador", ""] } // Filtra los valores vacíos en el campo "ultimo_asignado"    
                        ]
                    }
                }
            }
        ]);

        // console.log(resultado);
        res.status(200).json(resultado);
    } 
    catch 
    {
        res.json("Hubo un error en la consulta");
        res.status(404); /* Not found */
    }
}
export const op_match = async (req, res) => {
    try 
    {
        const resultado = await ticket.aggregate([{
                $match: { estado: "resuelto" },
                $match: { asunto: "dar_de_alta" },
                $match: { asignador: "luis.fernandez" },
                $match: { usuario_afectado: "martina.lopez" },
            }
        ]);

        // console.log(resultado);
        res.status(200).json(resultado);
    } 
    catch 
    {
        res.json("Hubo un error en la consulta");
        res.status(404); /* Not found */
    }
}