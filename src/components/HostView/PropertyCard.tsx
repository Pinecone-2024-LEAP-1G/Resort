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
    <div onClick={onclick} className="h-[205px] w-[170px] cursor-pointer">
      <div
        className="h-[169px] w-[170px] rounded-2xl"
        style={{
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
      <div className="flex justify-between">
        <h2 className="w-auto font-bold">{address} </h2>
        <div className="flex items-center"></div>
      </div>
    </div>
  );
};
