"use client";

import { ChevronLeft, Gem } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { Keyboard } from "lucide-react";
import { CheckInTime } from "./CheckInTime";
import { GuestPopover } from "../PropertyDetail/GuestPopover";
import mongoose from "mongoose";
import axios from "axios";
import moment from "moment";

type Reservation = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: mongoose.Schema.Types.ObjectId;
  checkIn: Date;
  checkOut: Date;
  adult: number;
  children: number;
  infants: number;
  totalPrice: number;
};

export const PaymentDetail = ({}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  });
  const [reservation, setReservation] = useState<Reservation>();

  const getReservation = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/reservations/6743f6dfd5e3c0e3bd9f50f1",
      );
      setReservation(data.reservation);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReservation();
  }, []);
  // console.log(reservation);

  const checkDates = reservation?.map((days) => ({
    from: new Date(days.checkIn),
    to: new Date(days.checkOut),
  }));

  const calculateDate = (from: Date, to: Date) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const timeDiff = to.getTime() - from.getTime();
    const diffDays = Math.round(Math.abs(timeDiff / oneDay));
    console.log(diffDays);
  };

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
                  <p>
                    {reservation?.[0]?.checkIn
                      ? moment(reservation[0].checkIn).format("ll")
                      : "No check-out date available"}{" "}
                    -{" "}
                    {reservation?.[0]?.checkOut
                      ? moment(reservation[0].checkOut).format("ll")
                      : "No check-out date available"}
                  </p>
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
