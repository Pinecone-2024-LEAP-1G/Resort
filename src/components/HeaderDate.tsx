"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { parseAsFloat, useQueryState, useQueryStates } from "nuqs";

type SearchProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hover: string;
  className?: React.HTMLAttributes<HTMLDivElement>;
};
export function DatePickerWithRange({
  className,
  onMouseEnter,
  onMouseLeave,
  hover,
}: SearchProps) {
  // const [check, setCheck] = React.useState<DateRange | undefined>({
  //   from: new Date(2022, 0, 20),
  //   to: addDays(new Date(2022, 0, 20), 20),
  // });
  // const [date, setDate] = useQueryState(
  //   {
  //     lat: parseAsFloat.withDefault(45.18),
  //     lng: parseAsFloat.withDefault(5.72),
  //   },
  //   {
  //     history: "push",
  //   },
  // );

  const [{ from, to }, setDate] = useQueryStates<DateRange | undefined>({
    // Use variable names that make sense in your codebase
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  console.log("datae", from, to);
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`flex w-[234px] flex-col items-center justify-center rounded-full px-6 py-1 ${
              hover
            }`}
            // id="date"
            // variant={"outline"}
            // className={cn(
            //   "w-[300px] justify-start text-left font-normal",
            //   !date && "text-muted-foreground",
            // )}
          >
            {/* <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : ( */}

            <span>Add dates</span>
            {/* )} */}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto rounded-xl p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={from}
            selected={to}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
