import { connectToMongoDB } from "@/lib/db";
import { HostModel } from "@/lib/models/host.model";

connectToMongoDB();
export const GET = async (
  request: Request,
  { params }: { params: Promise<{ hostId: string }> },
) => {
  const hostId = (await params).hostId;

  try {
    const host = await HostModel.findById({ _id: hostId });
    return Response.json({ host: host });
  } catch (error) {
    return Response.json({ message: error });
  }
};
