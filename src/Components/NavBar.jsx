import React, { useState, useRef, useEffect } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function NavBar() {
  const [showLinks, setShowLinks] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setShowLinks(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const handleLinkClick = () => {
    setShowLinks(false)
    window.scrollTo(0, 0) // This line ensures the page scrolls to the top when a link is clicked
  }

  return (
    <div ref={navRef} className={`lg:w-[97vw] w-[100vw] ${showLinks ? 'h-[50vh] pb-[7vh] lg:pb-[0vh]' : 'h-[8vh]'} backdrop-blur-lg flex flex-col lg:flex-row justify-between items-center px-5 lg:p-[4.5vh] lg:mt-[1.5vh] lg:mx-[1.5vw] lg:rounded-full lg:overflow-hidden fixed z-10 bg-[#ffffff3f] top-0`}>
      <div className='flex items-center justify-between lg:w-[35vw] w-[100vw]  h-[8vh] lg:px-[0vw] px-[5vw]'>
      <div>
        <Link to="/">
          <img className='w-[35vw] lg:w-[11vw]' src={logo} alt="" />
        </Link>
      </div>
      <div className='lg:hidden mr-1 mt-1'>
        <i className="ri-xl font-bold ri-menu-line" onClick={() => setShowLinks(!showLinks)}></i>
      </div>
      </div>
      <div className={`lg:flex ${showLinks ? 'flex flex-col font-semibold' : 'hidden'} gap-8 items-center`}>
        <Link to="/HowItWorks" onClick={handleLinkClick}>How it works ?</Link>
        <Link to="/Media" onClick={handleLinkClick}>Media</Link>
        <Link to="/AboutUs" onClick={handleLinkClick}>About</Link>
        <Link to="/ContactUs" onClick={handleLinkClick}>Contact Us</Link>
        <Link className={`lg:bg-slate-200 bg-slate-500 lg:text-black text-white   font-medium py-[1vh] lg:px-[2vw] px-[7vw] rounded-full`} to="https://shop.agromate.in/shop/" onClick={handleLinkClick}>Shop <i className="ri-shopping-cart-line font-medium"></i></Link>
      </div>
    </div>
  )
}

export default NavBar