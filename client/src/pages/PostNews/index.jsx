import React, { useState, useEffectOnce,useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Navbar from "../../components/common/Navbar";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  
  useEffect(() => {
    const roleFromLocalStorage = localStorage.getItem("role");
    if (roleFromLocalStorage === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  function postData() {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "msitalumni");
    data.append("cloud_name", "dpiswn2th");
    data.append("desc", desc);
    fetch("https://api.cloudinary.com/v1_1/dpiswn2th/image/upload", {
      method: "POST",
      body: data,
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      console.log(data.url)
      fetch("http://localhost:5000/admin/postNews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          date,
          desc,
          pic: data.url,
        }),
      })
      .then(() => {
        navigate("/about");
      })
      .catch((error) => {
        console.error("Error posting news:", error);
      });
  }).catch(err => {
      console.log(err)
  })
  };

  function renderContent(){
    if (isAdmin) {
      return <div>
      <Navbar />
      <div className="w-full px-[20%] mt-32">
          <div className="flex mt-4">
            <h3 className="mr-6">Title:</h3>
            <input
              type="string"
              placeholder="Enter event title"
              value={title} onChange={(e) => setTitle(e.target.value)}
              name="title"
              autoComplete="off"
            />
          </div>
          <div className="flex mt-4">
            <h3 className="mr-6">Date:</h3>
            <input
              type="date"
              placeholder="date"
              value={date} 
              onChange={(e) => setDate(e.target.value)}
              name="date"
              autoComplete="off"
            />
          </div>
          <div className="flex mt-4">
            <h3 className="mr-6">Description:</h3>
            <ReactQuill
              className="quill-editor"
              theme="snow"
              value={desc}
              name="desc"
              onChange={(e) => {setDesc(e.toString())}}
            />
          </div>
          <br />
          <br />
          <br />
          <div className="flex mt-4">
            <h3 className="mr-6">Image:</h3>
            <input
              type="file"
              
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button
            className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={postData}
          >
            Submit
          </button>
      </div>
    </div>;
    } else {
      navigate("/adminLogin");
      return null; // or render a loading state while navigating
    }
  };

  return <div>{renderContent()}</div>;
};

export default Index;
