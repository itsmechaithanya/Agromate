import React from 'react'

function ContactUs() {

  return (
    <div className='pt-[11vh] '>
      <div className=' h-[50vh] flex items-center pl-[5vw]'>
        <h1 className='text-[#2F2F69] capitalize text-[4.5vw] font-bold '>Get In Touch with <br />the Best  <i class="ri-arrow-right-down-line"></i></h1>
      </div>
      <div>
        <div className='bg-slate-100 px-[5vw] lg:pt-[7vw]  h-[100vh] w-screen rounded-t-[5vw]'>
        <h1 className='pl-[1vw] lg:pl-[0vw] font-medium text-[1.5vw]'>NGE Agromate Private Limited</h1>
        <h1 className='mt-[5vh] lg:mt-[8vh] mb-[.5vh] font-bold text-lg lg:text-2xl'>Address</h1>
        <h1 className='lg:text-lg lg:w-1/2'>Metro Pillar Number KHANP7, Kochar Apartments, G6, C1363, Begumpet
            Hyderabad, Telangana 500016
            India
        </h1>
        <h1 className='mt-[5vh] mb-[.5vh] font-bold text-lg lg:text-2xl'>Phone:</h1>
        <h1>+91 93473 46290</h1>
        <h1 className='mt-[5vh] mb-[.5vh] font-bold text-lg lg:text-2xl'>Email:</h1>
        <h1>sales@agromate.in <br/>support@agromate.in</h1>
        <div className='flex justify-center mt-[30vh]'>
        <div className='w-[90vw] border-[.5px] border-[#0000008b]'></div>
      </div>
        <div className='py-[3vh] text-center'>
        <p className='font-light text-xs'>Copyright © 2024 Agromate All Right Reserved.</p>
      </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
