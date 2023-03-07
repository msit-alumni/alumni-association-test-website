import React from 'react'

const index = ({value, handleSearchKey, formSubmit, clearSearch}) => {
  return (
    <div className='pt-10'>
      <form onSubmit={formSubmit}>
        <input 
            className='mr-8 p-2 border-2 outline-0'
            type="text" 
            placeholder='Search by tags'
            onChange={handleSearchKey} 
            value = {value}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button className='mr-8 p-2 border-2 px-6'>SEARCH</button>
      </form>
    </div>
  )
}

export default index
