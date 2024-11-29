"use client";

import { ImProfile } from "react-icons/im";
import mongoose from "mongoose";
import axios from "axios";
import {useEffect, useState } from "react";
import { useParams } from "next/navigation";



type ReviewType ={
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: string;
  rating: number;
  comment: string;
}
type HostType = {
  name: string
}

const HostReviewCard = () => {
  const [reviewdata, setReviewdata] = useState<ReviewType[]>([]);
  const [hostdata, setHostdata] = useState<HostType[]>([]);
  const params = useParams();
  const {hostId} = params
  const {reviewId} = params
const getHost = async () => {
  try {
    const response = await axios.get<{ host: HostType[] }>(
      `http://localhost:3000/api/host/${hostId}}`
    );
    setHostdata(response.data.host)
  } catch (error) {
    console.log(error)
  }
};
useEffect(() => {
  getHost();
}, []);

  const getReview = async () => {
    try {
      const response = await axios.get<{ reviews: ReviewType[] }>(
        `http://localhost:3000/api/reviews/${reviewId}`,
      );
      setReviewdata(response.data.reviews);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getReview();
  }, []);

  return (
    <div className="h-[230px] w-[550px] rounded-2xl border-2 p-[20px]">
      
      <div className="ml-[5px] text-[15px]">{reviewdata?.comment}</div>
      <div className="mt-[100px] flex">
        <ImProfile className="h-[40px] w-[40px]" />
        <div>
          <p className="ml-3 text-[16px]">{hostdata.name}</p>
          <p className="ml-3 text-[14px]">{"time"}</p>
        </div>
      </div>
    </div>
  );
};
export default HostReviewCard;
