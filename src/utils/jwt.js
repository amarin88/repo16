import jwt from "jsonwebtoken";//Import de JWT
import envs from "../config/env.config.js"//Import de la configuracion de dotenvs

//Crear un token
export const createToken = (user) => {
    const { _id, email, role, cart } = user;//Desestructuramos y recibimos el _id, email, role y carrito del usuario
    const token = jwt.sign({_id , email, role, cart}, envs.JWT_SECRET, {expiresIn: "2m"} );// Creamos el token recibiendo como primer parametro el _id y el email en un objeto, el segundo parametro es el codigo secreto, el tercer parametro hardcodeamos el rol de usuario como "user", para completar la configuracion debemos agregar el code secret y la duracion del token en este caso 1 minuto 
    return token;//Retornamos el token
};

//Verificación de token
export const verifyToken = (token) => {
    try {
      const verification = jwt.verify(token, envs.JWT_SECRET);//Recibimos el token y el codigo secreto que debe coincidir con el asignado en el token
      return verification;//Devolvemos la verificación
    } catch (error) {
      return null;//Si el token expiró devolvemos "null" o vacío
    }
  };