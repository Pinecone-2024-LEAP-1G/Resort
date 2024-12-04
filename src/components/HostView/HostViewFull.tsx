"use client";
import { TiMessages } from "react-icons/ti";
import { Button } from "../ui/button";
import { PropertyCard } from "./PropertyCard";
import { FcNext, FcPrevious } from "react-icons/fc";
import HostReviewCard from "./HostReviewCard";

const HostViewFull = ({ hostId }: { hostId: string | undefined }) => {
  console.log(hostId);
  return (
    <div className="mx-auto flex w-[1200px]">
      <div className="mt-[100px] w-[720px]">
        <p className="text-[30px] font-bold">Илүү дэлгэрэнгүй</p>
        {/* <div className="mb-5 mt-5 flex items-center">
          <div>
            <TiMessages className="ml-[10px] h-[30px] w-[30px]" />
          </div>
          <p className="ml-[19px] text-[17px]">Монгол Англи хэлээр ярьдаг</p>
        </div> */}
        <div className="mb-5 mt-5">
          <p className="text-s mb-[32px] w-[700px]">
            Горхи Тэрэлжийн Байгалын Цогцолбор газарт уул ус ой модныхоо хаяанд
            байрладаг, цэвэрхэн тохилог манай амралтанд та бүхэн байгууллага,
            анги хамт олон, найз нөхөд, гэр бүлээрээ ирж үзэсгэлэнт байгалын
            сайханд, эрүүл цэвэр агаарт тав тухтай амрахыг урьж байна.
          </p>
          <div className="mb-[32px] border-b-2 border-black"></div>
          <div className="mb-[32px] flex justify-between">
            <p className="font-bold">Red Rock resort талаар </p>
          </div>

          <div className="mb-[32px] h-[230px] w-[700px] cursor-pointer">
            <HostReviewCard hostId={hostId} />
          </div>

          <Button
            className="font-semi mb-[30px] h-[48px] w-[400px] text-[19px]"
            variant="link"
          >
            Бүгдийг харуулах нийт 45 сэтгэгдэл
          </Button>
        </div>
        <div className="mb-[32px] border-b-2 border-black"></div>
        <div className="flex justify-between">
          <p className="text-[30px] font-bold">Болдоо's listings</p>
        </div>
        <div className="mb-[180px] mt-[40px] flex gap-3">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};
export default HostViewFull;
