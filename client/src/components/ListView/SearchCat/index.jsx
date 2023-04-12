import React from 'react'
import { BiSearch } from 'react-icons/bi';

export default function index({value, handleSearchKey, formSubmit}) {
  return (
    <div>
      <form onSubmit={formSubmit} className='flex pb-3 pl-2 text-lg'>
            <input
                onChange={handleSearchKey}
                type="text" 
                placeholder='Search' 
                value = {value}
                className='outline-0 border-b-2 w-[80%] h-10 border-[#3F72AF] pl-4'
            />
            <button className='mx-4 text-2xl text-[#3F72AF]'><BiSearch/></button>
        </form>
    </div>
  )
}