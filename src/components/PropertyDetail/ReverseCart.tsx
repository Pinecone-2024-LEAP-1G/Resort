import { Button } from "@/components/ui/button";
import { GuestPopover } from "./GuestPopover";

import axios from "axios";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { Property } from "@/app/property/[propertyId]/page";
import { useRouter } from "next/navigation";
import { parseAsInteger, useQueryStates } from "nuqs";

const dates = [
  {
    _id: "673ff5e491e65705da8f84e2",
    propertyId: "673ee32911e7953321c22737",
    reservationId: "673ee36a11e7953321c22739",
    checkInDate: "2024-11-19T08:45:13.954+00:00",
    checkOutDate: "2024-11-25T08:45:13.954+00:00",
  },
  {
    _id: "673ff5e491e65705da8f84e2",
    propertyId: "673ee32911e7953321c22737",
    reservationId: "673ee36a11e7953321c22739",
    checkInDate: "2024-11-12T08:45:13.954+00:00",
    checkOutDate: "2024-11-18T08:45:13.954+00:00",
  },
];
type Dates = {
  _id: string;
  propertyId: string;
  reservationId: string;
  checkInDate: Date;
  checkOutDate: Date;
};

interface Props {
  property?: Property;
}
export const ReverseCart = ({ property }: Props) => {
  const selectedCheckOutDate =
    dates.length > 0
      ? new Date(dates[0].checkOutDate) // Example: First checkOutDate
      : new Date(); // Default fallback if no dates available

  const today = new Date();

  // Find the closest checkOutDate
  const closestDate = dates
    .map((d) => new Date(d.checkOutDate))
    .reduce((prev, curr) => {
      return Math.abs(curr.getTime() - today.getTime()) <
        Math.abs(prev.getTime() - today.getTime())
        ? curr
        : prev;
    }, today);

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: closestDate,
    to: addDays(closestDate, 5),
  });
  const [
    { numberOfAdult, numberOfChild, numberOfInfants, numberOfPets },
    setQueries,
  ] = useQueryStates({
    numberOfAdult: parseAsInteger,
    numberOfChild: parseAsInteger,
    numberOfInfants: parseAsInteger,
    numberOfPets: parseAsInteger,
  });

  const router = useRouter();

  // const getDays = async () => {
  //   const dates = await axios.get("http://localhost:3000/api/reservations");
  // };

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
  console.log(daysBetween);

  const priceOfDates = price * daysBetween;

  const totalPrice = priceOfDates + 20000 + 20000;

  return (
    <div className="ml-auto grid h-[495px] w-[372px] justify-center gap-2 rounded-lg border p-8 shadow-lg">
      <p className="mb-4">Үнэ: {property?.price}₮</p>
      <DatePickerWithRange
        selected={date}
        onSelect={setDate}
        defaultMonth={date?.from || new Date()}
        date={date}
      />
      <GustPopover
        adult={Number(numberOfAdult)}
        setAdult={(adult: number) => setQueries({ numberOfAdult: adult })}
        child={Number(numberOfChild)}
        setChild={(child: number) => setQueries({ numberOfChild: child })}
        infants={Number(numberOfInfants)}
        setInfants={(infants: number) =>
          setQueries({ numberOfInfants: infants })
        }
        pets={Number(numberOfPets)}
        setPets={(pets: number) => setQueries({ numberOfPets: pets })}
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
