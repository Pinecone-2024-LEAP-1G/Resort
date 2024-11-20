"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
        "ml-auto grid h-[276px] w-[372px] gap-2 rounded-lg border p-8 shadow-md",
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
                "h-16 w-[300px] justify-between border-2 font-normal",
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

                    <div className="flex-1 flex-col justify-center">
                      <p>CheckOut</p>
                      {format(date.to, "LLL dd, y")}
                    </div>
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Амрах өдөр ба үнийн сонголт</span>
              )}
            </Button>
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
