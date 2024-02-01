import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const EjemploUseRefForm = () => {
  const [nombre, setNombre] = useState()
  const inputRef = useRef(null)

  const handleFocus = () => {
    if(inputRef.current){
      inputRef.current.focus()
    }
  }
  return (
    <div>
      <label htmlFor="nombre">   </label>
      <input className='border border-gray-400 p-2 m-2' ref={inputRef} type="text" id='nombre' onChange={e => setNombre(e.target.value)} value={nombre} />
      <button onClick={handleFocus} className='border border-gray-400 p-2 m-2 bg-blue-700 text-white hover:bg-blue-300'>Enfocar</button>
    </div>
  )
}

export default EjemploUseRefForm