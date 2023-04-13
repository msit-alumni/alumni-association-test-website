import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'

const index = (news) => {
  return (
    <Link to={`/news/${news._id}`}>
    <div className='flex ease-in-out duration-200 hover:bg-[#faf4f5] border-[1px] border-[#dbe2ef] hover:border-[#84a4cc] md:mr-20 px-3 py-1'>
        <img className='w-32 h-32 my-[3px]' src={news.image} alt="" />
        <div className='text-left ml-6 pt-[15px]'>
        <h3 className='text-lg font-[700]'>{news.title}</h3>
        <div className='flex'>
          <FaCalendarAlt className='text-gray-600 text-lg mt-[5px]' />
          <p className='text-gray-600 text-lg ml-2'>{news.date}</p>
        </div>
      </div>
      
    </div>
    </Link>
  )
}

export default index
