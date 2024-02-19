import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const ProtectedRoute = ({ redirectPath}) => {
  const { user } = useAuthContext()
  const isActive = !!user
 
    if(!isActive){
      return <Navigate to={redirectPath}/>
    }else{
      return <Outlet/>
    }

}

export default ProtectedRoute