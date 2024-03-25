const registrar = (req, res) => {
  res.send(`Desde API/Veterinarios`);
};

const perfil = (req, res) => {
  res.send(`Desde API/Veterinarios/perfil`);
}

export {
  registrar,
  perfil
};