import { useState } from 'react'
import EjemploUseRefInpunt from './components/EjemploUseRefInpunt'
import EjemploUseRefForm from './components/EjemploUseRefForm'
import EjemploUseRefMutableData from './components/EjemploUseRefMutableData'
import { InicioApp } from './components/useContext/InicioApp'


function App() {
 

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen mx-auto'>
      <h2 className='text-3xl font-bold'>Uso useRef</h2>
      <EjemploUseRefInpunt/>
      </div>

      <div className='flex flex-col items-center justify-center h-screen mx-auto'>
        <h2>uso useRef 2</h2>
        <EjemploUseRefForm />
      </div>

      <div className='flex flex-col items-center justify-center h-screen mx-auto'>
        <h2>uso useRef 23</h2>
        <EjemploUseRefMutableData />
      </div>

      <div className='flex flex-col items-center justify-center h-screen mx-auto'>
        <h2>uso useContext</h2>
          <InicioApp />    
      </div>

    </>
  )
}

export default App
