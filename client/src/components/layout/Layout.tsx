import React from 'react'
import NavbarBmes from '../navbar/NavbarBmes'
import { Outlet } from 'react-router-dom'
import "../../_dist/App.css"

type Props = {}

const Layout = (props: Props) => {
  return (
    <section id='bmes__main'>
      <NavbarBmes/>
      <div className='bmes__outlet'>
        <Outlet/>
      </div>
    </section>
  )
}

export default Layout