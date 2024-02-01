import React from 'react'
import Componente2 from './Componente2'
import { ComponenteContext } from '../context/ComponenteContext'
import { useContext } from 'react'
const Componente1 = () => {
  const { appState } = useContext(ComponenteContext)
  return (
    <div>
        <h1 className='text-3xl font-bold'>Componente1</h1>
        <h4>El contador: {appState.contador} </h4>
        <Componente2 />
        
    </div>
  )
}

export default Componente1