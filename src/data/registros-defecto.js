import generarId from '../data/id-unico';

export const agregarPersonasPorDefecto = () => {
    const personasPorDefectoStorage = localStorage.getItem('personasPorDefecto');
    let datosPersonasPorDefecto;
  
    if (personasPorDefectoStorage) {
      datosPersonasPorDefecto = JSON.parse(personasPorDefectoStorage);
    } else {
      datosPersonasPorDefecto = [
      {
        nombre: 'Persona por Defecto 1',
        fecha: '1990-01-01',
        genero: 'M',
        nacionalidad: 'México',
        direccion: 'Dirección por Defecto 1',
        ciudad: 'Monterrey',
        estado: 'Nuevo León',
        codigo: '64000',
        sangre: 'A+',
        alergias: 'No',
        enfermedades: 'No',
        nivel: 'Universidad',
        institucion: 'Universidad por Defecto 1',
        anio: '2021',
        habilidad: 'Programación',
        linguistica: 'Sí',
        social: 'Trabajo en equipo',
        id: generarId(),
        esPorDefecto: true,
      },
      // Otros registros por defecto...
    ];
    localStorage.setItem('personasPorDefecto', JSON.stringify(datosPersonasPorDefecto));
  }

  return datosPersonasPorDefecto;
};