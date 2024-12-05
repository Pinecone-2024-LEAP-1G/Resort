"use client";

import { ChevronLeft, Gem } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import React, { useEffect, useState } from "react";
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
      } catch (error) {
        console.log(error);
      }
    };
    getProperty();
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="mr-8 flex flex-row items-center">
        <ChevronLeft className="w-8 justify-center" />
        <h3 className="px-12 text-3xl font-medium">Confirm and pay</h3>
      </div>
      <div className="flex flex-row pt-20">
        <div className="flex flex-col">
          <Alert className="my-6 flex h-[98px] w-[556px] flex-row items-center justify-between rounded-2xl text-base shadow-lg">
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
          <div className="flex flex-col justify-start py-28">
            <h2 className="text-2xl font-semibold">Your trip</h2>
            <div className="my-6 flex flex-col gap-6 w-[556px]">
              <div className="flex flex-row justify-between">
                <div className="border-t ">
                  <p className="font-medium w-[556px] pt-6">Dates</p>
                  <p className="text-lg font-semibold">
                    <p> Check-In: {moment(from).format("ll")}</p>
                    <p> Check-out: {moment(to).format("ll")}</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between"></div>
            <div className="flex flex-row justify-between">
              <div className="border-t">
                <p className="font-medium w-[556px] pt-6">Guests</p>
                <p className="text-lg font-semibold">{allGuests} guests</p>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};