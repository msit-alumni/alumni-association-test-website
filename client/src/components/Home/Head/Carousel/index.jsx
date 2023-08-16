import React, { useState, useEffect } from "react";
import { BiCircle } from "react-icons/bi";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
 }
 const data = importAll(require.context('../../../../assets/images/CarouselMain', false, /\.(png|JPE?G|svg)$/));
// console.log(data);
const images=Object.values(data)

const Events = () => {
  return (
    <div>
      <div className="relative mx-[10%] sm:w-[450px] md:w-[700px] lg:w-[750px] xl:w-[900px] lg:left-24">
      <OwlCarousel className='owl-theme' loop items={1} autoplay autoplayTimeout={4000} lazyLoad>
        {
          images.map((image, index) => (
            <div key={index} className="w-full ease-in-out">
              <img
                className="w-full h-auto md:h-[540px] sm:w-[450px] md:w-[700px] lg:w-[750px] xl:w-[900px]"
                src={image}
                alt=""
              />
            </div>
          ))
        }
      </OwlCarousel>
      </div>
    </div>
  );
};
export default Events;
