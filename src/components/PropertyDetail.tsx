"use client";

import { LuShare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

export const PropertyDetail = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const Header = () => {
  return (
    <div style={{backgroundImage: `url(${})`}} className="h-64 bg-black/50">
      <div className="flex justify-between py-4">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white">
          <FaArrowLeft />
        </div>
        <div className="flex gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-white">
            <LuShare />
          </div>
          <div className="grid h-8 w-8 place-items-center rounded-full bg-white">
            <FaRegHeart className="flex items-center justify-center" />
          </div>
        </div>
      </div>
    </div>
  );

  //   text-md ml-4 flex items-center justify-center gap-2 text-center text-gray-600
  //   ext-md ml-auto flex items-center justify-center gap-2 text-center text-gray-600
};
