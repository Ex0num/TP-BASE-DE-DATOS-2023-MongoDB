import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelDeConsultasComponent } from './Modulos/modulo-usuario-visitante/Vistas/panel-de-consultas/panel-de-consultas.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { ErrorComponent } from './Vistas/error/error.component';

const routes: Routes = [

  {path: 'panel-de-consultas',component:PanelDeConsultasComponent, 
  loadChildren: () => import('./Modulos/modulo-usuario-visitante/modulo-usuario-visitante.module').then(m => m.ModuloUsuarioVisitanteModule)},

  {path:'inicio',component:InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
