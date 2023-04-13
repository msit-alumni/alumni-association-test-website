import React, { useState } from "react";
import Card from "./Card";
import {FaRegCaretSquareRight, FaRegCaretSquareLeft} from "react-icons/fa";
import data from "../../../config/distAlumni";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const CardCarousel = () => {

    let deviceSize = window.innerWidth;
    let cardsLength = 4;
    if(deviceSize<500)
    {
        cardsLength = 1;
    }
    else if(deviceSize<700)
    {
        cardsLength = 2;
    }
    else if(deviceSize<1200)
    {
        cardsLength = 3;
    }
    console.log(cardsLength);

 return (

<div className={`font-[MerriWeather] w-[95%] m-[auto]`}>
    <div className=" p-[auto] text-center">
        <div  className="text-2xl font-[700] text-[#064663]">Distinguished Alumni</div>
        <div className="w-48 h-[2px] mx-[auto] mt-3 mb-6 bg-[#112D4E]"></div>
    </div>
    <div className="mb-8 w-[90%] m-[auto]">
        <div>
            <OwlCarousel autoplay autoplayTimeout={"1500"} nav = {false} items ={cardsLength} className='owl-theme' loop margin={10}>
                {data.map(card => (
                    <Card key={card.name}
                            image = {card.image}
                            {...card}
                            batch={card.batch}
                            branch={card.branch}
                            currentPosition={card.currentPosition}
                            company={card.company} />
                ))}
            </OwlCarousel>
    </div>
    </div>
</div>
);
};
export default CardCarousel;