import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../lib/NavLinks'
import { useAuthMovie } from '../context/authContextMovie'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)	
    const {theme, toggleTheme} = useAuthMovie();
  
  return (
   <>
     <div className={theme === 'light' ? "bg-yellow-300" : "bg-gray-800"}>
    <div className="mx-auto lg:max-w-6xl md:max-w-4xl px-4 sm:px-6 md:px-9 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" className="h-8" alt="" />
          <a href="/" className='text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr from-red-400 via-yellow-400 to-pink-600 font-bold text-2xl'>
            MovieApi
          </a>
        </div>
        {/* links */}
        <div className='hidden md:block'>
          <div className='ml-10 flex items-baseline space-x-4'>
            {navLinks.map((link, index) => (
             <Link key={index} className='text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr from-red-400 via-yellow-400 to-pink-600 px-3 py-2 rounded-md text-md font-medium cursor-pointer ' to={link.path}>
                {link.title}
              </Link>
            ))}
            <button className='bg-cyan-400 rounded-md p-2 text-white' onClick={toggleTheme}>Cambiar tema</button>
          </div>
        </div>
        {/* hamburger button */}
        <div className='-mr-2 flex md:hidden'>
              <button type='button' onClick={() => setIsOpen(!isOpen)} className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                <span className='sr-only'>Open Main Menu</span>
                {isOpen == true ? <span>X</span> : <span>☰</span>}
              </button>
        </div>
        </div>
    </div>
    {/* mobile menu */}
    <div className={isOpen ? 'block' : 'hidden'}>
  
      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
        {navLinks.map((link, index) => (
          <a key={index} className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium' href={link.link}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  </div>
   </>
  )
}

export default Header