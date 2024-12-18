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
      console.log(response);
    };
    getReserve();
  }, [propertyId]);
  return (
    <div>
      <div className="mx-auto p-8">
        <button className="rounded-md border bg-cyan-500 p-2 text-white hover:bg-cyan-800">
          Захиалгатай өдрүүд
        </button>
      </div>
    </div>
  );
};
