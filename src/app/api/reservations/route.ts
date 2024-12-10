import { PropertyModel, ReservationModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const {
    checkIn,
    checkOut,
    userId,
    propertyId,
    adult,
    children,
    infants,
    totalPrice,
  } = await request.json();
  try {
    const propertyLimit = await PropertyModel.find({
      _id: propertyId,
    }).populate("propertyId");
    const reservation = await ReservationModel.create({
      propertyId,
      userId,
      checkIn: checkIn,
      checkOut: checkOut,
      adult,
      children,
      infants,
      totalPrice,
    });
    return Response.json({ reservation: reservation });
    return Response.json({ propertyLimit: propertyLimit });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const GET = async () => {
  try {
    const reservations = await ReservationModel.find();
    return Response.json({ reservations: reservations });
  } catch (error) {
    return Response.json({ error: error });
  }
};
