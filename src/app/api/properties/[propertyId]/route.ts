import { PropertyModel } from "lib/models"
import { NextResponse } from "next/server";


export const GET =async (request:Request, {params}:{params: Promise<{propertyId:string}>} )=>{
    const propertyId =(await params).propertyId
    
    try {
      const property = await PropertyModel.findById({_id: propertyId})
     return Response.json({property: property})
    } catch (error) {
       return Response.json({message: error})
    }
  }