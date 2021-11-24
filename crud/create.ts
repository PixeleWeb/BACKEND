import conectarBD from '../db/db';
import { UserModel } from '../models/user';
import { Enum_Rol,Enum_EstadoProyecto,Enum_FaseProyecto,Enum_EstadoInscripcion } from '../models/enums';
import { ProjectModel } from '../models/project';

const main = async()=>{
    await conectarBD();

//CREAR USUARIO

    UserModel.create({
        nombre:"Aleja",
        apellido:"Zapa",
        identificacion:"1020309040",
        rol:Enum_Rol.ESTUDIANTE,
        correo:"alejoe@gmail.com",
        
        
    })
    .then((u) =>{
        console.log('usuario creado', u);

    })
    .catch((e)=>{
        console.error('Error creando el usuario',e);
    }); 

//CREAR UN PROYECTO

    ProjectModel.create({

        nombre: "prueba200",
        objetivosGenerales: "letras",
        objetivosEspecificos: "cositas varias",
        presupuesto: "123",
        fechaInicio: "2021-01-12",
        fechaFin: "2021-02-14",
        lider: "6198404915b34712ecd3d4a7",
        estado: Enum_EstadoProyecto.activo,
        fase: Enum_FaseProyecto.desarrollo,
        inscripciones: Enum_EstadoInscripcion.pendiente,
        avances: "prueba",
    })
        .then((u) => {
            console.error('proyecto creado', u)
        })
        .catch((e) => {
            console.error('Error creando proyecto', e)
        })
};

main();

