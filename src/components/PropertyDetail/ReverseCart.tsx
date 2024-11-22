import { Button } from "components/ui/button";
import { GustPopover } from "./GuestPopover";
import { DatePickerWithRange } from "./Calendar";
import axios from "axios";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays, differenceInDays, formatDistance } from "date-fns";
import { Property } from "app/property/[propertyId]/page";
import moment from "moment";
import { format } from "date-fns";

interface Props {
  property?: Property;
}
export const ReverseCart = ({ property }: Props) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 5),
  });
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const createReserve = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/reservations",
        {
          checkIn: date?.to,
          checkOut: date?.from,
          userId: "673c5d112ca9c198fd86568b",
          propertyId: "673eb06358c0a684b6b3c1df",
          adult: adult,
          children: child,
          infants: infants,
          pets: pets,
          totalPrice: 120,
        },
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-auto grid h-[495px] w-[372px] justify-center gap-2 rounded-lg border p-8 shadow-lg">
      <p className="mb-4">Үнэ: {property?.price}₮</p>
      <DatePickerWithRange
        selected={date}
        onSelect={setDate}
        defaultMonth={date?.from}
        date={date}
      />
      <GustPopover
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
          <p className="border-b border-black">{property?.price}₮ * өдөр</p>
          <p>priceOfDates₮</p>
        </div>
        <div className="flex justify-between">
          <p className="border-b border-black">Цэвэрлэгээний үнэ</p>
          <p>0₮</p>
        </div>
        <div className="flex justify-between">
          <p className="border-b border-black">Зуучлалийн үнэ</p>
          <p>0₮</p>
        </div>
      </div>
      <div className="text-md flex h-12 justify-between font-bold">
        <p>Нийт үнэ</p>
        <p>0₮</p>
      </div>
    </div>
  );
};
