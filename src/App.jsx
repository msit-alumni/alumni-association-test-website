
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "../src/pages/Home"
import Album from "../src/pages/Album"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/album/:name' exact element={<Album />} />
      </Routes>
    </div>
  );
};

export default App;
