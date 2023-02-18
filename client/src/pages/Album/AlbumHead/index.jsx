import React from 'react'
const index = (props) => {
  return (
    <div className=' font-defaultFont text-center text-[#112D4E] mt-6'>
        <div>
            <h1 className='font-[700] text-3xl'>{props.title}</h1>
            <div className='h-[2px] mt-4 w-48 rounded m-auto bg-[#112D4E]'></div>
        </div>
        <div className='w-[80%] m-auto mt-6 mb-4'>
            <h3 className='text-xl'>{props.desc}</h3>
        </div>
    </div>
  )
}

export default index
