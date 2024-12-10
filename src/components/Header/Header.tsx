"use client";
import { DiCodeigniter } from "react-icons/di";
import { HeaderSearch } from "./HeaderSearchAddress";
import { DatePickerWithRange } from "./HeaderDate";
import React, { useState } from "react";
import { addDays } from "date-fns";
import { HeaderModal } from "./HeaderModal";
import { PopoverDemo } from "./HeaderSearchGuests";
import { useRouter } from "next/navigation";
import { SelectRangeEventHandler } from "react-day-picker";

const Header = () => {
  const [hover, setHover] = React.useState<number>();
  const [addresssearch, setAddresssearch] = useState("");
  const [adultNumber, setAdultNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [infantsNumber, setInfantsNumber] = useState(0);
  const [petNumber, setPetNumber] = useState(0);
  const [, setGuestsValue] = useState(true);
  const [guests, setGuests] = useState<number | string>();
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
    <div className="flex items-center justify-between px-2 py-8">
      <div className="flex gap-2" onClick={() => router.push("/")}>
        <DiCodeigniter className="h-10 w-10" />
        <p className="w-[30px] font-bold text-green-500">Хөдөө гарья</p>
      </div>
      <div
        className={`flex rounded-full border-2 ${hover === 0 ? "bg-gray-100" : "bg-gray-100"}`}
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
          adultNumber={adultNumber}
          childrenNumber={childrenNumber}
          infantsNumber={infantsNumber}
          petNumber={petNumber}
          decreaseAdult={() =>
            adultNumber > 0 && setAdultNumber((prev) => prev - 1)
          }
          decreaseChildren={() =>
            childrenNumber > 0 && setChildrenNumber((prev) => prev - 1)
          }
          decreaseInfants={() =>
            infantsNumber > 0 && setInfantsNumber((prev) => prev - 1)
          }
          onClick={searchProperty}
          decreasePet={() => petNumber > 0 && setPetNumber((prev) => prev - 1)}
          plusAdult={() => setAdultNumber((prev) => prev + 1)}
          plusChildren={() => setChildrenNumber((prev) => prev + 1)}
          plusInfants={() => setInfantsNumber((prev) => prev + 1)}
          plusPet={() => setPetNumber((prev) => prev + 1)}
          hover={hover === 3 ? "bg-white" : "bg-gray-100 "}
          onMouseEnter={() => setHover(3)}
          onMouseLeave={() => setHover(0)}
          submit={() => {
            setGuests(adultNumber + childrenNumber + petNumber + infantsNumber);
            setGuestsValue(true);
          }}
        />
      </div>
      <div>
        <HeaderModal />
      </div>
    </div>
  );
};

export default Header;
