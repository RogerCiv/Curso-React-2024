import React from 'react'
import { useReducer } from 'react'


const initialState = {edad: 10}
function reducer(state,action) {
    switch (action.type) {
        case 'INCREMENT':
            return {edad: state.edad + 1}
        case 'DECREMENT':
            return {edad: state.edad - 1}
        case 'RESET':
            return initialState
        default:
            return state
    }
}
const BasicReduce = () => {

    const [state, dispatch] = useReducer(reducer,initialState)
    // const reduce =  [state, dispatch] = useReducer(reduce,initialState)
    // console.log(reduce);
  return (
    <>
    <div className='flex  flex-col gap-2 justify-center items-center'>

        <h1>Edad: {state.edad}</h1>
        <button className='bg-green-500 text-white p-2' onClick={() => dispatch({type: 'INCREMENT'})}>Incrementar</button>
        <button className='bg-blue-500 text-white p-2' onClick={() => dispatch({type: 'DECREMENT'})}>Decrementar</button>
        <button className='bg-red-500 text-white p-2' onClick={() => dispatch({type: 'RESET'})}>Resetear</button>
    </div>
    </>
  )
}

export default BasicReduce