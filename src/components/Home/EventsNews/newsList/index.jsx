import React from 'react'
import {newsList} from '../../../../config/newsData'
import NewsPlate from './newsPlate'
const index = () => {
  const lastFour = newsList.slice(-4);
  
  return (
    <div>
        {lastFour.map((event)=>(
        <NewsPlate
          title={event.title} 
          key={event.id}
          avatar={event.avatar} 
          date={event.date}
        />
      ))}
    </div>
  )
}

export default index
