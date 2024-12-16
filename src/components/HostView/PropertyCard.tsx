"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import { TiStar } from "react-icons/ti";

type PropertyProps = {
  image: string;
  address: string;
  onclick: () => void;
};

export const PropertyCard = ({ image, address, onclick }: PropertyProps) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  const hearthColor = liked ? "red" : "black";
  const hearthFillColor = liked ? "red" : "transparent";

  return (
    <div onClick={onclick} className="cursor-pointer gap-5">
      <div
        className="h-[182] w-[200px] rounded-2xl bg-cover"
        style={{
          height: 181,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-end p-4">
          <Heart
            onClick={toggleLike}
            color={hearthColor}
            fill={hearthFillColor}
          />
        </div>
      </div>
      <div className="">
        <div className="flex justify-between">
          <h2 className="w-[180px] font-bold">{address} </h2>
          <div className="flex items-center">
            <TiStar />
            <p>5</p>
          </div>
        </div>
        <p className="text-[14px]"></p>
      </div>
    </div>
  );
};
