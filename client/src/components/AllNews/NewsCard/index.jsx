import React from 'react'
// import image from '../../../assets/images/Events/event2.png'
import { AiOutlineCalendar } from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"
import { Link } from 'react-router-dom';  
import parse from 'html-react-parser';


const index = (data) => {
  var shortdesc = parse(data.desc);
  console.log(shortdesc)
  // var shortdesc = shortdesc1.slice(0,79);
  // shortdesc = shortdesc+" ...";

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
        <div className='md:flex w-full'>
        <img className='w-[90%] mx-auto md:h-[170px] md:w-[268px] rounded-md object-cover' src={data.image} alt="" />
          <div className='w-[90%] md:w-full ml-4 mx-auto'>
            <div className='flex justify-between mt-3 md:mt-0'>
              <div className='flex'>
                <AiOutlineCalendar className='mt-[3px] text-[#3F72AF] text-lg'/>
                <h3 className='ml-2' >{data.date}</h3>
              </div>
              <BsFillShareFill className='text-xl'/>
            </div>
            <h1 className='font-bold text-xl my-4'>{data.title}</h1>
            <div className='flex justify-between'>
              <Link to={`/news/${data._id}`}><button className='rounded-lg py-3 px-6 mt-3 md:mt-6 ease-in-out duration-300 text-white bg-[#3F72AF] hover:bg-[#064663]'>View</button></Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default index
