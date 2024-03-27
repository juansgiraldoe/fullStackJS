import express from 'express';
import { registrar, perfil, confirmar, autenticar, recuperarPassword, comprobarToken, nuevoPasword } from '../controllers/vetController.js';
import checkAuth from '../middleware/auth.js';

const router = express.Router();

//Area publica.
router.post(`/`, registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar)
router.post('/recuperar-pasword', recuperarPassword);
router.route('/recuperar-pasword/:token').get(comprobarToken).post(nuevoPasword);

//Area privada.
router.get(`/perfil`,checkAuth, perfil);


export default router;