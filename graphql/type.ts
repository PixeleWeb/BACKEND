import {gql} from 'apollo-server-express';
import { tiposEnums } from '../models/enums/type.enums';
import { tiposUsuario } from '../models/usuario/type.usuario';
import { tiposProyecto } from '../models/proyecto/tipo.proyecto';
import { tiposAvance } from '../models/avance/tipo.avances';
import { tiposInscripcion } from '../models/inscripcion/tipo.inscripcion';

const tiposGlobales = gql`

scalar Date

`;

export const tipos =[tiposGlobales, tiposInscripcion, tiposAvance, tiposProyecto, tiposUsuario, tiposEnums ];

