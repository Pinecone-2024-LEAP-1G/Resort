"use client";

import { ImProfile } from "react-icons/im";

const HostReviewCard = () => {
  return (
    <div className="h-[230px] w-[550px] rounded-2xl border-2 p-[20px]">
      <div className="ml-[5px] text-[15px]">
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
        suscipit impedit velit reprehenderit sed nisi sint iure animi. Possimus,
        id?"
      </div>
      <div className="mt-[100px] flex">
        <ImProfile className="h-[40px] w-[40px]" />
        <div>
          <p className="ml-3 text-[16px]">Gunner</p>
          <p className="ml-3 text-[14px]">October 2024</p>
        </div>
      </div>
    </div>
  );
};
export default HostReviewCard;
