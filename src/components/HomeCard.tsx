"use client";
import { useRouter } from "next/navigation";

import { TiStar } from "react-icons/ti";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type HomeCardProps = {
  propertyId?: string;
  address?: string[];
  rating?: string;
  price: number;
  propertyPictures: string[];
};

export default function HomeCard(props: HomeCardProps) {
  const { propertyId, address, rating, price, propertyPictures } = props;
  const router = useRouter();
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent onClick={() => router.push(`/property/${propertyId}`)}>
          {propertyPictures?.map((propertyPicture, index) => {
            return (
              <CarouselItem key={index}>
                <div
                  style={{
                    backgroundImage: `url(${propertyPicture})`,
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
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      <div className="grid grid-cols-2">
        <div>
          <span>state, city</span>
        </div>
        {/* <div className="ml-auto flex items-center">
          <TiStar />
          <p>rate</p>
        </div> */}
      </div>
      <div>
        <span className="mr-[2px] text-[15px] font-bold">${price}</span>
        <span>night</span>
      </div>
    </div>
  );
}
