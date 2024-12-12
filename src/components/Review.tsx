"use client";

import { Button } from "react-day-picker";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";

export type PropertyType = {
  _id: string;
  price: number;
  guests: number;
  address: string;
  description: string;
  propertyPictures: string[];
  categoryId: string;
  totalBedrooms: string;
  totalBathrooms: string;
  cleaningFee: number;
  email: string;
  userId: string;
  reviewId: [
    {
      _id: string;
      comment: string;
      rating: number;
      userId: {
        _id: string;
        lastName: string;
        firstName: string;
        avatar: string;
        phoneNumber: number;
      };
    },
  ];
};

interface Props {
  property?: PropertyType;
}

const Review = ({ property }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {property?.reviewId?.map((review) => (
        <div key={review._id} className="mb-4 justify-start">
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-4">
              <div
                className="rounded-3xl border bg-cover"
                style={{
                  backgroundImage: `url(${review?.userId?.avatar})`,
                  width: "70px",
                  height: "70px",
                }}
              />
              <div className="flex flex-col gap-2">
                <p className="size-xl font-medium">
                  {review?.userId?.lastName}
                </p>
                <div className="flex">
                  {review.rating >= 1 ? <MdOutlineStar /> : <IoMdStarOutline />}
                  {review.rating >= 2 ? <MdOutlineStar /> : <IoMdStarOutline />}
                  {review.rating >= 3 ? <MdOutlineStar /> : <IoMdStarOutline />}
                  {review.rating >= 4 ? <MdOutlineStar /> : <IoMdStarOutline />}
                  {review.rating >= 5 ? <MdOutlineStar /> : <IoMdStarOutline />}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {review?.comment}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Review;
