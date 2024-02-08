import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { createContext } from 'react';


const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
    const [ userFirebase, setUserFirebase ] = useState(null)

    const signInFirebase = (userData) => {
        setUserFirebase(userData)
    }
    const signOutFirebase = () => {
        setUserFirebase(null)
    }
 

    
const value = {
    userFirebase,
    setUserFirebase,
    signInFirebase,
    signOutFirebase
}

  return (
   <AuthContext.Provider value={value}>
       {children}
   </AuthContext.Provider>
  )
}

export const AuthContextProductFunction = () => {
    return useContext(AuthContext)
}
