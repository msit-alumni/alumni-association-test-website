import React, { useState, useEffect ,useRef} from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Navbar from "../../components/common/Navbar";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    const roleFromLocalStorage = localStorage.getItem("role");
    if (roleFromLocalStorage === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  const [user, setUser] = useState({
    title: "",
    location: "",
    date: "",
    desc: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleDescChange = (value) => {
    setUser({ ...user, desc: value });
  };


  useEffect(() => {
    if (url) {
      const { title, location, date, desc } = user;
      console.log(desc);
      fetch("/admin/postNews", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
          // "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          location,
          date,
          desc,
          pic: url,
        }),
      })
      .then(() => {
        navigate("/about");
      })
      .catch((error) => {
        console.error("Error posting news:", error);
      });
    }
  }, [url, navigate, user]);

  const postData =  () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "msitalumni");
    data.append("cloud_name", "dpiswn2th");

    fetch("https://api.cloudinary.com/v1_1/dpiswn2th/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        console.log(url);
      })
      .catch((err) => {
        console.log(err);
      });
   
  };
  function display() {
    return (
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
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
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
    );
  }
  const renderContent = () => {
    if (isAdmin) {
      return <div>{display()}</div>;
    } else {
      navigate("/adminLogin");
      return null; // or render a loading state while navigating
    }
  };

  return <>{renderContent()}</>;
};

export default Index;
