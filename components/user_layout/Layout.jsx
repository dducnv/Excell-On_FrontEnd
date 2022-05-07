import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import toast, { Toaster } from 'react-hot-toast';

const Layout = (props) => {

  return (
    <>

      <Navbar />
      {props.children}
      <Footer />

    </>
  )
}

export default Layout
