import { useState, useEffect } from 'react';
import InfoFormulario from './InfoFormulario';
import Datos from './Datos';
import Filtro from './Filtro';

function Formulario({personas, setPersonas}) {
      

    // Informacion Personal
    const [ nombre, setNombre ] = useState('');
    const [ fecha, setFecha ] = useState('');
    const [ genero, setGenero ] = useState('');
    const [ nacionalidad, setNacionalidad ] = useState('');

    // Informacion geográfica
    const [ direccion, setDireccion ] = useState('');
    const [ ciudad, setCiudad ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ codigo, setCodigo ] = useState('');

    // Informacion de salud
    const [ sangre, setSangre ] = useState('');
    const [ alergias, setAlergias ] = useState('');
    const [ enfermedades, setEnfermedades ] = useState('');

    // Informacion academica
    const [ nivel, setNivel ] = useState('');
    const [ institucion, setInstitucion ] = useState('');
    const [ anio, setAnio ] = useState('');

    // Habilidades
    const [ habilidad, setHabilidad ] = useState('');
    const [ linguistica, setLinguistica ] = useState('');
    const [ social, setSocial ] = useState('');

    const [ filtroNombre, setFiltroNombre ] = useState('')
    const [ filtroCiudad, setFiltroCiudad ] = useState('')
    const [ personasFiltradas, setPersonasFiltradas ] = useState([])

    useEffect(() => {
        if(filtroNombre && filtroCiudad) {
            const personasFiltradas = personas.
            filter( persona => persona.nombre === filtroNombre && persona.ciudad === filtroCiudad  )

            setPersonasFiltradas(personasFiltradas)
        }
    }, [ filtroNombre, filtroCiudad ])


  return (
    <div className="container__main">
        <div className="row align-items-start my-2">
            <div className="col-md-5 forms mb-5 mb-md-0">
                <InfoFormulario
                    personas={personas}
                    setPersonas={setPersonas}
                    nombre={nombre}
                    setNombre={setNombre}
                    fecha={fecha}
                    setFecha={setFecha}
                    genero={genero}
                    setGenero={setGenero}
                    nacionalidad={nacionalidad}
                    setNacionalidad={setNacionalidad}
                    direccion={direccion}
                    setDireccion={setDireccion}
                    ciudad={ciudad}
                    setCiudad={setCiudad}
                    estado={estado}
                    setEstado={setEstado}
                    codigo={codigo}
                    setCodigo={setCodigo}
                    sangre={sangre}
                    setSangre={setSangre}
                    alergias={alergias}
                    setAlergias={setAlergias}
                    enfermedades={enfermedades}
                    setEnfermedades={setEnfermedades}
                    nivel={nivel}
                    setNivel={setNivel}
                    institucion={institucion}
                    setInstitucion={setInstitucion}
                    anio={anio}
                    setAnio={setAnio}
                    habilidad={habilidad}
                    setHabilidad={setHabilidad}
                    linguistica={linguistica}
                    setLinguistica={setLinguistica}
                    social={social}
                    setSocial={setSocial}
                />
            </div>

            <div className="col-md-7 scroll__datos" id="alta">
                <Filtro 
                    filtroNombre={filtroNombre}
                    setFiltroNombre={setFiltroNombre}
                    filtroCiudad={filtroCiudad}
                    setFiltroCiudad={setFiltroCiudad}
                />

                { filtroNombre && filtroCiudad ? (
                    personasFiltradas.map( persona => (
                        <Datos 
                            key={persona.id}
                            persona={persona}
                        />
                        ))
                ) : (

                    personas.map( persona => (
                        <Datos 
                            key={persona.id}
                            persona={persona}
                        />
                    ))
                )}
            </div>
        </div>
    </div>
  )
}

export default Formulario