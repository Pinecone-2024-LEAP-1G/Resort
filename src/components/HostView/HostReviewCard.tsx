"use client";

import { ImProfile } from "react-icons/im";

// const HostReviewCard = () => {
//   return (
//     <div className="h-[230px] w-[550px] rounded-2xl border-2 p-[20px]">
//       <div className="ml-[5px] text-[15px]">
//         " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
//         suscipit impedit velit reprehenderit sed nisi sint iure animi. Possimus,
//         id?"
//       </div>
//       <div className="mt-[100px] flex">
//         <ImProfile className="h-[40px] w-[40px]" />
//         <div>
//           <p className="ml-3 text-[16px]">Gunner</p>
//           <p className="ml-3 text-[14px]">October 2024</p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HostReviewCard;

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HostReviewCard = () => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex h-[220px] w-[380px] p-[50px]">
                  <ImProfile className="h-[40px] w-[40px]" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p className="text-4xl font-semibold">{index + 1}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default HostReviewCard;
