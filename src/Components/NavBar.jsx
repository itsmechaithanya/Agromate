import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-screen h-[7vh] flex justify-between items-center p-5 lg:p-10'>
      <div>
        <Link to="/">
          <img className='w-[30vw] lg:w-[13vw]' src={logo} alt="" />
        </Link>
      
      </div>
      <div className='lg:hidden'>
        <i class="ri-lg ri-menu-line"></i>
      </div>
      <div className='lg:flex hidden gap-8 items-center'>
        <Link to="/HowItWorks">How it works ?</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Media">Media</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link className='bg-[#E8E8E8] py-1 px-3 rounded-full' to="/ContactUs">Contact Us</Link>
      </div>
    </div>
  )
}

export default NavBar