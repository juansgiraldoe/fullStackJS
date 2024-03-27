//--------------------------------
import express from "express";
import dotenv from "dotenv";
import conectDb from "./config/db.js";
import vetRoutes from "./routes/vetRoutes.js"
import petRoutes from "./routes/petRoutes.js"
//--------------------------------

const app = express();
app.use(express.json());

dotenv.config();
conectDb();

app.use(`/api/veterinarios`, vetRoutes);
app.use(`/api/pacientes`, petRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
  console.log(`Servidor funcionando en el puerto ${PORT}.`);
});