import { ReservationModel } from "@/lib/models/reservation.model";
import mongoose from "mongoose";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { checkIn, checkOut, totalPrice, userId, quest, propertyId } =
    await request.json();

  try {
    const formattedQuest = Array.isArray(quest) ? quest : [quest];
    console.log(formattedQuest);
    const reservation = await ReservationModel.create({
      propertyId: propertyId,
      userId: userId,
      checkIn: checkIn,
      checkOut: checkOut,
      totalPrice: totalPrice,
      quest: [formattedQuest],
    });
    return Response.json({ reservation: reservation });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
};

// export const POST = async (request: NextRequest) => {
//   const {
//     userId,
//     propertyId,
//     checkIn,
//     adults,
//     children,
//     infants,
//     checkOut,
//     totalPrice,
//   } = await request.json();

//   try {
//     const reservation = await ReservationModel.create({
//       userId,
//       propertyId,
//       checkIn,
//       checkOut,
//       adults,
//       children,
//       infants,
//       totalPrice,
//     });
//     return Response.json({ message: "success", reservation });
//   } catch (error) {
//     return Response.json({ message: error });
//   }
// };

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(userId);
    console.log(objectId);
    const reservations = await ReservationModel.find({
      userId: objectId,
    }).populate("userId");
    return Response.json(reservations);
  } catch (error) {
    return Response.json({ error: error });
  }
};

// export const GET =async()=>{
//   try {
//     const reservations=await ReservationModel.find()
//     return Response.json({reservations:reservations})
//   } catch (error) {
//     return Response.json({error:error})
//   }
// }
