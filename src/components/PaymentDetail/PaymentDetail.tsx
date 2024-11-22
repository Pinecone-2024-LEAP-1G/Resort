"use client"

import { ChevronLeft, Gem } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { Keyboard } from 'lucide-react';
import { CheckInTime } from "./CheckInTime";

export const PaymentDetail = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  });

  return (
    <div className="w-full px-20">
      <div className="flex flex-row items-center mr-8">
        <ChevronLeft className="w-8 justify-start" />
        <h3 className="text-3xl font-medium">Confirm and pay</h3>
      </div>
      <div className="flex flex-row px-20">
        <div className="flex flex-col">
          <Alert className="flex flex-row my-6 h-[98px] w-[556px] rounded-2xl justify-between items-center text-base">
            <div className="flex flex-col">
              <AlertTitle>This is a rare find.</AlertTitle>
              <AlertDescription>
                <p> Bua's place is usually booked.</p>
              </AlertDescription>
            </div>
            <div>
              <Gem className="fill-pink-700 justify-end" />
            </div>
          </Alert>
          <div>
            <h2 className="text-xl font-semibold">Your trip</h2>
            <div className="my-6 flex flex-col gap-6">
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-medium">Dates</p>
                <p>Jan 16 – 17, 2025</p>
              </div>
              <div>
<Popover>
  <PopoverTrigger>
    <p className="underline underline-offset-1 font-semibold">Edit</p>
  </PopoverTrigger>
  <PopoverContent className="bg-white w-[662px] h-[554px] flex flex-col justify-center p-8 gap-4">
    <div className="flex flex-row justify-between">
    <div>
      <h2 className="text-xl font-medium">2 nights</h2>
      <p className="text-gray-600 text-sm">4 beds 0 baths</p>
    </div>
    <div>
        <Button variant="outline">CHECK-IN</Button>
        <Button variant="outline">CHECK-OUT</Button>
</div>
</div>
             <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
<div className="flex justify-between">
    <Keyboard className="justify-center items-center" />
    <div className="flex items-center gap-4">
      <p className="underline underline-offset-1">Clear dates</p>
      <Button>Save</Button>
    </div>
</div>
      </PopoverContent>
</Popover>
</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-medium">Check-in time</p>
                <p>10:00 AM – 12:00 PM</p>
              </div>
              <Popover>
  <PopoverTrigger>              
    <p className="underline underline-offset-1 font-semibold">Edit</p>
  </PopoverTrigger>
  <PopoverContent className="bg-white max-w-full h-full flex border-0 shadow-transparent p-8"><CheckInTime/></PopoverContent>
</Popover>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-medium">Guests</p>
                <p>3 guests</p>
                <div />
              </div>
              <p className="font-semibold">Edit</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
