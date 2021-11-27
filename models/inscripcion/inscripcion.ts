import {Schema, model} from 'mongoose';
import {Enum_EstadoInscripcion} from '../enums/enums';
import { ProjectModel } from '../proyecto/project';
import { UserModel } from '../usuario/user';


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
        default: Enum_EstadoInscripcion.PENDIENTE,
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

const InscripcionModel = model('Inscripcion', InscriptionSchema, 'Inscripciones');

export {InscripcionModel}