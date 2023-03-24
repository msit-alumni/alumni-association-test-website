import React, { useState, useEffect } from 'react'
import { FaBars, FaCaretDown } from "react-icons/fa";
import Navbar from "../../components/common/Navbar";
import Footer from '../../components/common/Footer';
import SearchBar from '../../components/AllEvents/SearchBar';


export default function Index() {

    const [Listview, setListview] = useState([]);
    useEffect(() => {
        fetch('/AllAlumni')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                setListview(data.alumnis);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);
    let [open, setOpen] = useState(false);
    return (
        <div className="font-defaultFont">
            <Navbar />

            <div className=" top-[150px]  md:mb-[100px] md:top-[120px] relative min-h-screen  py-5">
           
                <div className="flex">
                

                    {/* <main onClick={() => setOpen(!open)} id="main" className="p-5">
                        <span  className="text-2xl font-semibold cursor-pointer hover:text-blue-500">&#9776;</span>
                        
                    </main> */}

                    <div className="container mx-auto">
                        <div className="bg-[#F9F7F7]">
                            <div className=" flex ">
                                <div className="w-[1%]  bg-[#041C32]">


                                </div>


                                <div
                                    className="max-w-screen-xl px-6  bg-[#F9F7F7] w-[99%] py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                                    <nav className="flex flex-wrap    ">
                                        <div className=" ">
                                            <h1
                                                className=" place-content-start font-bold text-[#041C32]  text-2xl  mr-50 font-Merriweather">
                                                54310 Members in community</h1>
                                        </div>

                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-2">
                            {
                                Listview.map((data) => (


                                          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                                        <a href="" className="c-card block bg-[#FFFFFF] shadow-md hover:shadow-xl  overflow-hidden">
                                            <div className="relative   pb-48 overflow-hidden">
                                                <img className="absolute mx-auto object-cover w-40 h-40 mb-3 ml-12 mt-7 rounded-full shadow-lg just  "
                                                    src="https://images.hindustantimes.com/img/2022/12/10/550x309/FBL-WC-2022-MATCH57-NED-ARG-250_1670640281926_1670640281926_1670640316976_1670640316976.jpg"
                                                    alt="" />
                                            </div>
                                            <div className=" text-center ">

                                                <h1 className="mt-2  text-xl  font-Merriweather font-bold">{data.name}</h1>
                                                <h4 className="text-semibold text-lg font-Merriweather rounded-full text-[#3F72AF]">{data.course}</h4>
                                                <div className="  items-center">
                                                    <span className="text-md text-gray-700 font-semibold font-Merriweather ">{data.branch}</span>
                                                    <p className=" text-gray-500 text-md font-Merriweather ">{data.city}</p>

                                                    <div className="   mt-3 bg-[#FFFFFF]   hover:bg-[#3F72AF] text-[#3F72AF]  hover:text-white">
                                                        <button className="  text-xl  font-Merriweather py-3 px-3  font-Merriweather ">
                                                            View Profile
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                ))
                            }
                        </div>
                        <div className="bg-[#F9F7F7]">
                            <div className=" flex justify-content-center ">
                                <div
                                    className="max-w-screen-xl px-6  bg-[#F9F7F7] w-[99%] py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                                    <nav className="flex flex-wrap bg-[#F9F7F7]   ">
                                        <div className=" bg-[#F9F7F7]">
                                            <h1
                                                className=" place-content-start font-bold text-[#041C32]  text-2xl  mr-50 font-Merriweather">
                                                54310 Members in community</h1>
                                        </div>

                                    </nav>
                                </div>

                                <div className="   mt-6 w-[20%] place-content-start ">
                                    <button className="bg-[#3F72AF]  text-white  textlg  py-2 px-4 rounded-md font-Merriweather ">
                                        View All
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </div>



    )
    
}
