import { AvailableListModel, ReservationModel, UserModel } from "@/lib/models";
import { nodeMailer } from "@/util/nodemailer";
import moment from "moment";
import { NextRequest } from "next/server";

export const DELETE = async (
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ reservationId: string }>;
  },
) => {
  try {
    const reservationId = (await params).reservationId;
    const reservation = await ReservationModel.find({
      _id: reservationId,
    });
    const propertyId = reservation.map((reserve) => reserve.propertyId);

    if (reservation) {
      const findUser = UserModel.find({ propertyId: propertyId });
      console.log(findUser);

      const checkIn = reservation.map((reserve) => reserve.checkIn);
      const checkOut = reservation.map((reserve) => reserve.checkOut);

      await nodeMailer({
        to: "etuul186@gmail.com",
        text: `${moment(checkIn[0]).format("L")}-${moment(checkOut[0]).format("L")} өдрийн захиaлга цуцлагдлаа`,
      });
    }

    await ReservationModel.findByIdAndDelete({
      _id: reservationId,
    });
    await AvailableListModel.findOneAndDelete({ reservationId: reservationId });

    return Response.json({ message: "ok" });
  } catch (error) {
    console.log(error);

    return Response.json({ messag: error });
  }
};
