import { AvailableListModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  try {
    const searchDate = await AvailableListModel.find({
      $or: [
        {
          checkInDate: { $lte: to },
          checkOutDate: { $gte: from },
        },
      ],
    }).populate("");
    // console.log(searchDate);
    return Response.json({ searchDate: searchDate });
  } catch (error) {
    return Response.json({ error: error });
  }
};
