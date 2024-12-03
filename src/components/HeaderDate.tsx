"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useQueryStates } from "nuqs";

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
  const [date, setDate] = useQueryStates<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`flex w-[234px] flex-col items-center justify-center rounded-full px-6 py-3 ${
              hover
            }`}
          >
            Add dates
            <input
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={`rounded-full text-center ${hover}`}
              placeholder="Search"
              value={
                date
                  ? `${date.from?.toLocaleDateString()} - ${date.to?.toLocaleDateString()}`
                  : "search"
              }
            ></input>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto rounded-xl p-0" align="start">
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
}
