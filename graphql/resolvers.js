import { resolverUsuario } from "../models/usuario/resolver.usuarios.js";
import { resolversProyecto } from "../models/proyecto/resolver.proyecto.js";
import { resolverInscripciones } from "../models/inscripcion/resolver.inscripcion.js";
import { resolversAvance } from "../models/avance/resolver.avances.js";


export const resolvers = [ resolverUsuario, resolversAvance, resolverInscripciones, resolversProyecto ];