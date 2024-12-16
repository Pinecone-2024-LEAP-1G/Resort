import { connectToMongoDB } from "@/lib/db";
import { HostModel } from "@/lib/models/host.model";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async () => {
  try {
    const host = await HostModel.find();
    return Response.json({ host: host });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { experience, Address, description, name, phoneNumber, email } =
    await request.json();
  try {
    const host = await HostModel.create({
      experience,
      Address,
      description,
      name,
      phoneNumber,
      email,
    });
    return Response.json({ message: "success", host });
  } catch (error) {
    return Response.json({ message: error });
  }
};
