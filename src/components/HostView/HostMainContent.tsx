"use client";

import { useEffect, useState } from "react";
import HostLeftCard from "./HostLeftCard";
import HostLeftCardSecond from "./HostLeftCardSecond";
import { HostReviewCard, ReviewType } from "./HostReviewCard";
import { PropertyCard } from "./PropertyCard";
import axios from "axios";
import { HostType, HostTypePopulatedProperties } from "@/lib/models/host.model";
import { useRouter } from "next/navigation";

const HostMainContent = ({ hostId }: { hostId: string }) => {
  const [hostData, setHostdata] = useState<HostTypePopulatedProperties>();
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [averageRating, setAverageRating] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const getHostData = async () => {
      try {
        const response = await axios.get(`/api/host/${hostId}`);

        setHostdata(response.data.host);

        const { data } = await axios.get<{
          reviews: ReviewType[];
          reviewCount: number;
        }>(`http://localhost:3000/api/reviews/hostReviews/${hostId}`);

        const reviewsData = data.reviews;
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
    if (hostId) {
      getHostData();
    }
  }, [hostId]);
  return (
    <div className="ml-auto flex w-[1200px] justify-between">
      <div className="ml-auto flex w-[1200px] justify-between">
        <div>
          <HostLeftCard hostId={hostId} />
          <HostLeftCardSecond hostData={hostData} />
        </div>

        <div className="mt-[100px]">
          <p className="text-[30px] font-bold"> Зөвлөмж</p>
          <div className="mb-5 mt-5">
            <p className="text-s mb-[32px] w-[700px]">
              Тухайн амралтын газах амрахдаа дараах дүрмийг баримтлана.
            </p>
            <div className="mb-[32px] border-b-2 border-black"></div>
            <div className="mb-[32px] flex justify-between">
              <p className="font-bold">Resort- н талаар </p>
            </div>

            <div className="mb-[32px] w-[700px] cursor-pointer">
              <HostReviewCard reviews={reviews} />
            </div>
          </div>
          <div className="mb-[32px] border-b-2 border-black"></div>
          <div className="flex justify-between">
            <p className="text-[30px] font-bold">{hostData?.name} listings</p>
          </div>
          <div className="mb-[180px] mt-[40px] flex gap-3">
            {hostData?.propertyId?.map((property) => {
              return (
                <PropertyCard
                  onclick={() => router.push(`/property/${property?._id}`)}
                  key={property._id}
                  image={property.propertyPictures[0]}
                  address={property.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HostMainContent;
