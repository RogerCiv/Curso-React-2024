import React from 'react'
import { ComponentContext } from './ComponentContext'
import { useState } from 'react'
import { useEffect } from 'react'
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
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
  const [users, setUsers] = useState(initialState)
  const [isActive, setIsActive ] = useState(false)
  //console.log(cart);



  useEffect(() => {
    const saveLocalStorage = () => {
      localStorage.setItem('cart', JSON.stringify(cart));
    };

    saveLocalStorage();
  }, [cart]); 


  
  return (
    <ComponentContext.Provider value={{ state, setState, cart, setCart, users, setUsers, isActive, setIsActive }}>
      {children}
    </ComponentContext.Provider>
  )
}

export default ComponentProvider