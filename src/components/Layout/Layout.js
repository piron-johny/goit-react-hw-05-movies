import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../AppBar/AppBar'

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Liading...</div>}>
        <div style={{ padding: "0 20px" }}>
          <Outlet />
        </div>
      </Suspense>
    </>
  )
}

export default Layout