import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()

  
    function handleClick(){
        navigate(-1)
    }
  return (
    <div>
      <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Volver</button>
    </div>
  )
}

export default BackButton