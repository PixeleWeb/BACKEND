import { UserModel } from "../models/user";

const resolvers ={
    Query:{
        Usuarios: async (parent,args)=>{
            const Usuarios = await UserModel.find();
            return Usuarios;    
                       
    },  
                  
},
Mutation:{
    crearUsuario: async(parent,args)=>{
        const usuarioCreado = await UserModel.create({
            nombre: args.nombre,
            apellido: args.apellido,
            identificacion: args.identificacion,
            correo: args.correo,
            estado: args.estado,
            rol: args.rol,
        });
        return {usuarioCreado};
    }
}
};

export {resolvers};