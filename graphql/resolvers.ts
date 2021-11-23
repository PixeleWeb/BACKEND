import { UserModel } from "../models/user";

const resolvers ={
    Query:{
        Usuarios: async (parent,args)=>{
            const Usuarios = await UserModel.find();
            return Usuarios;    
                       
    },  
                  
},
};

export {resolvers};