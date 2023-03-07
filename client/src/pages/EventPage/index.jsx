import React from 'react'
import Navbar from "../../components/common/Navbar"
import Footer from '../../components/common/Footer'
import {FaWhatsapp, FaCalendar, FaLinkedinIn, FaTwitter, FaFacebook,FaEye,IoIosPin} from "react-icons/fa"
import {AiFillEye} from "react-icons/ai"
import { HiLocationMarker } from "react-icons/hi"
import { BiNotepad } from "react-icons/bi"
import { useParams } from 'react-router-dom'
import { eventsList } from '../../config/eventsData'


const Index = () => {
    const {eventId} = useParams();
    console.log(eventId);
    let news = eventsList.filter(event => event.id == eventId);
    let currentEvent = news[0];
    console.log(currentEvent);


  return (
    <div className='font-defaultFont'>
      <Navbar/>
      <div className='h-24 bg-[#3F72AF] w-full'></div>
      <div className='h-[300px] w-full absolute z-[-1] bg-[#3F72AF]'></div>
      <div className='md:flex mt-12 w-full md:w-[80%] mx-auto drop-shadow-xl'>
        <div className='mx-auto w-[80%] md:w-[900px]'>
            <div className='drop-shadow-xl bg-[#fdfdfd] pb-6'>
                <div>
                    <img className='w-full' src={currentEvent.image} alt="aa" />
                    <div className='w-[80%] mx-auto'>
                        <h1 className='text-xl md:text-2xl font-semibold mt-6 mb-3'>DATE & TIME:</h1>
                        <h2 className='text-md md:text-lg'>Start : {currentEvent.date}</h2>
                        <h2 className='text-md md:text-lg'>End : {currentEvent.date}</h2>
                        <div className='w-[50%] md:w-[40%] my-4 bg-[#DBE2EF] rounded-md'>
                            <h1 className='text-center md:text-left p-1 text-md md:text-lg font-semibold'>{currentEvent.status} Event</h1>
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
        </div>
        <div className='w-60% p-8 mt-8'>
            <p className='text-black md:text-white text-center md:text-left text-xl md:text-2xl'>{currentEvent.title} 
at Auditorium, MSIT</p>
            <div className='flex text-black md:text-white text-xl md:text-2xl w-full mt-6'>
                    <FaCalendar className='w-[27px] h-[27px] md:ml-8' />
                    <p className='ml-4'>{currentEvent.date}</p>
                    <AiFillEye className=' w-[28px] h-[28px] md:ml-8 mt-[3px]' />
                    <p className='ml-4'>4041</p>
            </div>
            <div className='h-[1px] w-full bg-black mx-auto mt-6 md:mt-0 md:h-[0px]'></div>

            <div className='flex mt-8 md:mt-24'>
                <HiLocationMarker className='w-[28px] h-[28px] ml-2' />
                <h1 className='text-lg md:text-xl ml-3'>ADDRESS</h1>
            </div>
            <h1 className='mt-2 ml-3 md:ml-14'>{currentEvent.location}</h1>
            <div className='flex mt-8'>
                <BiNotepad className='w-[28px] h-[28px] ml-2' />
                <h1 className='text-lg md:text-xl ml-3'>DESCRIPTION</h1>
            </div>
            <div>
                <p className='ml-3 mt-4 md:ml-14'>
                Dear Friends,
                <br /><br />
                Greetings from MSITDAA!
                <br /><br />
                MSIT Delhi Alumni Association invites you to participate in the event of "Becoming YOUTH CONFERENCE" will be on Sunday Jan 22, 2023
                at Auditorium, Msit Delhi.
                <br /><br />

                It's a First-come-First-Serve offer. ONLY registered participants will have entry. 
                Please register: https://msit.com/events/7708 
                <br /><br />
                Friends and family members are welcome. 
                You may share the link in your network.We look forward to your active participation in the event.
                </p>
                <br /><br />

                <p className="ml-3 md:ml-14">
                    Puneet sir<br />
                    Secretary, MSIT<br />
                    ===============<br />
                    If you have not taken your MSIT Delhi Alumni I-card yet, <br />
                    please applyhttps://msit.com/page/alumni-icard-120 <br />
                    <br />

                    If you have not taken your life-long MSIT Delhi Alumni email yet (yourname@msitalumni.com ), please 
                    email us office@msitdalumni.com <br />
                    ====<br />
                    MSIT Delhi Alumni Association<br />
                    C-4 MARKET,<br />
                    Fire Station Rd,Janakpuri,<br />
                    New Delhi 110 058<br />
                    Mob: +91 83760 60600<br />
                    Tel: +91-11-2686 8523/2659 7178<br />
                    Email: secretary@MSITalumni.com<br />
                    Website: http://www.MSITalumni.com<br />
                    Linkedin: https://www.linkedin.com/company/MSIT-delhi-alumni-association<br />
                    Youtube: https://www.youtube.com/user/MSIT<br />
                    Facebook: https://www.facebook.com/MSITalumni/<br />
                    Twitter: http://twitter.com/MSIT<br />
                    Instagram: https://www.instagram.com/MSIT/<br /><br />
                    Telegram: https://t.me/MSIT<br />
                </p>


            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Index
