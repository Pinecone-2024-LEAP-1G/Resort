import { ReservationModel } from "@/lib/models/reservation.model";
import mongoose from "mongoose";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const {
    checkIn,
    checkOut,
    totalPrice,
    userId,
    // adult,
    // children,
    // infants,
    propertyId,
  } = await request.json();

  try {
    const objectUserId = mongoose.Types.ObjectId.createFromHexString(userId);
    const objectPropertyId =
      mongoose.Types.ObjectId.createFromHexString(propertyId);
    const reservation = await ReservationModel.create({
      propertyId: objectPropertyId,
      userId: objectUserId,
      checkIn: checkIn,
      checkOut: checkOut,
      totalPrice: totalPrice,
      adult: 5,
      children: 7,
      infants: 8,
    });
    return Response.json({ reservation: reservation });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
};

// export const GET = async (request: NextRequest) => {
//   // const id = await request.json();

//   // const url = new URL(request.url);
//   // const reservationId = url.searchParams.get("reservationId");
//   try {
//     const objectId = mongoose.Types.ObjectId.createFromHexString(id);
//     const reservations = await ReservationModel.find({
//       _id: objectId,
//     });

//     console.log(reservations);
//     return Response.json(reservations);
//   } catch (error) {
//     return Response.json({ error: error });
//   }
// };

export const GET = async () => {
  try {
    const reservations = await ReservationModel.find();
    return Response.json({ reservations: reservations });
  } catch (error) {
    return Response.json({ error: error });
  }
};
