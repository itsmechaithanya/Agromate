import React from 'react'

function ContactUs() {

  return (
    <div className='pt-[11vh] '>
      <div className=' h-[60vh] flex items-center pl-[5vw]'>
        <h1 className='text-[#2F2F69] capitalize text-[4.5vw] font-bold '>Get In Touch with <br />the Best  <i class="ri-arrow-right-down-line"></i></h1>
      </div>
      <div>
        <div className='bg-zinc-100 px-[5vw] lg:px-[5vw]  min-h-[65vh] rounded-xl lg:flex lg:flex-col lg:justify-center'>
        <h1 className='pl-[1vw] lg:pl-[0vw] font-medium'>NGE Agromate Private Limited</h1>
        <h1 className='mt-[5vh] lg:mt-[0vh] mb-[.5vh] font-bold text-lg lg:text-2xl'>Address</h1>
        <h1 className='lg:text-lg lg:w-1/2'>Metro Pillar Number KHANP7, Kochar Apartments, G6, C1363, Begumpet
            Hyderabad, Telangana 500016
            India
        </h1>
        <h1 className='mt-[5vh] mb-[.5vh] font-bold text-lg lg:text-2xl'>Phone:</h1>
        <h1>+91 93473 46290</h1>
        <h1 className='mt-[5vh] mb-[.5vh] font-bold text-lg lg:text-2xl'>Email:</h1>
        <h1>sales@agromate.in <br/>support@agromate.in</h1>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
