import React from 'react'
import hero from '../assets/hero.png'
import buff from '../assets/buff.png'


function Homee() {
  return (
    <div>
      <div className='lg:flex'>
        <div>
          <div className='text-center mt-[5vh]'>
            <h1 className='font-[Futura-Bold] text-[4.5vh] uppercase'>Mobile-Operated Agricultural Motor System</h1>
          </div>
          <div className='text-center px-5 mt-[2vh]'>
            <p>Control Your Motor Pump with a Simple Missed Call, Anytime, Anywhere!</p>
          </div>
        </div>
        <div>
          <div className='flex justify-center'>
            <img className='w-[90vw]' src={hero} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className='font-[Futura-Bold] mt-[2vh] px-5 text-lg font-bold'>Effortlessly manage your motor pump, saving time, energy, and resources.</h1>
      </div>
      <div className='flex justify-center mt-[3vh]'>
        <img className='w-[90vw]' src={buff} alt="" />
      </div>
    </div>
  )
}

export default Homee