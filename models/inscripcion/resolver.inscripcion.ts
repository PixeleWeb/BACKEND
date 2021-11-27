import { InscripcionModel } from '../inscripcion/inscripcion';

const resolverInscripciones = {
    Query: {
        Inscripciones: async (parent, args) => {
        const inscripciones = await InscripcionModel.find();
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
                    estado: args.estado,
                    fechaIngreso: args.Date,
                    fechaEgreso: args.Date, 
                    proyecto: args.proyecto,
                    estudiante: args.estudiante,
                },
            { new: true }
        );
        return inscripcionAprobada;
        },
    },
};

export { resolverInscripciones };