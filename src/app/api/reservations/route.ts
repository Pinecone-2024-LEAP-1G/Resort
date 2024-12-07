import { connectToMongoDB } from "@/lib/db";
import {
  AvailableListModel,
  PropertyModel,
  ReservationModel,
  UserModel,
} from "@/lib/models";
import { HostModel } from "@/lib/models/host.model";
import { nodeMailer } from "@/util/nodemailer";

import { NextRequest } from "next/server";

connectToMongoDB();
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

    if (overlapReservation.length > 0) {
      return Response.json({
        message: "Ta zahiagatai udur songoson baina",
      });
    }

    const propertyLimit = await PropertyModel.find({
      _id: propertyId,
    });

    const quests = propertyLimit.map((property) => {
      return property.guests;
    });

    if (quests === adult + children + infants) {
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

    const hostId = await PropertyModel.findById({
      _id: reservation.propertyId,
    });

    const host = await HostModel.findById({ _id: hostId?.userId });

    const hostEmail = host?.email;
    const guests = adult + children + infants;

    await nodeMailer({
      to: hostEmail,
      text: `startDate=${checkIn}, endDate${checkOut},gusts=${guests}`,
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
