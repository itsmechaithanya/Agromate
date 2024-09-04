import React from 'react'
import logo from '../assets/image 1.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-[98vw] h-[4.5vw] bg-[#ffffff88] backdrop-blur  ml-[1vw] mt-[1vw] rounded-full flex justify-between fixed'>
      <Link className='h-full w-fit flex items-center ml-[2vw] mt-.5' to="/">
        <img src={logo} alt="" />
      </Link>
      <div className='flex items-center mr-[1.3vw]'>
        <Link className='ml-[2vw]' to="/HowItWorks">How it works ?</Link>
        <Link className='ml-[2vw]' to="/Shop">Shop</Link>
        <Link className='ml-[2vw]' to="/Media">Media</Link>
        <Link className='ml-[2vw]' to="/AboutUs">About Us</Link>
        <Link className='ml-[2vw] bg-[#E8E8E8] px-3 py-1.5 rounded-full' to="/ContactUs">Contact Us</Link>
      </div>
    </div>
  )
}

export default NavBar