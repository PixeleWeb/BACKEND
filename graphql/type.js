import {gql} from 'apollo-server-express';
import { tiposEnums } from '../models/enums/type.enums.js';
import { tiposUsuario } from '../models/usuario/type.usuario.js';
import { tiposProyecto } from '../models/proyecto/tipo.proyecto.js';
import { tiposAvance } from '../models/avance/tipo.avances.js';
import { tiposInscripcion } from '../models/inscripcion/tipo.inscripcion.js';

const tiposGlobales = gql`

scalar Date

`;

export const tipos =[tiposGlobales, tiposInscripcion, tiposAvance, tiposProyecto, tiposUsuario, tiposEnums ];

