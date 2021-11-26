import { model, Schema } from 'mongoose';
import {Enum_TipoObjetivo} from './enums/enums';
import { ProyectModel } from './proyecto/project';


interface Objetive  {
    descripcion: string;
    tipo: Enum_TipoObjetivo;
    proyecto: Schema.Types.ObjectId
}

const objectiveSchema = new Schema<Objetive>({
    descripcion: {
        type: String,
        required: true,
},

tipo: {
    type: String,
    enum: Enum_TipoObjetivo,
    required: true,
},

proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProyectModel,
},

});

const ObjectiveModel = model ('Objetivo', objectiveSchema);

export { ObjectiveModel };

