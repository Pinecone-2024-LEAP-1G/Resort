"use client";
import { useRouter } from "next/navigation";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Property } from "@/lib/models";

type HomeCardProps = {
  propertyId?: string;
  price?: object;
  address?: string[];
  distance?: string;
  rating?: string;
  propertyPictures: [string[]];
  property?: Property;
};

export default function HomeCard(props: HomeCardProps) {
  const { propertyId, propertyPictures, property } = props;
  const router = useRouter();
  const price = property?.price ?? Infinity;

  return (
    <div className="w-full rounded-xl bg-transparent transition-shadow duration-200 hover:shadow-lg">
      <Carousel className="w-full">
        <CarouselContent onClick={() => router.push(`/property/${propertyId}`)}>
          {propertyPictures?.map((propertyPicture, index) => {
            return (
              <CarouselItem key={index}>
                <div
                  style={{
                    backgroundImage: `url(${propertyPicture[0]})`,
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
      </Carousel>
      <div className="flex flex-col gap-2 px-1 py-4">
        <div className="mt-4 gap-2 md:grid-cols-2">
          <div>
            <span className="text-md text-white">{property?.description}</span>
          </div>
          <div className="ml-auto flex items-center"></div>
        </div>
        <div className="flex items-center">
          <span className="mr-1 text-lg font-semibold text-white">
            {new Intl.NumberFormat().format(price)}
          </span>
          <span className="text-sm text-white">₮</span>
        </div>
      </div>
    </div>
  );
}
