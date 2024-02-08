import React from 'react'

import { useState } from 'react'
import { useDataApi } from '../../hooks/useDataApi'
import { useEffect } from 'react'
import ComponentContext from './ComponentContext'

const ContextProvider = ({children}) => {
  const [ users , setUsers ] = useState([])
  const [ isActive, setIsActive ] = useState(false)

  // const value = {
  //   users,
  //   setUsers,
  //   isActive,
  //   setIsActive
  // }
  useEffect(() => {
   
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.org/users');
      const data = await response.json();
      setUsers(data);
    }

  
    fetchData();
  }, []); 
  // console.log(users);
  

  return (
    <ComponentContext.Provider value={ { users , setUsers, isActive, setIsActive } } >{children}</ComponentContext.Provider>
  )
}

export default ContextProvider