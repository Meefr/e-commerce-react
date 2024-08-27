import React, { useContext } from 'react'
import { AppContext } from '../Providers/AppProvider'
import { Navigate } from 'react-router-dom'

function AuthRoute({children}) {
  const  {user} = useContext(AppContext)
    return (
        user ? children : <Navigate to="/auth"/>
  )
}

export default AuthRoute