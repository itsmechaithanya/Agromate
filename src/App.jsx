import React from 'react'
import NavBar from './Components/NavBar'
import Homee from './Components/Homee.jsx'
import HowItWorks from './Components/HowItWorks'
import { Route, Routes } from 'react-router-dom'
import Shop from './Components/Shop'
import Media from './Components/Media'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homee/>}/>
        <Route path='/HowItWorks' element={<HowItWorks/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Media' element={<Media/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes> 
    </>
  )
}

export default App