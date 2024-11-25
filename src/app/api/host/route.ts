import { HostModel } from "@/lib/models/host.model";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const host = await HostModel.find().populate("properties");
    return Response.json({ host });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const {
    experience,
    Address,
    description,
    properties,
    name,
    phoneNumber,
    email,
  } = await request.json();
  try {
    const Host = await HostModel.create({
      experience,
      Address,
      description,
      properties,
      name,
      phoneNumber,
      email,
    });
    return Response.json({ message: "success", Host });
  } catch (error) {
    return Response.json({ message: error });
  }
};
