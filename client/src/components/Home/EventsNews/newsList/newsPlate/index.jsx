import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

const index = (news) => {
  return (
    <div className='flex ease-in-out duration-200 hover:bg-[#faf4f5] border-[1px] border-[#dbe2ef] hover:border-[#84a4cc] md:mr-20 px-4 py-2'>
        <img className='w-[74px] h-[74px] my-[3px]' src={news.avatar} alt="" />
        <div className='text-left ml-6 pt-[15px]'>
        <h3 className='text-sm font-[700]'>{news.title}</h3>
        <div className='flex'>
          <FaCalendarAlt className='w-[10px] h-[10px] mt-[3px]' />
          <p className='text-[12px] ml-2 not-italic'>{news.date}</p>
        </div>
      </div>
      
    </div>
  )
}

export default index
