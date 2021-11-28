import { AdvancementModel } from './avances'

const resolversAvance = {
    Query: {
        Avances: async (parent, args) => {
        const avances = await AdvancementModel.find().populate('proyecto').populate('creadoPor');
        return avances;
        },
        
        filtrarAvance: async (parents, args) => {
        const avanceFiltrado = await AdvancementModel.find({ proyecto: args._id })
            .populate('proyecto')
            .populate('creadoPor');
        return avanceFiltrado;
        },
    },
    
    Mutation: {
        crearAvance: async (parents, args) => {
        const avanceCreado = AdvancementModel.create({
            fecha: new Date(args.fecha),
            descripcion: args.descripcion,
            proyecto: args.proyecto,
            creadoPor: args.creadoPor,
        });
        return avanceCreado;
        },
    },
};

export { resolversAvance };