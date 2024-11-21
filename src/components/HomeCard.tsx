"use client";

import { TiStar } from "react-icons/ti";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type HomeCardProps = {
  images: string[];
  price: number;
  address?: string[];
  distance?: string;
  rating?: string;
};

export default function HomeCard(props: HomeCardProps) {
  const { images, address, rating, distance, price } = props;
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          {images?.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="aspect-[20/19] rounded-xl"
                ></div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="grid grid-cols-2">
        <div>{/* <span>state, city</span> */}</div>
        <div className="flex ml-auto items-center">
          <TiStar />
          <p>rate</p>
        </div>
      </div>
      {/* <p>distance</p> */}
      <div>
        <span className="text-[15px] font-bold mr-[2px]">${price}</span>
        <span>night</span>
      </div>
    </div>
  );
}
