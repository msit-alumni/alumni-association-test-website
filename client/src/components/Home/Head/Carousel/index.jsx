import React, { useState, useEffect } from "react";
import { BiCircle } from "react-icons/bi";


function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
 }
 const data = importAll(require.context('../../../../assets/images/CarouselMain', false, /\.(png|JPE?G|svg)$/));
// console.log(data);
const images=Object.values(data)
console.log(images)

const Events = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [timeInterval, setTimeInterval] = useState(5000);
  
    const handleDotClick = (index) => {
        clearInterval(intervalId);
        setCurrentIndex(index);
        setIntervalId(setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, timeInterval));
    };
    
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, timeInterval);
      setIntervalId(interval);
      return () => clearInterval(interval);
    }, [currentIndex, timeInterval]);

  return (
    <div>
      <div className="relative sm:w-[450px] md:w-[700px] lg:w-[750px] xl:w-[900px] lg:left-24">
        <div className=" inset-0 flex items-center justify-center">
          <img
            className="object-cover object-center h-auto md:h-[540px] sm:w-[450px] md:w-[700px] lg:w-[750px] xl:w-[900px]"
            src={images[currentIndex]}
            alt=""
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              className={`${
                index === currentIndex ? "text-[#F9F7F7] bg-[#F9F7F7] "
                : "text-[#F9F7F7] "
              } m-2 md:text-[16px] text-[9px] rounded-full focus:outline-none focus:shadow-outline-black`}
              onClick={() => handleDotClick(index)}
            >
              <BiCircle />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Events;
