import { AvailableListModel, PropertyModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const guests = searchParams.get("guests");
  if (!from || !to) {
    throw new Error("Missing 'from' or 'to' query parameters.");
  }
  // const possibleday = [];
  try {
    const checkindate = new Date(from);
    const checkoutdate = new Date(to);
    const getAddressProperty = await PropertyModel.find({ address: address });
    const result = await Promise.all(
      getAddressProperty.map(async (property) => {
        const possibleProperty = await AvailableListModel.find({
          propertyId: property._id,
          $or: [
            {
              checkInDate: { $lte: checkoutdate },
              checkOutDate: { $gte: checkindate },
            },
          ],
        });
        console.log(possibleProperty);
        if (possibleProperty.length === 0) return { property };
        else return { possibleProperty };
      }),
    );

    // const data = result.filter((res) => res.possibleProperty.length === 0);
    return Response.json({ possibleProperty: result });
  } catch (error) {
    return Response.json({ error: error });
  }
};
