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
import axios from "axios";

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
  React.useEffect(() => {
    const getAddress = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/properties/getAddress?from=${date?.from}&to=${date?.to}`,
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getAddress();
  }, []);
  console.log(date);
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
          >
            <span>Add dates</span>
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
