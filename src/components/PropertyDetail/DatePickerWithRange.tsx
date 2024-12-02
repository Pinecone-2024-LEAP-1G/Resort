// "use client";

import * as React from "react";
import { format } from "date-fns";
import { DateRange, SelectRangeEventHandler } from "react-day-picker";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface Props {
  defaultMonth?: Date;
  selected: DateRange | undefined;
  onSelect?: SelectRangeEventHandler;
  date?: DateRange | undefined;
  fromDate?: Date;
  disabled?: DateRange[] | Date[];
  onclick?: () => void;
}

export const DatePickerWithRange = ({
  defaultMonth,
  selected,
  onSelect,
  date,
  fromDate,
  disabled,
  onclick,
}: Props) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <div className="">
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "h-16 w-[300px] items-start justify-start border-2 font-normal",
                !onSelect &&
                  "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
              )}
              onClick={onclick}
            >
              {date?.from ? (
                date.to ? (
                  <>
                    <div className="flex-1 border-r">
                      <p>Check-In</p>
                      {format(date.from, "LLL dd, y")}
                    </div>

                    <div className="flex-1 flex-col justify-start">
                      <p>Check-Out</p>
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
            defaultMonth={defaultMonth}
            selected={selected}
            onSelect={onSelect}
            numberOfMonths={2}
            fromDate={fromDate}
            disabled={disabled}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
