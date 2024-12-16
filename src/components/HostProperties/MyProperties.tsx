"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { PropertyType } from "../Review";
import { useSession } from "next-auth/react";
import { PropertyCard } from "../HostView/PropertyCard";
import { useRouter } from "next/navigation";

type ProType = {
  userId?: string;
};

export const MyProperties = ({ userId }: ProType) => {
  const [properties, setProperties] = useState<PropertyType[] | undefined>();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (userId) {
      const getProById = async () => {
        const response = await axios.get(`/api/properties/user/${userId}`);

        setProperties(response.data.property);
      };
      getProById();
    }
  }, [userId]);

  useEffect(() => {}, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">{session?.user?.name}</h1>
      <div className="mt-[100px]">
        {properties?.map((pro) => (
          <div key={pro._id}>
            <button
              className="mb-10"
              onClick={() => router.push(`/hostReservations/${pro._id}`)}
            >
              zahialguud harah
            </button>
            <PropertyCard
              image={pro.propertyPictures[0]}
              address={pro.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
