import React from 'react'
import Lenis from 'lenis'
import hero from '../assets/hero.png'
import buff from '../assets/buff.png'
import AgromateKisan from '../assets/AgromateKisan.png'
import AgromatePlus from '../assets/AgromatePlus.png'
import AgromateEPlus from '../assets/AgromateEPlus.png'
import AgromateIVRS from '../assets/AgromateIVRS.png'
import IESA from '../assets/IESA.png'
import ICRISAT from '../assets/ICRISAT.png'
import G from '../assets/G.png'
import GG from '../assets/GG.png'
import Last from '../assets/Last.png'

function Homee() {
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  return (

    <div className='mt-[10vh]'>
      <div className='lg:flex lg:px-[3vw] lg:h-[73vh] lg:justify-center lg:items-center'>
        <div className='lg:w-[60vw] lg:pl-[2vw]'>
          <div className='text-center mt-[5vh] lg:text-start '>
            <h1 className='font-[Futura-Bold] text-[9vw] lg:text-[4.7vw] uppercase'>Mobile-Operated Agricultural Motor System</h1>
          </div>
          <div className='text-center px-5 mt-[2vh] lg:px-0 lg:text-start lg:text-xl lg:w-2/3 '>
            <p>Control Your Motor Pump with a Simple Missed Call, Anytime, Anywhere!</p>
          </div>
        </div> 
        <div className='lg:w[40vw]'>
          <div className='flex justify-center'>  
            <img className='w-[90vw] mt-[2vh] lg:w-[40vw]' src={hero} alt="" />
          </div>
        </div>
      </div>
      <div className='lg:flex flex-col-reverse'>
        <div className='lg:flex  lg:px-[2vw]'>
          <div className='lg:w-2/3'>
          <h1 className='font-[Futura-Bold] mt-[5vh] px-5 text-[1.9vh] uppercase lg:text-[2.5vw] lg:w-2/3 '>Effortlessly manage your motor pump, saving time, energy, and resources.</h1>
          </div>
          <div className='lg:w-1/3'>
            <div className='px-5 mt-[5vh]'>
            <p className='font-light text-[#323232]'>At Agromate, everything we do is designed to empower farmers with ease and efficiency. Our Telemetric Electronic Device enables effortless management of motor pumps, saving time, energy, and resources.</p>
            </div>
            <div className='px-5 mt-[3vh]'>
              <p className='font-light text-[#323232]'>With every purchase, you support farmers in regaining control and confidence in their agricultural endeavors. Your investment helps them achieve greater independence and sustainability in their work.</p>
            </div>
            <div className='pl-5 mt-[3vh]'>
              <p className=' uppercase border-b-[1px] w-fit border-zinc-500 pb-1'>Shop to support</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-[5vh]'>
          <img className='w-[90vw] lg:w-[95vw]' src={buff} alt="" />
        </div>
      </div>
      <div className='px-5 mt-[8vh] lg:px-[3vw]'>
        <h1 className='font-semibold lg:text-[2.7vw]'>Agromate lets you control your water motor pump directly from your mobile phone, no matter where you are. With just a missed call from your smartphone, you can start or stop the pump effortlessly.</h1>
      </div>
      <div className='px-5 mt-[2vh] lg:mt-[3vh] lg:px-[3vw]'>
        <p className='font-light text-[#323232]  lg:w-4/5 lg:text-[1.3vw]' >This groundbreaking technology offers more than just convenience. By using Agromate, you cut down on physical visits to your motor pump, leading to significant savings in electricity, time, and water resources.</p>
      </div>
      <div className='pl-5 mt-[3vh] lg:px-[3vw]'>
        <p className=' uppercase border-b-[1px] w-fit border-zinc-500 pb-1'>installation guide</p>
      </div>
      <div className='lg:flex lg:justify-center lg:mt-[5vh]'>
        <div className='lg:w-1/3'>
              <div className='flex justify-center mt-[10vh]'>
                <img className='w-[70vw]' src={AgromateKisan} alt="" />
              </div>
        </div>
        <div className='lg:w-2/4 lg:flex lg:flex-col lg:justify-center lg:px-[5vw]'>
              <div className='text-center'>
                <h1 className='font-semibold text-lg lg:text-start lg:px-8 capitalize lg:text-4xl'>Agromate Kisan</h1>
              </div>
              <div className='px-8 mt-[3vh]'>
                <p className='font-light  ' >Agromate Kisan, a farmer-friendly device with remote motor control. It simplifies motor management, allowing ON/OFF with a missed call, using LED indicators instead of an LCD screen. It also offers manual ON/OFF for flexibility.</p>
              </div>
              <div className='pl-8 mt-[2vh]'>
                <p className=' uppercase border-b-[1px] w-fit border-zinc-500 pb-1'>Know more</p>
              </div>
        </div>
      </div>
      <div className='lg:flex lg:flex-row-reverse lg:justify-center lg:mr-[3vw]'>
        <div className='lg:w-1/3'>
              <div className='flex justify-center mt-[10vh]'>
                <img className='w-[70vw]' src={AgromatePlus} alt="" />
              </div>
        </div>
        <div className='lg:w-2/4 lg:flex lg:flex-col lg:justify-center lg:px-[5vw]'>
              <div className='text-center'>
                <h1 className='font-semibold text-lg lg:text-start lg:px-8 capitalize lg:text-4xl'>Agromate Plus</h1>
              </div>
              <div className='px-8 mt-[3vh]'>
                <p className='font-light  ' >Agromate Plus is a telemetric device for remote motor control. Designed for farmers, it offers remote motor management through a simple missed call, with an LCD screen for status display, and a manual ON/OFF option.</p>
              </div>
              <div className='pl-8 mt-[2vh]'>
                <p className=' uppercase border-b-[1px] w-fit border-zinc-500 pb-1'>Know more</p>
              </div>
        </div>
      </div>
      <div className='lg:flex lg:justify-center '>
        <div className='lg:w-1/3'>
              <div className='flex justify-center mt-[10vh]'>
                <img className='w-[70vw]' src={AgromateEPlus} alt="" />
              </div>
        </div>
        <div className='lg:w-2/4 lg:flex lg:flex-col lg:justify-center lg:px-[5vw]'>
              <div className='text-center'>
                <h1 className='font-semibold text-lg lg:text-start lg:px-8 capitalize lg:text-4xl'>Agromate E-Plus</h1>
              </div>
              <div className='px-8 mt-[3vh]'>
                <p className='font-light  ' >Agromate E-Plus is an advanced telemetric device for remote motor control. Supports 4G SIM cards from all operators with 2G/3G compatibility. Features an IVRS for phone call-based operations and timer-based functions.</p>
              </div>
              <div className='pl-8 mt-[2vh]'>
                <p className=' uppercase border-b-[1px] w-fit border-zinc-500 pb-1'>Know more</p>
              </div>
        </div>
      </div>
      <div className='lg:flex lg:flex-row-reverse lg:justify-center  lg:mr-[3vw]'>
        <div className='lg:w-1/3'>
              <div className='flex justify-center mt-[10vh]'>
                <img className='w-[70vw]' src={AgromateIVRS} alt="" />
              </div>
        </div>
        <div className='lg:w-2/4 lg:flex lg:flex-col lg:justify-center lg:px-[5vw]'>
              <div className='text-center'>
                <h1 className='font-semibold text-lg lg:text-start lg:px-8 capitalize lg:text-4xl'>Agromate IVRS</h1>
              </div>
              <div className='px-8 mt-[3vh]'>
                <p className='font-light  ' >Agromate IVRS is an upgraded version of Agromate Plus, offering voice-out functionality for audible motor status. Designed for farmers, it enables remote motor control via phone calls, with activation and deactivation support. Includes an LCD screen for status display and manual ON/OFF option.</p>
              </div>
              <div className='pl-8 mt-[2vh]'>
                <p className=' uppercase border-b-[1px] w-fit border-zinc-500 pb-1'>Know more</p>
              </div>
        </div>
      </div>
      <div className='px-5 mt-[8vh] lg:px-[3vw] lg:mt-[15vh]'>
        <h1 className='font-semibold lg:text-[2.7vw]'>The product has been honored with the IESA Technovation Award, recognizing its exceptional innovation and excellence in the electronics and semiconductor industry.</h1>
      </div>
      <div className='flex justify-center mt-[3vh] lg:mt-[8vh]'>
        <img className='w-[90vw] lg:w-[70vw]' src={IESA} alt="" />
      </div>
      <div className='px-5 mt-[3vh]'>
        <p className='font-light lg:px-[3vw] lg:mt-[8vh] lg:text-xl '>The IESA Technovation Award is presented by the Indian Electronics and Semiconductor Association (IESA) to recognize outstanding contributions and innovations in the electronics and semiconductor sectors. It honors advancements that demonstrate significant impact and leadership in technology.</p>
      </div>
      <div className='px-5 mt-[8vh] lg:px-[3vw] lg:mt-[10vh]'>
        <h1 className='font-semibold lg:text-[2.7vw]'>In September 2023, the ICRISAT Certificate of Appreciation was awarded, highlighting the product’s significant impact and contribution to the field.</h1>
      </div>
      <div className='flex justify-center mt-[3vh] lg:mt-[8vh]'>
        <img className='w-[90vw] lg:w-[70vw]' src={ICRISAT} alt="" />
      </div>
      <div className='px-5 mt-[3vh]'>
        <p className='font-light lg:px-[3vw] lg:mt-[8vh] lg:text-xl '>The ICRISAT Certificate of Appreciation is awarded by the International Crops Research Institute for the Semi-Arid Tropics (ICRISAT) to acknowledge significant contributions and achievements in agricultural research and development. It recognizes individuals or organizations for their impactful work and dedication to improving agricultural practices and food security.</p>
      </div>

      <div className='px-5 mt-[3vh] w-1/2 lg:px-[3vw] lg:mt-[13vh]'>
        <h1 className='font-bold text-[1.9vh] font-[Futura-Bold] lg:text-[2.5vw] lg:w-1/2 capitalize'>We don't simply offer a product.</h1>
      </div>
      <div className='lg:flex lg:px-[3vw]'>
        <div className='px-5 mt-[5vh] lg:w-1/2'>
          <img className='w-[65vw] lg:w-[35vw]' src={G} alt="" />
        </div>
        <div className='px-5 mt-[7vh] ml-[28vw] lg:w-1/2 lg:flex lg:justify-center lg:items-center lg:-ml-[5vw] lg:text-xl '>
          <p className='font-light  '>We provide a tool that empowers you to transform your daily life. Our solution enables you to operate your motor pump from the comfort of your home, automating pump operations and freeing up valuable time for family and personal moments. After years of manual labor and potential hazards, such as snake bites, we believe that by introducing this innovative technology, we can help you enhance your quality of life, ensuring safety and efficiency in your agricultural practices.</p>
        </div>
      </div>
      <div className='lg:flex lg:flex-row-reverse lg:px-[3vw]  '>
        <div className='px-5 mt-[5vh] lg:w-2/3 lg:flex lg:items-center lg:justify-end'>
          <img className='w-[90vw] lg:w-[50vw]' src={GG} alt="" />
        </div>
        <div className='px-5 mt-[7vh] ml-[28vw] lg:ml-[0vw] lg:w-1/3 lg:flex  lg:justify-center lg:items-center lg:text-xl lg:px-0 lg:pl-5 '>
          <p className='font-light '>By eliminating the need for frequent, time-consuming trips to the fields, you can now focus on what truly matters. Enjoy peace of mind knowing that your pump operations are handled efficiently and safely, reducing the risk of injuries and accidents. Our technology not only makes farming easier but also allows you to spend more quality time with loved ones, nurturing relationships and creating lasting memories.</p>
        </div>
      </div>
      <div className='px-5 mt-[3vh]'>
        <p className='font-light lg:px-[3vw] lg:mt-[8vh] lg:text-xl '>We understand the challenges and risks involved in traditional farming methods. Our mission is to provide you with the tools to overcome these challenges, making your agricultural tasks more manageable and less hazardous. With our innovative solution, you gain control over your operations, protect yourself from potential dangers, and achieve a better work-life balance.</p>
      </div>
      <div className='px-8 my-[10vh] text-center lg:px-[10vw] lg:py-[5vh] '>
        <h1 className='font-[Futura-Bold] text-4xl capitalize lg:text-7xl lg:leading-[6vw]'>Thank you so much for considering our product; it means a lot for us</h1>
      </div>
      <div className='flex justify-center mt-[3vh]'>
        <img className='w-[90vw]' src={Last} alt="" />
      </div>
      <div className='px-5 my-[5vh]'>
        <p className='font-light lg:px-[3vw] lg:mt-[8vh] lg:text-xl '>We are proud and privileged to support the farmers of India and to be part of a long tradition of community and agriculture. We acknowledge that Indian farmers are the backbone of our nation, with a deep connection to the land, water, and sky. Their traditions and knowledge have sustained us for generations and continue to do so today. We pay our deep respects to the farmers, past, present, and future, for they hold the memories, traditions, culture, and hopes of our agricultural heritage. Always was, always will be, the land of the farmers.</p>
      </div>
      <div className='flex justify-center'>
        <div className='w-[90vw] border-[.5px] border-[#0000008b]'></div>
      </div>
      <div className='my-[3vh] text-center'>
        <p className='font-light text-xs'>Copyright © 2024 Agromate All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Homee