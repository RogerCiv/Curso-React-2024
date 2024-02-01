import React from 'react'
import { ComponentContext } from './ComponentContext'
import { useState } from 'react'
const initialState = [
  {
    id: 1,
    name: "John",
    password: "123",
},
{
    id: 2,
    name: "Jane",
    password: "123",
},
{
    id: 3,
    name: "Jack",
    password: "123",
}
]
const ComponentProvider = ({ children }) => {
  const [state, setState] = useState({})
  const [cart, setCart] = useState([])
  const [users, setUsers] = useState(initialState)
  const [isActive, setIsActive ] = useState(false)
  
  return (
    <ComponentContext.Provider value={{ state, setState, cart, setCart, users, setUsers, isActive, setIsActive }}>
      {children}
    </ComponentContext.Provider>
  )
}

export default ComponentProvider