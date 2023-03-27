
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
import RegisterStudent from "../src/pages/registerStudent"
import LoginStudent from "../src/pages/loginStudent"
import PostEvent from "../src/pages/PostEvent"
import Profile from "../src/pages/Profile"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/album/:name' exact element={<Album />} />
        <Route path='/signupAlumni' element={<Register />} />
        <Route path='/signinAlumni' element={<Register2 />} />
        <Route path='/events/:eventId' exact element={<EventPage />} />
        <Route path='/AllEvents' exact element={<AllEvents />} />
        <Route path='/AllNews' exact element={<AllNews />} />
        <Route path='/Listview' exact element={<Listview />} />
        <Route path='/signupStudent' exact element={<RegisterStudent />} />
        <Route path='/signinStudent' exact element={<LoginStudent />} />
        {/* <Route path='/admin' exact element={<Admin />} /> */}
        {/* <Route path='/admin/postNews' exact element={<PostNews />} /> */}
        <Route path='/admin/postEvent' exact element={<PostEvent />} />
        <Route path='/profile/:_id' exact element={<Profile />} />
        
      </Routes>
    </div>
  );
};

export default App;

