import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import image from '../../assets/images/newsImages/Profile Photo.png'
import { BiShoppingBag } from 'react-icons/bi'
import { SlGraduation } from 'react-icons/sl'
import { AiOutlineTrophy } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsFacebook } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'

const index = () => {

    console.log("ahfoiagsiignfdsbndgg")
  return (
    <div className='bg-white'>
      <Navbar/>
      <div className='mx-[10%] mt-32 font-defaultFont'>
        <div className='bg-[#f5f7fb] w-full px-[10%] py-8'>
            <div className='flex'>
                <img src={image} alt="" />
                <div className='px-[3%] w-full ml-[14%]'>
                <h1 className='mt-16 mb-2 text-2xl font-bold'>Neel Kanth Kundu</h1>
                    <div className='flex justify-between mt-4'> 
                        <div className='text-md'>
                            <p>Role: Software Developer</p>
                            <p>Company: Amazon</p>
                            <p>Location: Gurugram</p>
                        </div>
                        <div className='text-md pl-6 border-l-[3px] border-[#DBE2EF]'>
                            <p>Course: B.Tech</p>
                            <p>Branch: Electrical Engineering</p>
                            <p>Batch: 2008 - 2012</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='w-[70%] px-[4%] py-12'>
                <div className='flex text-3xl '>
                    <BiShoppingBag />
                    <h1 className='ml-4 mt-[4px] text-xl'>Work Experience</h1>
                </div>
                <div className='text-[14px] mt-6'>
                    <h2 className='font-bold text-lg'>Amazon</h2>
                    <p className='mt-2'>Software Developer</p>
                    <p className='mt-2'>2020 - Present</p>
                    <p className='mt-2'>Gurugram</p>
                </div>
                <div className='w-[40%] h-[2px] rounded-xl my-8 bg-[#DBE2EF]'></div>
                <div className='text-[14px] mt-6'>
                    <h2 className='font-bold text-lg'>Infosys</h2>
                    <p className='mt-2'>Software Developer</p>
                    <p className='mt-2'>2015-2020</p>
                    <p className='mt-2'>Noida</p>
                </div>
                <div className='w-full h-[2px] rounded-xl my-8 bg-black'></div>
                <div className='flex text-3xl '>
                    <SlGraduation />
                    <h1 className='ml-4 mt-[4px] text-xl'>Educational Details</h1>
                </div>
                <div className='text-[14px] mt-6'>
                    <h2 className='font-bold text-lg'>Maharaja Surajmal Institute of Technology</h2>
                    <p className='mt-2'>MBA</p>
                    <p className='mt-2'>2012 - 2014</p>
                </div>
                <div className='w-[40%] h-[2px] rounded-xl my-8 bg-[#DBE2EF]'></div>
                <div className='text-[14px] mt-6'>
                    <h2 className='font-bold text-lg'>Maharaja Surajmal Institute of Technology</h2>
                    <p className='mt-2'>B. Tech</p>
                    <p className='mt-2'>2008 - 2012</p>
                </div>
                <div className='w-full h-[2px] rounded-xl my-8 bg-black'></div>
                <div className='flex text-3xl '>
                    <AiOutlineTrophy />
                    <h1 className='ml-4 mt-[4px] text-xl'>Achievements</h1>
                </div>
                <div className='text-sm mt-6'>
                    <h2 className='font-bold text-lg'>Achievement Title</h2>
                    <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='w-[40%] h-[2px] rounded-xl my-8 bg-[#DBE2EF]'></div>
                <div className='text-sm mt-6'>
                    <h2 className='font-bold text-lg'>Achievement Title</h2>
                    <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
            <div className='w-[30%] my-12'>
                <div className='mx-2 p-8 bg-[#F9F7F7]'>
                    <div className='flex'>
                        <CgProfile className='text-2xl'/>
                        <h1 className='ml-4 '>Personal Details</h1>
                    </div>
                    <div className='mt-6 flex text-md w-full'>
                        <div>
                            <h3 className='w-[100px]'>About me:</h3>
                        </div>
                        <div>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h1>DOB: DD/MM/YYYY</h1>
                    </div>
                    <div className='mt-6'>
                        <h1>Relationship Status: Married</h1>
                    </div>
                    <div className='mt-6'>
                        <div className='w-[50%] flex mx-auto justify-between text-3xl'>
                            <BsFacebook/>
                            <GrLinkedinOption/>
                            <AiFillTwitterCircle/>
                        </div>
                    </div>
                </div>
                <div className='mx-2 p-8 mt-12 bg-[#F9F7F7]'>
                    <div className='flex'>
                        <BsPeople className='text-2xl'/>
                        <h1 className='ml-4 '>BatchMates</h1>
                    </div>
                    <div className='grid grid-cols-3 mt-6'>
                        <div>
                            <img className='mx-auto rounded-full w-[60px] h-[60px]' src={image} alt="" />
                            <h3 className='text-center text-sm mt-2'>Neel Kanth kundu</h3>
                        </div>
                        <div>
                            <img className='mx-auto rounded-full w-[60px] h-[60px]' src={image} alt="" />
                            <h3 className='text-center text-sm mt-2'>Neel Kanth kundu</h3>
                        </div>
                        <div>
                            <img className='mx-auto rounded-full w-[60px] h-[60px]' src={image} alt="" />
                            <h3 className='text-center text-sm mt-2'>Neel Kanth kundu</h3>
                        </div>
                        <div>
                            <img className='mx-auto rounded-full w-[60px] h-[60px]' src={image} alt="" />
                            <h3 className='text-center text-sm mt-2'>Neel Kanth kundu</h3>
                        </div>
                        <div>
                            <img className='mx-auto rounded-full w-[60px] h-[60px]' src={image} alt="" />
                            <h3 className='text-center text-sm mt-2'>Neel Kanth kundu</h3>
                        </div>
                        <div>
                            <img className='mx-auto rounded-full w-[60px] h-[60px]' src={image} alt="" />
                            <h3 className='text-center text-sm mt-2'>Neel Kanth kundu</h3>
                        </div>
                    </div>
                    <div className='mt-6 w-full'>
                        <button className='mx-[30%] text-lg rounded-md border-[2px] px-4 py-2 border-[#112D4E] hover:bg-[#112D4E] hover:text-white ease-in-out duration-300'>View All</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default index
