"use client";

import { PaymentDetail } from "@/components/PaymentDetail/PaymentDetail";
import { RulesAndPolicy } from "@/components/PaymentDetail/RulesAndPolicy";
import { ReverseCart } from "@/components/PropertyDetail/ReverseCart";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import axios from "axios";
import { Dot, Medal, Star } from "lucide-react";
import mongoose from "mongoose";
import { useEffect, useState } from "react";

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

const BookingRequest = () => {
  const [property, setProperty] = useState<Property>();
  const [reservation, setReservation] = useState<Reservation>();

  const getProperty = async () => {
    try {
      const { data } = await axios.get(
        "/api/properties/67492dc3073b29779b03c105",
      );
      setProperty(data.property);
    } catch (error) {
      console.log(error);
    }
  };
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
    getProperty();
  }, []);

  useEffect(() => {
    getReservation();
  }, []);
  // console.log(reservation);

  return (
    <div>
      <div className="w-full mx-20 grid grid-cols-2">
        <PaymentDetail />
        <div className="sticky top-10 ml-[92px]">
          <div className="mb-[88px] h-[360px] w-[456px] gap-4 rounded-2xl border p-6">
            <div className="mb-4 flex flex-row gap-4">
              <div
                className="h-[104px] w-[104px] items-center rounded-xl"
                style={{
                  backgroundImage: `url(${property?.propertyPictures[0]})`,
                }}
              ></div>
              <div className="flex flex-col justify-center gap-1">
                <p className="text-lg font-medium">{property?.address}</p>
                <div className="flex flex-row items-center gap-1 text-sm">
                  <Star className="h-3 w-3 fill-black" />
                  <p className="font-semibold">4.94</p>
                  <p>(434 reviews)</p>
                  <Dot className="h-5 w-5 fill-black" />
                  <Medal className="h-3 w-3 fill-black" />
                  <p>Superhost</p>
                </div>
              </div>
            </div>
            <div className="border-y py-4">
              <h3 className="pb-3 text-xl font-medium">Price details</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p>${property?.price} * udur </p>
                  <p>${property?.price}</p>
                </div>
                <div className="flex justify-between">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <p className="underline underline-offset-1">
                        Cleaning fee
                      </p>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-white">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <p className="text-sm">
                            One-time fee charged by host to cover the cost of
                            cleaning their space.{" "}
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <p>$137.61</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <p>Total</p>
              <p>{reservation?.[0].totalPrice}</p>
            </div>
          </div>
        </div>
        <RulesAndPolicy />
      </div>
    </div>
  );
};

const getDate = () => {};

export default BookingRequest;
