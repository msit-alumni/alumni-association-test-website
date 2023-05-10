import React from 'react'

const index = (data) => {
  return (
    <div>
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                                        <a href="" className="c-card block bg-[#FFFFFF] shadow-md hover:shadow-xl  overflow-hidden">
                                            <div className="relative   pb-48 overflow-hidden">
                                                <img className="absolute mx-auto inset-0 h-full w-full object-cover  "
                                                    src={data.image}
                                                    alt="" />
                                            </div>
                                            <div className=" text-center ">

                                                <h1 className="mt-2  text-xl  font-Merriweather font-bold">{data.name}</h1>
                                                <h4 className="text-semibold text-lg font-Merriweather rounded-full text-[#3F72AF]">{data.company} , {data.country}</h4>
                                                <div className="  items-center">
                                                    {/* <span className="text-md text-gray-700 font-semibold font-Merriweather ">
                                                        {data.branch}</span> */}
                                                    {/* <p className=" text-gray-500 text-md font-Merriweather ">{data.city}</p>   */}

                                                    <div className="   mt-3 bg-[#FFFFFF]   ">
                                                        <button
                                                            className=" text-[#3F72AF]  text-lg  font-Merriweather py-2 px-2  font-Merriweather ">
                                                            View Profile
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </div>
    </div>
  )
}

export default index
