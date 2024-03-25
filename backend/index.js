//--------------------------------
import express from "express";
import dotenv from "dotenv";
import conectDb from "./config/db.js";
import vetRoutes from "./routes/vetRoutes.js"
//--------------------------------

const app = express();
app.use(express.json());

dotenv.config();
conectDb();

app.use(`/api/veterinarios`, vetRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
  console.log(`Servidor funcionando en el puerto ${PORT}.`);
});