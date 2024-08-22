import React from 'react'
import img from '../assets/image 17.png'
import img2 from '../assets/image 3.png'

function Home() {
  return (
   <div>
     <div className='h-fit w-screen pt-[6vw] flex justify-between'>
        <div className='w-[50%] ml-[5vw] mt-[7vw]'>
          <h1 className='text-[4.5vw] font-FuturaBold uppercase font-semibold '>Mobile-Operated Agricultural Motor System</h1>
          <h2 className=' w-[80%] text-xl font-light '>Control Your Motor Pump with a Simple Missed Call, Anytime, Anywhere!</h2>
        </div>
        <div className='mr-[5vw] mt-[1vw]'>
          <img class='w-[40vw]' src={img} alt="" />
        </div>
    </div>
      <div className='h-fit w-screen flex items-center justify-center mt-[5vw]'>
          <img class='w-[90vw] object-cover'  src={img2} alt="" />
      </div>
      <div className='h-screen w-screen flex '>
        <div className='w-[40%] pl-[4.5vw] mt-[2vw]'>
          <h1 className=' text-4xl font-extrabold'>Effortlessly manage your motor pump, saving time, energy, and resources.</h1>
        </div>
        <div className='w-[60%]'>
        <h1>At Agromate, everything we do is designed to empower farmers with ease and efficiency. Our Telemetric Electronic Device enables effortless management of motor pumps, saving time, energy, and resources.</h1>
        </div>
      </div>
   </div>
  )
}

export default Home