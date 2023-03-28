import React , { useState , useEffect} from 'react'
import Navbar from "../../components/common/Navbar"
import Footer from '../../components/common/Footer'
import { useParams } from 'react-router-dom'
import image from '../../assets/images/Events/event1.png'
import { AiOutlineCalendar,AiFillEye } from "react-icons/ai"
import image2 from "../../assets/images/newsImages/Img.png"




const Index = () => {

  return (
    <div className='font-defaultFont'>
        <Navbar/>
            <div className='h-36'></div>
            <div className='w-full h-48 md:h-96 flex pl-[12%]'>
                <img className='w-48 h-48 md:w-96 md:h-96 object-cover border-8 border-white shadow-lg' src={image} alt="" />
                <div className=' bg-[#3F72AF] my-24 pr-[10%] py-8 pl-[5%] text-white'>
                    <h1 className='text-2xl font-bold leading-relaxed tracking-wide'>Maharaja Surajmal Institute of Technology wishes you a colorful and happy Holi!</h1>      
                    <div className='flex justify-between mt-6'>
                        <div className='flex text-lg'>
                            <AiOutlineCalendar className='mt-[3px] text-2xl'/>
                            <h1 className='ml-4'>Sunday, Jan 22, 2023</h1>
                        </div>
                        <div className='flex text-lg'>
                            <AiFillEye className='mt-[3px] text-2xl'/>
                            <h1 className='ml-4'>4041</h1>
                        </div>
                    </div>              
                </div>
            </div>
            <div className=' text-lg my-12 mx-[12%] bg-[#F9F7F7] shadow-xl p-12 leading-8'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src={image2} className="w-full my-12" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        <Footer/>
    </div>
  )
}

export default Index
