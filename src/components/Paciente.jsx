

const Paciente = ({ paciente, setPaciente,eliminarPaciente }) => {


  // Eliminar boton  
  const handleEliminar = () => {

    const respuesta = confirm("Deseas elimianr el paciente?")
    if (respuesta) {
       eliminarPaciente(paciente.id)
     }
  }
  return (
    <>
        <div className='bg-white shadow-md m-3 px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre: {''}
          <span className='font-normal normal-case'> {paciente.nombre}</span>
          
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {''}
          <span className='font-normal normal-case'> {paciente.propietario}</span>
          
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Email: {''}
          <span className='font-normal normal-case'> {paciente.email}</span>
          
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha Alta: {''}
          <span className='font-normal normal-case'> {paciente.fecha}</span>
          
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Sintomas: {''}
          <span className='font-normal normal-case'> {paciente.sintomas}</span>
          
        </p>

        <div className="flex flex-row space-x-3">
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 border rounded-md mt-2 p-3 px-5 text-white uppercase font-bold"
          onClick={() => setPaciente(paciente) }
          >Editar
        
          </button>
          <button type="submit" className="bg-red-700 hover:bg-red-800 border rounded-md mt-2 p-3 px-5 text-white uppercase font-bold"
          onClick={handleEliminar}
          
          >Eliminar
          </button>
          </div>
        
      </div>


    </>
  )
}

export default Paciente