import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
    
  return (
<>
<div className=' dark:bg-gray-800 dark:text-gray-300'>
    <Navbar />
    <div className='min-h-screen'>
    <Course />
    </div>
    <Footer />
    </div>
</>
  )
}

export default Courses
