import {gql} from 'apollo-server-express';
import { tiposEnums } from '../models/enums/type.enums';
import { tiposUsuario } from '../models/usuario/type.usuario';
import { tiposProyecto } from '../models/proyecto/type.proyecto';
import { tiposAvance } from '../models/avance/type.avances';
import { tiposInscripcion } from '../models/inscripcion/type.inscripcion';

const tiposGlobales = gql`

scalar Date

`;

export {tiposGlobales, tiposInscripcion, tiposAvance, tiposProyecto, tiposUsuario, tiposEnums };

