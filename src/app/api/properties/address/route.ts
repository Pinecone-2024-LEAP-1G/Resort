import { connectToMongoDB } from "@/lib/db";
import { PropertyModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");

  try {
    const addressProperty = await PropertyModel.find({ address: address });

    return Response.json({ addressProperty: addressProperty });
  } catch (error) {
    return Response.json({ error: error });
  }
};
