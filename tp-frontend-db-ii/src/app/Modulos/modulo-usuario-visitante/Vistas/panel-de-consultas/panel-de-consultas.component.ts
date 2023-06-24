import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-de-consultas',
  templateUrl: './panel-de-consultas.component.html',
  styleUrls: ['./panel-de-consultas.component.css']
})
export class PanelDeConsultasComponent 
{
    constructor(private router:Router) {}
    showFiller = false;

    ngOnInit(): void 
    {
        let titulo:any = document.getElementById("titulo-superior");
        titulo.textContent = "P2-DB | Consultas"; 
        this.elegirFraseDelDia();
    }

    id_seccion_mostrada = "querys";
    itemMenuClickeado (idSeccionClickeadaRecibido:string) {this.id_seccion_mostrada = idSeccionClickeadaRecibido; console.log(this.id_seccion_mostrada);}

    elegirFraseDelDia()
    {
        let fechaHoy = new Date();
        let diaHoy = fechaHoy.getDay();
        console.log(diaHoy);
    
        let frasesHoy = [];
        let fraseHoySeleccionada:String = "";

        switch (diaHoy) 
        {
            case 1: // Lunes
            {
                frasesHoy.push("¡A comenzar con buen ánimo! 😉");
                frasesHoy.push("Lunes, ¿qué tal un café extra? ☕️");
                frasesHoy.push("¡Que el lunes no te detenga! 💪🏻");
            
                fraseHoySeleccionada = frasesHoy[Math.floor(Math.random() * frasesHoy.length)];
                console.log(fraseHoySeleccionada);
                break;
            }
            
            case 2: // Martes
            {
                frasesHoy.push("¡Lunes superado, ahora martes! 😄");
                frasesHoy.push("Martes, ¡a demostrar de qué estamos hechos! 👏🏻");
                frasesHoy.push("Martes. ¡Un día perfecto para recordarte que estás un paso más cerca del objetivo! 🤞🏻");
                
                fraseHoySeleccionada = frasesHoy[Math.floor(Math.random() * frasesHoy.length)];
                console.log(fraseHoySeleccionada);
                break;
            }
            
            case 3: // Miércoles
            {
                frasesHoy.push("¡Ya miércoles, solo 2 días más! ✌🏻");
                frasesHoy.push("Miércoles, ¿ya ves la luz al final del túnel? 👀");
                frasesHoy.push("Miércoles, recuerda que cada día es una nueva oportunidad. 🌼");
            
                fraseHoySeleccionada = frasesHoy[Math.floor(Math.random() * frasesHoy.length)];
                console.log(fraseHoySeleccionada);
                break;
            }
            
            case 4: // Jueves
            {
                frasesHoy.push("¡Jueves!, preparate porque el fin de semana está mas cerca que nunca. 👏🏻");
                frasesHoy.push("Ya casi viernes, ¡vos podés! 🙌🏻");
                frasesHoy.push("¡Ánimo, solo un día para terminar! 🙏🏻");
            
                fraseHoySeleccionada = frasesHoy[Math.floor(Math.random() * frasesHoy.length)];
                console.log(fraseHoySeleccionada);
                break;
            }
            
            case 5: // Viernes
            {
                frasesHoy.push("¡Viernes! un esfuerzo final y a disfrutar. 👅");
                frasesHoy.push("Viernes, ¡la felicidad tiene nombre! 🎉");
                frasesHoy.push("El viernes es como un abrazo que te dice: ¡Lo lograste! 👐🏻");
            
                fraseHoySeleccionada = frasesHoy[Math.floor(Math.random() * frasesHoy.length)];
                console.log(fraseHoySeleccionada);
                break;
            }
            
            case 6: // Sábado
            {
                frasesHoy.push("¡Es sábado, tiempo de desconectar y disfrutar! ☄️");
                frasesHoy.push("¡El día perfecto para hacer lo que más te gusta! 🌅");
                frasesHoy.push("¡Que este sábado te vaya genial! ✨");
            
                fraseHoySeleccionada = frasesHoy[Math.floor(Math.random() * frasesHoy.length)];
                console.log(fraseHoySeleccionada);
                break;
            }
            
            case 0: // Domingo
            {
                frasesHoy.push("¡Domingo! a recargar energías y prepararse para arrancar. 🙌🏻");
                frasesHoy.push("¡Domingo! consentite y hacé lo que te gusta. ✨");
                frasesHoy.push("¡Feliz domingo! disfrutá de un merecido descanso. ☄️");
            
                fraseHoySeleccionada = frasesHoy[Math.floor(Math.random() * frasesHoy.length)];
                console.log(fraseHoySeleccionada);
                break;
            }
        }

        let titulo_header:any = document.getElementById("titulo-panel-adm");
        titulo_header.textContent = fraseHoySeleccionada;
    }

    // -----------------------------------
    @Input() eventoRecibido: any;
    flagNGLoading = true;

    //Método que se ejecuta cuando se recibe el evento
    cambiarVistaPostQuery() 
    {
        let appQuerys:any = document.getElementById("contenedor-botones-sp1");
        let appInformes:any = document.getElementById("app-informes");
        let appDB:any = document.getElementById("app-db");

        
        setTimeout(() => 
        {
            this.id_seccion_mostrada = "base-de-datos";
        }, 1000);

        appQuerys.style.animation = "slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;";
        // appDB.style.animation = "slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }
}
