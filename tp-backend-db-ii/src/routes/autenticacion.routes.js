import { Router } from "express";
const router = Router();

import * as autenticacionController from '../controllers/autenticacion.controller';

router.post('/ingresar', autenticacionController.ingresar);
router.post('/registrar', autenticacionController.registrar);

export default router;