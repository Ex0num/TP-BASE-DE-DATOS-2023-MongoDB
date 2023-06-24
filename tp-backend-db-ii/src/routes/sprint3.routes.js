import { Router } from "express";
const router = Router();

import * as sprint3Controller from '../controllers/sprint3.controller';

// ---------------------------------OP. DE EXISTENCIA-----------------------------------------//
router.get('/exists', sprint3Controller.op_exists);
router.get('/type', sprint3Controller.op_type);
router.get('/all', sprint3Controller.op_all);
router.get('/elemMatch', sprint3Controller.op_elemMatch);

export default router;