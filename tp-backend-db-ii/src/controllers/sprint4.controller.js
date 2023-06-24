import ticket from "../models/ticket";

// ---------------------------------OP. DE ORDEN--------------------------------------------//
export const op_size = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $size
        const ticketsEncontrados = await ticket.find({ packs_de_canales_adquiridos: { $size: 3 } });
        // console.log(ticketsEncontrados);
        res.status(200).json(ticketsEncontrados);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_sortByCount = async (req, res) => {
    try {
        // Realizar la consulta utilizando el operador $sortByCount
        const resultado = await ticket.aggregate([
            { $match: { estado: "resuelto" } },
            { $group: { _id: "$estado", count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        // console.log(resultado);
        res.status(200).json(resultado);
    } catch {
        res.json("Hubo un error en la consulta");
        res.status(404); /* Not found */
    }
}
export const op_unwind = async (req, res) => {

    try {

        // Realizar la consulta utilizando el operador $unwind
        const resultado = await ticket.aggregate([
            { $unwind: "$historial_derivaciones" },
            { $match: 
                {
                    $or: [
                        { coordenadas_localizacion_afectado: -34.5821 },
                        { coordenadas_localizacion_afectado: -58.4128 } 
                    ]
                }}
        ]);

        // console.log(resultado);
        res.status(200).json(resultado);
    } 
    catch {
        res.json("Hubo un error en la consulta");
        res.status(404); /* Not found */
    }

}
export const op_group = async (req, res) => {
    try {
        const resultado = await ticket.aggregate([
            { $match: { ultimo_asignado: "martin.sanchez" } },
            { $group: {
                _id: "$ultimo_asignado", // Campo por el cual se va a agrupar
                total: { $sum: 1 } // Cálculo de la cantidad de documentos en cada grupo
            }}
        ]);

        // console.log(resultado);
        res.status(200).json(resultado);
    } catch {
        res.json("Hubo un error en la consulta");
        res.status(404); /* Not found */
    }
}