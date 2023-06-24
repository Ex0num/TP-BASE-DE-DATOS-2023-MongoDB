import { Schema, model } from "mongoose";

const usuarioSchema = Schema({
    username:{ type:String, required:true, unique: true},
    nombre:{ type:String, required:true },
    apellido:{ type:String, required:true },
    password:{ type:String, required:true },
    sexo:{ type:String, required:true },
    tipo: { type:String, required:false }
},{
    collection: 'usuarios',
    timestamps: true,
    versionKey: false 
});

export default model('Usuario', usuarioSchema);
