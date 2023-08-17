import React, { useState,useEffect } from "react";
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
    data.append("upload_preset", "Alumni");
    data.append("cloud_name", "dx66depjo");
    data.append("desc", desc);
    fetch("https://api.cloudinary.com/v1_1/dx66depjo/image/upload", {
      method: "POST",
      body: data,
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      console.log(data.url)
      fetch("http://backend.msitalumni.com/admin/postNews", {
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
        alert("News uploaded successfully")
        navigate("/news");
      })
      .catch((error) => {
        console.error("Error posting news:", error);
      });
  }).catch(err => {
      console.log(err)
  })
  };
  const uploadImageToCloudinary = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Alumni");
    data.append("cloud_name", "dx66depjo");
    return fetch("https://api.cloudinary.com/v1_1/dx66depjo/image/upload", {
      method: "POST",
      body: data,
    })
    .then((res) => res.json())
    .then((data) => data.secure_url) // Extract the secure URL of the uploaded image
    .catch((error) => {
      console.error("Error uploading image to Cloudinary:", error);
      return null;
    });
  };

  const handlePaste = async (event) => {
    const clipboardData = event.clipboardData || window.clipboardData;
    if (clipboardData) {
      const items = clipboardData.items;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            const imageUrl = await uploadImageToCloudinary(file);
            if (imageUrl) {
              const img = `<img src="${imageUrl}" style="max-width: 100%; height: auto;" />`;
              setDesc((prevDesc) => prevDesc + img);
            }
          }
        }
      }
    }
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
            <textarea
              placeholder="Enter the description of event"
              name="desc"
              autoComplete="off"
              className="w-full h-[200px] border-black border-[1px] border-r-2"
              value={desc}
              onPaste={handlePaste}
              onChange={(e) => setDesc(e.target.value)}
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
