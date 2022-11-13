import React from 'react'
import { Outlet } from 'react-router-dom'


const PrivateRouter = () => {
  const loginStatus = true
  return (

    loginStatus && <Outlet/>
  )
}

export default PrivateRouter