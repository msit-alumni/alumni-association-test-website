import React, { useState, useEffect } from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from '../../components/common/Footer';
import mapp from '../../assets/images/map.jpg'
import { FaLinkedinIn, FaTwitter, FaFacebook} from "react-icons/fa"
import { IoIosPin } from "react-icons/io"
import {AiOutlineMail, AiFillPhone} from "react-icons/ai"

export default function Index() {

  const [phoneCode, setPhonecode] =useState([]);

    useEffect(()=>{
      fetch("https://json.extendsclass.com/bin/2f3a1d286f67")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        setPhonecode((prevData)=> [...prevData, ...data]);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }, []);

    function display () {
      return <select>
      <option className='bg-[#F9F7F7]'>Code</option>
          {phoneCode.map((item, index)=>{
          return <option key={index} value={item.dial_code}> {item.dial_code}</option>
        })}
      </select>
    }

 

    return (

            <div classNameName='font-defaultfont'>
                <Navbar/>
                <div className=" mx-[8%] top-[150px]  md:mb-[100px] md:top-[120px] relative min-h-screen  py-5">
                <div className="font-Merriweather">
    <div className =" md:flex ">
      <div className="w-[40%] pl-16 ">
        <div className="p-8 ">
          <div className="w-48 md:w-96  bg-[#F9F7F7] shadow-lg pl-2 pt-2">
            <div className="pl-4">
              <h1 className="text-[#041C32] font-semibold text-2xl pb-6 pt-2">Contact Info</h1>
            </div>
            <div className="grid grid-rows-1 gap-4  ">
              <div className="p-4">
                <div className=" flex">
                  <div className="w-[10%]">
                    <div className="container mx-auto ">
                      <IoIosPin/>
                    </div>
                  </div>

                  <div className="w-[90%] pl-4">
                    <div className=" text-sm md:text-md text-[#064663] ">Maharaja Surajmal Institute of Technology C-4 Janak Puri New Delhi-110058</div>
                  </div>
                </div>
              </div>

              <div className="pl-4">
                <div className=" flex">
                  <div className="w-[10%]">
                    <div className="container mx-auto ">
                      <AiFillPhone/>
                    </div>
                  </div>

                  <div className="w-[90%] pl-4">
                    <div className=" text-sm md:text-md text-[#064663] ">011-255281178</div>
                  </div>
                </div>
              </div>

              <div className="pl-4">
                <div className=" flex">
                  <div className="w-[10%]">
                    <div className="container">
                      <AiOutlineMail/>
                    </div>
                  </div>

                  <div className="w-[90%] pl-4 ">
                    <div className=" text-sm md:text-md text-[#064663] ">alumni@msit.in</div>
                  </div>
                </div>
              </div>


            </div>

            <div className="py-8 mx-auto item-center">
              <div className=" items-center w-[40%] grid  grid-cols-3 mx-auto  justify-between">
                <div className="container">
                  <FaFacebook className='text-blue-600 text-3xl'/>
                </div>
                <div className="container  ">
                  <FaLinkedinIn className='text-blue-600 text-3xl'/>
                </div>
                <div className="container  ">
                  <FaTwitter className='text-blue-400 text-3xl'/>
                </div> 

              </div>
            </div>
          </div>
        </div>
        <div className="p-8 ">
          <div className="w-48 md:w-96  bg-[#F9F7F7] shadow-lg">
            <div className="pl-4 py-4">
              <h1 className="text-[#041C32] font-semibold text-2xl">Reach Out</h1>
            </div>
            <div className="py-8 pl-2 ">
              <div className="grid grid-rows-1 gap-4">

                <div className="pb-2">
                <div className="flex">
                <h1 className="text-xl text-[#000000] ">Your Name</h1>
                <p className="text-[#C5221F] font-semibold ">*</p>
              </div>
              <div className="py-1 ">
                <input className="outline-none border-b-2 border-black bg-[#F9F7F7] w-full " id="name" type="text" name="name" placeholder="Your Name "/>
              </div>
            </div>
            

            <div className="pb-2">
              <div className="flex">
              <h1 className="text-xl text-[#000000] ">Your Email </h1>
              <p className="text-[#C5221F] font-semibold ">*</p>
            </div>
            <div className="py-1 ">
              <input className="outline-none border-b-2 border-black bg-[#F9F7F7] w-full " id="email" type="text" name="email" placeholder="Your Email  "/>
            </div>
          </div>

          <div className="pb-2">
            <div className="flex">
            <h1 className="text-xl text-[#000000] ">Phone No. </h1>
            <p className="text-[#C5221F] font-semibold ">*</p>
          </div>
          <div className="py-1 ">

<div className="flex">
<div className='w-[30%] border-black bg-[#F9F7F7] ' >
<div className=" w-[90%] border-b-2 border-black ">
    {display()}
</div>
</div>

            <input  className="px-2 outline-none border-b-2 border-black bg-[#F9F7F7] w-[70%] " id="phone" type="text" name="phone" placeholder="Phone No.  "/>
            </div>
          </div>
        </div>

        <div className="pb-2">
          <div className="flex">
          <h1 className="text-xl text-[#000000] ">Your Message </h1>
          <p className="text-[#C5221F] font-semibold ">*</p>
        </div>
        <div className="py-1 ">
          <input className="outline-none border-b-2 border-black bg-[#F9F7F7] w-full " id="message" type="text" name="message" placeholder="Your message"/>
        </div>
      </div>
             

            
              </div>
              <div className="py-4 items-center ">
                <button
                type="submit"
                className="rounded bg-[#3F72AF] px-6 py-2.5 text-lg font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-white hover:text-[#041C32] hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                Submit
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%]">
        <div className="p-8">
        <div className="container cover-object  ">
          <img
            src={mapp}
            className=""
            alt="" />
        </div>
      </div>
      </div>
    </div>
  </div>
                </div>
                <Footer/>
                </div>
        )
        
}