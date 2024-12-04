"use client";

import mongoose from "mongoose";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

export type HostModel = {
  experience: string;
  Address: string;
  description: string;
  name: string;
  phoneNumber: string;
  email: string;
};

type ReviewType = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: string;
  rating: number;
  comment: string;
};

const HostViewCard = ({ hostId }: { hostId?: string | undefined }) => {
  const [host, setHost] = useState<HostModel>();
  console.log(host);

  useEffect(() => {
    const getHostById = async () => {
      try {
        const response = await axios.get<{ host: HostModel }>(
          `http://localhost:3000/api/properties/${hostId}`,
        );
        console.log(response);
        setHost(response.data.host);
      } catch (error) {}
    };
    getHostById();
  }, [hostId]);

  return (
    <Link href={`/hostView/${hostId}`}>
      <div className="flex h-[230px] w-[320px] rounded-2xl border-2 shadow-2xl">
        <div className="mx-auto my-auto">
          <CgProfile className="h-[70px] w-[70px]" />
          <div className="ml-[5px] text-[18px] font-bold">{host?.name}</div>
          <div className="ml-[15px] text-[16px]">Host</div>
        </div>
        <div className="mx-auto mt-[15px]">
          <div>
            <p className="mt-[10px] text-2xl font-bold">48</p>
            <p className="text-xs">Cэтrэrдэл үлдээсэн</p>
          </div>
          <div>
            <p className="mt-[10px] text-2xl font-bold">4.91</p>
            <p className="text-xs">Үнэлгээ</p>
          </div>
          <div>
            <p className="mt-[10px] text-2xl font-bold">7</p>
            <p className="text-xs">Хугацаа</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default HostViewCard;
