"use client";

import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HostType } from "./HostMainContent";

type ReviewType = {
  _id: string;
  userId: string;
  propertyId: string;
  rating: number;
  comment: string;
};

const HostLeftCard = ({ userId }: { userId?: string }) => {
  const [host, setHost] = useState<HostType | null>(null);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const router = useRouter();

  const propertyId = host?.propertyId?.map((id) => id._id);

  useEffect(() => {
    const getHostData = async () => {
      try {
        const hostResponse = await axios.get(`/api/users/${userId}`);

        setHost(hostResponse.data.host);

        const reviewsResponse = await axios.get<{
          reviews: ReviewType[];
          reviewCount: number;
        }>(`/api/reviews/${propertyId}`);
        console.log(reviewsResponse);

        const reviewsData = reviewsResponse.data.reviews;
        setReviewCount(reviewsResponse.data.reviewCount);

        const totalRating = reviewsData.reduce(
          (acc, review) => acc + review.rating,
          0,
        );
        setAverageRating(totalRating / reviewsData.length || 0);
      } catch (error) {
        console.error(error);
      }
    };
    getHostData();
  }, [userId]);

  return (
    <div
      onClick={() => router.push(`/hostView/${userId}`)}
      className="mr-auto mt-[100px] flex h-[230px] w-[320px] rounded-2xl border-2 shadow-2xl"
    >
      <div className="mx-auto my-auto">
        <CgProfile className="h-[70px] w-[70px]" />
        <div className="ml-[5px] text-[18px] font-bold">{host?.name}</div>
        <div className="ml-[15px] text-[16px]">Host</div>
      </div>
      <div className="mx-auto mt-[15px]">
        <div>
          <p className="mt-[10px] text-2xl font-bold">{reviewCount}</p>
          <p className="text-xs">Cэтrэrдэл үлдээсэн</p>
        </div>
        <div>
          <p className="mt-[10px] text-2xl font-bold">{averageRating}</p>
          <p className="text-xs">Үнэлгээ</p>
        </div>
        <div>
          <p className="mt-[10px] text-2xl font-bold">7</p>
          <p className="text-xs">Хугацаа</p>
        </div>
      </div>
    </div>
  );
};
export default HostLeftCard;
