import { useState, useEffect } from 'react'
import Error from './Error.jsx'


const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

  const [nombre, setNombre] = useState(''); 
  const [propietario, setPropietario] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [fecha, setFecha] = useState(''); 
  const [sintomas, setSintomas] = useState(''); 

  //State  Error 
  const [error,setError] = useState(false);
 
// Use Effect EDITAR 
 
  useEffect(() => { 

    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)


    }

},[paciente])

  // Generar ID random 
  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha 
  } 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Validacion del formulario
    if ([nombre,propietario,email,fecha,sintomas].includes('')) {
      console.log("Completa todos los casilleros por favor.")

      setError (true)
      return; 
    } 

    setError(false)

    //Objeto Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }



    if (paciente.id) {
               // Editando Registro
      objetoPaciente.id = paciente.id
      const pacientesActulizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActulizados)
      setPaciente({}) // Reinicia el hook state de setPaciente (limpia la consola y memoria)
  
    } else {
              // Nuevo Registro 
      objetoPaciente.id = generarId();
        setPacientes([...pacientes,objetoPaciente])
      
    }


    // console.log(objetoPaciente)

    // Console.Log (objetoPaciente) (Crea una copia por cada enter)
    
    // Reiniciar formulario 
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }; 

  return (
      <div className="">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes </h2>
      <p className="mt-10 text-lg mb-10 text-center">Añande pacientes y {''}
        <span className="text-indigo-600 font-bold text-lg"> Administralos</span></p>
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl py-10 px-5 mb-10 rounded-lg mx-5">
        
        {error && <Error mensaje='Error supremo'/>}

         <div className="mb-5">
          
          <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">
            Nombre Mascota
          </label>
          
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
            
          />
        </div>
        
        <div className="mb-5">
          
          <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">
            Nombre Propietario
          </label>
          
          <input
            id="propietario"
            type="text"
            placeholder="Nombre de la Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
           value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}/>
        </div>
        
        <div className="mb-5">
          
          <label htmlFor="email" className="block text-gray-700 font-bold uppercase">
            Email
          </label>
          
          <input
            id="email"
            type="text"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
           value={email}
            onChange={ (e) => setEmail(e.target.value)}/>
        </div>
        

        <div className="mb-5">
          
          <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">
            alta
          </label>
          
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
           value={fecha}
            onChange={ (e) => setFecha(e.target.value)}/>
        </div>

        <div className="mb-5">
          
          <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">
            Sintomas
          </label>

          <textarea id="sintomas"
            placeholder="Describe los Sintomas"
            className="border border-opacity-60 w-full  p-2"
             value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={paciente.id ? 'Editar Paciente' : 'Agregar paciente'}
        />
        
      </form>
      </div>
  )
}


export default Formulario

