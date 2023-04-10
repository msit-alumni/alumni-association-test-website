import React from "react";
import {Link} from 'react-router-dom'

const index = (prop) => {
  return (
    <div>
      <Link to={`/album/${prop.name}`} className="flex from-teal-100 via-teal-300">
        <div className="overflow-hidden duration-300 hover:opacity-100 cursor-pointer rounded-md relative group">
          <div className=" overflow-hidden relative">
            <img
              alt=""
              className="object-cover w-full aspect-square"
              src={prop.image}
            />
            <div className="justify-content-end align-items-end ">
              <div className="text-white justify-content-end align-items-end text-xs md:text-[20px] bottom-0  hover:text-align-bottom absolute bg-slate-900 rounded-lg bg-opacity-50 p-4 ">
                <h2 className="font-defaultFont font-bold text-center pb-4">
                {prop.title}
                </h2>
                <p className="font-defaultFont italic text-sm text-justify">{prop.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default index;
