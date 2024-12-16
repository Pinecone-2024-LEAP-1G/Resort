"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import HostLeftCard, { HostModel } from "./HostLeftCard";
import HostLeftCardSecond from "./HostLeftCardSecond";
import { HostReviewCard, ReviewType } from "./HostReviewCard";
import { PropertyCard } from "./PropertyCard";
import axios from "axios";
import { PropertyType } from "../Review";
import { useRouter } from "next/navigation";

export type HostType = {
  _id: string;
  name: string;
  phoneNumber: string;
  email: string;
  propertyId: PropertyType[];
};

const HostMainContent = ({ userId }: { userId?: string }) => {
  const [hostData, setHostdata] = useState<HostType>();
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getHostData = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setHostdata(response.data.host);
        console.log(response.data.host.propertyId);
      } catch (error) {
        console.error(error);
      }
    };
    if (userId) {
      getHostData();
    }
  }, [userId]);
  return (
    <div className="ml-auto flex justify-between">
      <div>
        <HostLeftCard userId={userId} />
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

          <div className="mb-[32px] h-[230px] w-[700px] cursor-pointer">
            <HostReviewCard reviews={reviews} />
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
