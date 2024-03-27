import express from "express";
import { agregarPaciente, obtenerPaciente } from "../controllers/petController.js";
import checkAuth from "../middleware/auth.js";

const router = express.Router();

router.route('/')
  .post(checkAuth,agregarPaciente)
  .get(checkAuth, obtenerPaciente);




export default router;