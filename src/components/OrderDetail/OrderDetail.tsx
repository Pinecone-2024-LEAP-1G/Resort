"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { OrderProps } from "./OrderProps";

type OrderProps = {
  userId?: string;
};
type Reservation = {
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
  adult: number;
  children: number;
  infants: number;
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

export const OrderDetail = ({ userId }: OrderProps) => {
  const [reservations, setReservations] = useState<Reservation[]>();

  useEffect(() => {
    const getReservation = async () => {
      try {
        const response = await axios.get(
          ` http://localhost:3000/api/reservations/${userId}`,
        );
        setReservations(response.data.reservation);
      } catch (error) {
        toast.error("error");
      }
    };
    getReservation();
  }, [userId]);

  return (
    <div className="mx-auto w-[800px]">
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
