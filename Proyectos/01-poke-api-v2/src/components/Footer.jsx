import React from 'react'
import { NAV_LINKS } from '../utils/navLinks'
import { Link } from 'react-router-dom'
import GoogleIcon from '../icons/GoogleIcon'
import TwitterIcon from '../icons/TwitterIcon'
import GithubIcon from '../icons/GithubIcon'

const Footer = () => {
  return (
    
    <footer className="w-full fixed bottom-0 py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gray-800">
 <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
      <div className='md:text-start'>
        <a className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">RogerCiv</a>
      </div>


      <ul className="text-center">
        {
          NAV_LINKS.map(({ name, path }) => (
            <li  key={name} className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
            <Link to={path} className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              {name}
            </Link>
          </li>
          ))
        }
      </ul>

      <div className="md:text-end space-x-2">
        <a href="https://www.google.com" className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" target='_blank' rel='noreferrer'>
          <GoogleIcon/>
        </a>
        <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://twitter.com" target='_blank' rel="noreferrer">
          <TwitterIcon/>
        </a>
        <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://github.com/RogerCiv" target='_blank' rel="noreferrer">
        <GithubIcon/>
        </a>
 
      </div>
      </div>
    </div>
    
  </footer>
  )
}

export default Footer