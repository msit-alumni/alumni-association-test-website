import React from 'react'
import Navbar from "../../components/common/Navbar"
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate=useNavigate();
  const [Listview, setListview] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const roleFromLocalStorage = localStorage.getItem("role");
    if (roleFromLocalStorage === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);


  useEffect(() => {
    fetch('http://backend.msitalumni.com/AllAlumni')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
          setListview(data.alumnis.filter((alumni) => alumni.verified == "false"));
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}, []);


const update = (id) => {
  fetch('http://backend.msitalumni.com/Verify', {
    method:"put",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      alumniId: id
    })
  }).catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}
const deletedata = (id) => {
  fetch('http://backend.msitalumni.com/delete', {
    method:"delete",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      alumniId: id
    })
  }).catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

  function card(profile) {
      return <tr className='border-2 border-black'>
      <td className='border-2 border-black'>{profile.name}</td>
      <td className='border-2 border-black'>{profile.batch}</td>
      <td className='border-2 border-black'>{profile.branch}</td>
      <td><Link to={`/profile/${profile._id}`}><button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">View Profile</button></Link></td>
      <td><button onClick={() => { update(profile._id) }} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">Verify</button></td>
      <td><button onClick={() => { deletedata(profile._id) }} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">Delete</button></td>
    </tr>
  }
  function display() {
    return (
      <div className='w-full font-defaultFont'>
      <Navbar/>
      <div className='w-full mt-32'></div>
      <div className='w-full px-[30%] flex justify-between mb-32'>
        <Link to={`/admin/postEvent`}><button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">POST EVENT</button></Link>
        <Link to={``}><button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">POST NEWS</button></Link>
      </div>/admin/postNews
      <div className='ml-[10%]'>
        <h1 className='text-2xl font-bold'>VERIFY ALUMNI</h1>
        <table className='border-2 border-black'>
  <tr className='border-2 border-black'>
    <th className='border-2 border-black'>Name</th>
    <th className='border-2 border-black'>Batch</th>
    <th className='border-2 border-black'>Branch</th>
  </tr>
  {
    Listview.map((profile)=>(  
      card(profile)
    ))
  }

</table>
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
}

export default Index
