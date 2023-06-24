import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-base-de-datos',
  templateUrl: './base-de-datos.component.html',
  styleUrls: ['./base-de-datos.component.css']
})
export class BaseDeDatosComponent implements OnChanges 
{
    length = 0;
    pageSize = 3;
    startIndex = 0;
    pageIndex = 0;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['resultadosRecibidosQueryEjecutada']) {
        console.log("Una query fue ejecutada");

        // Se ejecuta cuando hay cambios en resultadosRecibidosQueryEjecutada
        let nuevosCambios = changes['resultadosRecibidosQueryEjecutada'].currentValue;

        // Aquí puedes realizar las acciones necesarias con los nuevos valores
        this.length = nuevosCambios.length;
        }
    }

    onPageChange(event: any) {
        this.pageIndex = event.pageIndex;
        this.startIndex = this.pageIndex * this.pageSize;
    }

    // Tickets que recibo post-query ejecutada
    @Input() resultadosRecibidosQueryEjecutada: any;
}