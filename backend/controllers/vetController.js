import Veterinario from "../models/Veterinario.js"
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";
import emailRegistro from "../helpers/emailRegistro.js";

//Registrar usuario.
const registrar = async(req, res) => {
  const { email, nombre } = req.body;

  //Prevenir usuarios diplucados.
  const existeUsuario = await Veterinario.findOne({email});

  if (existeUsuario) {
    const error = new Error(`Usuario ya registrado.`);
    return res.status(400).json({msg: error.message});
  };

  try {
    //Guardar nuevo veterinario.
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();

    //Enviar email.
    emailRegistro({
      email,
      nombre,
      token: veterinarioGuardado.token
    });

    res.json( veterinarioGuardado );
  } catch (error) {
    console.log(error);
  };
};

const perfil = (req, res) => {
  const { veterinario } = req;
  res.json({ perfil: veterinario});
};

/*Confirmar cuenta.*/
const confirmar = async (req, res) => {

  //Confirmar usuario por token.
  const { token } = req.params;
  const usuarioConfirmar = await Veterinario.findOne({token});

  //Verificar si no existe el token.
  if (!usuarioConfirmar) {
    const error = new Error('Token no valido');
    res.status(404).json({msg: error.message})
  };
  //si existe, se elimina el token y se confirma la cuenta.
  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    usuarioConfirmar.save();

    res.json({msg: `Usuario confirmado correctamente.`})
  } catch (error) {
    console.log(error);
  };
};

/*Autenticar usuario.*/
const autenticar = async (req, res) => {
  const { email, password } = req.body;

  //Comprobar si el usuario existe.
  const usuario =  await Veterinario.findOne({email});
  if (!usuario) {
    const error = new Error('El usuario no existe.');
    res.status(404).json({msg: error.message});
  };
  
  //Si existe, comprobar si el usuario esta confirmado.
  if (!usuario.confirmado) {
    const error = new Error('Tu cuenta no ha sido confirmada.');
    return res.status(404).json({msg: error.message});
  };
  
  //Si existe y esta confirmado, autenticar al usuario.
  if (await usuario.comprobarPassword(password)) {
    //Autenticar el usuario.
    res.json({token: generarJWT(usuario.id)});
  } else {
    const error = new Error('El password es incorrecto.');
    res.status(404).json({msg: error.message});
  };
};

const recuperarPassword = async ( req, res ) => {
  const { email } = req.body;
  const existeVeterinario = await Veterinario.findOne({email});
  if (!existeVeterinario) {
    const error = new Error('El usuario no existe.');
    return res.status(404).json({msg: error.message});
  };

  try {
    existeVeterinario.token = generarId();
    await existeVeterinario.save();
    res.json({msg: `Hemos enviado un email con las instrucciones.`})
  } catch (error) {
    console.log(error);
  }
};

const comprobarToken = async ( req, res ) => {
  const { token } = req.params;
  const tokenValido = await Veterinario.findOne({token});
  
  if (tokenValido) {
    res.json({msg:`Token valido, el usuario existe`});
  } else {
    const error = new Error('Token no valido');
    return res.status(404).json({msg: error.message});
  }
  
};

const nuevoPasword = async( req, res ) => {
  const { token } = req.params;
  const { password } = req.body;

  const veterinario = await Veterinario.findOne({token});
  if (!veterinario) {
    const error = new Error('Hubo un error.');
    return res.status(404).json({msg: error.message});
  };

  try {
    veterinario.token = null;
    veterinario.password = password;
    await veterinario.save();
    res.json({msg: `Password modificado correctamente.`})
  } catch (error) {
    const e = new Error('Hubo un error en la bd.');
    return res.status(404).json({msg: e.message});
  };

};

export {
  registrar,
  perfil,
  confirmar,
  autenticar,
  recuperarPassword,
  comprobarToken,
  nuevoPasword
};