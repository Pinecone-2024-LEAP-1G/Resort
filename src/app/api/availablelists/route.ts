import { AvailableListModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  console.log("hi");
  try {
    const AvailableLists = await AvailableListModel.find();

    return Response.json({ AvailableLists });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { name, email, password, phone_number } = await request.json();

  try {
    const availableList = await AvailableListModel.create({
      name,
      email,
      password,
      phone_number,
    });
    return Response.json({ message: "success", availableList });
  } catch (error) {
    return Response.json({ message: error });
  }
};
