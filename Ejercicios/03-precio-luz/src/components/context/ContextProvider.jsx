import React from 'react'
import { ComponentContext } from './ComponentContext'
import { useState } from 'react'

const ContextProvider = ({children}) => {
  const [ users , setUsers ] = useState([])
  const [ isActive, setIsActive ] = useState(false)

  const value = {
    users,
    setUsers,
    isActive,
    setIsActive
  }
  return (
    <ComponentContext.Provider value={value} >{children}</ComponentContext.Provider>
  )
}

export default ContextProvider