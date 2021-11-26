import { Schema, model } from "mongoose";
import { ProyectModel } from "../proyecto/project";
import { UserModel } from "../usuario/user";


interface Avance{
    
    fecha:Date;
    descripcion:string;
    observaciones: [string];
    proyecto:Schema.Types.ObjectId;
    creadoPor: Schema.Types.ObjectId;
}


const AdvancementSchema= new Schema<Avance>({
    fecha:{
        type:Date,
        required:true,
    },

    descripcion:{
        type:String,
        required:true,
    },
    observaciones:[
        {
            type:String,
    },
    ],
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProyectModel,
        required:true,

    },
    creadoPor:{
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required:true,

    },
});

const AdvancementModel = model('Avance', AdvancementSchema);

export  {AdvancementModel}; 