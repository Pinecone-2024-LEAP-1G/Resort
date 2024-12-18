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
    return (
      <div className="m-[20px] mt-[40px] items-center justify-center">
        <div>
          <p className="text-2xl font-bold">{reviewCount}</p>
          <p className="text-xs">Одоогоор сэтгэгдэл байхгүй</p>
        </div>
        <div className="text-xs">
          <div className="flex items-center gap-1 text-2xl font-bold">
            {/* {rating} */}
            <FaStar className="h-[14px] w-[14px]" />
          </div>
          Одоогоор Үнэлгээ байхгүй
        </div>
      </div>
    );
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
