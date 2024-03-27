import Veterinario from "../models/Veterinario.js"
import generarJWT from "../helpers/generarJWT.js";

const registrar = async(req, res) => {
  const { email } = req.body;

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

    res.json( veterinarioGuardado );
  } catch (error) {
    console.log(error);
  };
};

const perfil = (req, res) => {
  res.json({ msg: `Mostrando perfil.` });
};

const confirmar = async (req, res) => {

  //Confirmar usuario por token.
  const { token } = req.params;
  const usuarioConfirmar = await Veterinario.findOne({token});
  if (!usuarioConfirmar) {
    const error = new Error('Token no valido');
    res.status(404).json({msg: error.message})
  };
  console.log(usuarioConfirmar);
  
  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    usuarioConfirmar.save();

    res.json({msg: `Usuario confirmado correctamente.`})
  } catch (error) {
    console.log(error);
  };
};

const autenticar = async (req, res) => {
  const { email, password } = req.body;

  //Comprobar si el usuario existe.
  const usuario =  await Veterinario.findOne({email});
  if (!usuario) {
    const error = new Error('El usuario no existe.');
    res.status(404).json({msg: error.message});
  };
  
  //Comprobar si el usuario esta confirmado.
  if (!usuario.confirmado) {
    const error = new Error('Tu cuenta no ha sido confirmada.');
    return res.status(404).json({msg: error.message});
  };
  
  //Autenticar al usuario.
  if (await usuario.comprobarPassword(password)) {
    //Autenticar el usuario.
    res.json({token: generarJWT(usuario.id)})
    console.log('Contraseña correcta.');
  } else {
    const error = new Error('El password es incorrecto.');
    res.status(404).json({msg: error.message});
  };
};

export {
  registrar,
  perfil,
  confirmar,
  autenticar
};