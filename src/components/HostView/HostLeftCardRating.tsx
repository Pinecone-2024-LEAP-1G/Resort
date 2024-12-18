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
        <p className="text-xs">Нийт Cэтгэгдэл</p>
      </div>
      <div className="text-xs">
        <div className="flex items-center gap-1 text-2xl font-bold">
          {rating}
          <FaStar className="h-[14px] w-[14px]" />
        </div>
        Үнэлгээ
      </div>
    </div>
  );
};
