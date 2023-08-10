import React, { useState, useEffect } from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from '../../components/common/Footer';
import SearchBar from '../../components/AllEvents/SearchBar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {Link} from 'react-router-dom';
import SearchCat from '../../components/ListView/SearchCat';
import { Country } from 'country-state-city';



export default function Index() {
    const countries=Country.getAllCountries();
    // console.log(countries)
    const updatedCountries = countries.map((country) => ({
        label: country.name,
        value: country.name,
        ...country
      }));

    const [Listview, setListview] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [searchKey2, setSearchKey2] = useState('');
    const [searchKey3, setSearchKey3] = useState('');
    const [selectedCategory, changeCat] = useState("");
    const [currentCategory, changeCategory] = useState(-2);
    const [tempList, changeTempList] = useState([]);
    const [select, changeSelect] = useState(0);
    const [select2, changeSelect2] = useState(0);
    const [country,setCountry]=useState();
    useEffect(() => {
        fetch('https://msitalumni-backend.onrender.com/AllAlumni',{
        //   headers: {
        //     "Authorization": "Bearer " + localStorage.getItem("jwt")
        // }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                setListview(data.alumnis.filter((alumni) => alumni.verified == "true"));
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);
    
    useEffect(() => {
        if (country) {
          console.log(country);
          var temp2List = Listview.filter((data) => data[selectedCategory] == country); 
          console.log(temp2List);
          changeTempList(temp2List);
        }
      }, [country, selectedCategory]);

    let categories =[
        {name:"Designation",id:0 ,category:"designation" , items: ['SDE', 'SDE2', 'SDE3'] },
        {name:"Company",id:1,category:"company", items: ['TCS', 'Google', 'Amazon']},
        {name:"Batch",category:"batch",id:2, items: ['2001-05','2002-06','2003-07','2004-08','2005-09','2006-10','2007-11','2008-12','2009-13','2010-14','2011-15','2012-16','2013-17','2014-18','2015-19','2016-20','2017-21','2018-22','2019-23']},
        {name:"Department",id:3,category:"branch", items: ['CSE', 'ECE', 'IT','EEE']},
        {name:"Country",category:"country",id:4, items: countries},
     ];


      const handleSearchSubmit = (event) => {
        event.preventDefault();
        handleSearchResults();
      }
      const handleSearchSubmit2 = (event) => {
        event.preventDefault();
        handleSearchResults2();
      }
      const handleSearchSubmit3 = (event) => {
        event.preventDefault();
        handleSearchResults3();
      }
      
    // blogs by category
      const handleSearchResults = () =>{
        changeCategory(-1);
      }
      const handleSearchResults2 = () =>{
        changeCategory(0);
      }
      const handleSearchResults3 = () =>{
        changeCategory(1);
      }

      const handleCategoryClick = (e) => {
        changeCat(categories[e.target.id].category);
        changeCategory(e.target.id);
      }
      
  
  
      function cat(category,i) {
        if (currentCategory == 0 && 0 == category.id)
        {   
            return <div>
                        <button key={i} id={category.id} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#DBE2EF] border-l-[5px] w-full text-left border-[#041C32]'>{category.name}</button>
                        <SearchCat  
                            value={searchKey2} 
                            formSubmit={handleSearchSubmit2}
                            handleSearchKey ={e=>setSearchKey2(e.target.value)}
                            />
            </div>
        }
        if (currentCategory == 1 && 1 == category.id)
        {   
            return <div>
                        <button key={i} id={category.id} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#DBE2EF] border-l-[5px] w-full text-left border-[#041C32]'>{category.name}</button>
                        <SearchCat
                            value={searchKey3} 
                            formSubmit={handleSearchSubmit3}
                            handleSearchKey ={e=>setSearchKey3(e.target.value)}
                            />
            </div>
        }
        if(currentCategory==4&&4==category.id){
        return <div>  <button key={i} id={category.id} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#DBE2EF] border-l-[5px] w-full text-left border-[#041C32]'>{category.name}</button>
                        <select
                        type="text"
                        placeholder="Country"
                        // value="India"
                        name="country"
                        autoComplete="off"
                        // onBlur={handleBlur}
                        onChange={(event) => {
                          setCountry(event.target.value)
                          changeSelect2(1);
                          
                          
                          
                        }}
                        // onChange={categorySearch}
                        className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full"
                      >
                        <option value="">--Select Country--</option>
                        {updatedCountries.map((country) => (
                          <option key={country.id} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
          </div>  
        }
        if (currentCategory == category.id) {
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

        // else if (correctedCategory == 0)
        // {
        //     return  <div> 
        //     <button key={i} id={category.id} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#DBE2EF] border-l-[5px] w-full text-left border-[#041C32]'>{category.name}</button>
        //     <div className='bg-[#FFFFFF] h-12 w-full  '>
        //         <Dropdown 
        //             placeholderClassName=' border-white italic' 
        //             options={category.items} 
        //             placeholder="search"  
        //             className='border-0' 
        //             controlClassName=''  
        //             menuClassName=''
        //             onChange={categorySearch}
        //         />
        //     </div>
        //  </div>
        // }
          return <button key={i} id={category.id}  onClick={(handleCategoryClick)} className='py-3 my-2 mr-4 pl-4 text-xl bg-[#DBE2EF] border-l-[5px] w-full text-left border-[#DBE2EF] hover:border-[#041C32]'>{category.name}</button>
      }

      function reset()
      {
        console.log("reset")
        newList = Listview;
        setSearchKey('');
        changeSelect(0);
      }

      function categorySearch(category) {
        changeSelect(1);
        console.log(select);
        console.log(category);
        console.log(category.value)
        var temp2List = Listview.filter((data) => 
        data[selectedCategory].toLowerCase().includes(category.value.toLowerCase().trim())); 
        console.log(temp2List)   
        changeTempList(temp2List);
      }



      var newList;
      if(currentCategory == -2)
      {
        newList = Listview;
      }
      else if (currentCategory == -1)
      {
        newList = Listview.filter((data) => 
        data.name.toLowerCase().includes(searchKey.toLowerCase().trim()));
      }
      else if (currentCategory == 0)
      {
        newList = Listview.filter((data) => 
        data.designation.toLowerCase().includes(searchKey2.toLowerCase().trim()));
      }
      else if (currentCategory == 1)
      {
        newList = Listview.filter((data) => 
        data.company.toLowerCase().includes(searchKey3.toLowerCase().trim()));
      }else if (currentCategory == 4 && select2)
      {
        newList = tempList;
      }
      else{
        if(select === 0)
        {
            newList = Listview;
            console.log("1stwala");
        }
        else
        {
            newList = tempList;
            console.log("2ndwala");
        }
      }

      return (
        <div className="font-defaultFont">
            <Navbar />
        
            <div className=" mx-[8%] top-[65px] md:mb-[100px] md:top-[120px] relative min-h-screen  py-5">
           
                <div className="md:flex">

                <div className='w-[100%] md:w-[27%] pr-[2%]'>
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

                    <div className=" py-4 w-[100%]  container mx-auto">
                        <div className="bg-[#F9F7F7]">
                            <div className=" flex ">
                                <div className="w-[1%]  bg-[#041C32]">
                                </div>
                                <div
                                    className="max-w-screen-xl px-6  bg-[#F9F7F7] w-[99%] py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                                    <nav className="flex flex-wrap    ">
                                        <div className=" flex justify-between w-[100%]">
                                            <h1
                                                className=" place-content-start font-bold text-[#041C32]  text-lg md:text-2xl  mr-50 font-Merriweather">
                                                {newList.length} Members in community</h1>
                                                <button onClick={reset} className="bg-[#3F72AF]  text-white  text-lg   py-2 px-4 rounded-md font-Merriweather ">
                                        View All
                                    </button>
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
                                                <h4 className="text-semibold text-lg font-Merriweather rounded-full text-[#3F72AF]">{data.company} </h4>
                                                <div className="  items-center">
                                                    
                                                    <p className=" text-gray-500 text-md font-Merriweather ">{data.city}</p>

                                                    <div className="   mt-3 bg-[#FFFFFF] border-t-[2px] border-[#DBE2EF]   hover:bg-[#3F72AF] text-[#3F72AF] hover:border-[#3F72AF] hover:text-white ease-in-out duration-300">
                                                        <Link to={`/profile/${data._id}`}><button className="  text-lg  font-Merriweather py-2 px-2  font-Merriweather ">
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
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
    
}