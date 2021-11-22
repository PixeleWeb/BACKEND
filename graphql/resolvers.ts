const resolvers ={
    Query:{
        Usuarios: async (parent,args)=>{
            const Usuarios = [
                {
                    nombre:'daniel',
                },
                {
                    nombre:'juan',
                },
                {
                    nombre:'pedro',
                },
    
    
            ];
    
                    return Usuarios;
    },           
},
};

export {resolvers};