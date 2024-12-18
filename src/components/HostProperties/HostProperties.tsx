"use client";

import { Property } from "@/lib/models";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type HostProps = {
  userId?: string;
};

type HostProperties = {
  email: string;
  _id: string;
  phoneNumber: string;
  image: string;
  name: string;
  propertyId: Property[];
};

export const HostProperties = ({ userId }: HostProps) => {
  const [properties, setProperties] = useState<HostProperties>();
  const router = useRouter();

  useEffect(() => {
    const getHostPro = async () => {
      const response = await axios.get(`/api/users/${userId}`);
      setProperties(response.data.user);
    };
    getHostPro();
  }, [userId]);

  return (
    <div>
      <h1 className="p-12 text-xl font-bold">{properties?.name} </h1>
      <div className="grid grid-cols-3">
        {properties?.propertyId.map((property) => (
          <div key={property._id}>
            <div className="">
              <div
                onClick={() => router.push(`/property/${property._id}`)}
                style={{
                  backgroundImage: `url(${property.propertyPictures[0]})`,
                  backgroundPosition: "center",
                }}
                className="h-[300px] w-[290px] rounded-xl border-2 bg-cover"
              ></div>
              <div className="mt-[20px] flex h-[200px] w-[380px] flex-col gap-2">
                <p className="text-[20px] font-bold">{property.description}</p>
                <p className="mb-[10px] text-[17px]">
                  Үнэ: {new Intl.NumberFormat().format(property.price)}₮
                </p>
                <button
                  onClick={() =>
                    router.push(`/hostReservations/${property._id}`)
                  }
                  className="h-[35px] w-[220px] items-center rounded-lg bg-green-500 text-white"
                >
                  Захиалга харах
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
