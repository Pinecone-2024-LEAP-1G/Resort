"use client";

import mongoose from "mongoose";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { Card } from "@/components/ui/card";

type ReviewType = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: string;
  rating: number;
  comment: string;
};
type HostType = {
  name: string;
};
const formattedDate = "moment().format('ll')";
const HostReviewCard = ({ hostId }: { hostId: string | undefined }) => {
  const [reviewdata, setReviewdata] = useState<ReviewType[]>([]);
  const [hostdata, setHostdata] = useState<HostType[]>([]);
  const params = useParams();
  const { reviewId } = params;
  const getHost = async () => {
    try {
      const response = await axios.get<{ host: HostType[] }>(
        `http://localhost:3000/api/host/${hostId}}`,
      );
      setHostdata(response.data.host);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHost();
  }, []);

  const getReview = async () => {
    try {
      const response = await axios.get<{ reviews: ReviewType[] }>(
        `http://localhost:3000/api/reviews/${reviewId}`,
      );
      setReviewdata(response.data.reviews);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getReview();
  }, []);
  return (
    <div>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="px-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="p-5">
                <p>
                  "…This was absolutely amazing! Polly's BFFs made us feel very
                  welcome, gave us a great tour, and helped us make some
                  beautiful jewelry while there. My 90s dream of dressing like
                  Polly and being in the compact has come true. Thank you Airbnb
                  and Polly's friends!{reviewdata?.comment}…"
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
