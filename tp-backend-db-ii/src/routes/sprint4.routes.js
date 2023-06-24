import { Router } from "express";
const router = Router();

import * as sprint4Controller from '../controllers/sprint4.controller';

// ---------------------------------OP. DE EXISTENCIA-----------------------------------------//
router.get('/size', sprint4Controller.op_size);
router.get('/sortByCount', sprint4Controller.op_sortByCount);
router.get('/unwind', sprint4Controller.op_unwind);
router.get('/group', sprint4Controller.op_group);

export default router;