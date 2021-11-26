import {Schema, model} from 'mongoose';
import {Enum_EstadoInscripcion} from './enums';
import { UserModel } from './user';
import { ProyectModel } from './project';

interface Inscription{
    proyecto:Schema.Types.ObjectId;
    estudiante:Schema.Types.ObjectId;
    estado:Enum_EstadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
}

const InscriptionSchema = new Schema<Inscription>({
    estado: {
        type: String,
        enum: Enum_EstadoInscripcion,
        default: Enum_EstadoInscripcion.pendiente,
        required: true,
    },

    fechaIngreso:{
        type:Date,
        required:true
    },

    fechaEgreso:{
        type:Date,
        required:true
    },

   
        estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },

});

const InscripcionModel = model('Inscripcion', InscriptionSchema, 'Inscripciones');

export {InscripcionModel}