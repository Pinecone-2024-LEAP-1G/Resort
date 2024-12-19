"use client";

import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import GetProperty from "./GetProperty";
import { useSession } from "next-auth/react";
import {
  BouncingDots,
  ContinuousTrainLoader,
  MovingTrain,
  MovingTrainLoader,
  Pulse,
  RealTrainLoader,
  TrainLoader,
} from "./Loading";

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
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const guest = searchParams.get("guest");
  const totalPrice = searchParams.get("totalPrice");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();
  const userID = session?.user?.id;

  const SubmitReservation = async () => {
    if (!guest) {
      return toast.error("Хүний тоог бөглөнө үү!");
    }
    setIsLoading(false);
    try {
      await axios.post("/api/reservations", {
        checkIn: from,
        checkOut: to,
        userId: userID,
        propertyId: propertyId,
        guests: guest,
        totalPrice: totalPrice,
      });
      setIsLoading(false);

      router.push(`/orderDetail/${userID}`);
      toast.success("zahialga amjilttai");
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };

  const ToastWithAction = () => {
    if (guest === null) {
      return toast.error("Хүний тоог бөглөнө үү!");
    } else
      return (
        <Button
          className="mt-10 h-[72px] w-[556px] rounded-2xl bg-green-500 text-lg font-semibold text-white shadow-lg"
          type="submit"
          variant="outline"
          onClick={SubmitReservation}
        >
          Баталгаажуулах
        </Button>
      );
  };

  if (!isLoading) {
    return (
      <div>
        <MovingTrain />
      </div>
    );
  }

  return (
    <div className="mx-40 grid w-full grid-cols-2 gap-4">
      <div className="mx-auto w-full">
        <div className="mr-8 flex flex-row items-center">
          <ChevronLeft className="w-8 justify-center" />
          <h3 className="px-12 text-3xl font-medium">Захиалгын мэдээлэл</h3>
        </div>
        <div className="flex flex-row pt-20">
          <div className="flex flex-col">
            <div className="flex flex-col justify-start">
              <h2 className="text-2xl font-semibold">Таны захиалга</h2>
              <div className="my-6 flex w-[556px] flex-col gap-6">
                <div className="flex flex-row justify-between">
                  <div className="border-t">
                    <p className="w-[556px] pt-6 font-medium">
                      Аялалын хугацаа
                    </p>
                    <p className="text-lg font-semibold">
                      <p>Эхлэх огноо: {moment(from).format("L")}</p>
                      <p>Дуусах огноо: {moment(to).format("L")}</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="mb-6 border-t">
                  <p className="w-[556px] pt-6 font-medium">Зочдын тоо</p>
                  <p className="text-lg font-semibold">{guest} зочин</p>
                  <div />
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="border-t">
                  <p className="w-[556px] pt-6 font-medium">Нийт төлбөр</p>
                  <p className="text-lg font-semibold">
                    {new Intl.NumberFormat().format(Number(totalPrice))}₮
                  </p>
                  <div />
                </div>
              </div>
            </div>
            <ToastWithAction />
            <div className="flex pt-20"></div>
          </div>
        </div>
      </div>
      <div className="mr-auto flex flex-col items-center justify-start gap-8 p-5">
        <GetProperty propertyId={propertyId} />
      </div>
    </div>
  );
};
