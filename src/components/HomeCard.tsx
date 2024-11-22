"use client";
import { useRouter } from "next/navigation";

import { TiStar } from "react-icons/ti";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/ui/carousel";

type HomeCardProps = {
  _id: number;
  images: string[];
  price: number;
  address?: string[];
  distance?: string;
  rating?: string;
};

export default function HomeCard(props: HomeCardProps) {
  const { _id, images, address, rating, distance, price } = props;
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/${_id}`)}>
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
        <div className="ml-auto flex items-center">
          <TiStar />
          <p>rate</p>
        </div>
      </div>
      {/* <p>distance</p> */}
      <div>
        <span className="mr-[2px] text-[15px] font-bold">${price}</span>
        <span>night</span>
      </div>
    </div>
  );
}
