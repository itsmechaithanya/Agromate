import React from 'react'

function ContactUs() {
  return (
    <div className='pt-[10vh] flex flex-col px-[5vw] py-[5vh] w-screen h-screen justify-between '>
      <div className=' h-[40vh] flex flex-col justify-center items-center pb-[11vh]'>
        <h1 className='text-[#2F2F69] lg:mt-[6vh]  capitalize text-[3vw] font-bold '>Get In Touch</h1>
        <h1 className='pl-[1vw] lg:pl-[0vw] font-medium'>NGE Agromate Private Limited</h1>
      </div>
      <div className='bg-zinc-200 px-[5vw] lg:px-[5vw] lg:h-[65vh] rounded-xl lg:flex lg:flex-col lg:justify-center'>
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
  )
}

export default ContactUs
