import conectarBD from './db/db';
import { UserModel } from './models/usuario/user';
import { Enum_Rol,Enum_EstadoProyecto,Enum_FaseProyecto,Enum_EstadoInscripcion, Enum_EstadoUsuario, Enum_TipoObjetivo } from './models/enums/enums';
import { ProjectModel } from './models/proyecto/projecto';
import { ObjectiveModel } from './models/objetive';

//METODOLOGIA ONE TO MANY #1
// const crearProyectoConObjetivos=async ()=>{
//     const usuarioInicial=await UserModel.create({
//         nombre:'daniel',
//         apellido:'saldarriaga',
//         correo:'drs@gmail.com',
//         identificacion:'4321',
//         rol: Enum_Rol.ADMINISTRADOR,
//         estado:  Enum_EstadoUsuario.AUTORIZADO,
//     });
 
//     const proyectoCreado=await ProjectModel.create({
//         nombre:'proyecto mision tic',
//         fechaInicio: new Date('2021/12/24'),
//         fechaFin: new Date('2022/12/24'),
//         presupuesto: 120000,
//         lider:usuarioInicial.id,
 
//     });
 
//     const objetivoGeneral=await ObjectiveModel.create({
//         descripcion:"este es el objetivo especifico 1",
//         tipo: Enum_TipoObjetivo.GENERAL,
//         proyecto:proyectoCreado.id,
//     });
//     const objetivoEspecifico1=await ObjectiveModel.create({
//      descripcion:"este es el objetivo general",
//      tipo: Enum_TipoObjetivo.ESPECIFICO,
//      proyecto:proyectoCreado.id,
//     });
//     const objetivoEspecifico2=await ObjectiveModel.create({
//      descripcion:"este es el objetivo especifico 2",
//      tipo: Enum_TipoObjetivo.ESPECIFICO,
//      proyecto:proyectoCreado.id,
//     });
// };
// const consultaProyectoConObjetivos=async()=>{
    
//     const proyecto =await ProjectModel.findOne({_id:'61a1949a41fb3db5257327a6'});

//     console.log('el proyecto que encontre fue', proyecto);

//     const objetivos=await ObjectiveModel.find({project:'61a1949a41fb3db5257327a6'});

//     console.log('los objetivos del proyecto son', objetivos);

//     const proyectosConObjetivos={...proyecto,objetivos:objetivos};
//     console.log('el proyecto con objetivos es:', proyectosConObjetivos);
// }
// //METODOLOGIA ONE TO MANY #3


// const main = async()=>{
//    await conectarBD();

//    const usuarioInicial=await UserModel.create({
//     nombre:'daniel',
//     apellido:'saldarriaga',
//     correo:'drs@gmail.com',
//     identificacion:'4321',
//     rol: Enum_Rol.ADMINISTRADOR,
//     estado:  Enum_EstadoUsuario.AUTORIZADO,
// });
   
//    const proyectoCreado=await ProjectModel.create({
//     nombre:'proyecto mision tic',
//     fechaInicio: new Date('2021/12/24'),
//     fechaFin: new Date('2022/12/24'),
//     presupuesto: 120000,
//     lider:usuarioInicial.id,
//     objetivos:[
//         {descripcion:'este es el objetivo general', tipo:Enum_TipoObjetivo.GENERAL},
//         {descripcion:'este es el objetivo especifico 1', tipo:Enum_TipoObjetivo.ESPECIFICO},
//         {descripcion:'este es el objetivo especifico 2', tipo:Enum_TipoObjetivo.ESPECIFICO},
//     ],
//    });







    //CRUD PROYECTOS
    //CREAR PROYECTO
    //CREAR UN PROYECTO

    // ProjectModel.create({

    //     nombre: "prueba200",
    //     objetivosGenerales: "letras",
    //     objetivosEspecificos: "cositas varias",
    //     presupuesto: "123",
    //     fechaInicio: "2021-01-12",
    //     fechaFin: "2021-02-14",
    //     lider: "6198404915b34712ecd3d4a7",
    //     estado: Enum_EstadoProyecto.activo,
    //     fase: Enum_FaseProyecto.desarrollo,
    //     inscripciones: Enum_EstadoInscripcion.pendiente,
    //     avances: "prueba",
    // })
    //     .then((u) => {
    //         console.error('proyecto creado', u)
    //     })
    //     .catch((e) => {
    //         console.error('Error creando proyecto', e)
    //     });


// CRUD USUARIOS


//CREAR USUARIO

    // UserModel.create({
    //     nombre:"Aleja",
    //     apellido:"Zapa",
    //     identificacion:"1020309040",
    //     rol:Enum_Rol.estudiante,
    //     correo:"alejoe@gmail.com",
              
        
    // })
    // .then((u) =>{
    //     console.log('usuario creado', u);

    // })
    // .catch((e)=>{
    //     console.error('Error creando el usuario',e);
    // }); 

    ///OBTENER LOS USUARIOS

    // await UserModel.find().then((u)=>{
    //     console.log('usuarios',u);
    // }).catch(e=>{
    //     console.error('error obteniendo los usuarios',e);
    // })  

    //OBTENER UN SOLO USUARIO

    // await UserModel.findOne({identificacion:"10203050"})
    // .then((u)=>{
    //     console.log('usuario encontrado',u);
    // })
    // .catch((e)=>{
    //     console.error(e);
    // });

    //EDITAR UN USUARIO

    //  await UserModel.findOneAndUpdate(
    //     {correo:'miguel@hotmail.com'},
    //     {
    //     nombre:'juan',
    // }).then((u)=>{
    //     console.log('usuario actualizado',u);

    // }).catch(e=>{
    //     console.error('error actualizando',e)
    // });
 
    //ELIMINAR USUARIO
    
    // await UserModel.findOneAndDelete({correo:'miguel@hotmail.com'})
    // .then((u)=>{
    //     console.log('usuario eliminado',u);
    // })
    // .catch((e)=>{
    //     console.error(e);
    // });
//  };

// main();
