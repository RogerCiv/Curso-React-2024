import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isActive, redirectPath}) => {
  console.log(isActive);
    if(isActive){
      return <Navigate to={redirectPath} replace/>
    }
  return <Outlet/>
}

export default ProtectedRoute