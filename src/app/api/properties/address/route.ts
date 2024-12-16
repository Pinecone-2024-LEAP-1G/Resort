import { connectToMongoDB } from "@/lib/db";
import { PropertyModel, ReservationModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");

  try {
    const properties = await PropertyModel.find({ address: address });
    return Response.json({ properties: properties });
  } catch (error) {
    return Response.json({ error: error });
  }
};
