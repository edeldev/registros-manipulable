import generarId from '../data/id-unico';
import {
  generarNombreAleatorio,
  seleccionarPaisAleatorio,
  generarFechaAleatoria,
  seleccionarGrupoSanguineoAleatorio,
  seleccionarAlergiasAleatorio,
  seleccionarEnfermedadesAleatorio,
  seleccionarNivelAleatorio,
  seleccionarInstitucionAleatorio,
  seleccionarAnioAleatorio,
  seleccionarHabilidadAleatoria,
  seleccionarLinguisticaAleatoria,
  seleccionarSocialAleatorio,
  seleccionarNacionalidadAleatoria,
  generarDireccionAleatoria,
  seleccionarCiudad,
  seleccionarGeneroAleatorio,
  generarCodigoAleatorio,
} from '../data/datos-aleatorios';


export const agregarPersonasPorDefecto = (personas) => {
  const personasPorDefectoStorage = localStorage.getItem('personasPorDefecto');
  let datosPersonasPorDefecto;

  if (personasPorDefectoStorage) {
    datosPersonasPorDefecto = JSON.parse(personasPorDefectoStorage);
  } else {
    datosPersonasPorDefecto = [];
    for (let i = 0; i < 75; i++) {
      datosPersonasPorDefecto.push(generarRegistroAleatorio());
    }
    localStorage.setItem('personasPorDefecto', JSON.stringify(datosPersonasPorDefecto));
  }

  if (personas.length === 0) {
    return datosPersonasPorDefecto;
  }

  return personas;
};

function generarRegistroAleatorio() {
  return {
    nombre: generarNombreAleatorio(),
    fecha: generarFechaAleatoria(),
    genero: seleccionarGeneroAleatorio(),
    nacionalidad: seleccionarNacionalidadAleatoria(),
    direccion: generarDireccionAleatoria(),
    ciudad: seleccionarCiudad(),
    estado: seleccionarPaisAleatorio(),
    codigo: generarCodigoAleatorio(),
    sangre: seleccionarGrupoSanguineoAleatorio(),
    alergias: seleccionarAlergiasAleatorio(),
    enfermedades: seleccionarEnfermedadesAleatorio(),
    nivel: seleccionarNivelAleatorio(),
    institucion: seleccionarInstitucionAleatorio(),
    anio: seleccionarAnioAleatorio(),
    habilidad: seleccionarHabilidadAleatoria(),
    linguistica: seleccionarLinguisticaAleatoria(),
    social: seleccionarSocialAleatorio(),
    id: generarId(),
    esPorDefecto: true,
  };
}