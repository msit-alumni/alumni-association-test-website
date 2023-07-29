import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Navbar from "../../components/common/Navbar";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [role, setRole] = useState();
  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [role]);
  if (role == "admin") {
    setIsAdmin(true);
  }
  const [user, setUser] = useState({
    title: "",
    location: "",
    date: "",
    desc: "",
    image: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleDescChange = (value) => {
    setUser({ ...user, desc: value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setUser({ ...user, image: base64 });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { title, location, date, desc, image } = user;
    console.log(desc);
    const res = await fetch(
      "https://msitalumni-backend.onrender.com/admin/postNews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          location,
          date,
          // category,
          desc,
          image,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
        {
            isAdmin?
            <div>
            <Navbar />
            <div className="w-full px-[20%] mt-32">
              <form method="POST">
                <div className="flex mt-4">
                  <h3 className="mr-6">Title:</h3>
                  <input
                    type="string"
                    placeholder="Enter event title"
                    value={user.title}
                    onChange={handleInputs}
                    name="title"
                    autoComplete="off"
                  />
                </div>
                <div className="flex mt-4">
                  <h3 className="mr-6">Date:</h3>
                  <input
                    type="date"
                    placeholder="date"
                    value={user.date}
                    onChange={handleInputs}
                    name="date"
                    autoComplete="off"
                  />
                </div>
                {/* <div className="flex mt-4">
                          <h3 className="mr-6">Category:</h3>
                          <input
                              type="string"
                              placeholder="Enter the category"
                              value={user.category}
                              onChange={handleInputs}
                              name="category"
                              autoComplete="off"
                          />
                      </div> */}
                <div className="flex mt-4">
                  <h3 className="mr-6">Description:</h3>
                  <ReactQuill
                    className="quill-editor"
                    theme="snow"
                    value={user.desc}
                    onChange={handleDescChange}
                  />
                </div>
                <br />
                <br />
                <br />
                <div className="flex mt-4">
                  <h3 className="mr-6">Image:</h3>
                  <input type="file" accept="image/*" onChange={handleFileUpload} />
                </div>
                <button
                  className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={postData}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
            :
            navigate("/adminLogin")
        }
    </div>
   
  );
};

export default Index;

// Helper function to convert image to base64
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
