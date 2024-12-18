"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { Card } from "@/components/ui/card";

export type ReviewType = {
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
  comment: string;
};
type Props = {
  reviews?: ReviewType[];
};

export const HostReviewCard = ({ reviews }: Props) => {
  if (reviews?.length === 0) {
    return <p>Одоогоор сэтгэгдэл байхгүй</p>;
  }

  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent className="px-10">
          <CarouselItem>
            <Card className="p-5">
              <div>
                {reviews?.map((review) => (
                  <p key={review._id}>{review.comment}</p>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div style={{ backgroundImage: `url(${""}})` }}></div>
                <div>
                  <p className="font-semibold"></p>
                  <p>2024</p>
                </div>
              </div>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
