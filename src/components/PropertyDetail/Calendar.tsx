"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const DatePickerWithRange = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("ml-auto grid", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <div className="">
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "h-16 w-[300px] items-start justify-start border-2 font-normal",
                !date &&
                  "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
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
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto bg-white p-0" align="start">
          <Calendar
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
