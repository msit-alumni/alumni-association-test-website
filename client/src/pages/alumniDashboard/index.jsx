import React, { useState, useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { BiShoppingBag } from "react-icons/bi";
import { SlGraduation } from "react-icons/sl";
import { AiOutlineTrophy } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsFacebook } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { useParams, useNavigate, Link } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(0);
  const [achievement, setAchievement] = useState("");
  const [isAlumni, setIsAlumni] = useState(false);
  const [updated,setUpdate]=useState(false);
  useEffect(() => {
    const roleFromLocalStorage = localStorage.getItem("role");
    if (roleFromLocalStorage === "alumni") {
      setIsAlumni(true);
    } else {
      setIsAlumni(false);
    }
  }, []);
  // useEffect(()=>{
  //   if(updated){
  //     window.location.reload();
  //     setUpdate(false)
  //   }
  // }
  // ,[updated])
  const updatereload=(id)=>{
    update(id);
    
    window.location.reload()
  }
  const update = (id) => {
    fetch('http://backend.msitalumni.com/updateprofile', {
      method:"put",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        achievement,
        alumniId: id
      }) 
    }
    )
    .then(()=>{
      setUpdate(true)
      console.log("Update successful:", data.achievement);
    
     
    }).catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }


  const fetchData = () => {
    fetch("http://backend.msitalumni.com/alumni/profile", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("Fetched data:", result.alumni);
      setData(result.alumni); // Update the state with fetched data
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });
  };
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  function display(profile) {
    return (
      <div className="bg-white">
        <Navbar />
        <div className="mx-[10%] mt-32 font-defaultFont">
          <div className="bg-[#f5f7fb] w-full px-[10%] py-8">
            <div className="flex">
              <img  src={profile.image} className="object-contain h-60 w-40" alt="" />
              <div className="px-[3%] w-full ml-[14%]">
                <h1 className="mt-16 mb-2 text-2xl font-bold">
                  {profile.name}
                </h1>
                <div className="flex justify-between mt-4">
                  <div className="text-md">
                    <p>Role: {profile.designation}</p>
                    <p>Company: {profile.company}</p>
                    <p>Location: {profile.country}</p>
                  </div>
                  <div className="text-md pl-6 border-l-[3px] border-[#DBE2EF]">
                    <p>Course: B.Tech</p>
                    <p>Branch: {profile.branch}</p>
                    <p>Batch: {profile.batch}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[70%] px-[4%] py-12">
              {profile.company&&
              <div>
              <div className="flex text-3xl ">
              <BiShoppingBag />
              <h1 className="ml-4 mt-[4px] text-xl">Work Experience</h1>
            </div>
            <div className="text-[14px] mt-6">
              <h2 className="font-bold text-lg">{profile.company}</h2>
              <p className="mt-2">{profile.designation}</p>
              <p className="mt-2"></p>
              <p className="mt-2">{profile.country}</p>
            </div>
            </div>}
              {/* <div className='w-[40%] h-[2px] rounded-xl my-8 bg-[#DBE2EF]'></div>
                  <div className='text-[14px] mt-6'>
                      <h2 className='font-bold text-lg'>Infosys</h2>
                      <p className='mt-2'>Software Developer</p>
                      <p className='mt-2'>2015-2020</p>
                      <p className='mt-2'>Noida</p>
                  </div> */}
              <div className="w-full h-[2px] rounded-xl my-8 bg-black"></div>
              <div className="flex text-3xl ">
                <SlGraduation />
                <h1 className="ml-4 mt-[4px] text-xl">Educational Details</h1>
              </div>
              <div className="text-[14px] mt-6">
                <h2 className="font-bold text-lg">
                  Maharaja Surajmal Institute of Technology
                </h2>
                <p className="mt-2">BTECH</p>
                <p className="mt-2">{profile.batch}</p>
              </div>
              {
                profile.universityName&&
                <div>
                <div className='w-[40%] h-[2px] rounded-xl my-8 bg-[#DBE2EF]'></div>
                  <div className='text-[14px] mt-6'>
                      <h2 className='font-bold text-lg'>{profile.universityName}</h2>
                      <p className='mt-2'>{profile.degreeName}</p>
                  </div></div>
              }
              <div>
              <div className="w-full h-[2px] rounded-xl my-8 bg-black"></div>
              <div className="flex text-3xl ">
                <AiOutlineTrophy />
                <h1 className="ml-4 mt-[4px] text-xl">Achievements</h1>
              </div>
              <p className="mt-2">{profile.achievement}</p>
                {
                edit==1 && (
                  <div>
                    <input type="text" className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full" placeholder="Enter your achievement" name="achievement" value={achievement} onChange={(e)=>{setAchievement(e.target.value)}} />
                 <button onClick={()=>{updatereload(profile._id)}}>
                 Save </button>
                  </div>
                )
              }
                <button
                onClick={()=>{setEdit(1)}}
                className="bg-theme md:text-[9px] mt-10 xl:text-[15px] font-normal tracking-wider leading-5 text-[#F9F7F7] hover:text-theme border-[#F9F7F7] border-2 font-defaultFont px-5 py-1 rounded md:ml-8 hover:bg-[#F9F7F7] duration-500">
                Edit
              </button>
              </div>
              <div className="text-sm mt-6">
                <h2 className="font-bold text-lg"></h2>
                <p className="mt-2"></p>
              </div>
            </div>
            <div className="w-[30%] my-12">
              <div className="mx-2 p-8 bg-[#F9F7F7]">
                <div className="flex">
                  <CgProfile className="text-2xl" />
                  <h1 className="ml-4 ">Personal Details</h1>
                </div>
                <div className="mt-6 flex text-md w-full">
                  <div>
                    <h3 className="w-[100px]">About me:</h3>
                  </div>
                  <div>
                    <h3>
                      I am {profile.name} currently working as{" "}
                      {profile.designation} at {profile.company}.
                    </h3>
                  </div>
                </div>
                <div className="mt-6">
                  <h1>DOB: {profile.dob}</h1>
                </div>
                <div className="mt-6">
                  <h1></h1>
                </div>
                <div className="mt-6">
                  <div className="w-[50%] flex mx-auto justify-between text-3xl">
                    <BsFacebook />
                    <GrLinkedinOption />
                    <AiFillTwitterCircle />
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/signinAlumni");
                }}
                className="bg-theme md:text-[9px] mt-10 xl:text-[15px] font-normal tracking-wider leading-5 text-[#F9F7F7] hover:text-theme border-[#F9F7F7] border-2 font-defaultFont px-5 py-1 rounded md:ml-8 hover:bg-[#F9F7F7]
  duration-500"
              >
                Logout
              </button>
              {/* <Link to="/editprofile"><button
                className="bg-theme md:text-[9px] mt-10 xl:text-[15px] font-normal tracking-wider leading-5 text-[#F9F7F7] hover:text-theme border-[#F9F7F7] border-2 font-defaultFont px-5 py-1 rounded md:ml-8 hover:bg-[#F9F7F7]
  duration-500"
              >
                Edit profile
              </button></Link> */}
              {/* <div className='mx-2 p-8 mt-12 bg-[#F9F7F7]'>
                      <div className='flex'>
                          <BsPeople className='text-2xl'/>
                          <h1 className='ml-4 '>BatchMates</h1>
                      </div>
                      <div className='grid grid-cols-3 mt-6'>
                         {
                            MatesList.map((id) =>(<div>
                                    <img className='mx-auto rounded-full w-[60px] h-[60px]' src={id.image} alt="" />
                                    <h3 className='text-center text-sm mt-2'>{id.name}</h3>
                                </div>))
                         }
                      </div>
                      <div className='mt-6 w-full'>
                          <button className='mx-[30%] text-lg rounded-md border-[2px] px-4 py-2 border-[#112D4E] hover:bg-[#112D4E] hover:text-white ease-in-out duration-300'>View All</button>
                      </div>
                  </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  const renderContent = () => {
    if (isAlumni) {
      return <div>{display(data)}</div>;
    } else {
      navigate("/signinAlumni");
      return null; // or render a loading state while navigating
    }
  };
  
  return(
     <>{renderContent()}</>
  );
};

export default Index;
