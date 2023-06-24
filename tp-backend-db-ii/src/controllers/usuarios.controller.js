import { firmarToken } from '../middlewares/jwt'
import { validar_campos_Usuario, validar_existeUsuario } from "../libs/validaciones";
import usuario from '../models/usuario';
import { buscarUsuarioPorNombre, buscarEnUsuariosCommonFrk } from '../libs/querys';

// --- CREAR USUARIO ---
export const crearUsuario = async (req, res) => {
    try
    {
        // Desestructuro el body
        const nuevoObjeto = new usuario(req.body);
        // console.log(nuevoObjeto.username);
        let resultadoValidacionExistencia = await validar_existeUsuario(nuevoObjeto.username);
        let resultadoValidacionDatos = await validar_campos_Usuario(nuevoObjeto.username, nuevoObjeto.password, nuevoObjeto.nombre, nuevoObjeto.apellido, nuevoObjeto.sexo);

        if (resultadoValidacionExistencia == false && resultadoValidacionDatos == "valido")
        {      
            nuevoObjeto.tipo = "cliente";
            await nuevoObjeto.save();
            let jwtGenerado = firmarToken(nuevoObjeto.username, nuevoObjeto.tipo);
            res.json(jwtGenerado);
            res.status(201);  /*Created*/
        }
        else
        {
            if (resultadoValidacionDatos != "valido") {res.status(422); /*Unprocessable*/ res.json("Hubo un error en el ingreso de los datos.");}
            else if (resultadoValidacionExistencia == true) {res.status(409); /*Conflict*/ res.json("Ya existe un usuario con ese nickname.");}
        }
    }
    catch (e) {res.json("Hubo un error en la creación del usuario"); res.status(404); /*Not found*/}
}

// --- BUSCAR USUARIO BY ID ---
export const listarUsuarioById = async (req, res) => 
{
    try 
    {
        let usuarioEncontrado = await usuario.findById(req.params.usuarioId);
        res.status(200).json(usuarioEncontrado);
    } 
    catch {res.json("Hubo un error en la búsqueda del usuario"); res.status(404); /*Not found*/}
}

// --- BUSCAR USUARIO BY USERNAME ---
export const listarUsuarioByUsername = async (req, res) => 
{
    try 
    { 
        let usuariosEncontrados = await buscarUsuarioPorNombre(req.params.usuarioUsername);
        if (usuariosEncontrados.length <= 0) {res.status(404).json("No se pudo encontrar ningún usuario con ese nombre");}
        else {res.status(200).json(usuariosEncontrados[0]);}       
    } 
    catch{res.status(404).json("Hubo un error en la búsqueda del usuario por nombre");}
}

// --- LISTAR USUARIOS ---
export const listarUsuarios = async (req, res) => 
{
    try 
    { 
        let usuariosEncontrados = await buscarEnUsuariosCommonFrk({});
        res.status(200).json(usuariosEncontrados);
    } 
    catch { res.json("Hubo un error en el listado de los usuarios");res.status(404); /*Not found*/}
}