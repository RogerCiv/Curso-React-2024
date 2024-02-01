import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
   
    <nav className=''>
      <ul className='flex justify-evenly gap-2'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>
    </nav>
    </>
  )
}

export default Header