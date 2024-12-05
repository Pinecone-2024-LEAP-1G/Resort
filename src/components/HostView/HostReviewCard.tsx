"use client";

import axios from "axios";
import { useEffect, useState } from "react";
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

interface Props {
  hostId?: string;
}

type ReviewType = {
  _id: string;
  userId: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: 91212922;
    avatar: "";
    comment: string;
  };
  propertyId: string;
  rating: number;
};

const ReviewType = ({ hostId }: Props) => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  useEffect(() => {
    const getHostReview = async () => {
      const response = await axios.get<ReviewType[]>(
        ` http://localhost:3000/api/reviews/host/${hostId}`,
      );
      setReviews(response.data);
      console.log(response.data);
    };
    getHostReview();
  }, [hostId]);
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
                <p>"…{reviews?.comment}…"</p>
                <div className="mt-4 flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold"></p>
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
export default ReviewType;
