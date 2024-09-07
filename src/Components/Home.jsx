import React from 'react'
import img from '../assets/image 17.png'
import img2 from '../assets/image 3.png'
import img3 from '../assets/image 10.png'
import img4 from '../assets/image 6.png'
import img5 from '../assets/image 11.png'
import img6 from '../assets/image 12.png'


function Home() {
  return (
   <div> 
     <div className='h-fit w-screen pt-[6vw] flex justify-between'>
        <div className='w-[50%] ml-[5vw] mt-[7vw]'>
          <h1 className='text-[4.5vw] font-FuturaBold uppercase font-semibold bg-slate-900 sm:bg-white '>Mobile-Operated Agricultural Motor System</h1>
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
        <h1 className='font-semibold text-[2.8vw] capitalize mt-[5vh]'>Agromate lets you control your water motor pump directly from your mobile phone, no matter where you are. With just a missed call from your smartphone, you can start or stop the pump effortlessly.</h1>
        <h1 className=' w-[70%] mt-[3vh] text-[#323232] text-xl capitalize'>This groundbreaking technology offers more than just convenience. By using Agromate, you cut down on physical visits to your motor pump, leading to significant savings in electricity, time, and water resources.</h1>
        <a href=""><h1 className=' uppercase mt-[3vh] border-b-2 pb-1 font-medium border-black w-fit'>installation guide</h1></a>
      </div>
      <div className='w-screen py-[6vh] px-[5vw] flex flex-col lg:flex-row bg-slate-700 lg:bg-white  justify-center mt-[5vh]'>
        <div className='w-[40%] flex items-center justify-center'><img src={img3} alt="" /></div>
        <div className='w-[60%] p-5 flex flex-col justify-center'>
          <h1 className=' text-4xl font-semibold'>Agromate Kisan</h1>
          <h1 className=' mt-[3vh] text-[#323232] text-xl capitalize w-[90%]'>Agromate Kisan, a farmer-friendly device with remote motor control. It simplifies motor management, allowing ON/OFF with a missed call, using LED indicators instead of an LCD screen. It also offers manual ON/OFF for flexibility.</h1>
          <a href=""><h1 className='uppercase mt-[3vh] border-b-2 pb-1 font-medium border-black w-fit'>Know more</h1></a>
        </div>
      </div>
      <div className='w-screen py-[6vh] px-[5vw] flex justify-center'>
        <div className='w-[60%] p-5 flex flex-col justify-center pl-[7vw]'>
        <h1 className=' text-4xl font-semibold w-[90%]'>Agromate Plus</h1>
          <h1 className=' mt-[3vh] text-[#323232] text-xl capitalize w-[90%]'>Agromate Plus is a telemetric device for remote motor control. Designed for farmers, it offers remote motor management through a simple missed call, with an LCD screen for status display, and a manual ON/OFF option.</h1>
          <div className='w-[90%] '>
            <a href=""><h1 className='  uppercase mt-[3vh] border-b-2 pb-1 font-medium border-black w-fit'>Know more</h1></a>
          </div>
        </div>
        <div className='w-[40%] flex items-center justify-center'>
        <img src={img4} alt="" />
        </div> 
      </div>
      <div className='w-screen py-[6vh] px-[5vw] flex justify-center'>
        <div className='w-[40%] flex items-center justify-center'><img src={img5} alt="" /></div>
        <div className='w-[60%] p-5 flex flex-col justify-center'>
          <h1 className=' text-4xl font-semibold'>Agromate E-Plus</h1>
          <h1 className=' mt-[3vh] text-[#323232] text-xl capitalize w-[90%]'>Agromate E-Plus is an advanced telemetric device for remote motor control. Supports 4G SIM cards from all operators with 2G/3G compatibility. Features an IVRS for phone call-based operations and timer-based functions.</h1>
          <a href=""><h1 className='uppercase mt-[3vh] border-b-2 pb-1 font-medium border-black w-fit'>Know more</h1></a>
        </div>
      </div>
      <div className='w-screen py-[6vh] px-[5vw] flex justify-center'>
        <div className='w-[60%] p-5 flex flex-col justify-center pl-[7vw]'>
        <h1 className=' text-4xl font-semibold w-[90%]'>Agromate IVRS</h1>
          <h1 className=' mt-[3vh] text-[#323232] text-xl capitalize w-[90%]'>Agromate IVRS is an upgraded version of Agromate Plus, offering voice-out functionality for audible motor status. Designed for farmers, it enables remote motor control via phone calls, with activation and deactivation support. Includes an LCD screen for status display and manual ON/OFF option.</h1>
          <div className='w-[90%] '>
            <a href=""><h1 className='  uppercase mt-[3vh] border-b-2 pb-1 font-medium border-black w-fit'>Know more</h1></a>
          </div>
        </div>
        <div className='w-[40%] flex items-center justify-center'>
        <img src={img6} alt="" />
        </div>
      </div>
      <div>
        <h1>The product has been honored with the IESA Technovation Award, recognizing its exceptional innovation and excellence in the electronics and semiconductor industry.</h1>
      </div>
   </div>
  )
}

export default Home