import ticket from "../models/ticket";

// ---------------------------------OP. DE EXISTENCIA--------------------------------------------//
export const op_exists = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $exists
        const ticketsEncontrados = await ticket.find({ 'packs_de_canales_adquiridos.nombre_pack': { $exists: false }});
        // console.log(ticketsEncontrados);
        res.status(200).json(ticketsEncontrados);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_type = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $type
        const ticketsEncontrados = await ticket.find({ 'asignador': { $type: "string" }});
        // console.log(ticketsEncontrados);
        res.status(200).json(ticketsEncontrados);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_all = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $all
        const ticketsEncontrados = await ticket.find({ 'packs_de_canales_adquiridos.canales_incluidos.nombre_canal': { $all: ["MTV", "VH1"] } });
        // console.log(ticketsEncontrados);
        res.status(200).json(ticketsEncontrados);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_elemMatch = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $elemMatch
        const ticketsEncontrados = await ticket.find({
            historial_derivaciones: {
                $elemMatch: {
                    asignador: "luis.fernandez",
                    asignado: "carlos.fernandez"
                }
            }
        });

        // console.log(ticketsEncontrados);
        res.status(200).json(ticketsEncontrados);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}