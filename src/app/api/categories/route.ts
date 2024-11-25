import { CategoryModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const categories = await CategoryModel.find();
    return Response.json(categories);
  } catch (error) {
    return Response.json({ error: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { name, icon } = await request.json();
  try {
    const category = await CategoryModel.create({ name, icon });
    return Response.json({ category });
  } catch (error) {
    return Response.json({ error: error });
  }
};
