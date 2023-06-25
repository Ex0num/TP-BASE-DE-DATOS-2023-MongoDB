import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent {

    constructor(private httpConsultador: HttpClient) {}

    informe_1_resultado = "";
    informe_2_resultado = "";
    informe_3_resultado = "";
    informe_4_resultado = "";
    informe_5_resultado = "";
    informe_6_resultado = "";
    informe_7_resultado = "";
    informe_8_resultado = "";

    // Método que se llama cuando ocurre el evento (Se ejecuta con un click en el boton 1)
    async EjecutarQueryInformes() 
    {
        // Identificar endpoint
        let urls_endpoints:any = [
            "https://tp-db-2023.onrender.com/api/tp/tickets/informes/control-de-atencion/primer-informe",
            "https://tp-db-2023.onrender.com/api/tp/tickets/informes/control-de-atencion/segundo-informe",

            "https://tp-db-2023.onrender.com/api/tp/tickets/informes/control-de-incidentes/primer-informe",
            "https://tp-db-2023.onrender.com/api/tp/tickets/informes/control-de-incidentes/segundo-informe",

            "https://tp-db-2023.onrender.com/api/tp/tickets/informes/datos-zonales/primer-informe",
            "https://tp-db-2023.onrender.com/api/tp/tickets/informes/datos-zonales/segundo-informe",

            "https://tp-db-2023.onrender.com/api/tp/tickets/informes/datos-de-clientes/primer-informe",
            "https://tp-db-2023.onrender.com/api/tp/tickets/informes/datos-de-clientes/segundo-informe",
        ];
        
        console.log(urls_endpoints);

        Swal.fire({
            title: '¡En un instante!',
            html: 'Aguarde unos segundos a que obtengamos la información',
            timer: 800,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
            },});

        for (let i = 0; i < urls_endpoints.length; i++) 
        {
            this.httpConsultador.get(urls_endpoints[i]).subscribe(
                (data) => {

                    // Manipular los datos de la respuesta
                    let resultadosQuery = data;
                    console.log("============================");
                    console.log(data);
                    console.log("============================");
            
                    switch (urls_endpoints[i].split("informes")[1]) 
                    {
                        case '/control-de-atencion/primer-informe':
                        {
                            this.informe_1_resultado = JSON.stringify(resultadosQuery);; 
                            break;
                        }
                        case '/control-de-atencion/segundo-informe':
                        {
                            this.informe_2_resultado = JSON.stringify(resultadosQuery);; 
                            break;
                        }

                        case '/control-de-incidentes/primer-informe':
                        {
                            this.informe_3_resultado = JSON.stringify(resultadosQuery);; 
                            break;
                        }
                        case '/control-de-incidentes/segundo-informe':
                        {
                            this.informe_4_resultado = JSON.stringify(resultadosQuery);; 
                            break;
                        }

                        case '/datos-zonales/primer-informe':
                        {
                            this.informe_5_resultado = JSON.stringify(resultadosQuery);; 
                            break;
                        }
                        case '/datos-zonales/segundo-informe':
                        {
                            this.informe_6_resultado = JSON.stringify(resultadosQuery);; 
                            break;
                        }

                        case '/datos-de-clientes/primer-informe':
                        {
                            this.informe_7_resultado = JSON.stringify(resultadosQuery);; 
                            break;
                        }
                        case '/datos-de-clientes/segundo-informe':
                        {
                            this.informe_8_resultado = JSON.stringify(resultadosQuery);; 
                            break;
                        }
                    }
                },
                (error) => {console.log(error);}
            );   
        }
    }

}

