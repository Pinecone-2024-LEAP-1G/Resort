"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { OrderProps } from "./OrderProps";

type OrderDetailProps = {
  userId?: string;
};
export type ReservationType = {
  _id: string;
  propertyId: {
    _id: string;
    price: number;
    guests: number;
    address: string;
    description: string;
    propertyPictures: string[];
    categoryId: string;
    totalBedrooms: string;
    totalBathrooms: string;
    cleaningFee: number;
    userId: string;
    reviewId: string;
  };
  checkIn: Date;
  checkOut: Date;
  guest: number;
  totalPrice: number;
  userId: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    password: string;
    phoneNumber: number;
  };
};

export const OrderDetail = ({ userId }: OrderDetailProps) => {
  const [reservations, setReservations] = useState<ReservationType[]>();

  useEffect(() => {
    const getReservation = async () => {
      try {
        const response = await axios.get(`/api/reservations/${userId}`);
        setReservations(response.data.reservation);
        console.log(response);
      } catch (error) {
        console.log(error);

        toast.error("error");
      }
    };
    getReservation();
  }, [userId]);

  return (
    <div className="mx-auto w-[1074px]">
      <h1 className="h-[72px] py-4 text-2xl font-bold">Таны захиалга</h1>
      {reservations?.map((reservation) => (
        <OrderProps
          key={reservation._id}
          adress={reservation.propertyId.address}
          from={reservation.checkIn}
          to={reservation.checkOut}
          totalPrice={reservation.totalPrice}
          image={reservation.propertyId.propertyPictures[0]}
          description={reservation.propertyId.description}
        />
      ))}
    </div>
  );
};
