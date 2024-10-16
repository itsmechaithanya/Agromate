import { Button, Card } from 'antd'
import React from 'react'
import Image from "../assets/G.png"
function Shop() {
  return (
    <div className="pt-[11vh]">
      <div className='h-[50vh] flex items-center pl-[5vw]'>
        <h1 className='capitalize text-[4.5vw] font-bold text-[#2F2F69] '>We offer you <br /> the best <i class="ri-arrow-right-down-line"></i></h1>
      </div>
    <div className='bg-slate-100 px-[3vw] pt-[4vw] rounded-t-[5vw]'>
    <div className='flex justify-end'><h1 className='bg-slate-300 px-[2vw] py-[1vw] rounded-full'>0 items in <i className="ri-shopping-cart-line font-medium"></i> </h1> </div>
      <div className='my-[5vh]'>
        <h1>Please take a look at the product list displayed below. You can choose to make your purchases online, and we will ensure swift delivery to your specified address. If you need installation support, we offer remote assistance, and you can access informative installation videos in the documents section.</h1>
      </div>
      <div>
        <div className='h-[10vh] w-[20vw] bg-slate-200'></div>
      </div>
    </div>
    </div>
  )
}

export default Shop