import express from 'express';
import { registrar, perfil } from '../controllers/vetController.js';


const router = express.Router();

router.post(`/`, registrar);
router.get(`/perfil`, perfil);





export default router;