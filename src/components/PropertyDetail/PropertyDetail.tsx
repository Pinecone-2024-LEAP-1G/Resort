"use client";

import { LuShare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { useEffect, useState } from "react";

const image = [
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

const item = image.map((i)=> i)



const Header = () => {


  return (
    <div >
   
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
      <div className="w-full h-64 sm:h-[400px] md:h-[484px] bg-cover bg-center lg:grid lg:grid-rows-2"  style={{ backgroundImage: `url(${image[0]})` }}  >
        <div className="lg:grid lg:grid-4 md:hidden sm:hidden xs:hidden lg-block ">
          <p className="w-full h-64 sm:h-[400px] md:h-[484px] bg-cover bg-center lg:grid lg:grid-rows-2"  style={{ backgroundImage: `url(${image[1]})` }} ></p>
          <p className="w-full h-64 sm:h-[400px] md:h-[484px] bg-cover bg-center lg:grid lg:grid-rows-2"  style={{ backgroundImage: `url(${image[2]})` }} > </p>
          <p className="w-full h-64 sm:h-[400px] md:h-[484px] bg-cover bg-center lg:grid lg:grid-rows-2"  style={{ backgroundImage: `url(${image[0]})` }} ></p>
          <p className="w-full h-64 sm:h-[400px] md:h-[484px] bg-cover bg-center lg:grid lg:grid-rows-2"  style={{ backgroundImage: `url(${image[0]})` }} ></p>
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