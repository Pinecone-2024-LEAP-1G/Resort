"use client";
import { Button } from "@/components/ui/button";
import { HostType, HostTypePopulatedProperties } from "@/lib/models/host.model";
import { GrStatusGood } from "react-icons/gr";

type SecondProps = {
  hostData?: HostTypePopulatedProperties;
};
const HostLeftCardSecond = ({ hostData }: SecondProps) => {
  return (
    <div className="mt-[100px] w-[320px] rounded-2xl border-2 p-[20px]">
      <div className="">
        <div className="ml-[5px] text-[20px] font-semibold">
          {hostData?.name} -н мэдээлэл
        </div>
      </div>
      <div className="mt-[30px] flex">
        <GrStatusGood className="h-[30px] w-[30px]" />
        <p className="ml-3 text-[16px]">{hostData?.email}</p>
      </div>
      <div className="mt-[30px] flex">
        <GrStatusGood className="h-[30px] w-[30px]" />
        <p className="ml-3 text-[16px]">{hostData?.phoneNumber}</p>
      </div>
      <Button className="text-[13px]" variant="link"></Button>
    </div>
  );
};
export default HostLeftCardSecond;
