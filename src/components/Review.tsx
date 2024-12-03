"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { ImStarEmpty } from "react-icons/im";
import { ImStarFull } from "react-icons/im";

interface Props {
  propertyId?: string;
}

type Review = {
  _id: string;
  userId: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: 91212922;
    avatar: "negdeh hvn";
  };
  propertyId: string;
  rating: number;
  comment: string;
};

const Review = ({ propertyId }: Props) => {
  const [reviews, setReviews] = useState<Review>();
  useEffect(() => {
    const getReview = async () => {
      const response = await axios.get<Review>(
        ` http://localhost:3000/api/reviews/${propertyId}`,
      );
      setReviews(response.data.review);
    };

    getReview();
  }, [propertyId]);
  return (
    <div>
      <div className="flex w-[500px] justify-between">
        <div className="flex h-fit w-2/4 items-center gap-5">
          <div>
            <div
              className="rounded-3xl border bg-cover"
              style={{
                backgroundImage: `url("https://media.gettyimages.com/id/1250238624/photo/handsome-young-adult-businessman-with-stubble.jpg?s=612x612&w=gi&k=20&c=H2upefy-mU5MNlNhuXDyTboEmTMycZM-FcK4jYXx2TU=")`,
                width: "70px",
                height: "70px",
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="size-xl font-medium">{reviews?.userId?.lastName}</p>
            <div className="flex"></div>
          </div>
        </div>

        <div className="flex w-[250px] items-center justify-center">
          {reviews?.comment}
        </div>
      </div>
    </div>
  );
};
export default Review;
