import React from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from '../../components/common/Footer';
import Card from '../../components/AllNews/NewsCard';
import { useState , useEffect} from 'react';
import SearchBar from '../../components/AllEvents/SearchBar';

export default function Index() {
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

  console.log(newsList);
    let categories =[
        {name:"All News",id:0},
        // {name:"Category 1",id:1},
        // {name:"Category 2",id:2},
        // {name:"Category 3",id:3},
      ];

    const [currentCategory, change] = useState(0);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchSubmit = (event) => {
      console.log(searchKey);
      event.preventDefault();
      handleSearchResults();
    }
    var filteredEventsList;
    var newEventsList;
    
  // blogs by category
    const handleSearchResults = () =>{
      change(-1);
    }

    const handleCategoryClick = (e) => {
      change(e.target.id);
    }

    let correctedCategory;
    if(currentCategory == -1)
    {
      correctedCategory = 0;
    }
    else
    {
      correctedCategory = currentCategory;
    }


    function cat(category,i) {
      if (correctedCategory == category.id) {
        return <button key={i} id={category.id} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#DBE2EF] border-l-[5px] w-full text-left border-[#041C32]'>{category.name}</button>
      }
      return <button key={i} id={category.id} onClick={(handleCategoryClick)} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#DBE2EF] border-l-[5px] w-full text-left border-[#DBE2EF] hover:border-[#041C32]'>{category.name}</button>
    }

    
    if(currentCategory == -1)
    {
      newEventsList = newsList.filter((data) => 
      data.title.toLowerCase().includes(searchKey.toLowerCase().trim()));
      console.log(searchKey + " old");    
    }
    else if(currentCategory == 0)
    {newEventsList = newsList;}
    else {newEventsList = newsList.filter(data => data.category == categories[currentCategory].name);}
    
    


  return (
    <div className='font-defaultFont'>
      <Navbar />
      <div className='h-[75px] md:h-[140px]'></div>
      <div className='w-[90%] md:w-[80%] mx-auto'>
        <div className='md:flex'>
            <div className='w-[90%] md:w-[27%] mx-auto'>
                <div>
                <SearchBar
                  value={searchKey} 
                  formSubmit={handleSearchSubmit}
                  handleSearchKey ={e=>setSearchKey(e.target.value)}
                />
                <div className='mt-6'>
                  <h1 className='text-2xl text-[#064663] '>News Categories</h1>
                  <div className='w-32 h-[2px] ml-8 mt-2 rounded bg-[#064663]'></div>

                </div>

                <div className='pt-4'>
                    {
                        categories.map((category,i)=>(
                          cat(category,i)
                        ))
                    }
                </div>
                </div>
            </div>
            <div className='w-[95%] md:w-[73%] p-0 md:p-4 mx-auto'>
            {
              newEventsList.map((data) => (
                <Card
                  key = {data._id}
                  _id = {data._id}
                  title = {data.title}
                  image = {data.image}
                  time = {data.time}
                  category = {data.category}
                  date = {data.date}
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

