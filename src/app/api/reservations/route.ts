import { ReservationModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const reservations = await ReservationModel.find();

    return Response.json({ reservations });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const {
    userId,
    propertyId,
    checkIn,
    adults,
    children,
    infants,
    checkOut,
    totalPrice,
  } = await request.json();

  try {
    const reservation = await ReservationModel.create({
      userId,
      propertyId,
      checkIn,
      checkOut,
      adults,
      children,
      infants,
      totalPrice,
    });
    return Response.json({ message: "success", reservation });
  } catch (error) {
    return Response.json({ message: error });
  }
};
