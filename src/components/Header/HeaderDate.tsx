"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectRangeEventHandler } from "react-day-picker";

type SearchProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hover: string;
  className?: React.HTMLAttributes<HTMLDivElement>;
  defaultMonth: Date | undefined;
  onSelect: SelectRangeEventHandler | undefined;
  selected: { from: Date; to: Date | undefined };
};

export function DatePickerWithRange({
  className,
  onMouseEnter,
  onMouseLeave,
  hover,
  onSelect,
  selected,
  defaultMonth,
}: SearchProps) {
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
            Өдөр сонгох
            <input
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={`rounded-full text-center ${hover}`}
              placeholder="Search"
              value={
                selected.from && selected.to
                  ? `${selected.from?.toLocaleDateString()} - ${selected.to?.toLocaleDateString()}`
                  : "search"
              }
            ></input>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto rounded-xl p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={defaultMonth}
            selected={selected}
            onSelect={onSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
