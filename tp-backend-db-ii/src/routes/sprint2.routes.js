import { Router } from "express";
const router = Router();

import * as sprint2Controller from '../controllers/sprint2.controller';

// ---------------------------------OP. NUMERICOS-----------------------------------------//
router.get('/operadores-numericos/eq', sprint2Controller.op_equals);
router.get('/operadores-numericos/gt', sprint2Controller.op_greaterThan);
router.get('/operadores-numericos/gte', sprint2Controller.op_greaterThanEqual);
router.get('/operadores-numericos/lt', sprint2Controller.op_lessThan);
router.get('/operadores-numericos/lte', sprint2Controller.op_lessThanEqual);
router.get('/operadores-numericos/ne', sprint2Controller.op_notEquals);
router.get('/operadores-numericos/in', sprint2Controller.op_in);
router.get('/operadores-numericos/nin', sprint2Controller.op_nin);

// -----------------------------------OP. LOGICOS------------------------------------------//
router.get('/operadores-logicos/or', sprint2Controller.op_or);
router.get('/operadores-logicos/and', sprint2Controller.op_and);
router.get('/operadores-logicos/nor', sprint2Controller.op_nor);
router.get('/operadores-logicos/not', sprint2Controller.op_not);
//-----------------------------------------------------------------------------------------//
router.get('/text-with-index', sprint2Controller.op_text_with_index);
router.get('/geoWithin', sprint2Controller.op_geoWithin);
router.get('/geoIntersect', sprint2Controller.op_geoIntersect);
router.get('/lookup', sprint2Controller.op_lookup);
router.get('/near', sprint2Controller.op_near);

export default router;