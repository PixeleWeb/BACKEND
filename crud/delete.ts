import conectarBD from '../db/db';
import { UserModel } from '../models/usuario/user';
import { Enum_Rol,Enum_EstadoProyecto,Enum_FaseProyecto,Enum_EstadoInscripcion } from '../models/enums/enums';
import { ProjectModel } from '../models/proyecto/projecto';

const main = async()=>{
    await conectarBD();

//ELIMINAR USUARIO
    
    await UserModel.findOneAndDelete({correo:'miguel@hotmail.com'})
    .then((u)=>{
        console.log('usuario eliminado',u);
    })
    .catch((e)=>{
        console.error(e);
    })

//ELIMINAR PROYECTO

    await ProjectModel.findOneAndDelete({correo:'miguel@hotmail.com'})
    .then((u)=>{
        console.log('proyecto eliminado',u);
    })
    .catch((e)=>{
        console.error(e);
    })

};

main();

