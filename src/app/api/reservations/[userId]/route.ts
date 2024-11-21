import { ReservationModel } from "lib/models"
// import mongoose from "mongoose"
import { NextRequest } from "next/server"

// export const GET= async ( request:Request, {params} : {params:Promise<{userId:string}>})=>{
// const userId=(await params).userId
// try {
//     const ObjectId=mongoose.Types.ObjectId.createFromHexString(userId)
//     const userReservations=ReservationModel.find({userId:ObjectId})
//     console.log(userReservations)
//     return Response.json({userReservations:userReservations})
// } catch (error) {
//     return Response.json({error:error})
// }
// }
export  const GET= async (request:NextRequest)=>{
    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get('userId')
    console.log(userId)
    try {
        const userreservation=await ReservationModel.find({userId:userId})
        return Response.json({userreservation:userreservation})
    } catch (error) {
        return  Response.json({error:error})
    }
}