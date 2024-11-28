// "use client";

// import { ImProfile } from "react-icons/im";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Review from "../Review";
// import { useParams } from "next/navigation";

// type ReviewType = {
//   propertyId: string;
//   userId: string;
//   rating: string[];
//   comment: string;
// };

// const HostReviewCard = () => {
//   const [reviews, setReview] = useState<ReviewType[] | []>([]);
//   const params = useParams;
//   // const { propertyId } = params;

//   const GetReviews = async () => {
//     try {
//       const { data } = await axios.get<{ review: ReviewType[] }>(
//         `http://localhost:3000/api/reviews`,
//       );
//       setReview(data.review);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     GetReviews();
//   }, []);

//   return (

//       {reviews.map((review) => {
//         return (
//         <div className="ml-[5px] text-[15px]">{reviews?.comment}</div>
//         )
//       })}

//       <div className="mt-[100px] flex">
//         <ImProfile className="h-[40px] w-[40px]" />
//         <div>
//           <p className="ml-3 text-[16px]">Gunner</p>
//           <p className="ml-3 text-[14px]">October 2024</p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HostReviewCard;
