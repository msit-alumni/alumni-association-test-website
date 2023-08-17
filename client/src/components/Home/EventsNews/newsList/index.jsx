import React from 'react'
import NewsPlate from './newsPlate'
import { useState , useEffect} from 'react';
const Index = () => {

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch('http://backend.msitalumni.com/getAllNews')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        setNewsList(data.news);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const lastFour = newsList.slice(-4);
  
  return (
    <div>
        {lastFour.map((event)=>(
        <NewsPlate
          _id = {event._id}
          title={event.title} 
          key={event.id}
          image={event.image} 
          date={event.date}
        />
      ))}
    </div>
  )
}

export default Index
