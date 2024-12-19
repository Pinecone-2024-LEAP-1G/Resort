"use client";

import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ReservationType } from "../OrderDetail/OrderDetail";

type Props = {
  propertyId?: string;
};

export const HostReservations = ({ propertyId }: Props) => {
  const [reservations, setReservations] = useState<ReservationType[]>();

  useEffect(() => {
    const getReserve = async () => {
      const response = axios.get(`/api/reservations/property/${propertyId}`);
      setReservations((await response).data.reservations);
    };
    getReserve();
  }, [propertyId]);

  if (reservations?.length === 0) {
    return (
      <div className="w-[100vw] p-40 text-center font-bold">
        Одоогоор захиалга байхгүй байна
      </div>
    );
  }

  return (
    <div className="mx-auto justify-center">
      <div className="mx-auto w-[100%] p-8">
        <div className="flex gap-4 text-2xl font-bold"></div>
        <div>
          {reservations?.map((reserve) => (
            <div
              className="mt-8 flex justify-center gap-4 rounded-xl border border-b bg-gray-100 p-8"
              key={reserve._id}
            >
              <div>
                <Image
                  src={reserve.userId.image}
                  width={40}
                  height={40}
                  alt="img"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="items-center justify-center">
                <p className="font-bold">{reserve.userId.name}</p>
                <p className="text-base"> {reserve.userId.email}</p>
              </div>
              <div className="ml-10">
                <p className="font-bold">Эхлэх өдөр </p>
                <p>{moment(reserve.checkIn).format("L")}</p>
              </div>
              <div className="ml-10">
                <p>
                  <p className="font-bold">Дуусах өдөр </p>
                  <p>{moment(reserve.checkOut).format("L")}</p>
                </p>
              </div>
              <div className="ml-10">
                <p className="font-bold">Зочдын тоо</p>
                <p className="flex items-center justify-center">
                  {reserve.guests}
                </p>
              </div>
              <div className="ml-10">
                <p className="font-bold">Нийт үнийн дүн</p>
                <p>{new Intl.NumberFormat().format(reserve.totalPrice)}₮</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
