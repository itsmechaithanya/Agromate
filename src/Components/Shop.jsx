import { Button, Card } from 'antd'
import React from 'react'
import Image from "../assets/G.png"
function Shop() {
  return (
    <div className="product m-20">
     

      <div className="product-info">
        <Card
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
      cover={<img src={Image} alt="Product Image" />}
    > 
      <h3 className='text-xl pb-4'>Agromate Plus</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error recusandae temporibus, neque quos cumque accusantium tempore aperiam suscipit unde! Corrupti, provident sit! Corporis nihil a, id eaque labore cum eos!</p>
     <div className='flex pt-4 justify-between items-center'> <p>Rs. 10</p><Button>Buy now</Button></div>
    </Card>
      </div>
    </div>
  )
}

export default Shop