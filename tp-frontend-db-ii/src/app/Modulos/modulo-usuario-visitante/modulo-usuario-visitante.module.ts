import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelDeConsultasComponent } from './Vistas/panel-de-consultas/panel-de-consultas.component';
import { ModuloComponentesMaterialModule } from '../modulo-componentes-material/modulo-componentes-material.module';
import { BaseDeDatosComponent } from './Componentes/base-de-datos/base-de-datos.component';
import { QuerysComponent } from './Componentes/querys/querys.component';
import { InformesComponent } from './Componentes/informes/informes.component';

@NgModule({
  declarations: [
    PanelDeConsultasComponent,
    BaseDeDatosComponent,
    QuerysComponent,
    InformesComponent
  ],
  imports: [
    CommonModule,
    ModuloComponentesMaterialModule,
  ]
})
export class ModuloUsuarioVisitanteModule { }
