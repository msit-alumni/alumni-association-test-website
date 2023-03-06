import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { FaCalendar } from "react-icons/fa";

export default function index(data) {

  return (
    <div>
      <div className="drop-shadow-xl flex w-20% bg-[#fdfdfd] pb-6 pt-6 pl-6">
        <div>
            <img
            alt="ada"
            className=" w-12/12  display-flex rounded-sm"
            src={data.image}
        />
         </div>
        <div className="pl-6">
            <h1 className="text-3xl  text-bold line-height: 28px mt-3 mb-3  text-[#000000] font:Merriweather">{data.category}</h1>
            <div className="flex mt-3">
                <HiLocationMarker className="w-[28px] h-[28px] ml-8" />
                <h3 className="text-xl font:Merriweather font-semibold ">{data.location}</h3>
            </div>
            <div className=" ml-8 ">
                <FaCalendar className="w-[28px] h-[28px] ml-4" />
                    <h2 className="text-lg font:Merriweather flex font-semibold">Start: {data.date}</h2>
                    <h2 className="text-lg font:Merriweather flex font-semibold ">End: {data.date}</h2>
            </div>
            <div className="mt-5">
                <p className="italic m-2 font:Merriweather font-semibold">{data.shortdesc}</p>
            </div>
            <div classNameName='w-[30%] my-4 bg-[#F9F7F7] rounded-lg mb-8'>
                <div className="'display flex">
                    <div className="text-center pr-60">
                        <h2 className="font-semibold pl-4dark:text-white font:Merriweather lg:text-2xl text-3xl  text-[#064663]   mx-auto"><button className=" bg-[#3F72AF] text-white font-semibold  py-2 px-4 border border-blue-500 rounded-lg">
                            Ongoing Events
                          </button></h2>
                        </div>
                <div className="text-center pl-60">
                    <h2 className="font-semibold pl-4dark:text-white font:Merriweather lg:text-2xl text-3xl  text-[#064663]   mx-auto"><button className=" bg-[#3F72AF] text-white font-semibold  py-2 px-4 border border-blue-500  rounded">
                        View
                      </button></h2>
                    </div>
                </div>
            </div>

         </div>
     </div>
    </div>
  )
}
