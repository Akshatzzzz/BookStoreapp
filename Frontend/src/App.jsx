import React from 'react'
import Front from './Front/Front'
import { Route, Routes } from "react-router-dom";
import Courses from './Coueses/Courses';
import SignUp from './components/SignUp';
import ContactUs from './Contact/ContactUs';



function App() {
  return (
    <div className='dark:bg-gray-800 dark:text-gray-300'>
     <Routes>
      <Route path='/' element={<Front />}/>
      <Route path='/course' element={<Courses />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/contact' element={<ContactUs />}/>
     </Routes>
    </div>
  )
}

export default App
