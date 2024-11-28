"use client";

import { ChevronLeft, Gem } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { Keyboard } from "lucide-react";
import { CheckInTime } from "./CheckInTime";
import { GuestPopover } from "../PropertyDetail/GuestPopover";
import { DatePickerWithRange } from "../PropertyDetail/DatePickerWithRange";

export const PaymentDetail = ({}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  });
  return (
    <div className="w-full px-20">
      <div className="mr-8 flex flex-row items-center">
        <ChevronLeft className="w-8 justify-center" />
        <h3 className="px-12 text-3xl font-medium">Confirm and pay</h3>
      </div>
      <div className="flex flex-row px-20">
        <div className="flex flex-col">
          <Alert className="my-6 flex h-[98px] w-[556px] flex-row items-center justify-between rounded-2xl text-base">
            <div className="flex flex-col">
              <AlertTitle>This is a rare find.</AlertTitle>
              <AlertDescription>
                <p> </p>
              </AlertDescription>
            </div>
            <div>
              <Gem className="justify-end fill-pink-700" />
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
                      <p className="font-semibold underline underline-offset-1">
                        Edit
                      </p>
                    </PopoverTrigger>
                    <PopoverContent className="flex h-[554px] w-[662px] flex-col justify-center gap-4 bg-white p-8">
                      <div className="flex flex-row justify-between">
                        <div>
                          <h2 className="text-xl font-medium">2 nights</h2>
                          <p className="text-sm text-gray-600">
                            4 beds 0 baths
                          </p>
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
                        <Keyboard className="items-center justify-center" />
                        <div className="flex items-center gap-4">
                          <p className="underline underline-offset-1">
                            Clear dates
                          </p>
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
                    <p className="font-semibold underline underline-offset-1">
                      Edit
                    </p>
                  </PopoverTrigger>
                  <PopoverContent className="flex h-full max-w-full border-0 bg-white p-8 shadow-transparent">
                    <CheckInTime />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <p className="font-medium">Guests</p>
                  <p>3 guests</p>
                  <div />
                </div>
                <Popover>
                  <PopoverTrigger>
                    <p className="font-semibold underline underline-offset-1">
                      Edit
                    </p>
                  </PopoverTrigger>
                  <PopoverContent className="border-0 bg-white shadow-transparent">
                    <GuestPopover />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
