import React from 'react'

function InputComp({ value, onChange }) {
  return (
    <div>
    <input value={value} onChange={onChange} className='w-full p-2 rounded border border-yellow-500 outline-none focus:animate-pulse bg-gray-100  ' type="text" placeholder='Pikachu, Bulbasaur...' />
  </div>
  
  )
}

export default InputComp