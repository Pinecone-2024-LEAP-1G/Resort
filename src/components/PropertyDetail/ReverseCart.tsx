import { Button } from "@/components/ui/button";
import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { Property } from "@/app/property/[propertyId]/page";
import { parseAsInteger, parseAsIsoDate, useQueryStates } from "nuqs";
import { GuestPopover } from "./GuestPopover";
import { DatePickerWithRange } from "./DatePickerWithRange";

const reservation = [
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
  {
    _id: "673ff5e491e65705da8f84e2",
    propertyId: "673ee32911e7953321c22737",
    reservationId: "673ee36a11e7953321c22739",
    checkInDate: "2024-12-12T08:45:13.954+00:00",
    checkOutDate: "2024-12-14T08:45:13.954+00:00",
  },
  {
    _id: "673ff5e491e65705da8f84e2",
    propertyId: "673ee32911e7953321c22737",
    reservationId: "673ee36a11e7953321c22739",
    checkInDate: "2024-11-28T08:45:13.954+00:00",
    checkOutDate: "2024-11-31T08:45:13.954+00:00",
  },
];

interface Props {
  property?: Property;
}
export const ReverseCart = ({ property }: Props) => {
  const disabledRanges = reservation.map((item) => ({
    from: new Date(item.checkInDate),
    to: new Date(item.checkOutDate),
  }));

  const disabledDays = reservation.flatMap((item) => {
    const days = [];
    const current = new Date(item.checkInDate);
    while (current <= new Date(item.checkOutDate)) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return days;
  });
  const getDaysArray = (start: Date, end: Date) => {
    const dates = [];
    for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      dates.push(new Date(dt));
    }
    return dates;
  };

  const dayList = disabledRanges.map((range) =>
    getDaysArray(range.from, range.to),
  );

  const findNearestValidDate = (startDate: Date) => {
    const date = new Date(startDate);
    while (
      disabledDays.some(
        (disabledDay) =>
          disabledDay.getFullYear() === date.getFullYear() &&
          disabledDay.getMonth() === date.getMonth() &&
          disabledDay.getDate() === date.getDate(),
      )
    ) {
      date.setDate(date.getDate() + 1);
    }
    return date;
  };

  const today = new Date();
  const isCurrentYear2024 = today.getFullYear() === 2024;
  const baseDate = isCurrentYear2024 ? today : new Date(2024, 0, 1);
  const nearestValidFromDate = findNearestValidDate(baseDate);

  const nearestValidToDate = addDays(new Date(2024, 0, 5), 0);

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
  console.log(to);

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

  return (
    <div className="ml-auto grid h-[495px] w-[372px] justify-center gap-2 rounded-lg border p-8 shadow-lg">
      <p className="mb-4">Үнэ: {property?.price}₮</p>
      <DatePickerWithRange
        selected={{ from, to }}
        onSelect={(range) => {
          if (range) setDate(range);
        }}
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
      <Button className="mt-4 h-10 w-[300px] bg-gray-400">reserve</Button>
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
