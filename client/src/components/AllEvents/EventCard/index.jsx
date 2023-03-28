import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { FaCalendar } from "react-icons/fa";
import image from "../../../assets/images/Events/event2.png"
import {Link} from 'react-router-dom';

export default function index(event) {
  console.log(event.key);
  return (
    <div>
      <div className='font-defaultFont w-[750px] h-[250px] bg-[#f5f5f5] p-4 mt-6 mx-8 flex shadow-lg' >
        <div className='w-[34%]'>
          <img className='rounded-md' src={event.image} alt="" />
        </div>
        <div className='w-[67%] px-4'>
          <h1 className='font-bold text-[23px] '>{event.title}</h1>
          <div className='flex mt-2 ml-3'>
                <HiLocationMarker className="w-[20px] h-[20px] text-[#3F72AF]" />
                <h3 className="text-sm ml-2">{event.location}</h3>
            </div>

            <div className=" mt-3 flex ml-3">
                <FaCalendar className="w-[20px] h-[20px] text-[#3F72AF]" />
                    <div className='ml-2'>
                      <h2 className="text-sm">Start: {event.date}</h2>
                      <h2 className="text-sm">End: {event.date}</h2>
                    </div>
            </div>

            <div className="mt-2">
                <p className="italic m-2 text-sm">{event.shortdesc}</p>
            </div>
            <div className='flex justify-between ease-in-out duration-300'>
              {
                event.status == "Upcoming" && <button className='rounded-full py-2 px-4 ease-in-out duration-300 text-white bg-[#064663]'>{event.status} Event</button>
              }
              {
                event.status == "Past" && <button className='rounded-full py-2 px-4 ease-in-out duration-300 text-black bg-[#DBE2EF]'>{event.status} Event</button>
              }
              <Link to={`/events/${event._id}`}><button className='rounded-lg py-3 px-6 ease-in-out duration-300 text-white bg-[#3F72AF] hover:bg-[#064663]'>View</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}
