import React from 'react'
import logo from '../assets/image 1.png'

function NavBar() {
  return (
    <div className='w-[98vw] h-[4.5vw] bg-[#ffffff88] backdrop-blur  ml-[1vw] mt-[1vw] rounded-full flex justify-between fixed'>
      <div className='h-full w-fit flex items-center ml-[2vw] mt-.5'>
        <img src={logo} alt="" />
      </div>
      <div className='flex items-center mr-[1.3vw]'>
        <a className='ml-[2vw]' href="">How it works ?</a>
        <a className='ml-[2vw]' href="">Shop</a>
        <a className='ml-[2vw]' href="">Media</a>
        <a className='ml-[2vw]' href="">About Us</a>
        <a className='ml-[2vw] bg-[#E8E8E8] px-3 py-1.5 rounded-full' href="">Contact Us</a>
      </div>
    </div>
  )
}

export default NavBar