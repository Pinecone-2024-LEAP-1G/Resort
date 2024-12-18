import { AvailableListModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ propertyId: string }> },
) => {
  try {
    const propertyId = (await params).propertyId;
    const AvailableLists = await AvailableListModel.find({
      propertyId: propertyId,
    });
    return Response.json({ AvailableLists });
  } catch (error) {
    return Response.json({ message: error });
  }
};
