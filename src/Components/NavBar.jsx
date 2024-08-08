import React from 'react'
import image from '../assets/cropped-Agromate-R-Logo-1.png'
function NavBar() {
  return (
    <div className='h-[9vh] w-screen-3 m-3 rounded-full bg-[#d2edfdca] backdrop-blur-md flex items-center justify-between overflow-hidden'>
        <div className='h-full w-1/3 '>
          <img className=' p-6 w-[15vw]' src={image} alt="" />
        </div>
        <div className='h-full w-2/3 flex items-center bg-slate-300'>
          <h4>hello</h4>
          </div>
    </div>
  )
}

export default NavBar