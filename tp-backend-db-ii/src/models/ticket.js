import { Schema, model } from "mongoose";

// ---------------------------------- GLOSARIO DE ESTADOS DE TICKET ---------------------------------- //
// ABIERTO -> Tiene que ser asignado por un supervisor a la persona de un area que vea indicada.
// ESPERANDO_RESPUESTA_CLIENTE -> Tiene que ser respondido por el 'username_afectado'.
// ESPERANDO-RESPUESTA-AGENTE -> Tiene que ser respondido por el 'username_afectado'.
// SUSPENDIDO -> El ticket no tiene que ser respondido por nadie más ya que inclumplió las normas de respeto.
// RESUELTO -> El ticket no tiene que ser respondido por nadie más Cumplio su finalidad.
// --------------------------------------------------------------------------------------------------- //

const ticketSchema = Schema({
    //-------------------- Campos iniciales --------------------//
    username_afectado: {type:String, required:true},
    asunto: {type:String, required:true},
    comentario_inicial: {type:String, required:true},
    estado_ticket: {type:String, required:true}, //Abierto, Esperando su respuesta, Esperando respuesta de agente, Resuelto

    //------------------ Campos transcurrentes ------------------//
    username_asignador: {type:String, required:true}, //Se conserva el valor del supervisor
    username_ultimo_asignado: {type:String, required:true}, //Va variando el valor del ultimo agente asignado

    /*[OBJETOS]*/ historial_asignaciones: {type:Array, required:true}, 
        //Array de objetos asignaciones
        //Ej: Obj (Asignacion)
        //[{"username_asignado": "Pedro Sanchez", "fecha_asignacion": 03/06/2023 - 04:32am},
        //{"username_asignado": "Paula Juak", "fecha_asignacion": 05/06/2023 - 15:31pm}]

    /*[OBJETOS]*/ conversacion: {type:Array, required:true}, 
        //Array de objetos mensajes
        //Ej: Obj (Mensajes)
        //[{"username_emisor": "Juan Perez", tipo_usuario: "soporte tecnico", "mensaje_asignado_actual": "Ya te lo solucioné, fijate ahora", "fecha_respuesta": "10/05/2023 - 14:15pm"},
        //{"username_emisor": "Carlos Martinez", tipo_usuario: "cliente", "mensaje_asignado_actual": "Ahora sí, lo puedo ver bien ya. Gracias", "fecha_respuesta": "11/05/2023 - 16:36pm"}],

    /*[VALORES]*/ coordenadas_localizacion_afectado: {type:Array, required:true}, 
        //Array de valores GPS (3 puntos en el espacio)
        //Ej: Array (GPS)
        //["9238898912759384581823","9238898912759384581823","9238898912759384581823"]

    /*{OBJETO} CON [ARRAYS].[],[]*/ packs_de_canales_adquiridos: {type:Array, required:true} //Array de objetos que cada uno tiene un array de canales como atributo.
        //Ej: Array de objetos packs con un array de canales como atributo
        //{nombre_pack: "Futbolero", canales_incluidos:[{nombre_canal: "TyC Sports", numero_canal: 255},{nombre_canal: "ESPN", numero_canal: 256},{nombre_canal: "Fox Sports", numero_canal: 257}]},
        //{nombre_pack: "Cocinero", canales_incluidos:[{nombre_canal: "Utilisima", numero_canal: 342},{nombre_canal: "Gourmet", numero_canal: 343},{nombre_canal: "Costumbres Argentinas", numero_canal: 344}]

},{
    collection: 'tickets',
    timestamps: true,
    versionKey: false 
});

export default model('Ticket', ticketSchema);
