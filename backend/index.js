//--------------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import conectDb from "./config/db.js";
import vetRoutes from "./routes/vetRoutes.js"
import petRoutes from "./routes/petRoutes.js"
//--------------------------------

const app = express();
app.use(express.json());

dotenv.config();
conectDb();

const dominiosPermitidos = ['http://localhost:5173'];
const coreOptions = {
  origin: function (origin, callback) {
    if(dominiosPermitidos.indexOf(origin) !== -1){
      callback(null, true);
      } else {
      callback(new Error(`No permitido por CORS.`), true);
    };
  }
}

app.use(cors(coreOptions));

app.use(`/api/veterinarios`, vetRoutes);
app.use(`/api/pacientes`, petRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
  console.log(`Servidor funcionando en el puerto ${PORT}.`);
});