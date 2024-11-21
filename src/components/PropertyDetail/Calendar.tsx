"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { GustPopover } from "./GuestPopover";

export const DatePickerWithRange = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div
      className={cn(
        "ml-auto grid h-[495px] w-[372px] gap-2 rounded-lg border p-8 shadow-lg",
        className,
      )}
    >
      <Popover>
        <PopoverTrigger asChild>
          <div className="">
            <p className="mb-4">Үнэ 0$</p>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "h-16 w-[300px] items-start justify-start border-2 font-normal",
                !date && "text-muted-foreground",
              )}
            >
              {date?.from ? (
                date.to ? (
                  <>
                    <div className="flex-1 border-r">
                      <p>Check-In</p>
                      {format(date.from, "LLL dd, y")}
                    </div>

                    <div className="flex-1 flex-col justify-start">
                      <p>CheckOut</p>
                      {format(date.to, "LLL dd, y")}
                    </div>
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span></span>
              )}
            </Button>
            <Button className="mt-4 h-10 w-[300px] bg-gray-400">reserve</Button>
            <GustPopover />
            <div className="mt-12 flex h-28 flex-col gap-2 border-b">
              <div className="flex justify-between">
                <p className="border-b border-black">price * 0</p>
                <p>total price</p>
              </div>
              <div className="flex justify-between">
                <p className="border-b border-black">tsewelgenii une</p>
                <p>0</p>
              </div>
              <div className="flex justify-between">
                <p className="border-b border-black">zuuchlaliin une</p>
                <p>0</p>
              </div>
            </div>
            <div className="text-md mt-6 flex h-12 justify-between font-bold">
              <p>niit une</p>
              <p>0$</p>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            className={`bg-gray-400`}
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
