import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../components/useContext/ThemeContext'

const Home = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={` ${theme}`	}>
       <h2>ESTO ES HOME</h2>
    </div>
  )
}

export default Home