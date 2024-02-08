import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
   
    <nav className='bg-slate-800 p-2 text-white'>
      <ul className='flex justify-evenly gap-2'>
        <Link to="/"><li className='hover:text-slate-400'>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>
    </nav>
    </>
  )
}

export default Header