import { Button } from "@/components/ui/button";
import { GuestPopover } from "./GuestPopover";

import axios from "axios";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { Property } from "@/app/property/[propertyId]/page";
import { useRouter } from "next/navigation";

interface Props {
  property?: Property;
}
export const ReverseCart = ({ property }: Props) => {
  const [date, setDate] = React.useState<
    DateRange | undefined | { from: Date; to: Date }
  >({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 5),
  });
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const router = useRouter();

  const createReserve = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/reservations",
        {
          checkIn: date?.to,
          checkOut: date?.from,
          userId: "673c5d112ca9c198fd86568b",
          propertyId: property?._id,
          adult: adult,
          children: child,
          infants: infants,
          pets: pets,
          totalPrice: 120,
        },
      );
    } catch (error) {
      console.log(error);
    }
  };
  const price = property?.price ?? Infinity;

  const fromDate = date?.from ?? new Date();
  const toDate = date?.to ?? new Date();

  const getDaysBetweenDates = (from: Date, to: Date) => {
    const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
    const timeDifference = to.getTime() - from.getTime();
    return Math.abs(timeDifference) / oneDayInMilliseconds;
  };

  const daysBetween = getDaysBetweenDates(fromDate, toDate);

  const priceOfDates = price * daysBetween;

  const totalPrice = priceOfDates + 20000 + 20000;

  return (
    <div className="ml-auto grid h-[495px] w-[372px] justify-center gap-2 rounded-lg border p-8 shadow-lg">
      <p className="mb-4">Үнэ: {property?.price}₮</p>
      <DatePickerWithRange
        selected={date}
        onSelect={setDate}
        defaultMonth={date?.from}
        date={date}
      />
      <GuestPopover
        adult={adult}
        setAdult={setAdult}
        child={child}
        setChild={setChild}
        infants={infants}
        setInfants={setInfants}
        pets={pets}
        setPets={setPets}
        people={property?.guests}
        limitGuest={property?.guests}
      />
      <Button
        onClick={createReserve}
        className="mt-4 h-10 w-[300px] bg-gray-400"
      >
        reserve
      </Button>
      <div className="mt-8 flex h-28 flex-col gap-2 border-b">
        <div className="flex justify-between">
          <p className="border-b border-black">
            {price}₮ * {daysBetween}өдөр
          </p>
          <p>{priceOfDates}₮</p>
        </div>
        <div className="flex justify-between">
          <p className="border-b border-black">Цэвэрлэгээний үнэ</p>
          <p>20000₮</p>
        </div>
        <div className="flex justify-between">
          <p className="border-b border-black">Зуучлалийн үнэ</p>
          <p>20000₮</p>
        </div>
      </div>
      <div className="text-md flex h-12 justify-between font-bold">
        <p>Нийт үнэ</p>
        <p>{totalPrice}₮</p>
      </div>
    </div>
  );
};
