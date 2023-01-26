
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "../src/pages/Home"
import Album from "../src/pages/Album"
import Register from "../src/pages/Register"
import Register2 from "../src/pages/Register2"
import Register3 from "../src/pages/Register3"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/album/:name' exact element={<Album />} />
        <Route path='/register'  element={<Register />} />
        <Route path='/register2'  element={<Register2 />} />
        <Route path='/register3'  element={<Register3 />} />
      </Routes>
    </div>
  );
};

export default App;

