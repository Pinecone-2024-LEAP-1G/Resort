"use client";

import { ChevronLeft, Gem } from "lucide-react";
import { Alert, AlertTitle } from "../ui/alert";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { RulesAndPolicy } from "./RulesAndPolicy";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { DiCodeigniter } from "react-icons/di";
import GetProperty from "./GetProperty";
import { useRouter } from "next/navigation";

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
  const [, setProperty] = useState<Property>();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const adult = searchParams.get("adult");
  const child = searchParams.get("child");
  const pets = searchParams.get("pets");
  const infants = searchParams.get("infants");
  const totalPrice = searchParams.get("totalPrice");
  let allGuests = 0;
  const router = useRouter();

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
  }, [propertyId]);

  const SubmitReservation = async () => {
    if (allGuests === 0) {
      return toast.error("Хүний тоог бөглөнө үү!");
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/api/reservations",
        {
          checkIn: from,
          checkOut: to,
          userId: "6747c5db0314e681044f54d0",
          propertyId: propertyId,
          adult: !isNaN(Number(adult)),
          children: !isNaN(Number(child)),
          infants: !isNaN(Number(infants)),
          totalPrice: totalPrice,
        },
      );
      console.log(response);

      const userId = "6747c5db0314e681044f54d0";
      router.push(`/orderDetail/${userId}`);
      toast.success("zahialga amjilttai");
    } catch (error) {
      toast.error("error");
    }
  };

  const ToastWithAction = () => {
    return (
      <Button
        className="h-[72px] w-[556px] rounded-2xl text-lg font-semibold shadow-lg"
        type="submit"
        variant="outline"
        onClick={SubmitReservation}
      >
        Баталгаажуулах
      </Button>
    );
  };

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
                  <p className="text-lg font-semibold">{allGuests} зочин</p>
                  <div />
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="border-t">
                  <p className="w-[556px] pt-6 font-medium">Нийт төлбөр</p>
                  <p className="text-lg font-semibold">{totalPrice}₮</p>
                  <div />
                </div>
              </div>
            </div>
            <div className="flex pt-20">
              <Alert className="my-6 flex h-[98px] w-[556px] flex-row items-center justify-between rounded-2xl text-base shadow-lg">
                <div className="flex flex-col">
                  <AlertTitle>
                    <div>
                      <div className="flex flex-row">
                        <p className="flex items-center justify-center">
                          Яагаад
                        </p>
                        <div className="flex gap-2 p-3">
                          <DiCodeigniter className="h-10 w-10" />
                          <p className="w-[30px] font-bold">Хөдөө гарья</p>
                        </div>
                        <p className="ml-5 flex items-center justify-center">
                          гэж ?
                        </p>
                      </div>
                    </div>
                  </AlertTitle>
                </div>
                <div>
                  <Gem className="justify-end fill-pink-700" />
                </div>
              </Alert>
            </div>
          </div>
        </div>
        <RulesAndPolicy />
        <ToastWithAction />
      </div>
      <div className="mr-auto flex flex-col items-center justify-start gap-8 p-5">
        <GetProperty propertyId={propertyId} />
      </div>
    </div>
  );
};
