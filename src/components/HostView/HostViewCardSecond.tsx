"use client";
import { Button } from "@/components/ui/button";
import { GrStatusGood } from "react-icons/gr";

const HostViewCardSecond = () => {
  return (
    <div className="h-[250px] w-[320px] rounded-2xl border-2 p-[20px]">
      <div className="">
        <div className="ml-[5px] text-[20px] font-semibold">
          Болдоо confirmed information
        </div>
      </div>
      <div className="mt-[15px] flex">
        <GrStatusGood className="h-[30px] w-[30px]" />
        <p className="ml-3 text-[16px]">Identity</p>
      </div>
      <div className="mt-[15px] flex">
        <GrStatusGood className="h-[30px] w-[30px]" />
        <p className="ml-3 text-[16px]">Email address</p>
      </div>
      <div className="mt-[15px] flex">
        <GrStatusGood className="h-[30px] w-[30px]" />
        <p className="ml-3 text-[16px]">Phone number</p>
      </div>
      <Button className="text-[13px]" variant="link">
        Learn about identity verification
      </Button>
    </div>
  );
};
export default HostViewCardSecond;
