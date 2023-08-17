import React, { useState, useEffect } from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from '../../components/common/Footer';
import mapp from '../../assets/images/map.jpg'
import { FaLinkedinIn, FaTwitter, FaFacebook} from "react-icons/fa"
import { IoIosPin } from "react-icons/io"
import {AiOutlineMail, AiFillPhone} from "react-icons/ai"
import img2 from "../../assets/images/Register/img2.png"

export default function Index() {

  const [user, setUser] = useState({
    name:"",email:"",message:"",phone:""
});
const [formSubmit, Setformsubmit] = useState(0);

const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value})
};
const [phoneCode, setPhonecode] = useState([]);



  const postData = async (e) => {
 
    e.preventDefault();
   
    const { name, email, message, phone } = user;
    Setformsubmit(1);
    const res = await fetch("http://backend.msitalumni.com/postmessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            message,
            phone
        }),
    });
    const data = await res.json();
    console.log(data);
};

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
      <option className='bg-[#F9F7F7]'>+91</option>
          {phoneCode.map((item, index)=>{
          return <option key={index} value={item.dial_code}> {item.dial_code}</option>
        })}
      </select>
    }


    return (

            <div className='font-defaultfont'>
                <Navbar/>
                <div className=" mx-[8%] top-[150px]  md:mb-[100px] md:top-[120px] relative min-h-screen  py-5">
                <div className="font-Merriweather">
    <div className =" md:flex ">
      <div className="w-[40%] pl-16 ">
        <div className=" p-8">
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
                    <div className=" text-sm md:text-md text-[#064663] ">011-45037193</div>
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
                  <a href="https://www.facebook.com/msitnewdelhi/"><FaFacebook className='text-blue-600 text-3xl'/></a>
                </div>
                <div className="container  ">
                  <a href="https://www.linkedin.com/school/maharaja-surajmal-institute-of-technology-msitnewdelhi/people/?originalSubdomain=in"><FaLinkedinIn className='text-blue-600 text-3xl'/></a>
                </div>
                <div className="container  ">
                  <a href="https://twitter.com/msitnewdelhi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitter className='text-blue-400 text-3xl'/></a>
                </div> 

              </div>
            </div>
          </div>
        </div>
        <div className="p-8 ">
          { formSubmit == 0 && <div className="w-48 md:w-96  bg-[#F9F7F7] shadow-lg">
            <div className="pl-4 py-4">
              <h1 className="text-[#041C32] font-semibold text-3xl">Reach Out</h1>
            </div>
            <div className="pb-8 pt-3 pl-1 ">
              <div className="grid grid-rows-1 gap-4">

                <div className="pb-2">
                <div className="flex">
                <h1 className="text-xl text-[#000000] ">Your Name</h1>
                <p className="text-[#C5221F] font-semibold ">*</p>
              </div>
              <div className="py-1 ">
                <input className="outline-none border-b-2 border-black bg-[#F9F7F7] w-full "  value={user.name}
                        onChange={handleInputs} id="name" type="string" name="name" placeholder="Your Name "/>
              </div>
            </div>
            

            <div className="pb-2">
              <div className="flex">
              <h1 className="text-xl text-[#000000] ">Your Email </h1>
              <p className="text-[#C5221F] font-semibold ">*</p>
            </div>
            <div className="py-1 ">
              <input  className="outline-none border-b-2 border-black bg-[#F9F7F7] w-full "  value={user.email}
                        onChange={handleInputs} id="email" type="string" name="email" placeholder="Your Email  "/>
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

            <input  className=" outline-none border-b-2 border-black bg-[#F9F7F7] w-[70%] "  value={user.phone}
                        onChange={handleInputs} id="phone" type="string" name="phone" placeholder="Phone No.  "/>
            </div>
          </div>
        </div>

        <div className="pb-2">
          <div className="flex">
          <h1 className="text-xl text-[#000000] ">Your Message </h1>
          <p className="text-[#C5221F] font-semibold ">*</p>
        </div>
        <div className="py-1 ">
          <input className="outline-none border-b-2 border-black bg-[#F9F7F7] w-full "  value={user.message}
                        onChange={handleInputs} id="message" type="String" name="message" placeholder="Your message"/>
        </div>
      </div>
             

            
              </div>
              <div className="py-4 items-center ">
                <button
                type="submit"
                onClick={postData}
                className="rounded bg-[#3F72AF] px-6 py-2.5 text-lg font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-white hover:text-[#041C32] hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                Submit
              </button>
              </div>
            </div>
          </div>
          }
          {
            formSubmit == 1 &&
            <div className='w-48 md:w-full shadow-lg py-4'>
              <img src={img2} className='w-[60%] mx-auto mt-4' alt="" />
              <h1 className='font-[merriweather] text-center font-700 text-xl mt-6'>Thankyou!</h1>
              <h1 className='font-[merriweather] text-center font-700 text-xl mt-2 mb-4'>for your response.</h1>

            </div>
          }
        </div>
      </div>
      <div className="w-[60%] mx-auto">
        <div className="md:p-8">
        <div className="container">
          {/* <img
            src={mapp}
            className=""
            alt="" /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3028004842226!2d77.08987957495799!3d28.620685575671185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04afb8dbcfe1%3A0xaff19e718be2136b!2sMaharaja%20Surajmal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1683400597092!5m2!1sen!2sin" 
            width="650" height="900"
             className='border-0'
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">

             </iframe>
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