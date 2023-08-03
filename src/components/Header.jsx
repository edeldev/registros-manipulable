import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Formulario';

function Header({nombre, setNombre, personas, setPersonas, setPageProyecto, modal, setModal}) {

  const volver = () => {
    setPageProyecto(false) 
    setNombre('')
    setPersonas([])
  }
  return (
    <div className={`${ modal ? 'open' : ''}`}>
        <header className='container-xl text-center py-4'>
            <h1 className='text-danger m-0'>Registro de Personas</h1>
            <h2 className='fw-light'>Hola, <span className='fw-bold'>{nombre}!</span></h2>
            <button type='button' className='inicio' onClick={volver}>Ir a inicio</button>
        </header>


        <main>
           <Formulario
            personas={personas}
            setPersonas={setPersonas} 
            modal={modal}
            setModal={setModal}
           /> 
        </main>
    </div>
  )
}

export default Header