import { auth } from "@/auth";
import { connectToMongoDB } from "@/lib/db";
import { ReservationModel } from "@/lib/models";
import { nodeMailer } from "@/util/nodemailer";
import { NextRequest } from "next/server";

connectToMongoDB();

const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ propertyId: string }> },
) => {
  const propertyId = (await params).propertyId;
  const session = await auth();
  const userId = session?.user.id;

  try {
    const reservations = await ReservationModel.find({
      propertyId: propertyId,
      userId: userId,
    }).populate("userId");
    const today = formatDate(new Date());
    const checkOutDay = reservations.filter(
      (reservation) => formatDate(new Date(reservation.checkOut)) === today,
    );

    checkOutDay.map(async (user) => {
      await nodeMailer({
        to: user.userId.email,
        text: "Таны түрээсийн хугацаа өнөөдөр дуусч байна. Та пэйж хуудсанд хандан түрээсэлсэн газартаа үнэлгээ өгөөрэй",
      });
    });
    return Response.json({ reservation: checkOutDay });
  } catch (error) {
    return Response.json(error);
  }
};
