import conectarBD from '../db/db';
import { UserModel } from '../models/user';
import { Enum_Rol,Enum_EstadoProyecto,Enum_FaseProyecto,Enum_EstadoInscripcion } from '../models/enums';
import { ProjectModel } from '../models/project';

const main = async()=>{
    await conectarBD();

//OBTENER LOS USUARIOS

    await UserModel.find().then((u)=>{
        console.log('usuarios',u);
    }).catch(e=>{
        console.error('error obteniendo los usuarios',e);
    })  

//OBTENER UN SOLO USUARIO

    await UserModel.findOne({identificacion:"10203050"})
    .then((u)=>{
        console.log('usuario encontrado',u);
    })
    .catch((e)=>{
        console.error(e);
    })

//OBTENER LOS PROYECTOS

    await ProjectModel.find().then((u)=>{
        console.log('proyectos',u);
    }).catch(e=>{
        console.error('error obteniendo los proyectos',e);
    })  

    //OBTENER UN SOLO PROYECTO

    await ProjectModel.findOne({identificacion:"10203050"})
    .then((u)=>{
        console.log('proyecto encontrado',u);
    })
    .catch((e)=>{
        console.error(e);
    })    

};

main();