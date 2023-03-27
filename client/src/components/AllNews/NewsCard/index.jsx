import React from 'react'
import image from '../../../assets/images/Events/event2.png'
import { FaCalendar } from "react-icons/fa"
import { BsFillShareFill } from "react-icons/bs"

const index = (data) => {
  var shortdesc = data.desc.slice(1,79);
  shortdesc = shortdesc+" ...";
  return (
    <div>
      <div className='w-[90%] mx-auto p-4 bg-[#f5f5f5] shadow-lg my-6'>
        <div className='flex'>
          <img className='h-[122px] w-[268px] rounded-md object-cover' src={image} alt="" />
          <div className='mx-4'>
            <div className='flex justify-between'>
              <div className='flex'>
                <FaCalendar className='mt-[3px] text-[#3F72AF]'/>
                <h3 className='ml-2' >{data.date}</h3>
              </div>
              <BsFillShareFill/>
            </div>
            <h1 className='font-bold text-xl my-4'>{data.title}</h1>
            <p className='text-sm'>{shortdesc}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default index
