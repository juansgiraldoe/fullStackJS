import Paciente from "../models/Paciente.js";

const agregarPaciente = async ( req, res ) => {

  const paciente = new Paciente( req.body );
  paciente.veterinario = req.veterinario._id

  try {
    const pacienteAlmacenado = await paciente.save();
    res.json(pacienteAlmacenado);
    console.log(paciente);
  } catch (error) {
    const e = new Error('Hubo un error al crear el paciente.');
    res.status(404).json({msg: e.message});
  }
};

const obtenerPacientes = async ( req, res ) => {
  const pacientes = await Paciente.find()
  .where('veterinario')
  .equals(req.veterinario);
  
  res.json(pacientes);
};

const obtenerPaciente = async ( req, res ) => {
  const { id } = req.params
  const paciente =  await Paciente.findById(id);

  if ( paciente.veterinario._id.toString() !== req.veterinario._id.toString() ) {
    return res.status(403).json({msg: `Accion no valida, no tienes permiso para ver este contenido.`});
  };

  if (paciente) {
    res.json(paciente);
  };

};

const actualizarPaciente = async ( req, res ) => {
  
};

const eliminarPaciente = async ( req, res ) => {
  
};

export {
  agregarPaciente,
  obtenerPacientes,
  obtenerPaciente,
  actualizarPaciente,
  eliminarPaciente
}