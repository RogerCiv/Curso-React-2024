import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signWithGoogle } from '../firebase/productosApi'
import {  useAuthProduct } from '../context/authContextProduct'
const Login = () => {
const [ error, setError ] = useState(null)
const navigate = useNavigate()
const { signInFirebase } = useAuthProduct()

  const handleSingIn = async () => {
    await signWithGoogle(signInFirebase,setError,navigate)
  }
  
  
  useEffect(() => {
   
  }, [])
  return (
    <>
      <div className='flex flex-col min-h-screen justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 '>
        <header className='flex items-center justify-between mx-10'>
          <div className='flex flex-col justify-center items-start h-1/2'>
            <h1 className='text-5xl font-bold text-gray-800 ml-8 mt-10 text-center'>Productos React Firebase</h1>
            <p className='text-lg text-gray-600 ml-8 mt-10'>Proyecto DEWC</p>
          </div>
          <div className='flex justify-center items-start '>
            <video id='video-firebase' className='w-1/2' autoPlay loop src="https://firebase.google.com/static/images/homepage/Firebase_Hero_Loop.webm?hl=es"></video>
          </div>
        </header>
        <div className='w-full flex items-center justify-center'>
          <div className='w-1/4 bg-gray-50 py-12 px-4 rounded-xl shadow-xl'>
            <div>
              <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-800'>
                Iniciar Sesion
              </h2>
            </div>
            {error && <div>
              error: {error}
            </div>}
            <div className='rounded-md shadow-md'>
              <button type='button' className='relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' onClick={handleSingIn}>
                Iniciar Sesión con Google
              </button>
            </div>

          </div>

        </div>
        <div>
          Completar
        </div>
      </div>
    </>
  )
}

export default Login