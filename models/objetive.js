import mongoose from 'mongoose';
//import {Enum_TipoObjetivo} from './enums/enums.js';
//import { ProjectModel } from './proyecto/projecto.js';

const {Schema, model}= mongoose;




const objectiveSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
},

tipo: {
    type: String,
    enum: ['GENERAL','ESPECIFICO'],
    required: true,
},



});

const ObjectiveModel = model ('Objetivo', objectiveSchema, 'Objetivos');

export { ObjectiveModel };

