import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const EjemploUseRefInpunt = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        if(inputRef.current) inputRef.current.focus()
    })

  return (
    <div>
        <label htmlFor=" ">Nombre:</label>
        <input type="text"
          ref={inputRef}
          placeholder="Escribe tu nombre"
          className="border border-gray-400 p-2 m-2 bg" 
        />

    </div>
  )
}

export default EjemploUseRefInpunt