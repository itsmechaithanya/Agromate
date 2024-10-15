import React from 'react'

function ContactUs() {
  return (
    <div className='pt-[10vh] flex flex-col px-[5vw] py-[5vh] w-screen h-screen justify-between '>
      <div>
      <h1 className='text-[4.3vh] text-[#2F2F69] font-medium'>Get In Touch</h1>
      <h1 className='pl-[1vw] font-medium'>NGE Agromate Private Limited</h1>
      </div>
      <div className='bg-zinc-200 px-[5vw] pb-[25vh] rounded-xl'>
      <h1 className='mt-[5vh] mb-[.5vh] font-bold text-lg'>Address</h1>
      <h1 className=''>Metro Pillar Number KHANP7, Kochar Apartments, G6, C1363, Begumpet
          Hyderabad, Telangana 500016
          India
      </h1>
      <h1 className='mt-[5vh] mb-[.5vh] font-bold text-lg'>Phone:</h1>
      <h1>+91 93473 46290</h1>
      <h1 className='mt-[5vh] mb-[.5vh] font-bold text-lg'>Email:</h1>
      <h1>sales@agromate.in <br/>support@agromate.in</h1>
      </div>
    </div>
  )
}

export default ContactUs
