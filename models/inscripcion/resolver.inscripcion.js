import { InscripcionModel } from './inscripcion.js';

const resolverInscripciones = {
    Query: {
        Inscripciones: async (parent, args) => {
        const inscripciones = await InscripcionModel.find().populate('avances');
        return inscripciones;
        },
    },
    
    Mutation: {
        crearInscripcion: async (parent, args) => {
        const inscripcionCreada = await InscripcionModel.create({
            estado: args.estado,
            proyecto: args.proyecto,
            estudiante: args.estudiante,
        });
        return inscripcionCreada;
        },
        aprobarInscripcion: async (parent, args) => {
        const inscripcionAprobada = await InscripcionModel.findByIdAndUpdate(
            args.id,
                {
                    estado: 'ACEPTADO',
                    fechaIngreso: Date.now(),
                    
                },
                {new: true}
                );
        return inscripcionAprobada;
        },
    },
};

export { resolverInscripciones };