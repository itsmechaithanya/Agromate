import React from 'react'
import img from '../assets/image 17.png'
import img2 from '../assets/image 3.png'
import img3 from '../assets/image 10.png'

function Home() {
  return (
   <div> 
     <div className='h-fit w-screen pt-[6vw] flex justify-between'>
        <div className='w-[50%] ml-[5vw] mt-[7vw]'>
          <h1 className='text-[4.5vw] font-FuturaBold uppercase font-semibold '>Mobile-Operated Agricultural Motor System</h1>
          <h2 className=' w-[80%] text-xl font-light '>Control Your Motor Pump with a Simple Missed Call, Anytime, Anywhere!</h2>
        </div>
        <div className='mr-[5vw] mt-[1vw]'>
          <img className='w-[40vw]' src={img} alt="" />
        </div>
    </div>
      <div className='h-fit w-screen flex items-center justify-center mt-[5vw]'>
          <img className='w-[90vw] object-cover'  src={img2} alt="" /> 
      </div>
      <div className='h-fit w-screen flex justify-between'>
        <div className='w-[69%] pl-[4.5vw] mt-[4vw]'>
          <h1 className='pr-[20vw] text-4xl leading-[7vh] font-extrabold uppercase'>Effortlessly manage your motor pump, saving time, energy, and resources.</h1>
        </div>
        <div className='w-[31%] font-light text-lg mr-[7vw] mt-[4vw]'>
          <h1 className=' capitalize text-[#323232]'>At Agromate, everything we do is designed to empower farmers with ease and efficiency. Our Telemetric Electronic Device enables effortless management of motor pumps, saving time, energy, and resources.</h1>
          <h1 className=' capitalize text-[#323232] mt-[4vh]'>With every purchase, you support farmers in regaining control and confidence in their agricultural endeavors. Your investment helps them achieve greater independence and sustainability in their work.</h1>
          <a href=""><h1 className=' uppercase mt-[3vh] border-b-2 pb-1 font-medium border-black w-fit'>Shop to support</h1></a>
        </div>
      </div> 
      <div className='h-fit w-screen pt-[5vw] px-[5vw]'>
        <h1 className='font-semibold leading-[7vh] text-[2.8vw] capitalize'>Agromate lets you control your water motor pump directly from your mobile phone, no matter where you are. With just a missed call from your smartphone, you can start or stop the pump effortlessly.</h1>
        <h1 className=' w-[70%] mt-[3vh] text-[#323232] text-xl capitalize'>This groundbreaking technology offers more than just convenience. By using Agromate, you cut down on physical visits to your motor pump, leading to significant savings in electricity, time, and water resources.</h1>
        <a href=""><h1 className=' uppercase mt-[3vh] border-b-2 pb-1 font-medium border-black w-fit'>installation guide</h1></a>
      </div>
      <img src={img3} alt="" />
   </div>
  )
}

export default Home