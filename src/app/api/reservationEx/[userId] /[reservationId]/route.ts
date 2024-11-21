// import { ReservationModel } from "lib/models";
// import { NextRequest } from "next/server";

// export const GET=async({params}:{params:{userId:string, reservationId:string}})=>{
//   const reservationId = (await params).reservationId
//   const userId=(await params).userId  
// console.log(userId)

//   if(reservationId) {try {
//     const reservation=ReservationModel.find({_id:reservationId})
//     return Response.json({reservation:reservation})
//   } catch (error) {
//     return Response.json({error:error})
//   }}

//    if (userId) {
//     try {
//       const userReservations=ReservationModel.find({userId:userId})
//       return Response.json({userReservations:userReservations})
//     } catch (error) {
//       return Response.json({error:error})
//     }
//    }
// }

// export const GET= async(request:NextRequest)=>{
  
// const searchParams=request.nextUrl.searchParams
// const  reservationId=searchParams.get("reservationId")
// const userId=searchParams.get("userId")
// if (reservationId) {
//   try {
//       const reservation = await ReservationModel.find({
//         _id: reservationId,
//       })
//         .populate("propertyId")
//         .populate("userId");

//       return Response.json({ reservation: reservation });
//     } catch (error) {
//       return Response.json({ error: error });
//     }}
//   if (userId)
//   {try {
//     const userreservation=await ReservationModel.find({userId:userId})
//       return Response.json({userReservations:userreservation})
//   } catch (error) {
//     return Response.json({error:error})
//   }}
// }

// export const GET= async({params} : {params:{slug:["userId", "reservationId"]}})=>{
//   const reservationId = (await params).reservationId
//   const userId=(await params).userId  
  
//   try {
    
//   } catch (error) {
    
//   }
// }

// reservation
// export const GET = async (
//   request: Request,
//   { params }: { params: Promise<{ reservationId: string }> }
// ) => {
//   const reservationId = (await params).reservationId;

//   try {
//     const reservation = await ReservationModel.find({
//       _id: reservationId,
//     })
//       .populate("propertyId")
//       .populate("userId");

//     return Response.json({ reservation: reservation });
//   } catch (error) {
//     return Response.json({ error: error });
//   }
// };
  // export const GET=async (request:NextRequest)=>{
  //   const searchParams=request.nextUrl.searchParams
  //   const reservationId=searchParams.get("reservationId")
  //   try {
  //     const reservation=await ReservationModel.find({_id:reservationId})
  //     return Response.json(reservation)
  //   } catch (error) {
  //     return Response.json({error:error})
  //   }
  // }


  
// user
//   import { ReservationModel } from "lib/models"
// import mongoose from "mongoose"
// import { NextRequest } from "next/server"
// export const GET= async ( request:Request, {params} : {params:Promise<{userId:string, reservationId:string}>})=>{
// const userId=(await params).userId
// const reservationId=(await params).userId
// console.log(userId)
// try {
//     const ObjectId=mongoose.Types.ObjectId.createFromHexString(userId)
//     const userReservations=ReservationModel.find({userId:ObjectId})
//     console.log(userReservations)
//     return Response.json({userReservations:userReservations})
// } catch (error) {
//     return Response.json({error:error})
// }
// }


// export  const GET= async (request:NextRequest)=>{
//     const searchParams = request.nextUrl.searchParams
//     const userId = searchParams.get('userId')
//     console.log(userId)
//     try {
//         const userreservation=await ReservationModel.find({userId:userId})
//         return Response.json({userReservations:userreservation})
//     } catch (error) {
//         return  Response.json({error:error})
//     }
// }