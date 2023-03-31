import React, { useState, useEffect } from 'react'
import { FaBars, FaCaretDown } from "react-icons/fa";
import Navbar from "../../components/common/Navbar";
import Footer from '../../components/common/Footer';
import SearchBar from '../../components/AllEvents/SearchBar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {Link} from 'react-router-dom';



export default function Index() {

    const [Listview, setListview] = useState([]);
    const [currentCategory, change] = useState(-2);
    const [searchKey, setSearchKey] = useState('');
    const [selectedCategory, changeCategory] = useState("");
    const [newList, changeList] = useState(Listview);
    
    useEffect(() => {
        fetch('https://msitalumni-backend.onrender.com/AllAlumni')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                setListview(data.alumnis.filter((alumni) => alumni.verified == "true"));
                changeList(data.alumnis.filter((alumni) => alumni.verified == "true"));
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    let categories =[
        {name:"Search by Role",id:0 ,category:"designation" , items: ['SDE', 'SDE2', 'SDE3'] },
        {name:"Course",category:"course",id:1 , items: ['btech','mtech', 'bca']},
        {name:"Year of Graduation",category:"batch",id:2, items: ['2008', '2009', '2010' , '2011' , '2012' , '2013 ' , '2014 ', '2015' , '2016']},
        {name:"Department",id:3,category:"branch", items: ['CSE', 'ECE', 'IT','EEE']},
        {name:"Current Location ",category:"city",id:4, items: ['Mumbai', 'Delhi', 'Haryana']},
        {name:"Company",id:5 ,category:"company", items: ['TCS', 'Google', 'Amazon']},
        {name:"Designation",id:6 ,category:"designation", items: ['CSE', 'ECE', 'IT']},
        {name:"Work Industry ",id:7,category:"sector", items: ['CSE', 'ECE', 'IT'] },

      ];


      const handleSearchSubmit = (event) => {
        event.preventDefault();
        handleSearchResults();
      }
      
    // blogs by category
      const handleSearchResults = () =>{
        change(-1);
      }
  
      const handleCategoryClick = (e) => {
        change(e.target.id);
        changeCategory(categories[e.target.id].category);
        
      }
      console.log(selectedCategory+"new");
      function categorySearch(category) {
        const tempList = Listview.filter((data) => 
        data[selectedCategory].toLowerCase().includes(category.value.toLowerCase().trim()));
        changeList(tempList);
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
          return <div> 
                    <button key={i} id={category.id} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#DBE2EF] border-l-[5px] w-full text-left border-[#041C32]'>{category.name}</button>
                    <div className='bg-[#FFFFFF] h-12 w-full  '>
                        <Dropdown 
                            placeholderClassName=' border-white italic' 
                            options={category.items} 
                            placeholder="search"  
                            className='border-0' 
                            controlClassName=''  
                            menuClassName=''
                            onChange={categorySearch}
                        />
                    </div>
                 </div>
        }
          return <button key={i} id={category.id} onClick={(handleCategoryClick)}   className='py-3 my-2 mr-4 pl-4 text-xl bg-[#DBE2EF] border-l-[5px] w-full text-left border-[#DBE2EF] hover:border-[#041C32]'>{category.name}</button>
      }
  
      
      if(currentCategory == -1)
      {
        newList = Listview.filter((data) => 
        data.name.toLowerCase().includes(searchKey.toLowerCase().trim()));  
      }
    
      function reset()
      {
        changeList(Listview);
      }

    return (
        <div className="font-defaultFont">
            <Navbar />
        
            <div className=" mx-[8%] top-[150px]  md:mb-[100px] md:top-[120px] relative min-h-screen  py-5">
           
                <div className="flex">

                <div className='w-[27%] pr-[2%]'>
                <div>
                <SearchBar
                  value={searchKey} 
                  formSubmit={handleSearchSubmit}
                  handleSearchKey ={e=>setSearchKey(e.target.value)}
                />
                
                <div className='pt-4'>
                    {
                        categories.map((category,i)=>(  
                          cat(category,i)
                        ))
                    }
                </div>
                </div>

            </div>


                

                    {/* <main onClick={() => setOpen(!open)} id="main" className="p-5">
                        <span  className="text-2xl font-semibold cursor-pointer hover:text-blue-500">&#9776;</span>
                        
                    </main> */}

                    <div className=" w-[73%] container mx-auto">
                        <div className="bg-[#F9F7F7]">
                            <div className=" flex ">
                                <div className="w-[1%]  bg-[#041C32]">
                                </div>
                                <div
                                    className="max-w-screen-xl px-6  bg-[#F9F7F7] w-[99%] py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                                    <nav className="flex flex-wrap    ">
                                        <div className=" ">
                                            <h1
                                                className=" place-content-start font-bold text-[#041C32]  text-2xl  mr-50 font-Merriweather">
                                                {Listview.length} Members in community</h1>
                                        </div>

                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap bg-[#f1f3f9] shadow-inner shadow-[rgba(0, 0, 0, 0.08)]">
                            {
                                newList.map((data) => (
                                          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
                                            <a href="" className="c-card block bg-[#FFFFFF] shadow-md ease-in-out duration-300 hover:shadow-2xl   overflow-hidden">
                                            <div className="">
                                                <img className=" mx-auto object-cover w-40 h-40 mb-3 mt-7 rounded-full shadow-lg"
                                                    src={data.image}
                                                    alt="" />
                                            </div>
                                            <div className=" text-center ">
                                                <h1 className="mt-2  text-xl  font-Merriweather font-bold">{data.name}</h1>
                                                <h4 className="text-semibold text-lg font-Merriweather rounded-full text-[#3F72AF]">{data.course}</h4>
                                                <div className="  items-center">
                                                    <span className="text-md text-gray-700 font-semibold font-Merriweather ">{data.branch}</span>
                                                    <p className=" text-gray-500 text-md font-Merriweather ">{data.city}</p>

                                                    <div className="   mt-3 bg-[#FFFFFF] border-t-[2px] border-[#DBE2EF]   hover:bg-[#3F72AF] text-[#3F72AF] hover:border-[#3F72AF] hover:text-white ease-in-out duration-300">
                                                        <Link to={`/profile/${data._id}`}><button className="  text-xl  font-Merriweather py-3 px-3  font-Merriweather ">
                                                            View Profile
                                                        </button></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="bg-[#F9F7F7]">
                            <div className=" flex justify-content-center ">
                                <div
                                    className="max-w-screen-xl px-6  bg-[#F9F7F7] w-[99%] py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                                    <nav className="flex flex-wrap bg-[#F9F7F7]   ">
                                        <div className=" bg-[#F9F7F7]">
                                            <h1
                                                className=" place-content-start font-bold text-[#041C32]  text-2xl  mr-50 font-Merriweather">
                                                {Listview.length} Members in community</h1>
                                        </div>

                                    </nav>
                                </div>

                                <div className="   mt-6 w-[20%] place-content-start ">
                                    <button onClick={reset} className="bg-[#3F72AF]  text-white  textlg  py-2 px-4 rounded-md font-Merriweather ">
                                        View All
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>



    )
    
}