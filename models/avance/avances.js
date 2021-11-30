import mongoose from "mongoose";
import { ProjectModel } from "../proyecto/projecto.js";
import { UserModel } from "../usuario/user.js";

const {Schema, model}= mongoose;





const AdvancementSchema= new Schema({
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
        ref: ProjectModel,
        required:true,

    },
    creadoPor:{
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required:true,

    },
});

const AdvancementModel = model('Avance', AdvancementSchema, );

export  {AdvancementModel}; 