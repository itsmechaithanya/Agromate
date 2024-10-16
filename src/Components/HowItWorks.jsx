import React from 'react'
import step1 from '../assets/step1.jpg'
import step2 from '../assets/step2.jpg'
import step3 from '../assets/step3.jpg'
import DOL from '../assets/DOL.jpg'

function HowItWorks() {
  return (
    <div className='pt-[11vh]'>
            <div className=' h-[50vh] flex items-center pl-[5vw]'>
        <h1 className='text-[#2F2F69] capitalize text-[4.5vw] font-bold '>How it works ?<br />Guide<i class="ri-arrow-right-down-line"></i></h1>
      </div>
      <div className='px-[5vw] bg-slate-100 pt-[5vw]  rounded-t-[5vw]'>
        <div><h1 className='text-xl'>Follow the steps below <i class="ri-arrow-down-s-line"></i></h1></div>
        <div className='flex flex-col justify-center items-center gap-[2vw] pt-[3vw]'>
          <img className='h-[90vh] w-[80vw]' src={step1} alt="" />
          <img className='h-[90vh] w-[80vw]' src={step2} alt="" />
          <img className='h-[90vh] w-[80vw]' src={step3} alt="" />
      </div>
      <div className='pt-[5vw]'>
        <h1 className='text-xl pb-[3vw]'>Follow the below diagrams for connecting with DOL starter <i class="ri-arrow-down-s-line"></i></h1>
        </div>
      <img src={DOL} alt="" />
      </div>
    </div>
  )
}

export default HowItWorks