import { connect } from 'mongoose';
//const { connect } = require('mongoose');

const conectarBD = async()=>{
    return await connect(
        'mongodb+srv://admin:1234@gestionproyectosmisiont.6fv0x.mongodb.net/GestionProyectoMisionTicPixelesWeb?retryWrites=true&w=majority'
    )
    .then(()=>{
        console.log('Conexion exitosa a mongo');
    })
    .catch(e=>{
        console.error('Error conectando a la bd',e);
    });
};

export default conectarBD;

