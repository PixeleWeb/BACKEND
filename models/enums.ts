enum Enum_Rol{
    estudiante="Estudiante",
    lider="Lider",
    administrador="Administrador",
}

enum Enum_EstadoUsuario{
    pendiente="Pendiente",
    autorizado="Autorizado",
    no_autorizado="No Autorizado",
}

enum Enum_EstadoInscripcion{
    aceptada = 'Aceptada',
    rechazada = 'Rechazada',
    pendiente = 'Pendiente'
}

enum Enum_EstadoProyecto{
    activo = "Activo",
    inactivo = "Inactivo",
}


enum Enum_FaseProyecto{
    iniciado='Iniciado',
    desarrollo='Desarrollo',
    terminado='Terminado',
    nula = '',

}

export {Enum_Rol, Enum_EstadoUsuario, Enum_EstadoInscripcion, Enum_EstadoProyecto, Enum_FaseProyecto};

