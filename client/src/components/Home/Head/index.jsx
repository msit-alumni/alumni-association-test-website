import React from 'react'
import Carousel from "./Carousel"
import Login from "./Login"

const Head = () => {
  return (
    <div className='top-[80px] md:top-[120px] mb-[100px] relative'>
        <div className='flex-col lg:flex-row  flex m-6 '>
            <Carousel>

            </Carousel>
            {/* <Login >

            </Login> */}
        </div>
        <div className='lg:h-8 w-[100%]'></div>
    </div>
  )
}

export default Head