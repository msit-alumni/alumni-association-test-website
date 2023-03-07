import React, { useState } from 'react'
import Header from './../../components/Home/Header'
import Searchbar from './../../components/Home/Searchbar'
import BlogList from './../../components/Home/Bloglist'
import {bloglist} from './../../config/data'

const Index = () => {

  const [blogs, setBlogs] = useState(bloglist);
  const [searchKey, setSearchKey] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  }
// blogs by category
  const handleSearchResults = () =>{
    var allBlogs = bloglist;
    const filteredBlogs = allBlogs.filter((blog) => 
    blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    console.log(filteredBlogs);
      if(filteredBlogs.length>0)
      {
        setBlogs(filteredBlogs);
      }
      setBlogs();
  }
  const handleClearSearch = () =>
  {
    setBlogs(bloglist);
    setSearchKey('');
    console.log("clear");
  }
  return (
    <div>
      <Header/>
      <Searchbar 
        value={searchKey} 
        formSubmit={handleSearchSubmit} 
        handleSearchKey ={e=>setSearchKey(e.target.value)}
        clearSearchKey ={handleClearSearch}
      />
      <BlogList blogs = {blogs}/>
    </div>
  )
}

export default Index

