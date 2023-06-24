import { Router } from "express";
const router = Router();

import * as usuariosCtrl from '../controllers/usuarios.controller';

router.post('/', usuariosCtrl.crearUsuario);
router.get('/by-id/:usuarioId', usuariosCtrl.listarUsuarioById);
router.get('/by-username/:usuarioUsername', usuariosCtrl.listarUsuarioByUsername);
router.get('/', usuariosCtrl.listarUsuarios);

export default router;