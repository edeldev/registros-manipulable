import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {
  const [pageProyecto, setPageProyecto] = useState(false);
  const [nombre, setNombre] = useState(
    localStorage.getItem('nombre') ?? ''
  );
  const [error, setError] = useState('');

  const [personas, setPersonas] = useState(
    JSON.parse(localStorage.getItem("personas")) || []
  );

  const handleComenzar = () => {
    if (nombre.trim() === '') {
      setError('Por favor, ingresa tu nombre.');
    } else if (/^\d+$/.test(nombre) ){ 
      setError('Por favor, ingresa solo texto');
    } else {
      setError('');
      setPageProyecto(true);
    }
  }

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  }

  // Guardar el "nombre" en el localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('nombre', nombre);
  }, [nombre]);

  // Guardar las "personas" en el localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('personas', JSON.stringify(personas));
  }, [personas]);

  useEffect(() => {
    const nombreLS = localStorage.getItem('nombre') ?? ''

    if(nombreLS.length > 0){
      setPageProyecto(true)
    }
  }, [])


  return (
    <>
      { pageProyecto ? (
        <Header 
          nombre={nombre} 
          setNombre={setNombre}
          personas={personas}
          setPersonas={setPersonas}
          setPageProyecto={setPageProyecto}
        />
      ) : (
      <div className="container__home">
        <label className='text-center'>Bienvenido, ¿Cuál es tu nombre?</label>
        <input type="text" value={nombre} onChange={handleChangeNombre} />
        <button type='button' onClick={handleComenzar}>Comenzar</button>
        {error && <p style={{ color: 'red', paddingTop: '10px' }}>{error}</p>}
      </div>
      )}
    </>
  )
}

export default App;
