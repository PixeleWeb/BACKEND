import { Schema, model } from 'mongoose';
<<<<<<< HEAD
import {Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo} from '../enums/enums';
import { UserModel } from '../usuario/user';
import { ObjectiveModel } from '../objetive';

interface Proyecto{
=======
import {Enum_EstadoProyecto, Enum_FaseProyecto, } from '../enums/enums';
import { UserModel } from '../usuario/user';
import { ObjectiveModel } from '../objetive';

interface proyect{
>>>>>>> d90c66975e435b55fbbc5ee2e3610b04e3752111
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    lider: Schema.Types.ObjectId;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
<<<<<<< HEAD
    objetivos: [{descripcion:String, type:Enum_TipoObjetivo}];
    
}

const projectSchema = new Schema<Proyecto>({
=======
    objetivos: [Schema.Types.ObjectId];
    
}

const proyectSchema = new Schema<proyect>({
>>>>>>> d90c66975e435b55fbbc5ee2e3610b04e3752111

    nombre: {
        type: String,
        required: true,
        unique:true,
    },
<<<<<<< HEAD
   
=======
    objetivos:[
        {
            type: Schema.Types.ObjectId,
            ref: ObjectiveModel,
        },
    ],
>>>>>>> d90c66975e435b55fbbc5ee2e3610b04e3752111
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
    },
<<<<<<< HEAD
    objetivos:[
        {
            descripcion:{
                type:String,
                required:true,
            },
            tipo:{
                type:String,
                enum:Enum_TipoObjetivo,
                required:true,
            },
            
        },
    ],  
=======
>>>>>>> d90c66975e435b55fbbc5ee2e3610b04e3752111


});


<<<<<<< HEAD
const ProjectModel = model("Proyecto",projectSchema, "Proyectos");
=======
const ProyectModel = model ('Proyecto', proyectSchema, 'Proyectos');
>>>>>>> d90c66975e435b55fbbc5ee2e3610b04e3752111

export { ProjectModel };