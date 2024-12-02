import { DiCodeigniter } from "react-icons/di";
("use client");
import Logo from "./icons/Logo";

import { HeaderModal } from "./HeaderModal";
import { useRouter } from "next/navigation";
import { HeaderSearch } from "./HeaderSearch";
import { DatePickerWithRange } from "./HeaderDate";
import { PopoverDemo } from "./SearchGuests";
import React, { useEffect } from "react";
import axios from "axios";

const Header = () => {
  const router = useRouter();
  const [hover, setHover] = React.useState<number>();
  // const searchdata = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/api/properties/getaddress?address=${}`);
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   searchdata();
  // }, []);
  return (
    <div className="flex items-center justify-between px-2 py-8">
      <div className="flex gap-2" onClick={() => router.push("/")}>
        <DiCodeigniter className="h-10 w-10" />
        <p className="w-[30px] font-bold">Хөдөө гарья</p>
      </div>
      <div
        className={`flex rounded-full border-2 ${hover === 0 ? "bg-gray-100" : "bg-gray-100"}`}
      >
        <HeaderSearch
          hover={hover === 1 ? "bg-white" : "bg-gray-100 "}
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(0)}
        />
        <DatePickerWithRange
          hover={hover === 2 ? "bg-white" : "bg-gray-100 "}
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(0)}
        />
        <PopoverDemo
          // onClick={}
          hover={hover === 3 ? "bg-white" : "bg-gray-100 "}
          onMouseEnter={() => setHover(3)}
          onMouseLeave={() => setHover(0)}
        />
      </div>
      <div>
        <HeaderModal />
      </div>
    </div>
  );
};
export default Header;
