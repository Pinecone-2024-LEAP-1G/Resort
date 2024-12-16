import { ReservationModel } from "@/lib/models";
import { nodeMailer } from "@/util/nodemailer";
import { type NextRequest } from "next/server";

const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};
export const POST = async (request: NextRequest) => {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  try {
    const reservations = await ReservationModel.find().populate("userId");
    const today = formatDate(new Date());
    const checkoutDays = reservations.filter((userreservation) => {
      if (formatDate(new Date(userreservation.checkOut)) === today)
        nodeMailer({
          to: userreservation?.userId.email,
          text: `https://localhost:3000/userReview`,
          // text: `https://resort-kappa.vercel.app/`,
        });
      return true;
    });

    return Response.json({ checkoutDays: checkoutDays });
  } catch (error) {
    return Response.json(error);
  }
};
