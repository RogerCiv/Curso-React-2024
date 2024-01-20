import React from 'react'

function InputComp({ value, onChange }) {
  return (
    <div>
        <input value={value} onChange={onChange} className='w-full p-2 rounded border border-yellow-500' type="text" placeholder='Pikachu, Bulbasaur...' />
    </div>
  )
}

export default InputComp