import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import { useLocalStorage } from '../customHooks/useLocalStorage'

const initialState = {
    name: '',
    password: ''
}
function reducer (state,action) {

    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        case 'RESET':
            return initialState
        default:
            return initialState
    }

}

const FormUseReducer = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
    // const [name , setName ] = useState('')
    // const [password , setPassword ] = useState('')
    const handleSubmit =  (e) => {
        e.preventDefault()
        console.log(state);
        dispatch({
            type: 'RESET',
        })
        alert(`Usuario: ${state.name} Contraseña: ${state.password}`)

    }

    const handleChangeName = (e) => {
        console.log(e.target.value);
        dispatch({
            type: 'SET_NAME',
            payload: e.target.value
        })

    }

    const handleChangePassword = (e) => {
        console.log(e.target.value);
        dispatch({
            type: 'SET_PASSWORD',
            payload: e.target.value
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-4 p-4 bg-gray-200' action="">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                value={state.name} onChange={handleChangeName}/>
            </div>

            <div className='mb-4'>
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={state.password} onChange={handleChangePassword} />
            </div>
            <div className=''>
            <button type='submit' className='bg-blue-500 text-white p-2 rounded-sm '>Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default FormUseReducer