import React from 'react'
import { useState } from 'react'
import { NAV_LINKS } from '../utils/navLinks'
import { Link } from 'react-router-dom'




const Navbar = () => {

  const [ isOpen , setIsOpen ] = useState(false)
  return (
<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
  <nav className="max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <div className="flex items-center justify-between">
      <a className="flex-none" href="#">
      <img className='w-20 h-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="logo" />
      </a>
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-image-2" aria-controls="navbar-image-2" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="navbar-image-2" className={`hs-collapse ${isOpen ? 'hs-collapse-open block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
        {
          NAV_LINKS.map(({ name, path }) => (
            <Link to={path} key={name} className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">{name}</Link>
          ))
        }
      </div>
    </div>
  </nav>
</header>
  )
}

export default Navbar