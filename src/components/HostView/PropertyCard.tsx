"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import { TiStar } from "react-icons/ti";

const imageUrl =
  "https://static.spacecrafted.com/ac45f202f5554b16bc04eb8950ff21bd/i/b6169b30c8eb4f268e69b41cdafb6924/1/GCuCv726gZycFxatknDdac/Houston%20Residential%20Property%20Management.jpeg";
export const PropertyCard = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  const hearthColor = liked ? "red" : "black";
  const hearthFillColor = liked ? "red" : "transparent";

  return (
    <div className="cursor-pointer gap-5">
      <div
        className="h-[182] w-[224] rounded-2xl"
        style={{
          height: 181,
          backgroundImage: `url(${imageUrl})`,
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
          <h2 className="font-bold">Description blablabla</h2>
          <div className="flex items-center">
            <TiStar />
            <p>5</p>
          </div>
        </div>
        <p className="text-[14px]">name</p>
      </div>
    </div>
  );
};
