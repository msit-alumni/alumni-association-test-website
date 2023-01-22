import React, { useState, useEffect } from "react";
import image1 from "../../../../assets/images/CarouselMain/img1.png";
import image2 from "../../../../assets/images/CarouselMain/img2.png";
import image3 from "../../../../assets/images/CarouselMain/img3.png";
import image4 from "../../../../assets/images/CarouselMain/img4.png";
import image5 from "../../../../assets/images/CarouselMain/img5.png";
import image6 from "../../../../assets/images/CarouselMain/img6.png";
import { BiCircle } from "react-icons/bi";

const Events = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [image1, image2, image3, image4, image5, image6];
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
      <div className="relative h-540px w-900px lg:left-24">
        <div className=" inset-0 flex items-center justify-center">
          <img
            className="object-cover object-center"
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
