import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const Counter = () => {
const [count, setCount] = useState(0)

const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1)
},[])

const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1)
},[])
  return (
    <div className='flex  flex-col gap-2 justify-center items-center'>
         <h2>Valor del contador: {count}</h2>
         <button className='bg-red-500 text-white p-2' onClick={handleIncrement}>Incrementar</button>
        <button className='bg-red-500 text-white p-2' onClick={handleDecrement}>Decrementar</button>
    </div>
  )
}

export default Counter