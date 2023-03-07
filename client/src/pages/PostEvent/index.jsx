import React, { useState } from "react";

const Index = () => {

    const [user,setUser]=useState({
        title:"",location:"",date:"",status:"",category:"",desc:"",image:"",shortdesc:""
      })
      let name,value;
      const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        console.log(name,value)
        setUser({...user,[name]:value})
      }
  
    const postData = async (e) => {
      e.preventDefault();
      const {title,location,date,status,category,desc,image,shortdesc}=user;
      const res = await fetch("/admin/postEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            location,
            date,
            status,
            category,
            desc,
            image,
            shortdesc
        }),
      });
      const data = await res.json();
      console.log(data);
    };

  return (
    <div>
      <form method='POST'>
        <input type="string"
                placeholder="title"
                value={user.title}
                onChange={handleInputs}
                name="title"
                autoComplete="off" 
        />
        <input type="string"
                placeholder="location"
                value={user.location}
                onChange={handleInputs}
                name="location"
                autoComplete="off" 
        />
        <input type="string"
                placeholder="status"
                value={user.status}
                onChange={handleInputs}
                name="status"
                autoComplete="off" 
        />
        <input type="string"
                placeholder="category"
                value={user.category}
                onChange={handleInputs}
                name="category"
                autoComplete="off" 
        />
        <input type="string"
                placeholder="date"
                value={user.date}
                onChange={handleInputs}
                name="date"
                autoComplete="off" 
        />
        <input type="string"
                placeholder="shortdesc"
                value={user.shortdesc}
                onChange={handleInputs}
                name="shortdesc"
                autoComplete="off" 
        />
        <input type="string"
                placeholder="desc"
                value={user.desc}
                onChange={handleInputs}
                name="desc"
                autoComplete="off" 
        />
        <input type="string"
                placeholder="image"
                value={user.image}
                onChange={handleInputs}
                name="image"
                autoComplete="off" 
        />
        <button onClick={postData}>SUBMIT</button>
      </form>
    </div>
  )
}

export default Index
