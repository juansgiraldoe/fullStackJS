import express from 'express';
import { registrar, perfil, confirmar, autenticar } from '../controllers/vetController.js';
import checkAuth from '../middleware/auth.js';


const router = express.Router();

router.post(`/`, registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar)



router.get(`/perfil`,checkAuth, perfil);


export default router;