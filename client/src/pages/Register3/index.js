
import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import img from "./img.jpg"
import logo from "./logo2.png"
import {Link} from 'react-router-dom'

  const Register3 = ()=>{

    return (
        <div>
            <Navbar />
            <div className="top-[150px]  md:mb-[100px] md:top-[120px] relative min-h-screen  py-5">
        <div className="container mx-auto ">
            <div
                className="flex flex-col justify-between md:flex-row w-[90%] lg:w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
               
                <div className="w-full lg:w-1/2 py-2 px-12 ">
                    <div className="mx-auto w-[80%]">
                    <img src={logo} alt="" className=" " />
                   

                   
                   <form action="#" className="text-[12.5px]">
                     <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Course</h6>
                        <input type="text" placeholder="Course"
                            className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full">
                    </div>
                    <div className="mt-2">
                        <h6 className="font-[MerriWeather]">City</h6>
                        <input type="text" placeholder="City"
                            className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full">
                    </div>
                    <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Batch</h6>
                        <input type="text" placeholder="Batch"
                           className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full">
                    </div>
                    <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Branch</h6>
                        <input type="text" placeholder="Branch"
                            className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full">
                    </div>
                    <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Shift</h6>
                        <input type="text" placeholder="Shift"
                            className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full">
                    </div>
                    <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Company</h6>
                        <input type="text" placeholder="Company"
                            className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full">
                    </div>
                    <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Experience</h6>
                        <input type="text" placeholder="Experience"
                            className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full">
                    </div>
                    <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Designation</h6>
                        <input type="text" placeholder="Designation"
                            className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full">
                    </div>
                    <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Sector</h6>
                        <input type="text" placeholder="Sector"
                            className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full">
                    </div>



                </form>
                <div className="py-2">

                </div>
                <div className="text-center lg:text-left">
                    <div className="flex">
                        <button className="w-full px-6 py-2 mt-4 text-white bg-[#3F72AF] rounded-lg "><Link to="/">Submit</Link></button>
                    </div>
                   
                  </div>
                </div>
                </div>


                <div className=" lg:w-1/2  h-screen h-full hidden lg:block ">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
<Footer />
        </div>
    )
}
export default Register3
