
function Datos({
    persona,
    personas,
    setPersonas
}) {

    const {
        nombre,
        fecha,
        genero,
        nacionalidad,
        direccion,
        ciudad,
        estado,
        codigo,
        sangre,
        alergias,
        enfermedades,
        nivel,
        institucion,
        anio,
        habilidad,
        linguistica,
        social,
        id
    } = persona;   

    const borrarRegistro = () => {
        const resultado = confirm(`¿Deseas eliminar este registro?, ${id}`);
        if(resultado) {
            const personasActualizadas = personas.filter((persona) => persona.id !== id);
            setPersonas(personasActualizadas);
            const personasPorDefectoActualizadas = personasActualizadas.filter((persona) => persona.esPorDefecto);
            localStorage.setItem('personasPorDefecto', JSON.stringify(personasPorDefectoActualizadas));
        }
  
    }

  return (
    <div className='container__datos-persona'>
        <p className="fs-4 text-center title">Datos de la Persona</p>
        <h5 className="fw-light">CURP: <span className="fw-bold">{id}</span></h5>
        <p className="title__data">Información Personal</p>

        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Género</th>
                    <th>Nacionalidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{nombre}</td>
                    <td>{fecha}</td>
                    <td>{genero}</td>
                    <td>{nacionalidad}</td>
                </tr>
            </tbody>
        </table>

        <p className="title__data pt-3">Información Geográfica</p>

        <table>
            <thead>
                <tr>
                    <th>Dirección</th>
                    <th>Ciudad</th>
                    <th>Estado</th>
                    <th>Código Postal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{direccion}</td>
                    <td>{ciudad}</td>
                    <td>{estado}</td>
                    <td>{codigo}</td>
                </tr>
            </tbody>
        </table>

        <p className="title__data pt-3">Información de Salud</p>

        <table>
            <thead>
                <tr>
                    <th>Tipo de Sangre</th>
                    <th>Alergias</th>
                    <th>Enfermedades</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{sangre}</td>
                    <td>{alergias}</td>
                    <td>{enfermedades}</td>
                </tr>
            </tbody>
        </table>

        <p className="title__data pt-3">Información Académica</p>

        <table>
            <thead>
                <tr>
                    <th>Nivel Educativo</th>
                    <th>Institución Educativa</th>
                    <th>Año de graduación</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{nivel}</td>
                    <td>{institucion}</td>
                    <td>{anio}</td>
                </tr>
            </tbody>
        </table>

        <p className="title__data pt-3">Habilidades</p>

        <table>
            <thead>
                <tr>
                    <th>Habilidades técnicas</th>
                    <th>Habilidades lingüísticas</th>
                    <th>Habilidades sociales</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{habilidad}</td>
                    <td>{linguistica}</td>
                    <td>{social}</td>
                </tr>
            </tbody>
        </table>

        <button type="button" className="delete__registro" onClick={borrarRegistro}>Eliminar</button>                 
    </div>
  )
}

export default Datos