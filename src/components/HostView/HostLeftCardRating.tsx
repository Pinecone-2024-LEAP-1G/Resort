"use client";

import { FaStar } from "react-icons/fa";

type HostLeftCardRatingProps = {
  reviewCount?: number;
  rating?: number;
};

export const HostLeftCardRating = ({
  reviewCount,
  rating,
}: HostLeftCardRatingProps) => {
  if (reviewCount === 0) {
    <p className="ml-[40px] text-xs">Cэтгэгдэл үлдээгүй </p>;
  }

  return (
    <div className="m-[20px] mt-[40px] items-center justify-center">
      <div>
        <p className="text-2xl font-bold">{reviewCount}</p>
        <p className="text-xs">Cэтгэгдэл үлдээсэн</p>
      </div>
      <div className="flex gap-2">
        <p className="text-[10px] font-bold">
          {rating}
          <p className="h-[14px] w-[14px]">
            <FaStar />
          </p>
        </p>
      </div>
    </div>
  );
};
