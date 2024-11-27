import {
  AvailableListModel,
  PropertyModel,
  ReservationModel,
} from "lib/models";
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
    const checkindate = new Date(checkIn);
    const checkoutdate = new Date(checkOut);
    const overlapReservation = await AvailableListModel.find({
      propertyId: propertyId,
      $or: [
        {
          checkInDate: { $lte: checkoutdate },
          checkOutDate: { $gte: checkindate },
        },
      ],
    });
    console.log(overlapReservation);
    if (overlapReservation.length > 0) {
      return Response.json({
        message: "oh sorry this selected date not available property",
      });
    }

    const propertyLimit = await PropertyModel.find({
      _id: propertyId,
    });

    const quests = propertyLimit.map((property) => {
      return property.guests;
    });
    if (quests <= adult + children + infants) {
      return Response.json({ message: "Oh sorry  exceeded limit" });
    }

    const reservation = await ReservationModel.create({
      propertyId,
      userId,
      checkIn: checkindate,
      checkOut: checkoutdate,
      adult,
      children,
      infants,
      totalPrice,
    });
    const availableList = await AvailableListModel.create({
      propertyId: reservation.propertyId,
      reservationId: reservation._id,
      checkInDate: reservation.checkIn,
      checkOutDate: reservation.checkOut,
    });
    return Response.json({
      reservation: reservation,
      availableList: availableList,
    });
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
