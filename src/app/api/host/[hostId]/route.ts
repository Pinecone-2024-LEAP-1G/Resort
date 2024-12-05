import { HostModel } from "@/lib/models/host.model";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ hostId: string }> },
) => {
  const hostId = (await params).hostId;
  try {
    const host = await HostModel.findById({ _id: hostId }).populate({
      path: "propertyId",
    });
    return Response.json({ host });
  } catch (error) {
    return Response.json({ message: error });
  }
};
