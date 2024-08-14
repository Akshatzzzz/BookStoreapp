import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

function Front() {
  return (

    <div className='bg-white  dark:bg-gray-800 dark:text-gray-300'>
      <Navbar />
      <Home />
      <Freebook />
      <Footer />
    </div>
  )
}

export default Front

