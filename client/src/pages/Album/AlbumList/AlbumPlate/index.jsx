import React from 'react'
import {useState} from 'react'

const Index = (card, photo) => {
  
  const [imageOpen, setImageOpen] = useState(false);
  const openImage = () => {
    setImageOpen(true);
  }

  return (
    <div>
      <img onClick={openImage} className='rounded-xl h-40' src={card.photo} alt="a" />
      {/* {imageOpen && 
        <div className='bg-slate-400 h-[100%] w-[100%] absolute'>
          <img className='w-[80%] h-auto z-50 absolute top-[10%] left-[10%] bg-slate-400' src={card.photo} alt="" />
        </div>
      } */}
    </div>
  )
}

export default Index
