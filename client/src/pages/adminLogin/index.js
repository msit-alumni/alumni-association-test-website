import React , {useState} from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import img from "./img.svg"
import logo from "./logo2.png"
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"


const Register2 = ()=>{
    const navigate = useNavigate();
    const [user,setUser]=useState({
        email:"",password:""
      })
      let name,value;
      const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        console.log(name,value)
        setUser({...user,[name]:value})
      }
  
    const postData = async (e) => {
      e.preventDefault();
      const {email,password}=user; 
      const res = await fetch("http://backend.msitalumni.com/signinAdmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      }).then(res => res.json())
      .then(data => {
          console.log(data)
          if (data.error) {
            console.log("data error")
          }
          else {
              localStorage.setItem("jwt", data.token);
              localStorage.setItem("role", "admin");
              localStorage.setItem("user", JSON.stringify(data.user))
              navigate("/admin")
          }
      });
    };

    return (
        <div >
        <Navbar />
             <div className="top-[150px]  md:mb-[100px] md:top-[120px] relative min-h-screen  py-5">
        <div className="container mx-auto ">
            <div
                className="flex flex-col justify-between md:flex-row w-[90%] lg:w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">

                <div className="w-full lg:w-1/2 py-2 px-12 ">
                    <div className="mx-auto w-[80%]">
                        <img src={logo} alt="" className=" " />
                        
                        
                        <form method='POST' className="text-[12.5px] mt-6 text-medium">
                        <div className="mb-6 text-[12.5px]">
                            <h6 className="font-[MerriWeather]">Email</h6>
                            <input type="text"
                            value={user.email}
                            onChange={handleInputs}
                            name="email"
                            autoComplete="off"
                                className="form-control block font-[MerriWeather] w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Email" />
                        </div>

                     
                        <div className="mb-6 text-[12.5px]">
                            <h6 className="font-[MerriWeather]">Password</h6>
                            <input type="password"
                            value={user.password}
                            onChange={handleInputs}
                            name="password"
                            autoComplete="off"
                                className="form-control font-[MerriWeather] block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Password" />
                        </div>
                    </form>

                        <div className="flex justify-between items-center mb-6">


                        </div>

                        <div className="text-center lg:text-left">
                            <div className="flex">
                                <button onClick={postData} className="w-full px-6 py-2 mt-4 text-white bg-[#3F72AF] rounded-lg ">Login</button>
                            </div>
                            
                        </div>

                    </div>
                </div>


                <div className=" lg:w-1/2  h-full hidden lg:block ">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
    <Footer />
        </div>
    )
}
export default Register2
