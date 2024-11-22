"use client";
import { TiMessages } from "react-icons/ti";
// import HostViewCard from "@/components/HostViewCard"
// import { Button } from "@/components/ui/button"
import { GiBackpack } from "react-icons/gi";

const HostView = () => {
  return (
    <div className="mx-auto flex w-[1200px]">
      <div className="h-[230px] w-[500px]">
        <p className="mb-[30px] mt-[40px] font-bold">Meet your Host</p>
        <div className="h-[230px] w-[320px]">{/* <HostViewCard /> */}</div>
        <div className="mb-5 mt-5 flex items-center">
          <div>
            <TiMessages className="ml-[10px] h-[30px] w-[30px]" />
          </div>
          <p className="ml-[19px] text-[17px]">Speaks English and Greek</p>
        </div>
        <div className="">
          <p className="text-s w-[350px]">
            Speaks English and Greek Speaks English and Greek Speaks English and
            Greek Speaks English and Greek..
          </p>
          {/* <Button className="w-[154px] h-[48px] font-extrabold text-[19px]"  variant="link">Show more</Button> */}
        </div>
      </div>
      <div className="mt-[100px] w-[500px]">
        <p className="font-bold">Co-hosts</p>
        <div className="flex">
          <GiBackpack className="h-[35px] w-[35px]" />
          <p>Holihouse</p>
        </div>
        <p className="mt-5 font-bold">Host details</p>
        <p className="mt-5 text-xs">Responce rate: 100%</p>
        <p className="mt-5 text-xs">Responds within an hour</p>
        {/* <Button className="bg-black text-white mt-4" variant="outline">Message Host</Button> */}
        <p className="mt-5 text-xs">Registration number:99117575</p>
        <div className="border-top-width-8px;">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default HostView;
