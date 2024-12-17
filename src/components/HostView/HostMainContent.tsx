"use client";

import { useEffect, useState } from "react";
import HostLeftCard from "./HostLeftCard";
import HostLeftCardSecond from "./HostLeftCardSecond";
import { HostReviewCard, ReviewType } from "./HostReviewCard";
import { PropertyCard } from "./PropertyCard";
import axios from "axios";
import { PropertyType } from "../Review";
import Link from "next/link";
import { useRouter } from "next/navigation";

type HostType = {
  _id: string;
  name: string;
  phoneNumber: string;
  email: string;
  propertyId: PropertyType[];
};

const HostMainContent = ({ hostId }: { hostId: string }) => {
  const [hostData, setHostdata] = useState<HostType>();
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
      <div>
        <HostLeftCard hostId={hostId} />
        <HostLeftCardSecond hostData={hostData} />
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
            const propertyId = property?._id;
            return (
              <PropertyCard
                onclick={() => router.push(`/property/${propertyId}`)}
                key={property._id}
                image={property.propertyPictures[0]}
                address={property.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HostMainContent;
