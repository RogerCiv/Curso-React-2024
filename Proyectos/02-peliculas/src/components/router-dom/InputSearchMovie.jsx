import React from 'react'

const InputSearchMovie = ({value, onChange, onKeyDown}) => {
  return (
    <div className='mx-auto flex justify-center items-center  py-6'>
        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-sm p-2.5' type="text" placeholder='Star Wars, The GodFather, The Matrix...'
        value={value} onChange={onChange} onKeyDown={onKeyDown} />
    </div>
  )
}

export default InputSearchMovie