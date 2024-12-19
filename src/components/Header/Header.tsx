"use client";

import { HeaderSearch } from "./HeaderSearchAddress";
import { DatePickerWithRange } from "./HeaderDate";
import React, { useState } from "react";
import { addDays } from "date-fns";
import { HeaderModal } from "./HeaderModal";
import { PopoverDemo } from "./HeaderSearchGuests";
import { useRouter } from "next/navigation";
import { SelectRangeEventHandler } from "react-day-picker";
import { MainHeaderLogo } from "../icons/MainHeaderLogo";

const Header = () => {
  const [hover, setHover] = React.useState<number>();
  const [addresssearch, setAddresssearch] = useState("");
  const [guests, setAdultNumber] = useState<number>(1);
  const [date, setDate] = React.useState<{ from: Date; to: Date | undefined }>({
    from: new Date(new Date()),
    to: addDays(new Date(), 20),
  });
  const [show, setShow] = useState(false);

  const router = useRouter();

  const searchProperty = () => {
    router.push(
      `/?address=${addresssearch}&from=${date?.from}&to=${date?.to}&guests=${guests}`,
    );
  };

  return (
    <div className="fixed top-0 z-10 flex w-full items-center justify-between border-none bg-white px-7 shadow-md">
      <div
        className="flex cursor-pointer gap-2"
        onClick={() => router.push("/")}
      >
        <MainHeaderLogo />
      </div>
      <div
        className={`flex rounded-full border text-xs ${hover === 0 ? "bg-gray-100" : "bg-gray-100"}`}
      >
        <HeaderSearch
          show={show}
          setAddresssearch={setAddresssearch}
          addresssearch={addresssearch}
          hover={hover === 1 ? "bg-white" : "bg-gray-100 "}
          onMouseEnter={() => {
            setHover(1);
            setShow(true);
          }}
          onMouseLeave={() => {
            setHover(0);
            setShow(false);
          }}
        />
        <DatePickerWithRange
          hover={hover === 2 ? "bg-white" : "bg-gray-100 "}
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(0)}
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate as SelectRangeEventHandler}
        />
        <PopoverDemo
          guests={guests}
          decrease={() => guests > 1 && setAdultNumber((prev) => prev - 1)}
          onClick={searchProperty}
          increase={() => setAdultNumber((prev) => prev + 1)}
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
