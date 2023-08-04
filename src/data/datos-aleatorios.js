// Función para generar nombres aleatorios
function generarNombreAleatorio() {
    const nombres = ['Juan', 'María', 'José', 'Ana', 'Pedro', 'Laura', 'Carlos', 'Sofía', 'Miguel', 'Gabriela'];
    const apellidos = ['González', 'López', 'Rodríguez', 'Gómez', 'Martínez', 'Hernández', 'Pérez', 'Vargas', 'Silva'];
  
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
  
    return `${nombreAleatorio} ${apellidoAleatorio}`;
  }
  
  // Función para seleccionar un país aleatorio de México
  function seleccionarPaisAleatorio() {
    const paisesMexico = ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'];
  
    return paisesMexico[Math.floor(Math.random() * paisesMexico.length)];
  }

  function seleccionarCiudad() {
    const paisesMexico = ['Monterrey', 'CD de Mexico', 'Toluca', 'Cancún', 'Chihuahua', 'Puebla', 'Baja California', 'Hermosillo', 'Sonora', 'Cd. Juárez', 'Culiacán'];
    return paisesMexico[Math.floor(Math.random() * paisesMexico.length)];
  }

  function generarFechaAleatoria() {
    const fechaInicio = new Date(1990, 0, 1).getTime();
    const fechaFin = new Date(2005, 11, 31).getTime();
    const fechaAleatoria = new Date(Math.random() * (fechaFin - fechaInicio) + fechaInicio);
    return fechaAleatoria.toISOString().slice(0, 10); // Formato YYYY-MM-DD
  }

  function seleccionarGrupoSanguineoAleatorio() {
    const gruposSanguineos = ['A', 'AB', 'B', 'O'];
    return gruposSanguineos[Math.floor(Math.random() * gruposSanguineos.length)];
  }
  
  function seleccionarAlergiasAleatorio() {
    const opcionesAlergias = ['Si', 'No'];
    return opcionesAlergias[Math.floor(Math.random() * opcionesAlergias.length)];
  }
  
  function seleccionarEnfermedadesAleatorio() {
    const opcionesEnfermedades = ['Si', 'No'];
    return opcionesEnfermedades[Math.floor(Math.random() * opcionesEnfermedades.length)];
  }
  
  function seleccionarNivelAleatorio() {
    const niveles = ['Universidad', 'Bachillerato', 'Primaria', 'Secundaria'];
    return niveles[Math.floor(Math.random() * niveles.length)];
  }
  
  function seleccionarInstitucionAleatorio() {
    const instituciones = ['UMM', 'UANL', 'UDEM', 'TEC', 'EDEC', 'VASCONCELOS'];
    return instituciones[Math.floor(Math.random() * instituciones.length)];
  }
  
  function seleccionarAnioAleatorio() {
    const anios = ['1999', '2000', '1885', '1995', '2002', '2003', '2021'];
    return anios[Math.floor(Math.random() * anios.length)];
  }
  
  function seleccionarHabilidadAleatoria() {
    const habilidades = [
      'Aprende a aceptar las críticas',
      'Programación',
      'Flexibilidad y adaptación',
      'Capacidad resolutiva',
      'Motivación y confianza',
      'No perder de vista los valores éticos',
      'Saber trabajar bajo presión'
    ];
    return habilidades[Math.floor(Math.random() * habilidades.length)];
  }
  
  function seleccionarLinguisticaAleatoria() {
    const opcionesLinguistica = ['Si', 'No'];
    return opcionesLinguistica[Math.floor(Math.random() * opcionesLinguistica.length)];
  }
  
  function seleccionarSocialAleatorio() {
    const habilidadesSociales = [
      'Trabajar en equipo',
      'Escucha activa',
      'Asertividad',
      'Validación emocional',
      'Empatía'
    ];
    return habilidadesSociales[Math.floor(Math.random() * habilidadesSociales.length)];
  }

  function seleccionarNacionalidadAleatoria() {
    const nacionalidades = ['México', 'Estados Unidos', 'Canadá', 'España', 'Argentina', 'Colombia', 'Chile', 'Perú', 'Brasil'];
    return nacionalidades[Math.floor(Math.random() * nacionalidades.length)];
  }
  
  function generarDireccionAleatoria() {
    const direcciones = [
      'Benito Juarez, CALLE AGUS TN LARA NO. 69-B',
      'AV. DEPENDENCIA NO. 241',
      'AV. DEPENDENCIA NO. 779',
      'AV. 20 DE NOVIEMBRE NO.1024',
      'CARRETERA A LOMA ALTA snq.',
      'AV. 20 DE NOVIEMBRE NO. 1060',
      'CALLE ZARAGOZA NO. 1010',
      'AV. MATAMOROS NO. 31',
      'AV. 20 DE NOVIEMBRE NO.859-B',
      'AV. 20 DE NO 1053',
      'BLVD. BENITO JUÁREZ NO. 1466-A',
      'CALLE MATAMOROS NO.280',
      'AV. NO. 545',
      'AV INDEPENDENCIA NO.1282-',
      'CALLE MATAMOROS NO. 127',
      'AV. DEPENDENCIA NO. 1010',
      'AV. 5 DE MAYO NO. 1652',
      'AV.5 DE MAYO NO. 1108',
      'AV. DEPENDENCIA NO. 748',
      'AV. DEPENDENCIA NO. 985-A',
      'AV. DEPENDENCIA NO. 985-A',
      'BLVD. BENITO JUÁREZ S / N',
      'MATAMOROS NO 149',
      'AV. 5 DE MAYO NO 1100-',
      'AV. 20 DE NOVIEMBRE NO 1540',
      'AV. 5 DE MAYO NO 1253'
    ];
    return direcciones[Math.floor(Math.random() * direcciones.length)];
  }

  // Función para seleccionar género aleatorio
function seleccionarGeneroAleatorio() {
    const generos = ['M', 'F'];
    return generos[Math.floor(Math.random() * generos.length)];
  }
  
  // Función para generar código aleatorio
  function generarCodigoAleatorio() {
    const codigos = ['68370', '68300', '68360', '68380', '68335', '68399', '68345', '68320', '68355'];
    return codigos[Math.floor(Math.random() * codigos.length)];
  }
  
  export {
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
  };

               