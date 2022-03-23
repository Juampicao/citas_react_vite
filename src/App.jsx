import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {
  
  const edad = 20; 

  const [pacientes, setPacientes] = useState([]); 
  const [paciente, setPaciente] = useState({});


  useEffect(() => {
    const ObtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    ObtenerLS();

  }, []);



  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  }, [pacientes])
  
  

  // Eliminar paciente (Funcion click eliminar en paciente tambien). 
  const eliminarPaciente = id => {
    const pacientesActulizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActulizados)
  }
  
  return (
    <>
      <div className="container mx-auto mt-20">
        <Header/>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    </>
  )
}

// nada 
export default App
