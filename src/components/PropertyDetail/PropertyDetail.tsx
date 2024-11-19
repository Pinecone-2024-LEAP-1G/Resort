"use client";

import { LuShare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://cdn.onekindesign.com/wp-content/uploads/2018/04/Modern-Mountain-Home-Ward-Young-Architecture-01-1-Kindesign.jpg",
  "https://www.cud.ac.ae/external/student-work/fcas/communication/safina-furniture-jrn-420-fall-2018/images/popular-modern-home-decor-innovative-living-room-japanese-home-decor-design-ideas-and-and-contemporary-%20(1)-crop-u776_2x.jpg?crc=329220138",
  "https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.webp?h=662a4f7c&itok=7Laa3LkQ",
  "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
]

export const PropertyDetail = () => {
  return (
    <div>
      <Header />
    </div>
  );
};



const Header = () => {


  return (
    <div >
   
      <div className="flex justify-between py-4">
        <div className="grid  place-items-center rounded-full bg-white">
          <FaArrowLeft />
          
        </div>
        <div className="flex gap-2">
          <div className="gri  lg:flex lg:gap-2 place-items-center rounded-full bg-white">
            <LuShare />
            <p className="hidden  lg:block">share</p>
          </div>
          <div className="grid lg:flex lg:gap-2 place-items-center rounded-full bg-white">
            <FaRegHeart className="flex items-center justify-center" />
            <p className="hidden lg:block">like</p>
          </div>
        </div>
      </div>
      <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <Image
            src={images[0]}
            alt="Main Image"
            width={1200}
            height={800}
            className="rounded-lg  w-full h-full"
          />
        </div>

        {images.map((image, index) => (
          <div key={index} className="col-span-1 sm:hidden lg:block">
            <Image
              src={image}
              alt=""
              width={400}
              height={400}
              className="rounded-lg  w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
      
      <div className=" flex flex-col  mt-10">
        <h1 className="font-semibold text-3xl">Description</h1>
      <p className="font-normal text-xl mt-4 mb-2">adress</p>
      <p>uruunii too</p>
      <p className="mt-2">reviews</p>
      <p className="border mt-6"></p>
      </div>
    </div>
  );

  //   text-md ml-4 flex items-center justify-center gap-2 text-center text-gray-600
  //   ext-md ml-auto flex items-center justify-center gap-2 text-center text-gray-600
};
// style={{backgroundImage: `url(${"https://cdn.onekindesign.com/wp-content/uploads/2018/04/Modern-Mountain-Home-Ward-Young-Architecture-01-1-Kindesign.jpg"})`, backgroundPosition:"center"}} 