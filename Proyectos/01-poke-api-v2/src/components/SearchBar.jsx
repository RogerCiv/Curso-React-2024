import React from 'react'

const SearchBar = ({ value, onChange }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onChange({ target: { value: '' } })
    }
  }
  return (
    <>
      <div className=' flex mx-auto justify-center items-center'>

      <input value={value} onChange={onChange} onKeyDown={handleKeyDown} className='w-full p-2 rounded border border-yellow-500 outline-none focus:animate-pulse bg-gray-100  ' type="text" placeholder='Pikachu, Bulbasaur...' />
      </div>
    </>
  )
}

export default SearchBar