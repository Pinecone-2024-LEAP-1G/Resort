import { connectToMongoDB } from "@/lib/db";
import { ReservationModel } from "@/lib/models";
import { nodeMailer } from "@/util/nodemailer";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");

  try {
    const userreservations = await ReservationModel.find({ userId: userId })
      .populate("propertyId")
      .populate("userId");
    const checkoutday = userreservations.map((userreservation) => {
      if (userreservation.checkOut === new Date())
        return nodeMailer({
          to: userreservation?.userId.email,
          text: `http://localhost/3000/userReview`,
        });
    });
    return Response.json({
      userReservations: userreservations,
      checkoutday: checkoutday,
    });
  } catch (error) {
    return Response.json({ error: error });
  }
};
