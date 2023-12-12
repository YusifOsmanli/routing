import React from 'react'
import Header from '../../layout/Main/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/Main/Footer/Footer'

const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
      )
}


export default MainRoot