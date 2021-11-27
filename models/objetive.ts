import { Schema, model } from 'mongoose';
import {Enum_TipoObjetivo} from './enums/enums';
import { ProjectModel } from './proyecto/project';


interface Objective  {
    descripcion: string;
    tipo: Enum_TipoObjetivo;
    
}

const objectiveSchema = new Schema<Objective>({
    descripcion: {
        type: String,
        required: true,
},

tipo: {
    type: String,
    enum: Enum_TipoObjetivo,
    required: true,
},



});

const ObjectiveModel = model ('Objetivo', objectiveSchema, 'Objetivos');

export { ObjectiveModel };

