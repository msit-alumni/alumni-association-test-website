import React from 'react'
import {eventsList} from '../../../../config/eventsData'
import EventsPlate from './eventsPlate'
const index = () => {
  const lastFour = eventsList.slice(-4);
  
  return (
    <div>
        {lastFour.map((event)=>(
        <EventsPlate
          title={event.title} 
          location = {event.location} 
          key={event.id}
          monthYear={event.monthYear} 
          date={event.date}
        />
      ))}
    </div>
  )
}

export default index
