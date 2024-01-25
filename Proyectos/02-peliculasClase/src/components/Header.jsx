import React from 'react'
import { Link } from 'react-router-dom'

const links = [
    {
        name: 'Home',
        to: '/'
    },
    {
        name: 'Acerca de',
        to: '/acerca_de'
    },

]

const Header = () => {
  return (
    <header className='bg-gray-800 text-white p-5flex justify-between items-center font-bold font-sans '>
        <div className='flex items-center '>
    <Link to='/'>
        <img  className="size-16 mx-5" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
    </Link>
    <h2 className='text-xl'>Api Películas Usando React Router DOM</h2>
        </div>
        <nav className=''>
            <ul className='flex space-x-12'>
                {links.map(link => (
                    <li key={link.to}>
                        <Link to={link.to}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header