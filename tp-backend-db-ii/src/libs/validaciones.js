// Listado de validaciones
import usuario from "../models/usuario";

// --------------------------------------------------------- VALIDACION DE MODELO USUARIO --------------------------------------------------------- //

// Valida la existencia de un usuario mediante un username recibido.
export const validar_existeUsuario = async (usernameRecibido) =>
{
    let resultado = false;

    let usuariosObtenidos = await usuario.find({username: usernameRecibido});
    if (usuariosObtenidos.length > 0) {resultado = true};

    return resultado;
};

// ---------------------- VALIDACION DE CAMPOS ---------------------- //

// Método de validación personalizado para el nickname de usuario
const validar_campo_Username = async (usernameRecibido) =>
{
    let resultado = "valido";

    if (!usernameRecibido || typeof usernameRecibido !== "string") {resultado = "El nombre de usuario es requerido y debe ser una cadena de texto.";}
    if (usernameRecibido.length < 4 || usernameRecibido.length > 30) { resultado = "El nombre de usuario debe tener entre 4 y 30 caracteres.";}
    // if (/[^\w\d]/.test(usernameRecibido))  {resultado = "El nombre de usuario no debe contener símbolos como $, % o #.";}
    return resultado;
};
  
// Método de validación personalizado para la contraseña
const validar_campo_Password = async (passwordRecibida) =>
{
    let resultado = "valido";

    if (!passwordRecibida || typeof passwordRecibida !== "string") {resultado = "La contraseña es requerida y debe ser una cadena de texto.";}
    if (passwordRecibida.length < 4 || passwordRecibida.length > 30) {resultado = "La contraseña debe tener entre 4 y 30 caracteres.";}
    return resultado;
};

// Custom validation method for the name field
const validar_campo_Nombre = async (nombreRecibido) => 
{
    let resultado = "valido";

    if (!nombreRecibido || typeof nombreRecibido !== "string") {resultado = "El nombre es requerido y debe ser una cadena de texto."; }
    if (nombreRecibido.length < 2 || nombreRecibido.length > 30) { resultado = "El nombre debe tener entre 2 y 30 caracteres.";}
    if (/\d/.test(nombreRecibido)) {resultado = "El nombre no debe contener números.";}
    return resultado;
};

// Custom validation method for the last name field
const validar_campo_Apellido = async (apellidoRecibido) => 
{
    let resultado = "valido";

    if (!apellidoRecibido || typeof apellidoRecibido !== "string") { resultado = "El apellido es requerido y debe ser una cadena de texto.";}
    if (apellidoRecibido.length < 2 || apellidoRecibido.length > 30) {resultado = "El apellido debe tener entre 2 y 30 caracteres.";}
    if (/\d/.test(apellidoRecibido)) { resultado = "El apellido no debe contener números.";}
    return resultado;
};

// Método de validación personalizado para el sexo
const validar_campo_Sexo = async (sexoRecibido) => 
{
    let resultado = "valido";

    if (!sexoRecibido || typeof sexoRecibido !== "string") {resultado = "El sexo es requerido y debe ser una cadena de texto.";}
    if (!["femenino", "masculino", "otro"].includes(sexoRecibido.toLowerCase())) {resultado = "El sexo debe ser femenino, masculino u otro.";}
    return resultado;
};

//Método de validación personalizado para todos los campos
export const validar_campos_Usuario = async (usernameRecibido, passwordRecibida, nombreRecibido, apellidoRecibido, sexoRecibido) =>
{
    let resultado = "valido";

    const resultadoUsername = await validar_campo_Username(usernameRecibido);
    const resultadoPassword = await validar_campo_Password(passwordRecibida);
    const resultadoNombre = await validar_campo_Nombre(nombreRecibido);
    const resultadoApellido = await validar_campo_Apellido(apellidoRecibido);
    const resultadoSexo = await validar_campo_Sexo(sexoRecibido);

    if (
    resultadoUsername !== "valido" || 
    resultadoPassword !== "valido" || 
    resultadoNombre !== "valido" || 
    resultadoApellido !== "valido" || 
    resultadoSexo !== "valido") 
    {
        // console.log(resultadoUsername);
        // console.log(resultadoPassword);
        // console.log(resultadoNombre);
        // console.log(resultadoUsername);
        // console.log(resultadoApellido);
        // console.log(resultadoSexo);
        return "Uno o más campos no son válidos.";
    }

    return resultado;
}