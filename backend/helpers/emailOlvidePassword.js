import nodemailer from "nodemailer"

const emailOlvidePassword = async datos => {
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
    subject: `Restablece tu contraseña - APV.`,
    text: 'Restablece tu contraseña',
    html: `
      <h2>Hola ${nombre}</h2>
      <br>
      <p>Sigue el siguiente enlace para generar un nuevo password.</p>
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}" style="">Reestablecer cuenta.</a>
      <p>Si no solicitaste el cambio, puedes ignorar este email.</p>
    `
  });

  console.log("Mensaje enviado: %s", info.messageId);

};

export default emailOlvidePassword