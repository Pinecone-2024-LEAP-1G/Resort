"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import HostLeftCard, { HostModel } from "./HostLeftCard";
import HostLeftCardSecond from "./HostLeftCardSecond";
import { HostReviewCard, ReviewType } from "./HostReviewCard";
import { PropertyCard } from "./PropertyCard";
import { useSession } from "next-auth/react";
import axios from "axios";

const HostMainContent = () => {
  const [hostData, setHostdata] = useState();
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [averageRating, setAverageRating] = useState<number>(0);
  const { data: session } = useSession();
  const hostId = session?.user?.id;

  useEffect(() => {
    const getHostData = async () => {
      try {
        const response = await axios.get<{ host: HostModel }>(
          `/api/host/${hostId}`,
        );
        console.log(response);

        setHostdata(response.data.host);

        const reviewsResponse = await axios.get<{
          reviews: ReviewType[];
          reviewCount: number;
        }>(`http://localhost:3000/api/reviews/hostReviews/${hostId}`);
        const reviewsData = reviewsResponse.data.reviews;
        setReviews(reviewsData);
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
    if (hostId) {
      getHostData();
    }
  }, [hostId]);
  return (
    <div className="ml-auto flex w-[1200px] justify-between">
      <div>
        <HostLeftCard />
        <HostLeftCardSecond />
      </div>

      <div className="mt-[100px]">
        <p className="text-[30px] font-bold">Илүү дэлгэрэнгүй</p>
        <div className="mb-5 mt-5">
          <p className="text-s mb-[32px] w-[700px]">
            Горхи Тэрэлжийн Байгалын Цогцолбор газарт уул yc ой модныхоо хаяанд
            байрладаг, цэвэрхэн тохилог манай амралтанд та бүхэн байгууллага,
            анги хамт олон, найз нөхөд, гэр бүлээрээ ирж үзэсгэлэнт байгалын
            сайханд, эрүүл цэвэр агаарт тав тухтай амрахыг урьж байна.
          </p>
          <div className="mb-[32px] border-b-2 border-black"></div>
          <div className="mb-[32px] flex justify-between">
            <p className="font-bold">Red Rock resort талаар </p>
          </div>

          <div className="mb-[32px] h-[230px] w-[700px] cursor-pointer">
            <HostReviewCard hostId={hostId} />
          </div>

          <Button
            className="font-semi mb-[30px] h-[48px] w-[400px] text-[19px]"
            variant="link"
          >
            Бүгдийг харуулах нийт 7 сэтгэгдэл
          </Button>
        </div>
        <div className="mb-[32px] border-b-2 border-black"></div>
        <div className="flex justify-between">
          <p className="text-[30px] font-bold">Болдоо listings</p>
        </div>
        <div className="mb-[180px] mt-[40px] flex gap-3">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};
export default HostMainContent;
