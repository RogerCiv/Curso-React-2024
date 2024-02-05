import React from 'react'
import { ThemeContext } from './ThemeContext'
import { useState } from 'react'

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const value = {
        theme,
        setTheme,
    }
  return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider