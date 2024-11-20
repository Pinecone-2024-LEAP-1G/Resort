import {CategoryModel} from "@/lib/models/category.model";
import { NextRequest } from "next/server";


export const POST = async (request: NextRequest) => {
  const { name } = await request.json();
  try {
    const category = await CategoryModel.create({ name });
    return Response.json({ category });
  } catch (error) {
    return Response.json({ error: error });
  }
};


 export const GET =async ()=>{
  try { const categories= await CategoryModel.find()
     return Response.json(categories)
  } catch (error) {
    return  Response.json({error:error})
  }
 }