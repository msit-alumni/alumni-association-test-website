import React from 'react'
import EventList from './eventList'
import NewsList from './newsList'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div id='events' className=' bg-[#DBE2EF] font-[Merriweather]'>
    <div className='h-6 md:h-8 bg-[#DBE2EF]'></div>
    <div className='md:flex bg-[#DBE2EF]'>
        <div className='md:w-[50%]'>
            <div className='mx-[5%] md:pl-[10%] md:mx-[10%]'>
                <div className='ml-8'>
                  <h2 className='text-2xl text-[#064663] text-left font-bold'>Events</h2>
                  <div className='bg-[#064663] h-[2px] w-12 rounded mt-2 ml-2'></div><br />
                </div>
                <EventList/>
                <div className='md:h-[22px] lg:h-0'></div>
                 <Link to="/events"><button className='ml-4 mt-4 bg-[#3F72AF] md:text-[9px] xl:text-[15px] font-normal tracking-wider leading-5 text-[#F9F7F7] hover:bg-theme font-defaultFont py-2 px-4 rounded duration-500'>
      View All
    </button></Link>
            </div>
        </div>
        <div className='h-10 md:h-[0px]'></div>
        <div className='md:w-[50%] md:border-l-2 border-[#064663]'>
            <div className='mx-[15%] md:pl-[12%] md:mx-[10%]'>
                <h2 className='text-2xl text-left text-[#064663] font-bold'>News and Stories</h2>
                <div className='bg-[#064663] h-[2px] w-36 rounded mt-2 ml-4 mb-4'></div>
                <NewsList/>
                <div className='h-6 md:h-2'></div>
                <Link to="/news"><button className='ml-4 mt-1 bg-[#3F72AF] md:text-[9px] xl:text-[15px] font-normal tracking-wider leading-5 text-[#F9F7F7] hover:bg-theme font-defaultFont py-2 px-4 rounded duration-500'>
      View All
    </button></Link>
            </div>

        </div>
        
      </div>
      <div className='h-6 md:h-8'></div>
    </div>
  )
}

export default index
