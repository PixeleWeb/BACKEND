import { Schema, model } from 'mongoose';
import {Enum_TipoObjetivo} from './enums/enums';
import { ProjectModel } from './proyecto/project';


<<<<<<< HEAD
interface Objective  {
=======
interface objetive  {
>>>>>>> d90c66975e435b55fbbc5ee2e3610b04e3752111
    descripcion: string;
    tipo: Enum_TipoObjetivo;
    
}

<<<<<<< HEAD
const objectiveSchema = new Schema<Objective>({
=======
const objetiveSchema = new Schema<objetive>({
>>>>>>> d90c66975e435b55fbbc5ee2e3610b04e3752111
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

<<<<<<< HEAD
const ObjectiveModel = model ('Objetivo', objectiveSchema, 'Objetivos');
=======
const ObjectiveModel = model ("Objetivo", objetiveSchema);
>>>>>>> d90c66975e435b55fbbc5ee2e3610b04e3752111

export { ObjectiveModel };

