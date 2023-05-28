import React from 'react'
import NavbarBmes from '../navbar/NavbarBmes'
import { Outlet } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  return (
    <>
      <NavbarBmes/>
      <div className='bmes__outlet'>
        <Outlet/>
      </div>
    </>
  )
}

export default Layout