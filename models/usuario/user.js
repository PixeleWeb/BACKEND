import mongoose from "mongoose";


const {Schema, model}= mongoose;







const userSchema = new Schema({

    nombre:{
        type:String,
        required:true,
    },

    apellido:{
        type:String,
        required:true,
    },

    identificacion:{
        type:String,
        required:true,
        unique:true,
    },

    rol:{
        type:String,
        required:true,
        enum:["ESTUDIANTE","LIDER","ADMINISTRADOR"],
    },

    correo:{
        type:String,
        required: true,
        unique:true,
        validate:{
            validator:(email)=>{
                if(email.includes('@')&& email.includes('.')){
                    return true;
                }
                else{
                    return false;
                }

            },
            message:'el formato del correo electronico es incorrecto',
        },
    
    },
    
    
    estado:{
        type:String,
        enum:['PENDIENTE','AUTORIZADO','NO_AUTORIZADO'],
        default:'PENDIENTE',
    }

    
});

const UserModel = model('User', userSchema, 'Usuarios');

export  {UserModel}; 