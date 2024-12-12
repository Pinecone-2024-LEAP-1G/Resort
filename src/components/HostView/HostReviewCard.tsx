"use client";

import mongoose from "mongoose";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { Card } from "@/components/ui/card";
import { HostType } from "@/lib/models/host.model";

export type ReviewType = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: string;
  rating: number;
  comment: string;
};

const HostReviewCard = ({ hostId }: { hostId: string | undefined }) => {
  const [, setReviewdata] = useState<ReviewType[]>([]);
  const [, setHostdata] = useState<HostType>();

  const params = useParams();
  const { reviewId } = params;
  useEffect(() => {
    const getHost = async () => {
      try {
        const response = await axios.get<{ host: HostType }>(
          `/api/host/${hostId}}`,
        );
        setHostdata(response.data.host);
      } catch (error) {
        console.log(error);
      }
    };

    getHost();
  }, [hostId]);

  useEffect(() => {
    const getReview = async () => {
      try {
        const response = await axios.get<{ reviews: ReviewType[] }>(
          `/api/reviews/${reviewId}`,
        );
        setReviewdata(response.data.reviews);
      } catch (error) {
        console.log(error);
      }
    };

    getReview();
  }, [reviewId]);
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent className="px-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="p-5">
                <p>
                  was absolutely amazing! BFFs made us feel very welcome, gave
                  us a great tour, and helped us make some beautiful jewelry
                  while there. My 90s dream of dressing like Polly and being in
                  the compact has come true. Thank you Airbnb and
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Name</p>
                    <p>2024 May</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default HostReviewCard;
