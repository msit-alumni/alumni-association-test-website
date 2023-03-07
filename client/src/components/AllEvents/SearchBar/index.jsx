import React from 'react'
import { BiSearch } from 'react-icons/bi';

export default function index({value, handleSearchKey, formSubmit}) {
  return (
    <div>
      <form onSubmit={formSubmit} className='flex pt-4 text-xl'>
            <input
                onChange={handleSearchKey}
                type="text" 
                placeholder='Search by title' 
                value = {value}
                className='outline-0 border-b-2 w-[80%] h-12 border-[#3F72AF] pl-4'
            />
            <button className='mx-4 text-2xl text-[#3F72AF]'><BiSearch/></button>
        </form>
    </div>
  )
}
