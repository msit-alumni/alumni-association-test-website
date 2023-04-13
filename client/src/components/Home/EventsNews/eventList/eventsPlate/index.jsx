import React from 'react'
import { IoIosPin } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'

const index = (event) => {

  return (
    <Link to={`/events/${event._id}`} className='flex font-[Merriweather] ease-in-out duration-200 hover:bg-[#faf4f5] border-[#dbe2ef] hover:border-[#84a4cc] border-[1px] py-2 md:mr-20 px-4'>
      <img className='w-36 rounded-md my-[3px]' src={event.image} alt="" />
      <div className='text-left ml-6'>
        <h3 className='text-sm md:text-base font-[700]'>{event.title}</h3>
        <div className='flex'>
          <IoIosPin className='text-base md:text-lg mt-[3px]'/>
          <p className='italic text-sm md:text-base ml-1'>{event.location}</p>
        </div>
        <div className='flex'>
          <FaCalendarAlt className='text-base md:text-lg mt-[3px]' />
          <p className='text-sm md:text-base ml-2 not-italic'>{event.date}</p>
        </div>
        <p className='text-[12px]'>{event.shortdesc}</p>
      </div>
    </Link> 
  )
}

export default index
