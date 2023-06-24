import { Router } from "express";
const router = Router();

import * as informesController from '../controllers/informes.controller';

// ---------------------------------CONTROL DE ATENCION-----------------------------------------//
router.get('/control-de-atencion/primer-informe', informesController.control_atencion_primerInforme);
router.get('/control-de-atencion/segundo-informe', informesController.control_atencion_segundoInforme);

// ---------------------------------CONTROL DE INCIDENTES-----------------------------------------//
router.get('/control-de-incidentes/primer-informe', informesController.control_incidentes_primerInforme);
router.get('/control-de-incidentes/segundo-informe', informesController.control_incidentes_segundoInforme);

// -------------------------------------DATOS ZONALES---------------------------------------------//
router.get('/datos-zonales/primer-informe', informesController.datos_zonales_primerInforme);
router.get('/datos-zonales/segundo-informe', informesController.datos_zonales_segundoInforme);

// -----------------------------------DATOS DE CLIENTES---------------------------------------------//
router.get('/datos-de-clientes/primer-informe', informesController.datos_de_clientes_primerInforme);
router.get('/datos-de-clientes/segundo-informe', informesController.datos_de_clientes_segundoInforme);


export default router;