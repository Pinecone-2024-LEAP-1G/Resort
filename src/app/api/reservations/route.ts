import { ReservationModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {

  try {
    const reservations = await ReservationModel.find();

    return Response.json({ reservations });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { name, email, password, phone_number } = await request.json();

  try {
    const reservation = await ReservationModel.create({
      name,
      email,
      password,
      phone_number,
    });
    return Response.json({ message: "success", reservation });
  } catch (error) {
    return Response.json({ message: error });
  }
};
