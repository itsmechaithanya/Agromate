import React from 'react'
import hero from '../assets/hero.png'
import buff from '../assets/buff.png'


function Homee() {
  return (
    <div className='mt-[10vh]'>
      <div className='lg:flex'>
        <div className='lg:w-[60vw]'>
          <div className='text-center mt-[5vh] lg:text-start lg:pl-5 '>
            <h1 className='font-[Futura-Bold] text-[9vw] lg:text-[4vw] uppercase'>Mobile-Operated Agricultural Motor System</h1>
          </div>
          <div className='text-center px-5 mt-[2vh] '>
            <p>Control Your Motor Pump with a Simple Missed Call, Anytime, Anywhere!</p>
          </div>
        </div>
        <div className='lg:w[40vw]'>
          <div className='flex justify-center'>
            <img className='w-[90vw] mt-[2vh] lg:w-[40vw]' src={hero} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className='font-[Futura-Bold] mt-[5vh] px-5 text-[1.9vh] uppercase'>Effortlessly manage your motor pump, saving time, energy, and resources.</h1>
      </div>
      <div className='flex justify-center mt-[5vh]'>
        <img className='w-[90vw]' src={buff} alt="" />
      </div>
      <div className='px-5 mt-[5vh]'>
        <p className='font-light text-[#323232]'>At Agromate, everything we do is designed to empower farmers with ease and efficiency. Our Telemetric Electronic Device enables effortless management of motor pumps, saving time, energy, and resources.</p>
      </div>
      <div className='px-5 mt-[3vh]'>
        <p className='font-light text-[#323232]'>With every purchase, you support farmers in regaining control and confidence in their agricultural endeavors. Your investment helps them achieve greater independence and sustainability in their work.</p>
      </div>
      <div className='pl-5 mt-[3vh]'>
        <p className=' uppercase border-b-[1px] w-fit border-zinc-500 pb-1'>Shop to support</p>
      </div>
      <div className='px-5 mt-[8vh]'>
        <h1 className='font-semibold'>Agromate lets you control your water motor pump directly from your mobile phone, no matter where you are. With just a missed call from your smartphone, you can start or stop the pump effortlessly.</h1>
      </div>
    </div>
  )
}

export default Homee