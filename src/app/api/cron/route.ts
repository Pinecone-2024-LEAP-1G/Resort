// import { auth } from "@/auth";
// import { connectToMongoDB } from "@/lib/db";
// import { ReservationModel } from "@/lib/models";
// import { nodeMailer } from "@/util/nodemailer";
// import { NextRequest } from "next/server";
// connectToMongoDB();

import { NextRequest } from "next/server";

// const formatDate = (date: Date): string => {
//   return date.toISOString().split("T")[0];
// };
// export const GET = async (
//   request: NextRequest,
//   // { params }: { params: Promise<{ propertyId: string }> },
// ) => {
//   const url = new URL(request.url);
//   const propertyId = url.searchParams.get("propertyId");
//   //   const secret = url.searchParams.get("secret");
//   // const propertyId = (await params).propertyId;
//   const session = await auth();
//   const userId = session?.user.id;
//   //   if (!secret || secret !== process.env.CRON_SECRET) {
//   //     console.error("Unauthorized access attempt");
//   //     return new Response("Unauthorized", { status: 401 });
//   //   }
//   const apiKey = "b1f4833cf9b5fe86489335665816ff86";

//   const createCronJob = async () => {
//     const cronJobData = {
//       url: `https://resort-kappa.vercel.app/api/cron?secret=GuhAoNFNP0gzuuX1&propertyId=${propertyId}`,
//       cron_expression: "15 21 * * *",
//       description: `Check out reminder for property ${propertyId}`,
//       api_key: apiKey,
//     };

//     try {
//       const response = await axios.post(
//         "https://www.easycron.com/api/cron/create",
//         cronJobData,
//       );
//       console.log("Cron job created successfully", response.data);
//     } catch (error) {
//       console.error("Error creating cron job", error);
//     }
//   };
//   createCronJob();
//   try {
//     const reservations = await ReservationModel.find({
//       propertyId: propertyId,
//       userId: userId,
//     }).populate("userId");
//     const today = formatDate(new Date());
//     const checkOutDay = reservations.filter(
//       (reservation) => formatDate(new Date(reservation.checkOut)) === today,
//     );

//     const sendEmail = checkOutDay.map(async (user) => {
//       await nodeMailer({
//         to: user.userId.email,
//         text: "Таны түрээсийн хугацаа өнөөдөр дуусч байна. Та пэйж хуудсанд хандан түрээсэлсэн газартаа үнэлгээ өгөөрэй",
//       });
//     });
//     console.log(sendEmail);
//     return Response.json({ reservation: checkOutDay });
//   } catch (error) {
//     return Response.json(error);
//   }
// };
export const GET = async () => {
  try {
    return Response.json({ message: "hkfjdsfh" });
  } catch (error) {
    return Response.json(error);
  }
};
