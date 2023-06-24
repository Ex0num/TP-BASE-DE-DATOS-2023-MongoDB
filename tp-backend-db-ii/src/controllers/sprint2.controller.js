import ticket from "../models/ticket";

// ---------------------------------OP. NUMERICOS--------------------------------------------//
export const op_equals = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $eq
        const ticketsEncontrado = await ticket.find({ usuario_afectado: {$eq: "pedro.gomez"}});
        // console.log(ticketsEncontrado);
        res.status(200).json(ticketsEncontrado);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_greaterThan = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $gt
        const ticketsEncontrado = await ticket.find({'packs_de_canales_adquiridos.canales_incluidos.numero_canal': {$gt: 901} });
        // console.log(ticketsEncontrado);
        res.status(200).json(ticketsEncontrado);
    } 
    catch  (error) 
    {
        console.error("Error en la búsqueda de tickets:", error);
        res.json(); res.status(404); /*Not found*/
    }
}
export const op_greaterThanEqual = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $gte
        const ticketsEncontrado = await ticket.find({'packs_de_canales_adquiridos.canales_incluidos.numero_canal': {$gte: 903} });
        // console.log(ticketsEncontrado);
        res.status(200).json(ticketsEncontrado);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_lessThan = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $lt
        const ticketsEncontrado = await ticket.find({'packs_de_canales_adquiridos.canales_incluidos.numero_canal': {$lt: 213} });
        // console.log(ticketsEncontrado);
        res.status(200).json(ticketsEncontrado);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_lessThanEqual = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $lte
        const ticketsEncontrado = await ticket.find({'packs_de_canales_adquiridos.canales_incluidos.numero_canal': {$lte: 212} });
        // console.log(ticketsEncontrado);
        res.status(200).json(ticketsEncontrado);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_notEquals = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $ne
        const ticketsEncontrado = await ticket.find({'asunto': { $ne: "desperfecto" }});
        // console.log(ticketsEncontrado);
        res.status(200).json(ticketsEncontrado);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_in = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $in
        const valores = [343];
        const ticketsEncontrado = await ticket.find({'packs_de_canales_adquiridos.canales_incluidos.numero_canal': { $in: valores }});
        // console.log(ticketsEncontrado);
        res.status(200).json(ticketsEncontrado);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_nin = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $nin
        const valores = [256,343,401,502,602,701,802,903];
        const ticketsEncontrado = await ticket.find({'packs_de_canales_adquiridos.canales_incluidos.numero_canal': { $nin: valores }});
        // console.log(ticketsEncontrado);
        res.status(200).json(ticketsEncontrado);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
// -----------------------------------OP. LOGICOS--------------------------------------------//
export const op_or = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $or
        const ticketsEncontrado = await ticket.find({
            $or: [
                {usuario_afectado: "maria.gonzalez"},
                {usuario_afectado: "marcos.rodriguez"},
            ]});

        // console.log(ticketsEncontrado);
        res.status(200).json(ticketsEncontrado);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_and = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $and
        const ticketsEncontrado = await ticket.find({
            $and: [
                {usuario_afectado: "maria.gonzalez"},
                {ultimo_asignado: "luis.fernandez"},
            ]});

        // console.log(ticketsEncontrado);
        res.status(200).json(ticketsEncontrado);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_nor = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $nor
        const ticketsEncontrados = await ticket.find({
            $nor: [
                {estado: "abierto"},
                {estado: "resuelto"}
            ]});

        // console.log(ticketsEncontrados);
        res.status(200).json(ticketsEncontrados);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_not = async (req, res) => 
{
    try 
    {
        // Realizar la consulta utilizando el operador $not
        const ticketsEncontrados = await ticket.find({estado: {$not: {$eq: "abierto"}} });
        
        // console.log(ticketsEncontrados);
        res.status(200).json(ticketsEncontrados);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
//--------------------------------------------------------------------------------------------//
export const op_text_with_index = async (req, res) => 
{
    try 
    {
        // Obtengo la instancia de la colección de MongoDB
        const ticketCollection = ticket.collection;
        await ticketCollection.createIndex({ "usuario_afectado": "text" });

        // Realizo la consulta utilizando el índice de texto
        const ticketsEncontrados = await ticket.find({ $text: { $search: "pedro.gomez" } });
        
        // console.log(ticketsEncontrados);
        res.status(200).json(ticketsEncontrados);
    } 
    catch {res.json("Hubo un error en la búsqueda del ticket"); res.status(404); /*Not found*/}
}
export const op_near = async (req, res) => 
{
    try 
    {
  
        await ticket.collection.createIndex({ coordenadas_localizacion_afectado: '2dsphere' });
        const coordenadas = [-34.76, -58.39]; //Lomas de Zamora Estacion
    
        const ticketsEncontrados = await ticket.find({
            coordenadas_localizacion_afectado: 
            {
                $near: 
                {
                    $geometry: 
                    {
                        type: 'Point',
                        coordinates: coordenadas
                    },
                    $maxDistance: 10000 // Distancia máxima en metros (10km)
                }
            }
        });
  
        // console.log(ticketsEncontrados);
        res.status(200).json(ticketsEncontrados);
    } 
    catch 
    {
        res.json('Hubo un error en la búsqueda del ticket');
        res.status(404); /*Not found*/
    }
};
export const op_geoWithin = async (req, res) => 
{
    try 
    {
        await ticket.collection.createIndex({ coordenadas_localizacion_afectado: '2dsphere' });

        const poligono = [
            [-34.59722853850908, -58.39870266362605], // Punto 1 (Facultad de Medicina UBA)
            [-34.609707941766395, -58.40794127761748], // Punto 2 (Plaza Miserere)
            [-34.601064008235284, -58.38348554603555], // Punto 3 (Teatro Colon)
            [-34.59722853850908, -58.39870266362605]  // El último punto debe ser igual al primero para cerrar el polígono
          ];
          
        const ticketsEncontrados = await ticket.find({
        coordenadas_localizacion_afectado: {
            $geoWithin: {
            $geometry: {
                type: "Polygon",
                coordinates: [poligono]
            }
            }
        }
        });

        // console.log(ticketsEncontrados);
        res.status(200).json(ticketsEncontrados);
    } 
    catch 
    {
        res.json('Hubo un error en la búsqueda del ticket');
        res.status(404); /*Not found*/
    }
};
export const op_geoIntersect = async (req, res) => 
{
    try 
    {
        await ticket.collection.createIndex({ coordenadas_localizacion_afectado: '2dsphere' });

        const poligono = [
            [-34.66218397813713, -58.36446218389322], // Punto 1 (Facultad de UTNFRA)
            [-34.68086891783184, -58.358448311254136], // Punto 2 (Hospital Presidente Peron)
            [-34.67500175384861, -58.367696092060605], // Punto 3 (Shopping de Alto Avellaneda)
            [-34.66218397813713, -58.36446218389322]  // El último punto debe ser igual al primero para cerrar el polígono
          ];
          
        const ticketsEncontrados = await ticket.find({
        coordenadas_localizacion_afectado: {
            $geoIntersects: {
            $geometry: {
                type: "Polygon",
                coordinates: [poligono]
            }
            }
        }
        });

        // console.log(ticketsEncontrados);
        res.status(200).json(ticketsEncontrados);
    } 
    catch 
    {
        res.json('Hubo un error en la búsqueda del ticket');
        res.status(404); /*Not found*/
    }
};
export const op_lookup = async (req, res) => {
    try {
        const resultado = await ticket.aggregate([
            {
                $lookup: {
                    from: "usuarios",
                    localField: "usuario_afectado",
                    foreignField: "username",
                    as: "usuario"
                }
            },
            {$match: { usuario: { $ne: [] }}}, // Filtra los documentos donde el campo "usuario" esté vacío
            {
                $project: {
                    _id: 0,
                    estado: 1,
                    usuario: "$usuario.username",
                    nombre: "$usuario.nombre",
                    apellido: "$usuario.apellido",
                    sexo: "$usuario.sexo",
                    tipo: "$usuario.tipo"
                }
            }
        ]);

        // console.log(resultado);
        res.status(200).json(resultado);
    } catch {
        res.json("Hubo un error en la consulta");
        res.status(404);
    }
};