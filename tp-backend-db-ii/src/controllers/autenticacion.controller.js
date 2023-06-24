import { buscarEnUsuariosAggregationFrk } from "../libs/querys";
import { firmarToken } from "../middlewares/jwt";
import usuario from "../models/usuario";

export const ingresar = async (req, res) => 
{
    try 
    { 
        const pipeline = [{$match: {username: req.body.username}}];
        const resultadoBusquedaIngreso = await buscarEnUsuariosAggregationFrk(pipeline);
        
        if(resultadoBusquedaIngreso.length > 0 && resultadoBusquedaIngreso.length < 2 && resultadoBusquedaIngreso[0].password == req.body.password)
        {
            let tokenGenerado = firmarToken(resultadoBusquedaIngreso[0].username, resultadoBusquedaIngreso[0].tipo);
            res.status(200);/*OK*/; res.json(tokenGenerado);
        }
        else if (resultadoBusquedaIngreso.length == 0) {res.status(404); /*Not found*/; res.json("No se pudo encontrar ningun usuario con ese nombre");}
        else if (resultadoBusquedaIngreso[0].password != req.body.password) {res.status(401); res.json("La contraseña es incorrecta");}
    }
    catch { res.status(500) /*Internal server error*/; res.json("Hubo un error en el ingreso al sistema"); }
}

export const registrar = async (req, res) => 
{
    try 
    { 
        const pipeline = [{$match: {username: req.body.username}}];
        const resultadoBusquedaRegistro = await buscarEnUsuariosAggregationFrk(pipeline);
        // console.log(resultadoBusquedaRegistro);
        
        if (resultadoBusquedaRegistro.length > 0) {res.status(200); res.json("Ya existe un usuario con ese username");}
        else
        {
            let nuevoUsuario = await new usuario(req.body);
            nuevoUsuario.tipo = "cliente";
            await nuevoUsuario.save();
            let tokenGenerado = firmarToken(req.body.username, nuevoUsuario.tipo);;
            res.status(200); res.json(tokenGenerado);
        }
    }
    catch {res.status(500) /*Internal server error*/; res.json("Hubo un error en la creacion de su usuario");}
}

// AGARRAR TOKEN TODO
// const token = req.headers.authorization;
//console.log(token);

// const authorizationHeader = req.headers['authorization'];
// if (authorizationHeader) 
// {
    // Aquí puedes acceder al token JWT (variable 'token') y realizar las operaciones necesarias
// }