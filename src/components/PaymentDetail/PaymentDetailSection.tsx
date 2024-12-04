"use client";

import { ChevronLeft, Gem } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import React, { useEffect, useState } from "react";
import { Keyboard } from "lucide-react";
import { CheckInTime } from "./CheckInTime";
import axios from "axios";
import moment from "moment";
import { useSearchParams } from "next/navigation";

export type Property = {
  _id: string;
  price: number;
  guests: number;
  address: string;
  description: string;
  propertyPictures: string;
  userId: string;
  categoryId: string;
  totalBedrooms: string;
  totalOccupancy: string;
  totalBathrooms: string;
};

interface Props {
  propertyId?: string;
}

export const PaymentDetailSection = ({ propertyId }: Props) => {
  const [property, setProperty] = useState<Property>();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const adult = searchParams.get("adult");
  const child = searchParams.get("child");
  const pets = searchParams.get("pets");
  const infants = searchParams.get("infants");

  let allGuests = 0;

  if (adult && !isNaN(Number(adult))) {
    allGuests += Number(adult);
  }
  if (child && !isNaN(Number(child))) {
    allGuests += Number(child);
  }
  if (infants && !isNaN(Number(infants))) {
    allGuests += Number(infants);
  }
  if (pets && !isNaN(Number(pets))) {
    allGuests += Number(pets);
  }

  useEffect(() => {
    const getProperty = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/properties/${propertyId}`,
        );
        setProperty(data?.property);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProperty();
  }, []);

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
                  {moment(from).format("ll")} - {moment(to).format("ll")}
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
                {/* <div>
                  <p className="font-medium">Check-in time</p>
                  <p>10:00 AM – 12:00 PM</p>
                </div> */}
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <p className="font-medium">Guests</p>

                  <p>{allGuests}</p>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
