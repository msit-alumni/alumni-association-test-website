import React from 'react'
import Navbar from "../../components/common/Navbar"
import {Link} from 'react-router-dom';

const index = () => {
  return (
    <div className='w-full font-defaultFont'>
      <Navbar/>
      <div className='w-full mt-32'></div>
      <div className='w-full px-[30%] flex justify-between mb-32'>
        <Link to={`/admin/postEvent`}><button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">POST EVENT</button></Link>
        <Link to={`/admin/postNews`}><button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">POST NEWS</button></Link>
      </div>
      <div className='ml-[10%]'>
        <h1 className='text-2xl font-bold'>VERIFY ALUMNI</h1>
      </div>

    </div>
  )
}

export default index
