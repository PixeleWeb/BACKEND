import conectarBD from '../db/db.js';
import { UserModel } from '../models/usuario/user.js';
//import { Enum_Rol,Enum_EstadoProyecto,Enum_FaseProyecto,Enum_EstadoInscripcion } from '../models/enums/enums.js';
import { ProjectModel } from '../models/proyecto/projecto.js';


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
