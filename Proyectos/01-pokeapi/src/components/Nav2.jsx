import React from 'react'
import { useState } from 'react'

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  }
]
function Nav2() {
  const [isOpen, setIsOpen] = useState(false)	
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
          <img src="/pokemon.svg" className="h-8" alt="Pokemon title Image" />
            <a href="/" className='text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr from-red-400 via-yellow-400 to-pink-600 font-bold text-2xl'>
              PokeApi
            </a>
          </div>
          {/* links */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navLinks.map((link, index) => (
                <a key={index} className='text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr from-red-400 via-yellow-400 to-pink-600 px-3 py-2 rounded-md text-md font-medium cursor-pointer ' href={link.path}>
                  {link.title}
                </a>
              ))}
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
  )
}

export default Nav2