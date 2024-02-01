import React from 'react'
import { useContext } from 'react'
import { ComponenteContext } from '../context/ComponenteContext'

const Componente4 = () => {
  const { appState, setAppState } = useContext(ComponenteContext)
  const handleClick = () => {
    setAppState({ ...appState, contador: appState.contador + 1 })
  }
  return (
    <div>
      <h2 className='text-2xl font-bold'>Componente4</h2>
      <h4>El conador: {appState.contador} </h4>
      <button className='border border-gray-400 p-2 m-2 bg-blue-700 text-white hover:bg-blue-300' onClick={handleClick}>Incrementar</button>
    </div>
  )
}

export default Componente4