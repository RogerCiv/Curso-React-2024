import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({isActive,redirectPath}) => {
    if(!isActive){
        return <Navigate to={redirectPath} replace />
    }
  return <Outlet/>
}

export default ProtectedRoute