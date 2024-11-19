import { AvailableListModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const AvailableLists = await AvailableListModel.find();

    return Response.json({ AvailableLists });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { reservation_id, start_date, end_date } = await request.json();

  try {
    const availableList = await AvailableListModel.create({
      reservation_id,
      start_date,
      end_date,
    });
    return Response.json({ message: "success", availableList });
  } catch (error) {
    return Response.json({ message: error });
  }
};
