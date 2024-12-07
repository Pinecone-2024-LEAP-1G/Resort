"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { addDays } from "date-fns";
import { parseAsInteger, parseAsIsoDate, useQueryStates } from "nuqs";
import { GuestPopover } from "./GuestPopover";
import { DatePickerWithRange } from "./DatePickerWithRange";
import axios from "axios";
import { AvailableList } from "@/lib/models";
import { useRouter } from "next/navigation";
import { PropertyType } from "../Review";
import { toast } from "sonner";

interface Props {
  property?: PropertyType;
  propertyId?: string;
  text: string;
}
export const ReverseCart = ({ property, propertyId, text }: Props) => {
  const [reservation, setReservation] = useState<AvailableList[]>([]);
  const router = useRouter();
  useEffect(() => {
    const getReservation = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/availablelists?propertyId=${propertyId}`,
      );
      setReservation(response.data.AvailableLists);
    };

    getReservation();
  }, [propertyId]);
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

  const findNearestValidToDate = (startDate: Date, daysToAdd: number) => {
    const toDate = addDays(startDate, daysToAdd);
    while (
      disabledDays.some(
        (disabledDay) =>
          disabledDay.getDate() === toDate.getDate() &&
          disabledDay.getMonth() === toDate.getMonth() &&
          disabledDay.getFullYear() === toDate.getFullYear(),
      )
    ) {
      return startDate;
    }
    return toDate;
  };

  const today = new Date();
  const isCurrentYear2024 = today.getFullYear() === 2024;
  const baseDate = isCurrentYear2024 ? today : new Date(2024, 0, 1);
  const nearestValidFromDate = findNearestValidDate(baseDate);
  const nearestValidToDate = findNearestValidToDate(nearestValidFromDate, 3);

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

  const getDaysArray = (start: Date, end: Date) => {
    const dates = [];
    for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 2)) {
      dates.push(new Date(dt));
    }
    return dates;
  };

  const availablelists = getDaysArray(from, to);

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
  const cleaningFee = property?.cleaningFee ?? Infinity;

  const getDaysBetweenDates = (from: Date, to: Date) => {
    const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
    const timeDifference = to.getTime() - from.getTime();
    return Math.floor(timeDifference / oneDayInMilliseconds) + 1;
  };

  const daysBetween = getDaysBetweenDates(from, to);

  const priceOfDates = price * daysBetween;

  const totalPrice = priceOfDates + 20000 + 20000;

  const checkDate = () => {
    return availablelists.some((day) =>
      disabledDays.some(
        (disabledDay) =>
          disabledDay.getDate() === day.getDate() &&
          disabledDay.getMonth() === day.getMonth() &&
          disabledDay.getFullYear() === day.getFullYear(),
      ),
    );
  };

  const navigateToNextPage = () => {
    if (checkDate()) {
      toast.error("Захиалгатай өдөр сонгосон байна.");
      return;
    }

    router.push(
      `/bookingRequest/${propertyId}?from=${from.toISOString()}&to=${to.toISOString()}&propertyId=${propertyId}&totalPrice=${price}&adult=${numberOfAdult}&child=${numberOfChild}&infants=${numberOfInfants}&pets=${numberOfPets}`,
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
        {text}
      </Button>
      <div className="mt-8 flex h-28 flex-col gap-2 border-b">
        <div className="flex justify-between">
          <p className="border-b border-black">
            {new Intl.NumberFormat().format(price)}₮ * {daysBetween}өдөр
          </p>
          <p>{new Intl.NumberFormat().format(priceOfDates)}₮</p>
        </div>
        <div className="mt-4 flex justify-between">
          <p className="border-b border-black">Цэвэрлэгээний үнэ</p>
          <p>{new Intl.NumberFormat().format(cleaningFee)}₮</p>
        </div>
      </div>
      <div className="text-md flex h-12 justify-between font-bold">
        <p>Нийт үнэ</p>
        <p>{new Intl.NumberFormat().format(totalPrice)}₮</p>
      </div>
    </div>
  );
};
