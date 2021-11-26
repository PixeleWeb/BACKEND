import { model, Schema } from 'mongoose';
import {Enum_TipoObjetivo} from './enums/enums';
import { ProyectModel } from './proyecto/project';


interface objetive  {
    descripcion: string;
    tipo: Enum_TipoObjetivo;
    proyecto: Schema.Types.ObjectId
}

const objetiveSchema = new Schema<objetive>({
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

const ObjectiveModel = model ("Objetivo", objetiveSchema);

export { ObjectiveModel };

