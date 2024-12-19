"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { HostType } from "@/lib/models/host.model";
import { useRouter } from "next/navigation";
import { getHostById, getHostReviewsByHostId } from "@/util/get-host";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Review } from "@/lib/models";

import { HostLeftCardRating } from "./HostLeftCardRating";

type HostReviews = {
  reviews: Review[];
  reviewCount: number;
  rating: number;
};

const HostLeftCard = ({ hostId }: { hostId?: string }) => {
  const [host, setHost] = useState<HostType | null>(null);
  const [hostReviews, setHostReviews] = useState<HostReviews | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!hostId) return;
    const getHostData = async () => {
      try {
        const [hostData, hostReviewsData] = await Promise.all([
          getHostById(hostId),
          getHostReviewsByHostId(hostId),
        ]);

        setHost(hostData);
        setHostReviews(hostReviewsData);
      } catch (error) {
        console.error(error);
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
      className="mr-auto mt-[30px] flex h-[230px] w-[320px] cursor-pointer rounded-2xl border-2 shadow-2xl"
    >
      <div className="m-4 flex flex-col items-center justify-center text-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
        <div className="ml-[5px] text-[18px] font-bold">
          {host?.name || "Loading..."}
        </div>
      </div>

      <HostLeftCardRating
        rating={hostReviews?.rating}
        reviewCount={hostReviews?.rating}
      />
    </div>
  );
};

export default HostLeftCard;
