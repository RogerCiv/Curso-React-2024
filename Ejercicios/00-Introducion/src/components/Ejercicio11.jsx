import React from 'react'

function Ejercicio11({ isLoggedIn, userRole }) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className='text-3xl font-semibold'>Ejercicio 11</h1>
     {
      isLoggedIn ? userRole === "admin" ? <p className='text-green-500 font-semibold'>Bienvenido ADMIN</p> :  <p className='text-blue-500 font-semibold'>Bienvenido usuario</p> : <p className='text-red-500 font-semibold'>Inicia Sesión</p>
     }
    </div>
  )
}

export default Ejercicio11