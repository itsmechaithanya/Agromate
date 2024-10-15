import React from 'react'
import about from "../assets/about.png"
import { Link } from 'react-router-dom'

function AboutUs() {

  return (
    <div className='pt-[11vh]'>
      <div className='h-[40vh] flex justify-center items-center pb-[11vh]'>
        <h1 className=' capitalize text-[3vw] font-bold text-[#2F2F69]'>we always make the best</h1>
      </div>
      <div className='flex px-[2vw]'>
        <div className='lg:w-1/2 bg-slate-500'>
          <img className='h-[45vh] w-[50vw] object-cover' src={about} alt="" />
        </div>
        <div className='lg:w-1/2 h-[45vh] px-[4vw] flex flex-col justify-center '>
          <h1>The <span className='text-2xl font-bold font-FuturaBold'>Agromate</span> Telemetric Electronic Device represents a cutting-edge solution for modernizing the way you manage your motor pump. It provides you with the incredible ability to oversee and control your water motor pump directly from your mobile phone, regardless of your location. Imagine the convenience of being able to initiate or halt the operation of your pump with a mere missed call from your smartphone.</h1>
          <Link to="/ContactUs"><h1 className='mt-[3vh] bg-[#2F2F69] w-fit px-[1vw] py-[1vh] text-white rounded-full'>Contact Us</h1> </Link>
        </div>
      </div>
      <div className='px-[3vw] py-[5vh]'>
        <h1 className=''>This revolutionary technology offers a range of benefits that go far beyond mere convenience. By adopting Agromate, you significantly reduce the need for physical visits to your motor pump, which translates to substantial savings in terms of electricity, time, and water resources.</h1>
      </div>
      <div className='pl-[3vw]'>
        <h1 className='text-xl font-semibold'>Let's delve deeper into these advantages:</h1>
      </div>
      <div className='flex flex-col items-center space-y-12'>
        {/* Step 1: Research & Analyze */}
        <div className='flex items-center justify-center space-x-8'>
          <div
            className='text-9xl font-bold bg-clip-text text-transparent bg-cover bg-center'
            style={{backgroundImage: `url('https://i.ytimg.com/vi/JefkxxXq0CY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgg7kF_xeoQXdVtdlaREhgiXmJPg')`}}
          >
            01
          </div>
          <div className='ml-6'>
            <h2 className='text-3xl font-bold'>Energy Savings</h2>
            <p className='text-gray-600 max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis at elit tristique fermentum.
            </p>
          </div>
        </div>

        {/* Step 2: Concept & Sketch */}
        <div className='flex items-center justify-center space-x-8'>
          <div
            className='text-9xl font-bold bg-clip-text text-transparent bg-cover bg-center'
            style={{backgroundImage: `url('https://i.ytimg.com/vi/JefkxxXq0CY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgg7kF_xeoQXdVtdlaREhgiXmJPg')`}}
          >
            02
          </div>
          <div className='ml-6'>
            <h2 className='text-3xl font-bold'>Time Efficiency</h2>
            <p className='text-gray-600 max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis at elit tristique fermentum.
            </p>
          </div>
        </div>

        {/* Step 3: Design & Brand */}
        <div className='flex items-center justify-center space-x-8'>
          <div
            className='text-9xl font-bold bg-clip-text text-transparent bg-cover bg-center'
            style={{backgroundImage: `url('https://i.ytimg.com/vi/JefkxxXq0CY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgg7kF_xeoQXdVtdlaREhgiXmJPg')`}}
          >
            03
          </div>
          <div className='ml-6'>
            <h2 className='text-3xl font-bold'>Water Conservation</h2>
            <p className='text-gray-600 max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis at elit tristique fermentum.
            </p>
          </div>
        </div>

        {/* Step 4: Market & Advertise */}
        <div className='flex items-center justify-center space-x-8'>
          <div
            className='text-9xl font-bold  bg-clip-text text-transparent bg-cover bg-center'
            style={{backgroundImage: `url('https://i.ytimg.com/vi/JefkxxXq0CY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgg7kF_xeoQXdVtdlaREhgiXmJPg')`}}
          >
            04
          </div>
          <div className='ml-6'>
            <h2 className='text-3xl font-bold'>Peace of Mind</h2>
            <p className='text-gray-600 max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis at elit tristique fermentum.
            </p>
          </div>
        </div>
        <div className='flex items-center justify-center space-x-8'>
          <div
            className='text-9xl font-bold  bg-clip-text text-transparent bg-cover bg-center'
            style={{backgroundImage: `url('https://i.ytimg.com/vi/JefkxxXq0CY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgg7kF_xeoQXdVtdlaREhgiXmJPg')`}}
          >
            04
          </div>
          <div className='ml-6'>
            <h2 className='text-3xl font-bold'>Flexibility</h2>
            <p className='text-gray-600 max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis at elit tristique fermentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs