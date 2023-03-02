import React, { useState } from 'react';
import '../../../src/App.css';
import Navbar from "../../components/common/Navbar";
import Head from '../../components/Home/Head';
import EventsNews from '../../components/Home/EventsNews';
import Footer from '../../components/common/Footer';
import Album from '../../components/Home/Album';
import DistAlumni from '../../components/Home/DistAlumni';
import EventPage from '../EventPage';

const Home = () => {
  return (
    <div >

      {/* Navbar */}
      <Navbar />
      <Head />
      <DistAlumni />
      <EventsNews/>
      <Album/>
      <Footer/>
    </div>
  )
}

export default Home