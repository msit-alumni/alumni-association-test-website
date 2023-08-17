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
      const res = await fetch("http://backend.msitalumni.com/signinAlumni", {
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
            alert("Please Enter a valid Email or Password!!")
            console.log("data error")
          }
          else {
              localStorage.setItem("jwt", data.token);
              localStorage.setItem("name", data.user.name);
              localStorage.setItem("role", "alumni");
              localStorage.setItem("user", JSON.stringify(data.user))
              navigate("/alumni/profile")
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
                        {/* <div className="flex justify-center ">



                            <div className="flex justify-center">
                                <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    className="px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                                    style={{backgroundColor:" #0A66C2"}}>
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill=""></path> </svg>
                                       <div className="px-2">
                                             Linkedin
                                        </div>
                                    
                                </button>
                            </div>


                               <div className="flex justify-center">
                                <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    className="px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                                    style={{backgroundColor:" #EA4335"}}>
                                   <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" fill="white"></path> </svg>
                                      <div className="px-2">
                                             Google
                                        </div>
                                </button>
                            </div>


                            <div className="flex justify-center">
                                <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    className="px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                                    style={{backgroundColor: "#26A7DE"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        className="w-3.5 h-3.5 mr-2">
                                        <path fill="currentColor"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                    </svg>
                                    Twitter
                                </button>
                            </div>

                        </div>
                        <div className="flex items-center py-4">
                            
                            <div className="flex-grow h-px bg-gray-400"></div>

                          
                            <span className="flex-shrink text-XS text-gray-500 px-4 font-semibold ">OR</span>

                          
                            <div className="flex-grow h-px bg-gray-400"></div>
                        </div> */}

                
                        <form method='POST' className="text-[12.5px] text-medium">
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
                            <Link to="/signupAlumni">
                            <p className="text-sm text-center mt-1 font-dark  text-black">
                                Don't have an account? <a href="#" className="font-medium text-blue-500">Register</a>
                            </p>
                            </Link>
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
