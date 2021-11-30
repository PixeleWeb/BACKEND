import mongoose from 'mongoose';
//import {Enum_EstadoInscripcion} from '../enums/enums.js';
import { ProjectModel } from '../proyecto/projecto.js';
import { UserModel } from '../usuario/user.js';

const {Schema, model}= mongoose;




const InscripcionSchema = new Schema({
    estado: {
        type: String,
        enum: ['ACEPTADO','RECHAZADO','PENDIENTE'],
        default: 'PENDIENTE',
        required: true,
    },

    fechaIngreso:{
        type:Date,
        required:false
    },

    fechaEgreso:{
        type:Date,
        required:false
    },

    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
    },


    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },

});

const InscripcionModel = model('Inscripcion', InscripcionSchema, 'Inscripciones');

export {InscripcionModel}