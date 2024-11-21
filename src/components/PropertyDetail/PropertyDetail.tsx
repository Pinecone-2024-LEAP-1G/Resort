"use client";

import { LuShare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import { DatePickerWithRange } from "./Calendar";
import { RightArrow } from "../icons";
import { ReviewStar } from "../icons/ReviewStar";
import { FullOption } from "./FullOption";

const images = [
  "https://cdn.onekindesign.com/wp-content/uploads/2018/04/Modern-Mountain-Home-Ward-Young-Architecture-01-1-Kindesign.jpg",
  "https://www.cud.ac.ae/external/student-work/fcas/communication/safina-furniture-jrn-420-fall-2018/images/popular-modern-home-decor-innovative-living-room-japanese-home-decor-design-ideas-and-and-contemporary-%20(1)-crop-u776_2x.jpg?crc=329220138",
  "https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.webp?h=662a4f7c&itok=7Laa3LkQ",
  "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export const PropertyDetail = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <div className="flex justify-between py-4">
        <h1 className="text-3xl font-semibold">Description</h1>
        <div className="flex gap-2">
          <div className="gri place-items-center rounded-full bg-white lg:flex lg:gap-2">
            <LuShare />
            <p className="hidden lg:block">share</p>
          </div>
          <div className="grid place-items-center rounded-full bg-white lg:flex lg:gap-2">
            <FaRegHeart className="flex items-center justify-center" />
            <p className="hidden lg:block">like</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Image
              src={images[0]}
              alt="Main Image"
              width={1200}
              height={800}
              className="h-full w-full rounded-lg"
            />
          </div>

          {images.map((image, index) => (
            <div key={index} className="col-span-1 hidden lg:block">
              <Image
                src={image}
                alt=""
                width={400}
                height={400}
                className="h-full w-full rounded-lg"
              />
            </div>
          ))}
        </div>
        <div></div>
        <div className="flex1">
          <div className="mt-10 flex justify-between">
            <div className="h-[225px] w-[600px] flex-1 border-b-2">
              <p className="mb-2 text-xl font-normal">adress</p>
              <div className="flex gap-2">
                <p>hunii too</p>
                <p>~ uruunii too</p>
                <p>~ ornii too</p>
                <p>~ ugaalgin uruunii too</p>
              </div>
              <div className="mt-8 flex h-20 w-[539] justify-between rounded-lg border p-4">
                <div className="flex flex-col items-center justify-center">
                  <p className="flex-cols-reverse">Үнэлгээ</p>
                  <ReviewStar />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>rating</p>
                  stars
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>0</p>
                  <p className="border-b border-black">reviews</p>
                </div>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
          <div className="mt-4 h-[80px] border-b-2">
            <p>discription</p>
            <div className="flex gap-2">
              <h1 className="border-b-2 border-black font-bold">Show more</h1>
              <RightArrow />
            </div>
          </div>
          <div className="botto-4 right-4 z-50 flex ">
            <FullOption />
          </div>
        </div>
        <div className="flex-1">
          <DatePickerWithRange />
        </div>
      </div>
    </div>
  );
};
