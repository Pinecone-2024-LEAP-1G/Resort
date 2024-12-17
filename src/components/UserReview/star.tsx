"use client";
import { Star } from "lucide-react";
type Star = { onClick: () => void; fill: string,  };
export const ReviewUser = ({ onClick, fill , }: Star) => {
  return (
    <div onClick={onClick}>
      <Star  fill={`${fill}`} className="" />
    </div>
  );
};
