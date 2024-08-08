import React from 'react'
import Navabar from '../Componets/Navabar'
import Footer from '../Componets/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
    <Navabar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout