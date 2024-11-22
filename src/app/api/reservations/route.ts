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
    const checkindate = await AvailableListModel.find({
      propertyId: propertyId,
    });
    const datecheckIn = checkindate.map((date) => {
      return date.checkInDate;
    });

    if (datecheckIn === checkIn && datecheckIn === checkOut) {
      return Response.json({
        message: "tanii songoson udur zahialgatai baina ",
      });
    }
    const datecheckOut = checkindate.map((date) => {
      return date.checkOutDate;
    });
    if (datecheckOut === checkOut) {
      return Response.json({
        message: "tanii garah udur zahialgatai tul dahin sonsolt hiine vvv",
      });
    }

    const propertyLimit = await PropertyModel.find({
      _id: propertyId,
    });

    const quests = propertyLimit.map((property) => {
      return property.guests;
    });
    console.log(quests);
    if (quests <= adult + children + infants) {
      return Response.json({ message: "Oh sorry  exceeded limit" });
    }

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
