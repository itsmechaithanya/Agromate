import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-[97vw] h-[7vh] backdrop-blur-md flex justify-between items-center px-5 lg:p-[4.5vh] lg:mt-[1.5vh] lg:mx-[1.5vw] lg:rounded-full lg:overflow-hidden fixed z-10 bg-[#ffffff3f] top-0'>
      <div>
        <Link to="/">
          <img className='w-[35vw] lg:w-[11vw] pt-3' src={logo} alt="" />
        </Link>
      </div>
      <div className='lg:hidden mr-1 mt-1'>
        <i className="ri-xl font-bold ri-menu-line"></i>
      </div>
      <div className='lg:flex hidden gap-8 items-center'>
        <Link to="/HowItWorks">How it works ?</Link>
        <Link to="/Media">Media</Link>
        <Link to="/AboutUs">About</Link>
        <Link to="/ContactUs">Contact Us</Link>
        <Link className='bg-slate-200 font-medium py-[1vh] px-[2vw] rounded-full' to="/Shop">Shop <i className="ri-shopping-cart-line font-medium"></i></Link>
      </div>
    </div>
  )
}

export default NavBar