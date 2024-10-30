import React from 'react'
import step1 from '../assets/step1.jpg'
import step2 from '../assets/step2.jpg'
import step3 from '../assets/step3.jpg'
import DOL from '../assets/DOL.jpg'
import Star from '../assets/Star.jpg'

function HowItWorks() {
  return (
    <div className='pt-[11vh]'>
            <div className=' lg:h-[50vh] h-[25vh] flex items-center pl-[5vw]'>
        <h1 className='text-[#2F2F69] capitalize lg:text-[4.5vw] text-[4.5vh] font-bold '>How it works ?<br />Guide<i class="ri-arrow-right-down-line"></i></h1>
      </div>
      <div className='px-[5vw] bg-slate-100 lg:pt-[5vw] pt-[7vh] pb-[1vw] rounded-t-[3vh] lg:rounded-t-[5vw]'>
        <div><h1 className='text-xl'>Follow the steps below <i class="ri-arrow-down-s-line"></i></h1></div>
        <div className='flex flex-col justify-center items-center gap-[2vw] pt-[3vw]'>
          <img className='lg:h-[90vh] h-[25vh] w-[80vw]' src={step1} alt="" />
          <img className='lg:h-[90vh] h-[25vh] w-[80vw]' src={step2} alt="" />
          <img className='lg:h-[90vh] h-[25vh] w-[80vw]' src={step3} alt="" />
      </div>
      <div className='pt-[5vw]'>
        <h1 className='text-xl pb-[3vw]'>Follow the below diagrams for connecting with DOL starter <i class="ri-arrow-down-s-line"></i></h1>
        </div>
      <img src={DOL} alt="" />
      <div className='pt-[5vw]'>
        <h1 className='text-xl pb-[3vw]'>Follow the below diagrams for connecting with Star-Delta starter <i class="ri-arrow-down-s-line"></i></h1>
        </div>
      <img src={Star} alt="" />
      <div className='flex justify-center pt-[3vw]'>
        <div className='w-[90vw] border-[.5px] border-[#0000008b]'></div>
      </div>
      <div className='my-[3vh] text-center'>
        <p className='font-light text-xs'>Copyright © 2024 Agromate All Right Reserved.</p>
      </div>
      </div>
    </div>
  )
}

export default HowItWorks