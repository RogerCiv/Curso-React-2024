import React from 'react'
import { useState } from 'react'

function Ejercicio09() {

  const [isVisible, setIsVisible] = useState(false)

  function handleToggle () {
    setIsVisible(!isVisible)
  }
  return (
    <div className='flex flex-col items-center gap-2'>
      <h2 className='text-4xl font-bold'>Ejercicio 09</h2>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleToggle}>
        Cambiar Visibilidad
      </button>
      {isVisible && <p className='text-2xl font-semibold'>Si es visible, veras este mensaje, sino pues no 😅</p>}
    </div>
  )
}

export default Ejercicio09