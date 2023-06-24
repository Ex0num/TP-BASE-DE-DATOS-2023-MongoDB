import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {

  opcionesClickeables = false;

  constructor(public dialog: MatDialog){}

  switchearActivacionOpciones(): void
  {
    let opciones = document.querySelectorAll(".opcion-menu-hamburguesa");
    this.opcionesClickeables = !this.opcionesClickeables;
    
    if (this.opcionesClickeables == false) 
    {
        setTimeout(() =>
        {
            opciones.forEach((opcion:any, index)=> 
            {
            opcion.setAttribute("hidden","true");
            });
        }, 500);
    }
    else 
    {
        opciones.forEach((opcion:any, index)=> 
        {
            opcion.removeAttribute("hidden");
        });
    }
  }
}