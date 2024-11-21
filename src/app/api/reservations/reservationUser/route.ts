import { ReservationModel } from "lib/models";
import { NextRequest } from "next/server";

export const GET= async(request:NextRequest)=>{
  
    const searchParams=request.nextUrl.searchParams
    const  reservationId=searchParams.get("reservationId")
    const userId=searchParams.get("userId")
    if (reservationId) {
      try {
          const reservation = await ReservationModel.find({
            _id: reservationId,
          })
            .populate("propertyId")
            .populate("userId");
    
          return Response.json({ reservation: reservation });
        } catch (error) {
          return Response.json({ error: error });
        }}
      if (userId)
      {try {
        const userreservation=await ReservationModel.find({userId:userId})
          return Response.json({userReservations:userreservation})
      } catch (error) {
        return Response.json({error:error})
      }}
    }