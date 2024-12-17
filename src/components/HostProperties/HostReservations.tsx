"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { ReservationType } from "../OrderDetail/OrderDetail";

type Props = {
  propertyId?: string;
};

export const HostReservations = ({ propertyId }: Props) => {
  const [reservations, setReservations] = useState<ReservationType[]>();
  console.log(reservations);

  useEffect(() => {
    const getReserve = async () => {
      const response = axios.get(`/api/reservations/property/${propertyId}`);
      setReservations((await response).data.reservations);
    };
    getReserve();
  }, [propertyId]);
  return <div>hi</div>;
};
