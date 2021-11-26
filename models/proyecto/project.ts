import { Schema, model } from 'mongoose';
import {Enum_EstadoProyecto, Enum_FaseProyecto} from '../enums/enums';
import { UserModel } from '../usuario/user';
import { ObjectiveModel } from '../objetive';

interface Proyect{
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    lider: Schema.Types.ObjectId;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
    objetivos: Schema.Types.ObjectId;
    
}

const ProjectSchema = new Schema<Proyect>({

    nombre: {
        type: String,
        required: true,
        unique:true,
    },
    objetivos:{
        type: Schema.Types.ObjectId,
        ref: ObjectiveModel,
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
    }


});


const ProyectModel = model('Proyecto',ProjectSchema, 'Proyectos');

export { ProyectModel };