import { resolverUsuario } from "../models/usuario/resolver.usuarios";
import { resolversProyecto } from "../models/proyecto/resolver.proyecto";
import { resolverInscripciones } from "../models/inscripcion/resolver.inscripcion";
import { resolversAvance } from "../models/avance/resolver.avances";


export const resolvers = [ resolverUsuario, resolversAvance, resolverInscripciones, resolversAvance ];