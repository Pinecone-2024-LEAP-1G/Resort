import { DiCodeigniter } from "react-icons/di";
("use client");
import Logo from "./icons/Logo";

import { HeaderModal } from "./HeaderModal";
import { useRouter } from "next/navigation";
import { HeaderSearch } from "./HeaderSearch";
import { DatePickerWithRange } from "./HeaderDate";
import { PopoverDemo } from "./SearchGuests";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQueryStates, useQueryState } from "nuqs";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

const Header = () => {
  const router = useRouter();
  const [hover, setHover] = React.useState<number>();
  const [addressSearch, setAddressSearch] = useQueryState("address");
  const [guests] = useQueryState("");
  const [date, setDate] = useQueryStates<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const [adultNumber, setAdultNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [infantsNumber, setInfantsNumber] = useState(0);
  const [petNumber, setPetNumber] = useState(0);
  const [guests, setGuests] = useQueryState<number | undefined>("guests");
  const minusAdult = () => {
    if (adultNumber > 0) setAdultNumber((prev) => prev - 1);
  };
  const minusChildren = () => {
    if (childrenNumber > 0) setChildrenNumber((prev) => prev - 1);
  };
  const minusPet = () => {
    if (petNumber > 0) setPetNumber((prev) => prev - 1);
  };
  const minusInfants = () => {
    if (infantsNumber > 0) setInfantsNumber((prev) => prev - 1);
  };

  const allGuests = () => {
    const number = adultNumber + childrenNumber + petNumber + infantsNumber;
    setGuests(number);
  };

  const searchProperty = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/properties/getAddress?address=${addressSearch}&from=${date?.from}&to=${date?.to}&guests=${guests}`,
      );
      console.log(response.data);
      setAddressSearch("");
      setDate(null);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    searchProperty();
  }, []);
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
          adultNumber={adultNumber}
          childrenNumber={childrenNumber}
          infantsNumber={infantsNumber}
          petNumber={petNumber}
          minusAdult={minusAdult}
          minusChildren={minusChildren}
          minusInfants={minusInfants}
          onClick={searchProperty}
          minusPet={minusPet}
          plusAdult={() => setAdultNumber((prev) => prev + 1)}
          plusChildren={() => setChildrenNumber((prev) => prev + 1)}
          plusInfants={() => setInfantsNumber((prev) => prev + 1)}
          plusPet={() => setPetNumber((prev) => prev + 1)}
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
