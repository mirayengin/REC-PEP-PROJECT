import React from 'react'
import { Outlet } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

const PrivateRouter = () => {
  const loginStatus = true
  return (
    // loginStatus && <Navigate to="/home"/>
    loginStatus && <Outlet/>
  )
}

export default PrivateRouter