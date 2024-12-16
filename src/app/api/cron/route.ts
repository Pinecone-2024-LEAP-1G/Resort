import { ReservationModel } from "@/lib/models";
import { nodeMailer } from "@/util/nodemailer";
import { type NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  try {
    const reservations = await ReservationModel.find().populate("userId");
    const checkoutday = reservations.filter((userreservation) => {
      if (userreservation.checkOut === new Date())
        nodeMailer({
          to: userreservation?.userId.email,
          text: `http://localhost/3000/userReview`,
        });
    });

    return Response.json({ checkout: checkoutday });
  } catch (error) {
    return Response.json(error);
  }
};
