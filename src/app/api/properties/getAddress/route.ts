import { PropertyModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");
  const date = searchParams.get("date");
  try {
    const getAddressProperty = await PropertyModel.find({ address: address });
    console.log(getAddressProperty);

    return Response.json({ getaddress: getAddressProperty });
  } catch (error) {
    return Response.json({ error: error });
  }
};
