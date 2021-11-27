import { Schema, model } from 'mongoose';
import {Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo} from '../enums/enums';
import { UserModel } from '../usuario/user';
import { ObjectiveModel } from '../objetive';

interface Proyecto{
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    lider: Schema.Types.ObjectId;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
    objetivos: [{descripcion:String, type:Enum_TipoObjetivo}];
    
}

const projectSchema = new Schema<Proyecto>({

    nombre: {
        type: String,
        required: true,
        unique:true,
    },
   
    presupuesto:{
        type: Number,
        required: true,
    },
    fechaInicio:{
        type: Date,
        required: true,
    },
    fechaFin:{
        type: Date,
        required: true,
    },
    lider: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    estado: {
        type: String,
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.INACTIVO,
    },
    fase: {
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.NULO
    },
    objetivos:[
        {
            descripcion:{
                type:String,
                required:true,
            },
            tipo:{
                type:String,
                enum:Enum_TipoObjetivo,
                required:true,
            },
            
        },
    ],  


});


const ProjectModel = model("Proyecto",projectSchema, "Proyectos");

export { ProjectModel };