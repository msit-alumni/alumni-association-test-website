
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "../src/pages/Home"
import Alumni from "../src/pages/AlumniProfiles"

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path ='/alumniprofiles' element={<Alumni/>}/>
        </Routes>
    </div>
  );
};

export default App;
