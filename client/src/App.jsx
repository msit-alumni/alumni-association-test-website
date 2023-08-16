
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "../src/pages/Home"
import Album from "../src/pages/Album"
import Register from "../src/pages/Register"
import Register2 from "../src/pages/Register2"
import EventPage from "../src/pages/EventPage"
import AllEvents from "../src/pages/AllEvents"
import AllNews from "../src/pages/AllNews"
import Listview from "../src/pages/Listview"
import RegisterStudent from "./pages/registerStudent"
import LoginStudent from "./pages/loginStudent"
import PostEvent from "../src/pages/PostEvent"
import PostNews from "../src/pages/PostNews"
import Profile from "../src/pages/Profile"
import NewsPage from "../src/pages/NewsPage"
import Admin from "../src/pages/Admin"
import About from "./pages/About"
import Contact from "../src/pages/Contact"
import MapView from "../src/pages/MapView"
import AlumniDashboard from "../src/pages/alumniDashboard"
import StudentDashboard from "../src/pages/studentDashboard"
import AdminLogin from "../src/pages/adminLogin"
import Editprofile from "../src/pages/Editprofile"


export const URL=process.env.REACT_URL


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/album/:name' exact element={<Album />} />
        <Route path='/signupAlumni' element={<Register />} />
        <Route path='/signinAlumni' element={<Register2 />} />
        <Route path='/events/:_id' exact element={<EventPage />} />
        <Route path='/events' exact element={<AllEvents />} />
        <Route path='/news' exact element={<AllNews />} />
        <Route path='/members' exact element={<Listview />} />
        <Route path='/signupStudent' exact element={<RegisterStudent />} />
        <Route path='/signinStudent' exact element={<LoginStudent />} />
        <Route path='/admin' exact element={<Admin />} />
        <Route path='/admin/postEvent' exact element={<PostEvent />} />
        <Route path='/admin/postNews' exact element={<PostNews />} />
        <Route path='/profile/:_id' exact element={<Profile />} />
        <Route path='/news/:_id' exact element={<NewsPage />} />
        <Route path='/contactUs' exact element={<Contact />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/mapView' exact element={<MapView />} />
        <Route path='/alumni/profile' exact element={<AlumniDashboard />} />
        <Route path='/student/profile' exact element={<StudentDashboard />} />
        <Route path='/adminLogin' exact element={<AdminLogin />} />
        <Route path='/editprofile' exact element={<Editprofile />} />
      </Routes>
    </div>
  );
};

export default App;

