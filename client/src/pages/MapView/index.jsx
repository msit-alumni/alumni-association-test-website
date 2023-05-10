import React from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from '../../components/common/Footer';
import L from "leaflet";
import { MapContainer, Marker, TileLayer, Circle, CircleMarker, Popup } from "react-leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";
import "./style.css"
import { useState } from 'react';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const Index = () => {

    const [zoom1 , setZoom ] = useState(2);
    const [radius , setRadius] = useState(250000);


    const firstFive = [
        { name: "Delhi", lat: 28.6759163, lng: 77.3198015 },
        { name: "USA", lat: 35.6540207, lng: -116.994084 },
        { name: "USA", lat: 35.6540207, lng: -116.994084 },
        { name: "United States", lat: 40.7128, lng: -74.0060 },
        { name: "United Kingdom", lat: 53.4808, lng: 2.2426 },
        { name: "Malaysia", lat: 3.1390, lng:  101.6869 },   
      ];

    const fillBlueOptions = { fillColor: 'blue' }
    const blackOptions = { color: 'black' }
    const limeOptions = { color: 'lime' }
    const purpleOptions = { color: 'purple' }
    const redOptions = { color: 'red' }




    const handleZoom = (map) =>{
      const zoom1  = map.target.getZoom();
      const radius = 250000 / Math.pow(2,zoom1 -13);
      if(zoom1 > 13)
      {
        radius = 2000 / Math.pow(2,zoom1 -13);
      }
      setZoom(zoom1);
      setRadius(radius);
    };



  return (
    <div>
        <Navbar/>
        <div className='h-24'></div>
        <MapContainer
              center={firstFive[0]}
              zoom={zoom1}
              onZoomed={handleZoom}
              className="static-map"
            //   {...interactionOptions}
            >
              <TileLayer url={osm.maptiler.url} />
              {/* <Circle center={firstFive[0]} pathOptions={fillBlueOptions} radius={radius} /> */}
              

                {
                  firstFive.map(place => (
                  <Circle center={place} pathOptions={fillBlueOptions} radius={radius} />))
                  
                }

              {/* <Marker position={[firstFive[0].lat, firstFive[0].lng]}></Marker> */}
              {/* <Marker position={[marker2.lat, marker2.lng]}></Marker> */}
              {/* {displayMarkers} */}
        </MapContainer>
        {/* <Footer/> */}
    </div>
  )
}

export default Index
