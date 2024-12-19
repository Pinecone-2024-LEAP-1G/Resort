"use client";

import { useState, useEffect } from "react";
import { HostType } from "@/lib/models/host.model";
import { useRouter } from "next/navigation";
import { getHostById, getHostReviewsByHostId } from "@/util/get-host";
import { Review } from "@/lib/models";
import { HostLeftCardRating } from "./HostLeftCardRating";

type HostReviews = {
  reviews: Review[];
  reviewCount: number;
  rating: number;
};

const HostLeftCard = ({ userId }: { userId?: string }) => {
  const [host, setHost] = useState<HostType | null>(null);
  const [hostReviews, setHostReviews] = useState<HostReviews | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!userId) return;
    const getHostData = async () => {
      try {
        const [hostData, hostReviewsData] = await Promise.all([
          getHostById(userId),
          getHostReviewsByHostId(userId),
        ]);

        setHost(hostData);
        setHostReviews(hostReviewsData);
      } catch (error) {
        console.error(error);
      }
    };

    getHostData();
  }, [userId]);

  const handleClick = () => {
    if (userId) router.push(`/hostView/${userId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="mr-auto mt-[30px] flex rounded-2xl border-2 p-10 shadow-2xl"
    >
      <div className="flex flex-col items-center justify-center gap-6 p-4 text-center">
        <div
          className="rounded-full border bg-cover"
          style={{
            backgroundImage: `url(${host?.image})`,
            width: "60px",
            height: "60px",
          }}
        />
        <div className="ml-[5px] text-[18px] font-bold">
          {host?.name || "Loading..."}
        </div>
      </div>
      <div>
        <HostLeftCardRating
          rating={hostReviews?.rating}
          reviewCount={hostReviews?.rating}
        />
      </div>
    </div>
  );
};

export default HostLeftCard;
