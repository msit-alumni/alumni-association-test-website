import React from 'react'
import image from '../../../assets/images/Events/event2.png'
import { AiOutlineCalendar } from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"

const index = (data) => {
  var shortdesc = data.desc.slice(1,79);
  shortdesc = shortdesc+" ...";
  function display()
  {
    if(data.category.length > 0) {
      return <img className='h-[170px] w-[268px] rounded-md object-cover' src={image} alt="" />
    }
    else {
      return <img className='h-[122px] w-[268px] rounded-md object-cover' src={image} alt="" />
    }
  }
  function display2()
  {
    if(data.category.length > 0) {
      return <div className='mt-2' ><button className='py-2 px-4 rounded-[100px] bg-[#DBE2EF] text-center'>{data.category}</button></div>
    }
    else {
      return 
    }
  }
  return (
    <div>
      <div className='w-[90%] mx-auto p-4 bg-[#f5f5f5] shadow-lg my-6'>
        <div className='flex'>
          {display()}
          <div className='mx-4'>
            <div className='flex justify-between'>
              <div className='flex'>
                <AiOutlineCalendar className='mt-[3px] text-[#3F72AF] text-lg'/>
                <h3 className='ml-2' >{data.date}</h3>
              </div>
              <BsFillShareFill className='text-xl'/>
            </div>
            <h1 className='font-bold text-xl my-4'>{data.title}</h1>
            <p className='text-sm'>{shortdesc}</p>
            {display2()}
          </div>

        </div>
      </div>
    </div>
  )
}

export default index
