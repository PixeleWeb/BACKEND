import mongoose from 'mongoose';
//import {Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo} from '../enums/enums.js';
import { UserModel } from '../usuario/user.js';
//import { ObjectiveModel } from '../objetive.js';

const {Schema, model}= mongoose;



const projectSchema = new Schema({


    nombre: {
        type: String,
        required: true,
        unique:true,
    },
    objetivos:[
        {
            descripcion:{
                type: String,
                required: true,
            },
            tipo:{
                type: String,
                enum: ['GENERAL','ESPECIFICO'],
            },
        },
    ],

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
        enum: ['ACTIVO','INACTIVO'],
        default: 'INACTIVO',
    },
    fase: {
        type: String,
        enum: ['INICIADO','DESARROLLO','TERMINADO'],
        default: 'NULO',
    },


},
    {
        toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
    }
);

projectSchema.virtual('avances',{
    ref:'Avance',
    localField:'_id',
    foreignField:'proyecto',
});

projectSchema.virtual('inscripciones',{
    ref:'Inscripcion',
    localField:'_id',
    foreignField:'proyecto',
});

const ProjectModel = model("Proyecto",projectSchema, "Proyectos");

export { ProjectModel };