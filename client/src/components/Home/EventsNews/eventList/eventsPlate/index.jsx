import React from 'react'
import { IoIosPin } from "react-icons/io";

const index = (event) => {
  return (
    <div className='flex font-[Merriweather] ease-in-out duration-200 hover:bg-[#faf4f5] hover:border-[#84a4cc] md:mr-20 pl-4'>
      <div className='bg-[#3F72AF] text-white rounded-[8px] p-[5px] md:px-[4px] lg:p-[5px] my-[5px]'>
        <h3 className='text-[15px] md:text-[12px] lg:text-[15px]'>{event.monthYear}</h3>
        <h2 className='text-2xl text-center'>{event.date}</h2>
      </div>
      <div className='text-left ml-6 pt-[15px]'>
        <h3 className='text-sm font-[700]'>{event.title}</h3>
        <div className='flex'>
          <IoIosPin className='w-[10px] h-[15px]'/>
          <p className='italic text-[12px] ml-1'>{event.location}</p>
        </div>
      </div>
    </div>
  )
}

export default index
