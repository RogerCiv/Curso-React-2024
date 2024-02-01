import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
    <header className='bg-slate-800 text-white p-4 text-xl mx-auto w-full'>
        <nav>
            <ul className='flex justify-evenly hover:text-sky-200 '>
                <Link to="" > <li>Home</li></Link>
                <Link to="about" > <li>About</li></Link>
             
            </ul>
        </nav>
    </header>
   </>
  )
}

export default Header