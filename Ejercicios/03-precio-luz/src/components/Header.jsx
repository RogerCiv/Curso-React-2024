import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  {
    path: '/precioluz',
    name: 'PrecioLuz'
  },
  {
    path: '/login',
    name: 'Login'
  }
]


const Header = () => {

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">

          <img src="https://media.istockphoto.com/id/1159741374/es/vector/icono-creativo-de-media-bombilla-de-medio-cerebro-que-representa-las-ideas-la-creatividad-el.jpg?s=2048x2048&w=is&k=20&c=DW53-4_YKCgs0FrMbzXxuw9-mI0_XnnfwvnmR8kwOMg=" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DWEC PrecioLuz</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {
          navLinks.map(link => (
            <li key={link.name}>
              <Link to={link.path} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{link.name}</Link>
            </li>
          ))
        }
        <li>
          <Link to="/login" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page"
         >Logout</Link>
        </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header