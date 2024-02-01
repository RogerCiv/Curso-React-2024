import React from 'react'
import { useRef } from 'react'

const EjemploUseRefMutableData = () => {

    const dataRef = useRef({ value: "valor inicial" })
    const handleUpdateData = () => {
        dataRef.current.value = "Actualizando"
        console.log(dataRef.current.value);
    }
  return (
    <>
    <div>
       {dataRef.current.value}
    </div>
    <button className='border border-gray-400 p-2 m-2 bg-blue-700 text-white hover:bg-blue-300' onClick={handleUpdateData}>Actualizar</button>
    </>
  )
}

export default EjemploUseRefMutableData