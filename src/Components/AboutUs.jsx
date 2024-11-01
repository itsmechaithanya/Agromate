import React from 'react'
import about from "../assets/about.png"
import EnergySaving from "../assets/EnergySavings.png"
import TimeEfficiency from "../assets/TimeEfficiency.png"
import WaterConservation from "../assets/WaterConservation.png"
import Peace from "../assets/Peace.png"
import Flexibility from "../assets/Flexibility.png"
import { Link } from 'react-router-dom'

function AboutUs() {

  return (
    <div className='pt-[11vh]'>
      <div className='lg:h-[50vh] h-[25vh] flex items-center pl-[5vw]'>
        <h1 className='capitalize lg:text-[4.5vw] text-[4.5vh] font-bold text-[#2F2F69]'>We Always Make <br />the Best <i class="ri-arrow-right-down-line"></i></h1>
      </div>
      <div className='bg-slate-100 pt-[7vw] rounded-t-[5vw]'>
      <div className='lg:flex ml-[3.5vw]'>
        <div className='lg:w-1/2'>
          <img className='h-[45vh] lg:w-[50vw] w-[92vw] object-cover rounded-xl ' src={about} alt="About Us" />
        </div>
        <div className='lg:w-1/2 lg:mt-[0vh] mt-[15vh] h-[45vh] px-[4vw] flex flex-col justify-center'>
          <h1>The <span className='text-2xl font-bold  text-[#2F2F69]'>Agromate</span> Telemetric Electronic Device represents a cutting-edge solution for modernizing the way you manage your motor pump. It provides you with the incredible ability to oversee and control your water motor pump directly from your mobile phone, regardless of your location. Imagine the convenience of being able to initiate or halt the operation of your pump with a mere missed call from your smartphone.</h1>
          <h1 className='mt-[3vh]'>This revolutionary technology offers a range of benefits that go far beyond mere convenience. By adopting Agromate, you significantly reduce the need for physical visits to your motor pump, which translates to substantial savings in terms of electricity, time, and water resources.</h1>
          <Link to="/ContactUs"><h1 className='mt-[3vh] bg-[#2F2F69] w-fit lg:px-[1vw] px-[2vh] py-[1vh] text-white rounded-full'>Contact Us</h1></Link>
        </div>
      </div>
      <div className='lg:mt-[20vh] mt-[15vh] mb-[5vh] flex justify-center lg:px-[0vw] px-[6vw]'>
        <h1 className='text-2xl font-bold '>Let's Delve Deeper into These Advantages:</h1>
      </div>
      <div>
        <div className='flex lg:flex-row flex-col items-center justify-center space-x-8 '>
            <div
              className='lg:text-[20vw] text-[60vw] font-bold bg-clip-text text-transparent bg-cover bg-center drop-shadow-xl'
              style={{backgroundImage: `url(${EnergySaving})`}}>
              01
            </div>
            <div className='ml-6'>
              <h2 className='text-3xl font-bold'>Energy Savings</h2>
              <p className='text-gray-600 max-w-md mt-[2vh] lg:pr-[0vw] pr-[6vw]'>
              Agromate allows you to use your water pump exactly when needed. No more leaving it on for extended periods unnecessarily. This smart control translates to substantial energy savings over time, leading to reduced electricity bills and a smaller carbon footprint.
              </p>
            </div>
          </div>
        <div className='flex lg:flex-row flex-col-reverse items-center justify-center space-x-8 lg:px-[0vw] lg:mt-[0vh] mt-[3vh] pr-[6vw]'>
            <div className='ml-6'>
              <h2 className='text-3xl font-bold'>Time Efficiency</h2>
              <p className='text-gray-600 max-w-md mt-[2vh]'>
              With Agromate, the days of rushing to the pump location to turn it on or off are a thing of the past. Whether you’re at work, home, or even on vacation, you can manage your motor pump effortlessly. This means more free time for you to focus on other essential tasks.
              </p>
            </div>
            <div
              className='lg:text-[20vw] text-[60vw] font-bold bg-clip-text text-transparent bg-cover bg-center drop-shadow-xl'
              style={{backgroundImage: `url(${TimeEfficiency})`}}>
              02
            </div>
          </div>
        <div className=' lg:flex-row flex-col flex items-center justify-center space-x-8'>
            <div
              className='lg:text-[20vw] text-[60vw] font-bold bg-clip-text text-transparent bg-cover bg-center drop-shadow-xl'
              style={{backgroundImage: `url(${WaterConservation})`}}>
              03
            </div>
            <div className='ml-6'>
              <h2 className='text-3xl font-bold'>Water Conservation</h2>
              <p className='text-gray-600 max-w-md mt-[2vh]'>
              Water is a precious resource, and Agromate ensures its responsible use. By being able to remotely control your water pump, you can prevent over-irrigation and wastage, contributing to water conservation efforts.
              </p>
            </div>
          </div>
        <div className='flex lg:flex-row flex-col-reverse  items-center justify-center space-x-8'>
            <div className='ml-6'>
              <h2 className='text-3xl font-bold'>Peace of Mind</h2>
              <p className='text-gray-600 max-w-md mt-[2vh] pr-[6vw]'>
              Agromate offers peace of mind by allowing you to monitor and control your pump remotely. Whether you want to prevent unauthorized use or respond to an unexpected situation, you have the power at your fingertips.
              </p>
            </div>
            <div
              className='lg:text-[20vw] text-[60vw] font-bold bg-clip-text text-transparent bg-cover bg-center drop-shadow-xl'
              style={{backgroundImage: `url(${Peace})`}}>
              04
            </div>
          </div>
        <div className='flex lg:flex-row flex-col items-center justify-center space-x-8'>
            <div
              className='lg:text-[20vw] text-[60vw] font-bold bg-clip-text text-transparent bg-cover bg-center drop-shadow-xl'
              style={{backgroundImage: `url(${Flexibility})`}}>
              05
            </div>
            <div className='ml-6'>
              <h2 className='text-3xl font-bold'>Flexibility</h2>
              <p className='text-gray-600 max-w-md mt-[2vh]'>
              This technology makes your life more flexible. You can adjust the pump schedule according to changing weather conditions, crop requirements, or any other factors, all from the convenience of your mobile phone.
              </p>
            </div>
          </div>
      </div>
      <div className='px-[4vw] pb-[2vw] mt-[5vh]'>
        <h1 >This technology makes your life more flexible. You can adjust the pump schedule according to changing weather conditions, crop requirements, or any other factors, all from the convenience of your mobile phone.
          In conclusion, the Agromate Telemetric Electronic Device is a game-changer for those who rely on motor pumps for various applications, such as agriculture or water supply. Its ability to enable remote control not only saves you time and resources but also empowers you to contribute to a more sustainable and efficient future.</h1>
      </div>
      <div className='flex justify-center mt-[5vh] lg:mt-[0vh]'>
        <div className='w-[90vw] border-[.5px] border-[#0000008b]'></div>
      </div>
      <div className='py-[3vh] text-center'>
        <p className='font-light text-xs'>Copyright © 2024 Agromate All Right Reserved.</p>
      </div>
      </div>
    </div>
  )
}

export default AboutUs