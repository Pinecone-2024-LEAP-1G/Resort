"use client";

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
    <div>
      {property?.reviewId?.map((review) => (
        <div
          key={review._id}
          className="mb-4 flex w-[500px] justify-between border-none"
        >
          <div className="flex items-center gap-5">
            <div>
              <div
                className="rounded-3xl border bg-cover"
                style={{
                  backgroundImage: `url(${review.userId.avatar})`,
                  width: "70px",
                  height: "70px",
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="size-xl font-medium">{review.userId.lastName}</p>
              <div className="flex">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <IoMdStarOutline />
              </div>
            </div>
          </div>

          <div className="flex w-[250px] items-center justify-center">
            {review.comment}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Review;
