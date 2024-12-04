"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { addDays } from "date-fns";
import { parseAsInteger, parseAsIsoDate, useQueryStates } from "nuqs";
import { GuestPopover } from "./GuestPopover";
import { DatePickerWithRange } from "./DatePickerWithRange";
import axios from "axios";
import { AvailableList } from "@/lib/models";
import { Property } from "./PropertyDetail";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  property?: Property;
  propertyId?: string;
}
export const ReverseCart = ({ property, propertyId }: Props) => {
  const [reservation, setReservation] = useState<AvailableList[] | []>([]);
  const router = useRouter();
  useEffect(() => {
    const getReservation = async () => {
      const response = await axios.get<AvailableList[] | []>(
        `http://localhost:3000/api/availablelists?propertyId=${propertyId}`,
      );
      setReservation(response.data.AvailableLists);
    };

    getReservation();
  }, []);
  const disabledRanges = reservation?.map((item) => ({
    from: new Date(item.checkInDate),
    to: new Date(item.checkOutDate),
  }));

  const disabledDays = reservation?.flatMap((item) => {
    const days = [];
    const current = new Date(item.checkInDate);
    while (current <= new Date(item.checkOutDate)) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return days;
  });

  const findNearestValidDate = (startDate: Date) => {
    const date = new Date(startDate);
    while (
      disabledDays.some(
        (disabledDay) =>
          disabledDay.getFullYear() === date.getFullYear() &&
          disabledDay.getMonth() === date.getMonth() &&
          disabledDay.getDate() === date.getDate(),
      )
    )
      date.setDate(date.getDate() + 1);
    return date;
  };

  const today = new Date();
  const isCurrentYear2024 = today.getFullYear() === 2024;
  const baseDate = isCurrentYear2024 ? today : new Date(2024, 0, 1);
  const nearestValidFromDate = findNearestValidDate(baseDate);

  const nearestValidToDate = addDays(nearestValidFromDate, 3);

  const [{ from, to }, setDate] = useQueryStates(
    {
      from: parseAsIsoDate.withDefault(nearestValidFromDate),
      to: parseAsIsoDate.withDefault(nearestValidToDate),
    },
    {
      urlKeys: {
        from: "start",
        to: "end",
      },
    },
  );

  const [
    { numberOfAdult, numberOfChild, numberOfInfants, numberOfPets },
    setQueries,
  ] = useQueryStates({
    numberOfAdult: parseAsInteger,
    numberOfChild: parseAsInteger,
    numberOfInfants: parseAsInteger,
    numberOfPets: parseAsInteger,
  });

  const price = property?.price ?? Infinity;

  const getDaysBetweenDates = (from: Date, to: Date) => {
    const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
    const timeDifference = to.getTime() - from.getTime();
    return Math.abs(timeDifference) / oneDayInMilliseconds;
  };

  const daysBetween = getDaysBetweenDates(
    nearestValidFromDate,
    nearestValidToDate,
  );

  const priceOfDates = price * daysBetween;

  const totalPrice = priceOfDates + 20000 + 20000;

  const navigateToNextPage = () => {
    router.push(
      `/bookingRequest?from=${from.toISOString()}&to=${(
        to?.toISOString(),
      )}&adult=${numberOfAdult}&child=${numberOfChild}&infants=${numberOfInfants}&pets=${numberOfPets}$propertyId=${propertyId}`,
    );
  };

  return (
    <div className="ml-auto grid h-[495px] w-[372px] justify-center gap-2 rounded-lg border p-8 shadow-lg">
      <p className="mb-4">Үнэ: {property?.price}₮</p>
      <DatePickerWithRange
        selected={{ from, to }}
        onSelect={setDate}
        defaultMonth={from || new Date()}
        disabled={disabledRanges}
        date={{ from, to }}
      />
      <GuestPopover
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
        onClick={navigateToNextPage}
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
