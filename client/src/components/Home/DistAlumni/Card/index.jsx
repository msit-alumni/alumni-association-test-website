import React from "react";
const Card = ({ image, name, text, batch, branch, company, currentPosition}) => {
 return (
 <div className=" bg-[#112D4E] rounded-lg p-6 h-[390px] m-6  text-center text-white">
 <img src={image} alt={name} className="h-40 w-full object-cover rounded-t-lg px-6" />
 <div className="pt-4">
 <h3 className="text-lg mt-2">{name}</h3>
 <h5 className=" text-sm">{batch}, {branch}</h5>
 <h3 className="text-md mt-2">{currentPosition}</h3>
 <h3 className="text-sm">{company}</h3>
 <p className=" text-sm text-justify mt-2">{text}</p>
 </div>
 </div>
 );
};
export default Card;
