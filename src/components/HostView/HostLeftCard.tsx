"use client";

import mongoose from "mongoose";
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { HostType } from "@/lib/models/host.model";
import { useRouter } from "next/navigation";

type ReviewType = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: string;
  rating: number;
  comment: string;
};

const HostLeftCard = ({ hostId }: { hostId?: string | undefined }) => {
  const [host, setHost] = useState<HostType | null>(null);
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const getHostData = async () => {
      try {
        if (!hostId) return;

        const hostResponse = await axios.get(`/api/host/${hostId}`);
        const hostData = hostResponse.data.host;
        setHost(hostData);

        if (hostData?.propertyId) {
          const reviewsResponse = await axios.get<{
            reviews: ReviewType[];
            reviewCount: number;
          }>(`/api/reviews/hostReviews/${hostData.propertyId}`);

          const reviewsData = reviewsResponse.data.reviews;
          setReviewCount(reviewsResponse.data.reviewCount);

          const totalRating = reviewsData.reduce(
            (acc, review) => acc + review.rating,
            0,
          );
          const avgRating =
            reviewsData.length > 0 ? totalRating / reviewsData.length : null;

          setAverageRating(
            avgRating !== null ? Math.round(avgRating * 10) / 10 : null,
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getHostData();
  }, [hostId]);

  const handleClick = () => {
    if (hostId) router.push(`/hostView/${hostId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="mr-auto mt-[100px] flex h-[230px] w-[320px] cursor-pointer rounded-2xl border-2 shadow-2xl"
    >
      <div className="mx-auto my-auto text-center">
        <CgProfile className="h-[70px] w-[70px]" />
        <div className="ml-[5px] text-[18px] font-bold">
          {host?.name || "Loading..."}
        </div>
        <div className="ml-[15px] text-[16px]">Host</div>
      </div>
      <div className="mx-auto mt-[15px]">
        <div>
          <p className="mt-[10px] text-2xl font-bold">{reviewCount}</p>
          <p className="text-xs">Cэтrэrдэл үлдээсэн</p>
        </div>
        <div>
          <p className="mt-[10px] text-2xl font-bold">
            {averageRating !== null ? averageRating.toFixed(1) : "N/A"}
          </p>
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
