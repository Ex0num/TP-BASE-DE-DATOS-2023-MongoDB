import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuloComponentesMaterialModule } from './Modulos/modulo-componentes-material/modulo-componentes-material.module';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { ErrorComponent } from './Vistas/error/error.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { HamburgerMenuComponent } from './Componentes/hamburger-menu/hamburger-menu.component';

import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ErrorComponent,
    HeaderComponent,
    HamburgerMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModuloComponentesMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
