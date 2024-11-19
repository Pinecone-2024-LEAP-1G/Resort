import CategoryModel from "@/lib/models/category.model";
import { NextRequest } from "next/server";

export const Categories = async (req: NextRequest) => {
  const { name } = req.json();
  try {
    const category = await CategoryModel.create({ name });
    return Response.json({ category });
  } catch (error) {
    return Response.json({ error: error });
  }
};
