import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function ContactUs() {
  return (
<>
<div className=' dark:bg-gray-800 dark:text-gray-300'>
    <Navbar />
    <div className='min-h-screen'>
    <Contact />
    </div>
    <Footer />
    </div>
</>
  )
}

export default ContactUs
