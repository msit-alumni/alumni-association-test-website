import React from 'react'
import {eventsList} from '../../../../config/eventsData'
import EventsPlate from './eventsPlate'
const index = () => {
  const lastThree = eventsList.slice(-3);
  
  return (
    <div>
        {lastThree.map((event)=>(
        <EventsPlate
          _id = {event._id}
          title={event.title}
          image={event.image}
          location = {event.location} 
          key={event.id}
          date={event.date}
          shortdesc={event.shortdesc}
        />
      ))}
    </div>
  )
}

export default index
