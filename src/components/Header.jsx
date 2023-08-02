import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Formulario';

function Header({nombre, setNombre, personas, setPersonas, setPageProyecto}) {

  const volver = () => {
    setPageProyecto(false) 
    setNombre('')
    setPersonas([])
  }
  return (
    <>
        <header className='container-xl text-center py-4'>
            <h1 className='text-danger m-0'>Registro de Personas</h1>
            <h2 className='fw-light'>Hola, <span className='fw-bold'>{nombre}!</span></h2>
            <button type='button' className='inicio' onClick={volver}>Ir a inicio</button>
        </header>


        <main>
           <Formulario
            personas={personas}
            setPersonas={setPersonas} 
           /> 
        </main>
    </>
  )
}

export default Header