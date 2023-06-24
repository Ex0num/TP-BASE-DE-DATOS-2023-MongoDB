import config from '../config';
import jwt from 'jsonwebtoken';

// Middleware de verificación de validez de token (y renovacion automatica cerca del tiempo de expiracion)
export const verificacionToken = (req, res, next) => 
{
    const token = req.headers.authorization;

    try 
    {
        let esTokenValido = verificarValidezToken(token);
        if (esTokenValido == true) {next();}
    }
    catch (error) {return res.status(401 /*Unautorized*/).json({ mensaje: 'Token inválido o expirado' })}; 
}

// Función para firmar un token
export const firmarToken = (username, tipo) => 
{
    const token = jwt.sign({username, tipo}, config.JWT_SECRET_KEY, { expiresIn: config.JWT_EXPIRES_IN });
    return token;
};

// Funcion que verifica si un token posee un formato valido y por supuesto no expiro
export const verificarValidezToken = (tokenRecibido) => 
{
    try 
    {
        // Si la verificación es exitosa, el token es válido y no ha expirado
        const decoded = jwt.verify(tokenRecibido, config.JWT_SECRET_KEY);
        return true;
    } 
    catch (error) 
    {
        // Si ocurre algún error en la verificación, el token no es válido o ha expirado
        return false;
    }
};