"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ReservationCancel } from "./ResevationCancel";
import { useRouter } from "next/navigation";
import moment from "moment";

type OrderDetailProps = {
  userId?: string;
};
export type ReservationType = {
  _id: string;
  createdAt: Date;
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
    name: string;
    email: string;
    image: string;
    password: string;
    phoneNumber: number;
  };
};

export const OrderDetail = ({ userId }: OrderDetailProps) => {
  const [reservations, setReservations] = useState<ReservationType[]>();
  const router = useRouter();

  const getReservation = async () => {
    try {
      const response = await axios.get(`/api/reservations/${userId}`);
      setReservations(response.data.reservation);
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };
  useEffect(() => {
    getReservation();
  }, [userId]);

  const deleteReservation = async (reservationId: string) => {
    await axios.delete(`/api/reservations/delete/${reservationId}`);
    getReservation();
  };

  return (
    <div className="mx-auto w-[1074px]">
      <h1 className="h-[72px] py-4 text-2xl font-bold">Таны захиалга</h1>
      <div className="grid grid-cols-3 p-4">
        {reservations?.map((reservation) => (
          <div>
            <h1 className="mb-2 font-bold">
              Захиалга хийсэн өдөр:
              {moment(reservation.createdAt).format("ll")}
            </h1>
            <div
              onClick={() =>
                router.push(`/property/${reservation.propertyId._id}`)
              }
              key={reservation._id}
            >
              <ReservationCancel
                image={reservation.propertyId.propertyPictures[0]}
                address={reservation.propertyId.address}
                checkIn={reservation.checkIn}
                checkOut={reservation.checkOut}
                price={reservation.totalPrice}
              />
            </div>
            <button
              onClick={() => deleteReservation(reservation._id)}
              className="mb-10 mt-4 w-fit items-center justify-center rounded-lg bg-gray-700 p-2 text-white"
            >
              Захиалга цуцлах
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
