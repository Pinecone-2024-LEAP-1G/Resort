"use client";

import { useEffect, useState } from "react";
import HostLeftCard from "./HostLeftCard";
import HostLeftCardSecond from "./HostLeftCardSecond";
import { HostReviewCard, ReviewType } from "./HostReviewCard";
import { PropertyCard } from "./PropertyCard";
import axios from "axios";
import { HostTypePopulatedProperties } from "@/lib/models/user.model";
import { useRouter } from "next/navigation";
import { PropertyType } from "../Review";

const HostMainContent = ({ userId }: { userId: string }) => {
  const [hostData, setHostdata] = useState<HostTypePopulatedProperties>();
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [, setReviewCount] = useState<number>(0);
  const [, setAverageRating] = useState<number>(0);
  const [, setHostReview] = useState();
  const router = useRouter();
  console.log(reviews);

  useEffect(() => {
    const getHostData = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);

        setHostdata(response.data.user);

        const { data } = await axios.get<{
          reviews: ReviewType[];
          reviewCount: number;
        }>(`http://localhost:3000/api/reviews/hostReviews/${userId}`);

        const reviewsData = data.reviews;
        setHostReview(data.review);
        setReviews(reviewsData);
        setReviewCount(data.reviewCount);

        const totalRating = reviewsData.reduce(
          (acc, review) => acc + review.rating,
          0,
        );

        setAverageRating(totalRating / reviewsData.length || 0);
      } catch (error) {
        console.error(error);
      }
    };
    if (userId) {
      getHostData();
    }
  }, [userId]);

  const getfirstTwoProperties = (properties?: PropertyType[]) => {
    if (!properties) return [];

    return [...properties].slice(0, 3);
  };

  const firstTwoProperties = getfirstTwoProperties(hostData?.propertyId);

  return (
    <div className="mb-40 flex justify-between">
      <div>
        <HostLeftCard userId={userId} />
        <HostLeftCardSecond hostData={hostData} />
      </div>

      <div className="mt-[100px]">
        <p className="text-[30px] font-bold"> Зөвлөмж</p>
        <div className="mb-5 mt-5">
          <p className="text-s mb-[32px] w-[700px]">
            Тухайн амралтын газар амрахдаа та өмнөх хэрэглэчийн сэтгэгдэлийг
            уншина уу.
          </p>
          <div className="mb-[32px] border-b-2 border-black"></div>
          <div className="mb-[32px] flex">
            <p className="font-bold">{hostData?.name} н талаар </p>
          </div>

          <div className="mb-[64px] flex w-auto cursor-pointer flex-col">
            <HostReviewCard reviews={reviews} />
          </div>
        </div>
        <div className="mb-[32px] border-b-2 border-black"></div>
        <div className="flex">
          <p className="text-[24px] font-bold">
            {hostData?.name} Түрээслүүлж буй газрууд
          </p>
        </div>
        <div className="mt-[40px] flex gap-5">
          {firstTwoProperties?.map((property) => {
            const propertyId = property?._id;
            return (
              <PropertyCard
                onclick={() => router.push(`/property/${propertyId}`)}
                key={property._id}
                image={property.propertyPictures[0]}
                address={property.address}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HostMainContent;
