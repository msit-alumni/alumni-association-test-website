import React from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from '../../components/common/Footer';
import Card from '../../components/AllEvents/EventCard';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { eventsList } from '../../config/eventsData';

export default function Index() {

    let categories =[
        {name:"All Events",id:0},
        {name:"Past Events",id:1},
        {name:"Upcoming Events",id:2},
        {name:"Category 1",id:3},
        {name:"Category 2",id:4},
        {name:"Category 3",id:5},
      ];

      const [currentCategory, change] = useState(0);

    const handleCategoryClick = (e) => {
      change(e.target.id);
    }

    function cat(category,i) {
      if (currentCategory == category.id) {
        return <button key={i} id={category.id} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#DBE2EF] border-l-[5px] w-full text-left border-[#041C32]'>{category.name}</button>
      }
      return <button key={i} id={category.id} onClick={(handleCategoryClick)} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#DBE2EF] border-l-[5px] w-full text-left border-[#DBE2EF] hover:border-[#041C32]'>{category.name}</button>
    }

    var newEventsList;

    if(currentCategory == 0)
    {newEventsList = eventsList;}
    if(currentCategory == 1)
    {newEventsList = eventsList;}
    
  return (
    <div className='font-defaultFont'>
      <Navbar />
      <div className='h-[140px]'></div>
      <div className='w-[80%] mx-auto'>
        <div className='flex'>
            <div className='w-[30%]'>
                <div>
                <form action="" className='flex pt-4 text-xl'>
                    <input placeholder='Search by title' type="text" className='outline-0 border-b-2 w-[80%] h-12 border-[#3F72AF] pl-4'/>
                    <button className='mx-4 text-2xl text-[#3F72AF]'><BiSearch/></button>
                </form>

                <div className='pt-4'>
                    {
                        categories.map((category,i)=>(
                          cat(category,i)
                        ))  
                    }
                </div>
                </div>
            </div>
            <div className='w-[70%] p-4'>
            {
              newEventsList.map((data) => (
                <Card
                  id = {data.id}
                  titles = {data.title}
                  image = {data.image}
                  location = {data.location}
                  category = {data.category}
                  date = {data.date}
                  shortdesc = {data.shortdesc}
                  desc = {data.desc}
                />
              ))
            }
            </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
