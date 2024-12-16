"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type ReserProps = {
  propertyId?: string;
};

type Review = {
  userId: {
    _id: string;
    name: string;
    phoneNumber: string;
    image: string;
    email: string;
  };
  checkIn: Date;
  checkOut: Date;
  guest: number;
};

export const MyReservations = ({ propertyId }: ReserProps) => {
  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    const getReservations = async () => {
      const response = await axios.get(
        `/api/reservations/property/${propertyId}`,
      );
      setReviews(response.data.reviews);
      console.log(response);
    };
    getReservations();
  }, [propertyId]);
  // if (reviews[0] === null) {
  //   return <>Tand odoogoor zahialga bhgui baina</>;
  // }
  return <div>hi</div>;
};
