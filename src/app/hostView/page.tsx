"use client";
import { TiMessages } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { AiFillFlag } from "react-icons/ai";
import HostViewCard from "@/components/HostView/HostViewCard";
import HostViewCardSecond from "@/components/HostView/HostViewCardSecond";
import HostReviewCard from "@/components/HostView/HostReviewCard";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { PropertyCard } from "@/components/HostView/PropertyCard";

const HostView = () => {
  return (
    <div className="mx-auto flex w-[1200px]">
      <div className="mt-[100px] w-full">
        <div className="mt-[40px] h-[230px] w-[320px]">
          <HostViewCard />
        </div>
        <div className="h-[230px] w-[320px] pt-[70px]">
          <HostViewCardSecond />
        </div>
        <div className="mt-[90px] flex items-center">
          <AiFillFlag />
          <Button
            className="font-semi ml-[10px] h-[48px] w-[154px] text-[19px]"
            variant="link"
          >
            Report this profile
          </Button>
        </div>
      </div>
      <div className="mt-[100px] w-[720px]">
        <p className="text-[30px] font-bold">About Niki </p>
        <div className="mb-5 mt-5 flex items-center">
          <div>
            <TiMessages className="ml-[10px] h-[30px] w-[30px]" />
          </div>
          <p className="ml-[19px] text-[17px]">Speaks English and Greek</p>
        </div>
        <div className="">
          <p className="text-s mb-[32px] w-[700px]">
            Holihouse Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nisi, iure maxime. Qui, velit assumenda ex earum voluptatibus
            molestiae expedita maxime, quia non dicta minima labore dolorum a
            illum deleniti.
          </p>
          <div className="mb-[32px] border-b-2 border-black"></div>
          <div className="mb-[32px] flex justify-between">
            <p className="font-bold">Niki's reviews</p>
            <div className="flex cursor-pointer gap-2">
              <FcPrevious className="rounded-sm hover:bg-slate-400" />
              <FcNext className="rounded-sm hover:bg-slate-400" />
            </div>
          </div>

          <div className="mb-[32px] h-[230px] w-[700px]">
            <HostReviewCard />
          </div>

          <Button
            className="font-semi h-[48px] w-[154px] text-[19px]"
            variant="link"
          >
            Show all 45 reviews
          </Button>

          <p className="mb-[32px] mt-5 text-xs">
            Some info has been automatically translated.
            <Button
              className="font-semi h-[48px] w-[154px] text-xs"
              variant="link"
            >
              See Orignal
            </Button>
          </p>
        </div>
        <div className="mb-[32px] border-b-2 border-black"></div>
        <div className="flex justify-between">
          <p className="text-[30px] font-bold">Hans's listings</p>
          <div className="mt-2 flex cursor-pointer gap-2">
            <FcPrevious className="rounded-sm hover:bg-slate-400" />
            <FcNext className="rounded-sm hover:bg-slate-400" />
          </div>
        </div>
        <div className="mt-[32px] flex gap-3">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};
export default HostView;
