// ----------------------------------------------- QUERYS ----------------------------------------------- //
import usuario from "../models/usuario";

export const buscarEnUsuariosAggregationFrk = async (pipelineRecibido) =>
{
    return await usuario.aggregate(pipelineRecibido);
}

export const buscarEnUsuariosCommonFrk = async (objetoQueryRecibido) =>
{
    return await usuario.find(objetoQueryRecibido);
}

export const buscarUsuarioPorNombre = async (nombreRecibido) =>
{
    const pipeline = [{$match: {username: nombreRecibido}}];
    return await usuario.aggregate(pipeline);
}