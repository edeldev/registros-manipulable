
function Filtro({filtroNombre, setFiltroNombre, filtroCiudad, setFiltroCiudad}) {

    const vaciar = () => {
        setFiltroNombre('')
        setFiltroCiudad('')
    }
  return (
    <div className="form__filtrado">
        <div>
            <label htmlFor="name">Nombre:</label> {''}
            <input 
                id='name'
                type="text" 
                value={ filtroNombre }
                onChange={e => setFiltroNombre(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="city">Ciudad:</label> {''}
            <input 
                id="city"
                type="text" 
                value={ filtroCiudad }
                onChange={e => setFiltroCiudad(e.target.value)}
            />
        </div>

        <button type="button" onClick={vaciar}>Mostrar Todos</button>
    </div>
  )
}

export default Filtro