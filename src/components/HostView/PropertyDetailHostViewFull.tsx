"use client";
import { TiMessages } from "react-icons/ti";

import { Button } from "components/ui/button";
import { GiBackpack } from "react-icons/gi";
import HostViewCard from "./HostViewCard";

const HostViewFull = () => {
  return (
    <div className="mx-auto flex w-[1200px]">
      <div className="h-[230px] w-[500px]">
        <p className="mb-[30px] mt-[40px] font-bold">Meet your Host</p>
        <div className="h-[230px] w-[320px]">
          <HostViewCard />
        </div>
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
          <Button
            className="h-[48px] w-[154px] text-[19px] font-extrabold"
            variant="link"
          >
            Show more
          </Button>
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
        <Button className="mt-4 bg-black text-white" variant="outline">
          Message Host
        </Button>
        <p className="mt-5 text-xs">Registration number:99117575</p>
        <div className="border-top-width-8px;">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default HostViewFull;
