import nodemailer from "nodemailer"

const emailRegistro = async datos => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos;
  
  //Enviar el email.
  const info = await transporter.sendMail({
    from: "APV - Administrador de pacientes de veterinaria.",
    to: email,
    subject: `Comprueba tu cuenta en APV.`,
    text: 'Comprueba tu cuenta en APB',
    html: `
      <h2>Hola y bienvenido ${nombre}</h2>
      <br>
      <p>Comprueba tu cuenta en APV y administra tus pacientes.</p>
      <p>Todo esta listo, solo da click en el boton.</p>
      <a href="${process.env.FRONTEND_URL}/confirmar/${token}" style="">Confirmar cuenta.</a>
      <p>Si no creaste una cuenta, puedes ignorar este email.</p>
    `
  });

  console.log("Mensaje enviado: %s", info.messageId);

};

export default emailRegistro