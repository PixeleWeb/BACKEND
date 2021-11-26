import conectarBD from '../db/db';
import { UserModel } from '../models/usuario/user';
import { Enum_Rol,Enum_EstadoProyecto,Enum_FaseProyecto,Enum_EstadoInscripcion } from '../models/enums/enums';
import { ProjectModel } from '../models/proyecto/project';


const main = async()=>{
    await conectarBD();

//EDITAR UN USUARIO

    await UserModel.findOneAndUpdate(
        {correo:'miguel@hotmail.com'},
        {
        nombre:'juan',
    }).then((u)=>{
        console.log('usuario actualizado',u);

    }).catch(e=>{
        console.error('error actualizando',e)
    })

//EDITAR UN PROYECTO

    await ProjectModel.findOneAndUpdate(
        {nombre:'juan'},
        {
        objetivosGenerales:'objetivo principal esta ok',
    }).then((u)=>{
        console.log('proyecto actualizado',u);

    }).catch(e=>{
        console.error('error actualizando',e)
})



};

main();
