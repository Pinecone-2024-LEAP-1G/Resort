import { connectToMongoDB } from "@/lib/db";
import { AvailableListModel, ReservationModel, UserModel } from "@/lib/models";
import { nodeMailer } from "@/util/nodemailer";
import moment from "moment";
import { NextRequest } from "next/server";

connectToMongoDB();
export const POST = async (request: NextRequest) => {
  const { checkIn, checkOut, userId, propertyId, guests, totalPrice } =
    await request.json();

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

    const reservation = await ReservationModel.create({
      propertyId,
      userId,
      checkIn: checkindate,
      checkOut: checkoutdate,
      guests: guests,
      totalPrice,
    });
    console.log(guests);

    const availableList = await AvailableListModel.create({
      propertyId: reservation.propertyId,
      reservationId: reservation._id,
      checkInDate: reservation.checkIn,
      checkOutDate: reservation.checkOut,
    });

    const host = await UserModel.findById({ _id: userId });

    const hostEmail = host?.email;

    await nodeMailer({
      to: hostEmail,
      text: ` ${moment(checkIn).format("L")}-${moment(checkOut).format("L")},  зочдын тоо=${guests} захиалга ирсэн байна`,
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
