
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-querys',
  templateUrl: './querys.component.html',
  styleUrls: ['./querys.component.css']
})
export class QuerysComponent {

    constructor(private httpConsultador: HttpClient) { }

    @Output() queryEjecutada: EventEmitter<any> = new EventEmitter<any>();

    // Método que se llama cuando ocurre el evento (Se ejecuta con un click en el boton 1)
    EjecutarQuery(queryKeyWord:string) 
    {
        // Identificar endpoint
        let url_endpoint:any;
        let redirigirATablaDB = true;
        let esLookUp = false;

        switch (queryKeyWord) 
        {
            case "$getAll":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/get-all";
                break;
            }

            // --- SPRINT 2 --- //
            // ---------- Operadores numericos ---------- //
            case "$eq":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-numericos/eq";
                break;
            }
            case "$gt":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-numericos/gt";
                break;
            }
            case "$gte":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-numericos/gte";
                break;
            }
            case "$lt":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-numericos/lt";
                break;
            }
            case "$lte":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-numericos/lte";
                break;
            }
            case "$ne":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-numericos/ne";
                break;
            }
            case "$in":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-numericos/in";
                break;
            }
            case "$nin":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-numericos/nin";
                break;
            }

            // ---------- Operadores logicos ---------- //
            case "$or":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-logicos/or";
                break;
            }
            case "$and":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-logicos/and";
                break;
            }
            case "$nor":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-logicos/nor";
                break;
            }
            case "$not":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/operadores-logicos/not";
                break;
            }

            // ---------- Operadores geolocalizacion ---------- //
            case "$text":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/text-with-index";
                break;
            }
            case "$near":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/near";
                break;
            }
            case "$geoIntersect":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/geoIntersect";
                break;
            }
            case "$geoWithin":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/geoWithin";
                break;
            }
            case "$lookup":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-2/lookup";
                esLookUp = true;
                break;
            }

            // --- SPRINT 3 --- //
            // ---------- Operadores de existencia ---------- //
            case "$exists":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-3/exists";
                break;
            }
            case "$type":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-3/type";
                break;
            }
            case "$all":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-3/all";
                break;
            }
            case "$elemMatch":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-3/elemMatch";
                break;
            }

            // --- SPRINT 4 --- //
            // ---------- Operadores de ordenamiento ---------- //
            case "$size":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-4/size";
                break;
            }
            case "$sortByCount":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-4/sortByCount";
                redirigirATablaDB = false;
                break;
            }
            case "$unwind":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-4/unwind";
                break;
            }
            case "$group":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-4/group";
                redirigirATablaDB = false;
                break;
            }

            // --- SPRINT 5 --- //
            // ---------- Operadores de proyeccion ---------- //
            case "$project":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-5/project";
                redirigirATablaDB = false;
                break;
            }
            case "$expr":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-5/expr";
                break;
            }
            case "$match":
            {
                url_endpoint = "https://tp-db-2023.onrender.com/api/tp/tickets/sprint-5/match";
                break;
            }
        }

        let resultadosQuery;        
        console.log(url_endpoint);

        this.httpConsultador.get(url_endpoint).subscribe(
        (data) => 
        {
            // Manipular los datos de la respuesta
            let resultadosQuery = data;
            console.log("============================");
            console.log(data);
            console.log("============================");
    
            if (esLookUp == true)
            {
                let textoMostrado = "El resultado obtenido fue: \n\n\n " + JSON.stringify(resultadosQuery); 

                Swal.fire({
                    icon: 'success',
                    title: '¡Se obtuvieron resultados!',
                    text: textoMostrado,
                })
            }
            else if (redirigirATablaDB == false)
            {
                let textoMostrado = "El resultado obtenido fue: \n\n\n " + JSON.stringify(resultadosQuery);                

                Swal.fire({
                    icon: 'success',
                    title: '¡Se obtuvieron resultados!',
                    text: textoMostrado,
                })
            }
            else
            {

                Swal.fire({
                  title: '¡En un instante!',
                  html: 'Aguarde unos segundos a que obtengamos la información',
                  timer: 1500,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading()
                  },
                }).then((result) => {})

                // Emitir el evento con los resultados de la consulta
                console.log('Evento emitido en querys-app');
                this.queryEjecutada.emit(resultadosQuery);
            }

        },
        (error) => {console.log(error);});
        
        // Emitir el evento
        // console.log("Evento emitido en querys-app");

        // if (resultadosQuery != undefined)
        // {
        //     // resultadosQuery.toString();
        //     this.queryEjecutada.emit(resultadosQuery);
        // }
    }
}
