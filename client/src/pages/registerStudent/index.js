import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import img from "./img.svg";
import logo from "./logo2.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import {signupSchema} from "../../schema/alumni"
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/images/connect logo 2.png"
import img2 from "../../assets/images/Register/img2.png"

const Register = () => {

  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isCreateDisabled, setCreateDisabled] = useState(true);
  const [submit,SetSubmit] = useState(0);

  const navigate = useNavigate()
  const initialValues = {
    name:"",image:"",email:"",mobile:"",dob:"",password:"",course:"",batch:"",branch:"",shift:""
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        // postData();
        console.log( values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  console.log(errors);
  
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    values.image=base64;
    // console.log(base64)
};

const handleButtonState = (event) => {
  console.log(values);
  handleChange(event);
  if (
    errors.email == undefined &&
    errors.mobile == undefined &&
    errors.dob == undefined &&
    errors.password == undefined &&
    values.name.length > 2 &&
    values.password.length > 6 
  ) {
    console.log(values);
    setCreateDisabled(false);
    if (
      errors.branch == undefined &&
      errors.shift == undefined &&
      values.batch != "" &&
      values.branch != "" &&
      values.shift != ""
    ) {
      console.log(values)
      setButtonDisabled(false);
    }
    else{
      setButtonDisabled(true);
    }
  }
  else{
    setCreateDisabled(true);
  }
  handleChange(event);
};


    const [register,setregister]=useState(0);

  const postData = async (e) => {
    e.preventDefault();
    const {name,email,password,mobile,image,dob,course,batch,branch,shift}=values;
    SetSubmit(1);
    const res = await fetch("http://backend.msitalumni.com/signupStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      email,
      password,
      mobile,
      image,
      dob,
      course,
      batch,
      branch,
      shift
      }),
    });
    const data = await res.json();
    navigate("/");
    console.log(data);
  };

  return (
    <div>
      <Navbar />&
      {submit == 0 && <div className=" top-[150px]  md:mb-[100px] md:top-[120px] relative min-h-screen  py-5">
        <div className="container mx-auto ">
          <div className="flex flex-col justify-between md:flex-row w-[90%] lg:w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 py-2 px-12 ">
              <div className="mx-auto w-[80%]">
                <img src={logo} alt="" className=" " />
                {register===0  &&
                    <div id="first">
                    {/* <div className="flex justify-center ">
                      <div className="flex justify-center">
                        <button
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className="px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                          style={{ backgroundColor: " #0A66C2" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                          >
                            {" "}
                            <path
                              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                              fill=""
                            ></path>{" "}
                          </svg>
                          <div className="px-2">Linkedin</div>
                        </button>
                      </div>
    
                      <div className="flex justify-center">
                        <button
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className="px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                          style={{ backgroundColor: " #EA4335" }}
                        >
                          <svg
                            style={{ color: "white" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-google"
                            viewBox="0 0 16 16"
                          >
                            {" "}
                            <path
                              d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                              fill="white"
                            ></path>{" "}
                          </svg>
                          <div className="px-2">Google</div>
                        </button>
                      </div>
    
                      <div className="flex justify-center">
                        <button
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className="px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                          style={{ backgroundColor: " #26A7DE" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-3.5 h-3.5 mr-2"
                          >
                            <path
                              fill="currentColor"
                              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                            />
                          </svg>
                          Twitter
                        </button>
                      </div>
                    </div> */}
                    <div>
                      {/* <div className="flex items-center py-4">
                        <div className="flex-grow h-px bg-gray-400"></div>
    
                        <span className="flex-shrink text-XS text-gray-500 px-4 font-semibold ">
                          OR
                        </span>
    
                        <div className="flex-grow h-px bg-gray-400"></div>
                      </div> */}
                      <div className="text-medium text-[12.5px] ">
                        <div className="flex mt-2">
                        <h3 className="mr-6">Upload profile image:</h3>
                        <input
                                             type="file"
                                             accept="image/*"
                                             onChange={handleFileUpload}
                                         />
                        </div>
                        <div className="mt-2">
                          <h6 className="font-[MerriWeather]">Name</h6>
                          <input
                            type="text"
                            placeholder="Name"
                            value={values.name}
                            onChange={handleButtonState}
                            name="name"
                            autoComplete="off"
                            onBlur={handleBlur}
                            className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full"
                          />
                          {touched.name && errors.name ? (
                      <p className="text-[#b22b27]">{errors.name}</p>
                    ) : null}
                        </div>
                        <div className="mt-5">
                          <h6 className="font-[MerriWeather]">E-mail</h6>
                          <input
                            type="text  placeholder-gray-600 "
                            placeholder="E-mail"
                            value={values.email}
                            name="email"
                            onChange={handleButtonState} 
                            autoComplete="off"
                            onBlur={handleBlur}
                            className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full"
                          />
                          {errors.email && touched.email ? (
                      <p className="text-[#b22b27]">{errors.email}</p>
                    ) : null}
                        </div>
                        <div className="mt-5">
                          <h6 className="font-[MerriWeather]">Mobile No</h6>
                          <input
                            type="number"
                            placeholder="Mobile No"
                            value={values.mobile}
                            onChange={handleButtonState}
                            name="mobile"
                            autoComplete="off"
                            onBlur={handleBlur}
                            className="border rounded font-[MerriWeather] border-gray-400 py-1 px-2 w-full"
                          />
                          {errors.mobile && touched.mobile ? (
                      <p className="text-[#b22b27]">{errors.mobile}</p>
                    ) : null}
                        </div>
                        <div className="mt-5">
                          <h6 className="font-[MerriWeather]">Date of Birth</h6>
                          <input
                            type="date"
                            placeholder="Date of Birth"
                            value={values.dob}
                            onChange={handleButtonState}
                            name="dob"
                            autoComplete="off"
                            onBlur={handleBlur}
                            className="border rounded font-[MerriWeather] border-gray-400 py-1 px-2 w-full"
                          />
                          {errors.dob && touched.dob ? (
                      <p className="text-[#b22b27]">{errors.dob}</p>
                    ) : null}
                        </div>
    
                        <div className="mt-5">
                          <h6 className="font-[MerriWeather]">Password</h6>
                          <input
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleButtonState}
                            name="password"
                            autoComplete="off"
                            onBlur={handleBlur}
                            className="border rounded font-[MerriWeather] border-gray-400 py-1 px-2 w-full"
                          />
                          {errors.password && touched.password ? (
                      <p className="text-[#b22b27]">{errors.password}</p>
                    ) : null}
                        </div>
    
                        <div className="py-1"></div>
    
                        <div>
                          <p className="text-[10px] font-dark text-black ">
                            By signing up, you agree to our{" "}
                            <a href="#" className="font-medium text-blue-500">
                              terms and conditions
                            </a>
                          </p>
                        </div>
    
                        <div className="py-1"></div>
                        <div className="flex items-start py-1">
                          <div className="flex items-center h-5">
                            <input
                              id="terms"
                              aria-describedby="terms"
                              type="checkbox"
                              className="w-4 h-4 border border-gray-300 rounded bg-[#DBE2EF] focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                              required=""
                            />
                          </div>
    
                          <div className="ml-3 text-sm">
                            <label for="terms" className="font-dark  text-black">
                              I Agree{" "}
                              <a
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                href="#"
                              ></a>
                            </label>
                          </div>
                        </div>
                        <div className="flex">
                          {isCreateDisabled && <button disabled={true} className="w-full px-6 py-2 mt-4 text-white bg-[#3F72AF] rounded-lg opacity-50">
                        Create Account
                      </button>}
                      {(!isCreateDisabled) && <button disabled={false} onClick={()=>{setregister(1)}} className="w-full px-6 py-2 mt-4 text-white hover:shadow-md ease-in-out duration-300 bg-[#3F72AF] rounded-lg ">
                      Create Account
                      </button>}
                        </div>
                    <Link to="/signinStudent">
                        <p className="text-sm text-center mt-1 font-dark  text-black">
                          Already registered?{" "}
                          <a href="#" className="font-medium text-blue-500">
                            Log in
                          </a>
                        </p>
                        </Link>
                      </div>
                    </div>
                    </div>
                }
                {register===1 &&
                    <div id="second">
                    <form method="POST" className="text-[12.5px]">
                      <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Batch</h6>
                        <select
                          type="text"
                          placeholder="Batch"
                          value={values.batch}
                          onChange={handleButtonState}
                          name="batch"
                            autoComplete="off"
                            onBlur={handleBlur}
                          className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full"
                        >
                          <option value="">None</option>
                          <option value="2005-09">2005-09</option>
                          <option value="2006-10">2006-10</option>
                          <option value="2007-11">2007-11</option>
                          <option value="2008-12">2008-12</option>
                          <option value="2009-13">2009-13</option>
                          <option value="2010-14">2010-14</option>
                          <option value="2011-15">2011-15</option>
                          <option value="2012-16">2012-16</option>
                          <option value="2013-17">2013-17</option>
                          <option value="2014-18">2014-18</option>
                          <option value="2015-19">2015-19</option>
                          <option value="2016-20">2016-20</option>
                          <option value="2017-21">2017-21</option>
                          <option value="2018-22">2018-22</option>
                          <option value="2019-23">2019-23</option>
                          <option value="2020-24">2020-24</option>
                          <option value="2021-25">2021-25</option>
                          <option value="2022-26">2022-26</option>
                          <option value="2023-27">2023-27</option>
                          <option value="2024-28">2024-28</option>
                          <option value="2025-29">2025-29</option>

                        </select>
                        {errors.batch && touched.batch ? (
                      <p className="text-[#b22b27]">{errors.batch}</p>
                    ) : null}
                      </div>
                      <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Branch</h6>
                        <select
                          type="text"
                          placeholder="Branch"
                          value={values.branch}
                          onChange={handleButtonState}
                          name="branch"
                            autoComplete="off"
                            onBlur={handleBlur}
                          className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full"
                        >
                          <option value="">None</option>
                          <option value="IT">IT</option>
                          <option value="CSE">CSE</option>
                          <option value="ECE">ECE</option>
                          <option value="EEE">EEE</option>
                        </select>
                        {errors. branch && touched.branch ? (
                      <p className="text-[#b22b27]">{errors.branch}</p>
                    ) : null}
                      </div>
                      <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Shift</h6>
                        <select
                          type="text"
                          placeholder="Shift"
                          value={values.shift}
                          name="shift"
                            autoComplete="off"
                            onBlur={handleBlur}
                          onChange={handleButtonState}
                          className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full"
                        >
                          <option value="">None</option>
                          <option value="Morning">Morning</option>
                          <option value="Evening">Evening</option>
                        </select>
                        {errors.shift && touched.shift ? (
                      <p className="text-[#b22b27]">{errors.shift}</p>
                    ) : null}
                      </div>
                      <div className="mt-2">
                        <h6 className="font-[MerriWeather]">Course</h6>
                        <input
                          type="text"
                          placeholder="Course"
                          value={values.course}
                          name="course"
                            autoComplete="off"
                            onBlur={handleBlur}
                          onChange={handleButtonState}
                          className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full"
                        />
                        {errors.course && touched.course ? (
                      <p className="text-[#b22b27]">{errors.course}</p>
                    ) : null}
                      </div>
                    </form>
                    <div className="py-2"></div>
                        <div className="text-center lg:text-left">
                      <div className="flex">
                      {isButtonDisabled && <button disabled={true} onClick={postData} className="w-full px-6 py-2 mt-4 text-white bg-[#3F72AF] rounded-lg opacity-50">
                        Submit
                      </button>}
                      {(!isButtonDisabled) && <button onClick={postData} className="w-full px-6 py-2 mt-4 text-white bg-[#3F72AF] rounded-lg ">
                        Submit
                      </button>}
                      </div>
                      </div>
                    </div>
                }
                
              </div>
            </div>

            <div className=" lg:w-1/2  h-screen  hidden lg:block ">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>}
      {
      submit==1 && <div className="w-full font-defaultFont">
        <div className="mt-32"></div>
        <div className="mb-12 w-[70%] mx-auto pt-8 pb-12 rounded-lg shadow-xl">
          <img className="mx-auto w-[90%] md:w-[43%]" src={img1} alt="" />
          <img className=" w-32 md:w-56 mx-auto" src={img2} alt="" />
          <h1 className="mt-3 text-center font-bold">Your approval request for verification has been submitted.</h1>
          <h2 className="mt-2 text-center">We will send you an email upon verification soon.</h2>
        </div>
      </div>

    }

      <Footer />
    </div>
  );
};

export default Register;



// Helper function to convert image to base64
                        const convertToBase64 = (file) => {
                        return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = (error) => reject(error);
                        });
                        };
