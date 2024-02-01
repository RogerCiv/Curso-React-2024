import React from 'react'
import { useContext } from 'react'
import { ComponenteContext } from '../context/ComponenteContext'

const Componente5 = () => {

  const { appState, setAppState } = useContext(ComponenteContext)
  const handleClick = () => {
    setAppState({ ...appState, contador: appState.contador + 1 })
  }
  return (
    <div>
      <h1 className='text-3xl font-bold'>Componente5</h1>
      <h4>El conador: {appState.contador} </h4>
      <button className='border border-gray-400 p-2 m-2 bg-orange-700 text-white hover:bg-orange-300' onClick={handleClick}>Incrementar</button>
    </div>
  )
}

export default Componente5