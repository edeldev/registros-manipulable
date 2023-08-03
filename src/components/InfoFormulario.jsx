import generarId from '../data/id-unico'

function InfoFormulario({
    personas, 
    setPersonas,
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
    setNombre,
    setFecha,
    setGenero,
    setNacionalidad,
    setDireccion,
    setCiudad,
    setEstado,
    setCodigo,
    setSangre,
    setAlergias,
    setEnfermedades,
    setNivel,
    setInstitucion,
    setAnio,
    setHabilidad,
    setLinguistica,
    setSocial,
    modal,
    setModal
}) {

      const handleSubmit = (event) => {
        event.preventDefault();
        
        const objetoPersonas = {
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
            id: generarId()
        }

        // Nuevo Registro
        setPersonas([ ...personas, objetoPersonas ])

        // Reinicar Formulario
        setNombre("")
        setFecha("")
        setGenero("")
        setNacionalidad("")
        setDireccion("")
        setCiudad("")
        setEstado("")
        setCodigo("")
        setSangre("")
        setAlergias("")
        setEnfermedades("")
        setNivel("")
        setInstitucion("")
        setAnio("")
        setHabilidad("")
        setLinguistica("")
        setSocial("")

        setTimeout(() => {
            const section = document.querySelector(".container__datos-persona");
            if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            }
        }, 1400);

        setModal(true)

        setTimeout(() => {
            setModal(false)
        }, 1300);

      }

  return (
    <>
        <form onSubmit={handleSubmit}>
             <h3>Información Personal</h3>
                <div className="container__data">
                    <label htmlFor="nombre" className="fw-bold">Nombre Completo:</label>
                        <input
                            id="nombre"
                            type="text"
                            placeholder="Ejem: Edel Mauricio Soto Ballesteros"
                            value={nombre}
                            onChange={ e => setNombre(e.target.value)}
                            required
                        />
                        <label htmlFor="nacimiento" className="pt-3 fw-bold">Fecha de Nacimiento:</label>
                        <input
                            id="nacimiento"
                            type="date"
                            placeholder="¿Cuál es tu fecha?"
                            value={fecha}
                            onChange={ e => setFecha(e.target.value)}
                            required
                        />
                        <label htmlFor="genero" className="pt-3 fw-bold">Género:</label>
                        <input
                            id="genero"
                            type="text"
                            placeholder="Ejem: M"
                            value={genero}
                            onChange={ e => setGenero(e.target.value)}
                            required
                        />
                        <label htmlFor="nacionalidad" className="pt-3 fw-bold">Nacionalidad:</label>
                        <input
                            id="nacionalidad"
                            type="text"
                            placeholder="Ejem: México"
                            value={nacionalidad}
                            onChange={ e => setNacionalidad(e.target.value)}
                            required
                        /> {/* Fin */}
                    </div>

                     <h3>Información Geográfica</h3>
                     <div className="container__data">
                        <label htmlFor="direccion" className="fw-bold">Dirección:</label>
                           <input
                               id="direccion"
                               type="text"
                               placeholder="Ejem: Hacienda Real 0235"
                               value={direccion}
                               onChange={ e => setDireccion(e.target.value)}
                               required
                           />
                           <label htmlFor="ciudad" className="pt-3 fw-bold">Ciudad:</label>
                           <input
                               id="ciudad"
                               type="text"
                               placeholder="Ejem: Monterrey"
                               value={ciudad}
                               onChange={ e => setCiudad(e.target.value)}
                               required
                           />
                           <label htmlFor="Estado" className="pt-3 fw-bold">Estado:</label>
                           <input
                               id="Estado"
                               type="text"
                               placeholder="Ejem: Nuevo León"
                               value={estado}
                               onChange={ e => setEstado(e.target.value)}
                               required
                           />
                           <label htmlFor="codigo" className="pt-3 fw-bold">Código Postal:</label>
                           <input
                               id="codigo"
                               type="text"
                               placeholder="Ejem: 64000"
                               value={codigo}
                               onChange={ e => setCodigo(e.target.value)}
                               required
                           /> {/* Fin */}
                     </div>

                     <h3>Información de Salud</h3>
                     <div className="container__data">
                        <label htmlFor="sangre" className="fw-bold">Tipo de Sangre:</label>
                           <input
                               id="sangre"
                               type="text"
                               placeholder="Ejem: A+"
                               value={sangre}
                               onChange={ e => setSangre(e.target.value)}
                               required
                           />
                           <label htmlFor="alergias" className="pt-3 fw-bold">Alergias:</label>
                           <input
                               id="alergias"
                               type="text"
                               placeholder="Ejem: No"
                               value={alergias}
                               onChange={ e => setAlergias(e.target.value)}
                               required
                           />
                           <label htmlFor="enfermedades" className="pt-3 fw-bold">Enfermedades crónicas o condiciones médicas:</label>
                           <input
                               id="enfermedades"
                               type="text"
                               placeholder="Ejem: No"
                               value={enfermedades}
                               onChange={ e => setEnfermedades(e.target.value)}
                               required
                           /> {/* Fin */}
                     </div>

                     <h3>Información Académica</h3>
                     <div className="container__data">
                        <label htmlFor="educacion" className="fw-bold">Nivel Educativo:</label>
                           <input
                               id="educacion"
                               type="text"
                               placeholder="Ejem: Universidad"
                               value={nivel}
                               onChange={ e => setNivel(e.target.value)}
                               required
                           />
                           <label htmlFor="institucion" className="pt-3 fw-bold">Institución educativa:</label>
                           <input
                               id="institucion"
                               type="text"
                               placeholder="Ejem: Universidad Metropolitana de Monterrey"
                               value={institucion}
                               onChange={ e => setInstitucion(e.target.value)}
                               required
                           />
                           <label htmlFor="anio" className="pt-3 fw-bold">Año de graduación:</label>
                           <input
                               id="anio"
                               type="text"
                               placeholder="Ejem: 2023"
                               value={anio}
                               onChange={ e => setAnio(e.target.value)}
                               required
                           /> {/* Fin */}
                     </div>

                    <h3 className='pt-3'>Habilidades</h3>
                     <div className="container__data">
                        <label htmlFor="habilidad" className="fw-bold">Habilidades técnicas:</label>
                           <input
                               id="habilidad"
                               type="text"
                               placeholder="Ejem: Programación"
                               value={habilidad}
                               onChange={ e => setHabilidad(e.target.value)}
                               required
                           />
                           <label htmlFor="linguistica" className="pt-3 fw-bold">Habilidades lingüísticas:</label>
                           <input
                               id="linguistica"
                               type="text"
                               placeholder="Ejem: Si"
                               value={linguistica}
                               onChange={ e => setLinguistica(e.target.value)}
                               required
                           />
                           <label htmlFor="social" className="pt-3 fw-bold">Habilidades sociales:</label>
                           <input
                               id="social"
                               type="text"
                               placeholder="Ejem: Trabajo en equipo"
                               value={social}
                               onChange={ e => setSocial(e.target.value)}
                               required
                           /> {/* Fin */}
                     </div>

                <button type='submit'>Enviar</button>
            </form>

        </>
  )
}

export default InfoFormulario