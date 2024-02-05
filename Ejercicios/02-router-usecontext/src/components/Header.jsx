import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './useContext/ThemeContext'

const navLinks = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/about",
        name: "About"
    },
    {
        path: "/contact",
        name: "Contact"
    }
]

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const handleThemeChange = () => {
        setTheme(prevTheme => prevTheme === 'bg-slate-300 text-black' ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black')
    }
  return (
    <header className={`bg-slate-800 text-white p-2 text-xl mx-auto w-full ${theme}`}>
        <nav>
            <ul className='flex justify-evenly items-center '>
           {
            navLinks.map(link => {
                return <li key={link.path} className='p-4  hover:text-sky-200'><Link to={link.path}>{link.name}</Link></li>
            })
           } 
           <button onClick={handleThemeChange} className='bg-sky-500 h-full p-2  rounded-md hover:bg-sky-700'>Change Theme</button>
            </ul>
        </nav>
    </header>
  )
}

export default Header