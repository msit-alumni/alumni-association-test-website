import React , { useState , useEffect} from 'react'
import Navbar from "../../components/common/Navbar"
import Footer from '../../components/common/Footer'
import {FaWhatsapp, FaCalendar, FaLinkedinIn, FaTwitter, FaFacebook} from "react-icons/fa"
import {AiFillEye} from "react-icons/ai"
import { HiLocationMarker } from "react-icons/hi"
import { BiNotepad } from "react-icons/bi"
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';


const Index = () => {
const [eventsList, setEventsList] = useState([]);
const { _id } = useParams();

useEffect(() => {
  fetch('http://backend.msitalumni.com/AllEvent')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      if(data.events.length>0){
       setEventsList(data.events.filter((event) => event._id == _id));
    }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}, []);

  function display(event) {
    return <div className='font-defaultFont'>
    <Navbar/>
    <div className='h-24 bg-[#3F72AF] w-full'></div>
    <div className='h-[300px] w-full absolute z-[-1] bg-[#3F72AF]'></div>
    <div className='md:flex mt-12 w-full md:w-[80%] mx-auto drop-shadow-xl'>
      <div className='mx-auto w-[80%] md:w-[35%]'>
          <div className='drop-shadow-xl bg-[#fdfdfd] pb-6 object-cover '>
                  <img className='w-[94%] pt-[2%] ml-[3%] ' src={event.image} alt="aa" />
                  <div className='w-[80%] mx-auto'>
                      <h1 className='text-xl md:text-2xl font-semibold mt-6 mb-3'>DATE & TIME:</h1>
                      <h2 className='text-md md:text-lg'>Start : {event.date}</h2>
                      <h2 className='text-md md:text-lg'>End : {event.date}</h2>
                      <div className='w-[50%] md:w-[40%] my-4 bg-[#DBE2EF] rounded-md'>
                          <h1 className='text-center p-1 text-md md:text-lg font-semibold'>{event.status} Event</h1>
                      </div>
                      <div className='flex mb-8'>
                          <h1>Share:</h1>
                          <FaWhatsapp className='w-[28px] h-[28px] ml-4' />
                          <FaFacebook className='w-[28px] h-[28px] ml-3' />
                          <FaTwitter className='w-[28px] h-[28px] ml-3' />
                          <FaLinkedinIn className='w-[28px] h-[28px] ml-3' />
                      </div>
                      <div className='w-[100%] my-4 bg-[#DBE2EF] rounded-md mb-1 md:mb-8'>
                          <h1 className='text-center p-2 text-md md:text-lg font-semibold'>Registration Status</h1>
                      </div>
                  </div>

          </div>
      </div>
      <div className='w-[90%] md:w-[65%] md:p-8 mt-8 mx-auto'>
          <p className='text-black md:text-white text-center md:text-left text-xl md:text-2xl'>{event.title} at {event.location}</p>
          <div className='flex text-black md:text-white text-xl md:text-2xl w-full mt-6'>
                  <FaCalendar className='w-[27px] h-[27px] md:ml-8' />
                  <p className='ml-4'>{event.date}</p>
                  <AiFillEye className=' w-[28px] h-[28px] md:ml-8 mt-[3px]' />
                  <p className='ml-4'>4041</p>
          </div>
          <div className='h-[1px] w-full bg-black mx-auto mt-6 md:mt-0 md:h-[0px]'></div>

          <div className='flex mt-8 md:mt-32'>
              <HiLocationMarker className='w-[28px] h-[28px] ml-2' />
              <h1 className='text-lg md:text-xl ml-3'>ADDRESS</h1>
          </div>
          <h1 className='mt-2 ml-3 md:ml-14'>{event.location}</h1>
          <div className='flex mt-8'>
              <BiNotepad className='w-[28px] h-[28px] ml-2' />
              <h1 className='text-lg md:text-xl ml-3'>DESCRIPTION</h1>
          </div>
          <div>
              <div  className='ml-3 mt-4 md:ml-14 '>
                <p>
                {parse(event.desc)}
                </p>
              </div>

          </div>
      </div>
    </div>
    <Footer/>
  </div>
  }

  return (
    <div>
      {
        eventsList.map((event)=>(
          display(event)
        ))
      }
    </div>
  )
}

export default Index
