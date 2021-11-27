import conectarBD from '../db/db';
import { UserModel } from '../models/usuario/user';
import { Enum_Rol,Enum_EstadoProyecto,Enum_FaseProyecto,Enum_EstadoInscripcion } from '../models/enums/enums';
import { ProyectModel } from '../models/proyecto/project';

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

    ProyectModel.create({

        nombre: "prueba200",
        presupuesto: "123",
        fechaInicio: "2021-01-12",
        fechaFin: "2021-02-14",
        lider: "6198404915b34712ecd3d4a7",
        estado: Enum_EstadoProyecto.ACTIVO,
        fase: Enum_FaseProyecto.DESARROLLO,
        inscripciones: Enum_EstadoInscripcion.PENDIENTE,
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

