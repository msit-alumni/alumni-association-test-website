import React, { useState ,useEffect ,useRef} from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Navbar from "../../components/common/Navbar";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate=useNavigate();
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");
    const [status, setStatus] = useState("");

    const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const roleFromLocalStorage = localStorage.getItem("role");
    if (roleFromLocalStorage === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);




  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertToBase64(file);
  //   setUser({ ...user, image: base64 });
  // };

  // const postData = async (e) => {
  //   e.preventDefault();
  //   const { title, location, date, status, desc, image } = user;
  //   console.log(desc);
  //   const res = await fetch(
  //     "http://localhost:5000/admin/postEvent",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title,
  //         location,
  //         date,
  //         status,
  //         desc,
  //         image,
  //       }),
  //     }
  //   );
  //   const data = await res.json();
  //   console.log(data);
  // };

  
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
      fetch("http://localhost:5000/admin/postEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          location,
          date,
          status,
          desc,
          image: data.url,
        }),
      })
      .then(() => {
        console.log(title, location,date,status,desc,data.url);
        navigate("/about");
      })
      .catch((error) => {
        console.error("Error posting event:", error);
      });
  }).catch(err => {
      console.log(err)
  })
  };
  const handleDescriptionChange = async (value) => {
    setDesc(value);
  };

  const handleQuillPaste = async (event) => {
    const clipboardData = event.clipboardData || window.clipboardData;
    const items = clipboardData.items;

    for (const item of items) {
      if (item.kind === "file" && item.type.includes("image")) {
        const file = item.getAsFile();

        // Upload the image to Cloudinary
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "Alumni");
        data.append("cloud_name", "dx66depjo");

        try {
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/dx66depjo/image/upload",
            {
              method: "POST",
              body: data,
            }
          );
          const imageData = await response.json();
          const imageUrl = imageData.url;

          // Get the current editor content
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection();
          // Insert the image at the cursor position
          editor.insertEmbed(range.index, "image", imageUrl);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    }
  };

  const quillRef = useRef(null);
  function display() {
    
    return (
      <div>
      <Navbar />
      <div className="w-full px-[20%] mt-32">
          <div className="flex mt-4">
            <h3 className="mr-6">Title:</h3>
            <input
              type="string"
              placeholder="Enter event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              autoComplete="off"
            />
          </div>
          <div className="flex mt-4">
            <h3 className="mr-6">Status:</h3>
            <select
              type="string"
              placeholder="Enter the status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              name="status"
              autoComplete="off"
            >
              <option>None</option>
              <option value="Past">Past</option>
              <option value="Upcoming">Upcoming</option>
            </select>
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
            <h3 className="mr-6">Location:</h3>
            <input
              type="string"
              placeholder="Enter the location of event"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              name="location"
              autoComplete="off"
            />
          </div>
          <div className="flex mt-4">
            <h3 className="mr-6">Description:</h3>
            <ReactQuill
              className="quill-editor"
              theme="snow"
              value={desc}
              onChange={handleDescriptionChange}
              onPaste={handleQuillPaste}
            />
          </div>
          <br />
          <br />
          <br />
          <div className="flex mt-4">
            <h3 className="mr-6">Image:</h3>
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button
            className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={postData}
          >
            Submit
          </button>
      </div>
    </div>
    )
  }

  const renderContent = () => {
    if (isAdmin) {
      return <div>{display()}</div>;
    } else {
      navigate("/adminLogin");
      return null; // or render a loading state while navigating
    }
  };
  
  return(
     <>{renderContent()}</>
  );
};

export default Index;


