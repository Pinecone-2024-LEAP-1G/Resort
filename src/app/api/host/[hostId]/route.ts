import { HostModel } from "@/lib/models/host.model";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ hostId: string }> },
) => {
  try {
    const hostId = (await params).hostId;
    const host = await HostModel.find({ _id: hostId }).populate({
      path: "propertyId",
    });
    return Response.json({ host });
  } catch (error) {
    return Response.json({ message: error });
  }
};
