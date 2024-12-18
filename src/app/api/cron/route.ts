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
      const email = userreservation?.userId?.email(
        formatDate(new Date(userreservation.checkOut)) === today,
      );
      nodeMailer({
        to: email,
        text: `Та манай пэйж хуудасруу хандан амралтын газарт амарсан сэтгэгдлээ үлдээнэ үү`,
      });
      return true;
    });

    return Response.json({ checkoutDays: checkoutDays });
  } catch (error) {
    return Response.json(error);
  }
};
