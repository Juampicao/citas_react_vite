import Paciente from "./Paciente" 

function ListadoPacientes({ pacientes, setPaciente,eliminarPaciente}) {
  
 
  return (
    <div className=" ">

      {pacientes && pacientes.length ? (
           <div>
       <h2 className='text-3xl text-center font-black'>Listado Pacientes</h2>

        <p className='mt-10 text-center'>
        Administra tus {''}
        <span className='text-indigo-600 text-xl font-bold'> Pacientes y Citas</span>
        </p>

      {pacientes.map ( paciente => (
        <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      ))}
           </div>

      ) : (
          <div className="text-center">
           <h2 className='text-3xl text-center font-black'>Listado Pacientes</h2>

             <p className='mt-10'>
              Agrega tus pacientes {''}
             <span className='text-indigo-600 text-xl font-bold'> para verlos aca</span>
             </p>
          
          </div>
          
          
          
      )} 
    
    
    
    </div>
    
  )
}

export default ListadoPacientes