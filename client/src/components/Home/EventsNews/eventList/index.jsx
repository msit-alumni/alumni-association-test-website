import React from 'react'
import EventsPlate from './eventsPlate'
import { useState , useEffect} from 'react';
const Index = () => {
  
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    fetch('http://backend.msitalumni.com/AllEvent')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        setEventsList(data.events);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
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
        />
      ))}
    </div>
  )
}

export default Index
