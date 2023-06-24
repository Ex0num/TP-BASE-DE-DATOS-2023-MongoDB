import { Router } from "express";
const router = Router();

import * as sprint5Controller from '../controllers/sprint5.controller';

// ---------------------------------OP. DE EXISTENCIA-----------------------------------------//
router.get('/project', sprint5Controller.op_project);
router.get('/expr', sprint5Controller.op_expr);
router.get('/match', sprint5Controller.op_match);

export default router;