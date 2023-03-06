
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "../src/pages/Home"
import Album from "../src/pages/Album"
import Register from "../src/pages/Register"
import Register2 from "../src/pages/Register2"
import EventPage from "../src/pages/EventPage"
import AllEvents from "../src/pages/AllEvents"
import RegisterStudent from "../src/pages/registerStudent"
import LoginStudent from "../src/pages/loginStudent"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/album/:name' exact element={<Album />} />
        <Route path='/signupAlumni'  element={<Register />} />
        <Route path='/signinAlumni'  element={<Register2 />} />
        <Route path='/events/:id' exact element={<EventPage />} />
        <Route path='/AllEvents' exact element={<AllEvents />} />
        <Route path='/signupStudent' exact element={<RegisterStudent />} />
        <Route path='/signinStudent' exact element={<LoginStudent />} />
      </Routes>
    </div>
  );
};

export default App;

