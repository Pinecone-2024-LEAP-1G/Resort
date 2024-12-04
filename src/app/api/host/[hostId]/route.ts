import { connectToMongoDB } from "@/lib/db";
import { HostModel } from "@/lib/models/host.model";

connectToMongoDB();
export const GET = async (
  request: Request,
  { params }: { params: Promise<{ hostId: string }> },
) => {
  try {
    const hostId = (await params).hostId;
    const host = await HostModel.find({ _id: hostId }).populate({
      path: "hostId",
    });
    return Response.json({ host });
  } catch (error) {
    return Response.json({ message: error });
  }
};
