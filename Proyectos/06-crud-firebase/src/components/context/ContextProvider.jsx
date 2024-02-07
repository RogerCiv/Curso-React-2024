import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import context from './Context';




const ContextProvider = ({ children }) => {
    const [ users, setUsers ] = useState([])



    useEffect(() => {
        const fechData = async () => {
            try{
                const data = await fetch('https://jsonplaceholder.org/users')
                const users = await data.json()
                setUsers(users)
            }catch(err){
                console.log(err)
            }
        }
        fechData()
    },[])
//    console.log(users);
  return (
   <context.Provider>
       {children}
   </context.Provider>
  )
}

export default ContextProvider