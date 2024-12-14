"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { PropertyType } from "../Review";
import { useSession } from "next-auth/react";
import { PropertyCard } from "../HostView/PropertyCard";

type ProType = {
  userId?: string;
};

export const MyProperties = ({ userId }: ProType) => {
  const [properties, setProperties] = useState<PropertyType[] | undefined>();
  const { data: session } = useSession();

  useEffect(() => {
    if (userId) {
      const getProById = async () => {
        const response = await axios.get(`/api/properties/user/${userId}`);

        setProperties(response.data.property);
      };
      getProById();
    }
  }, [userId]);

  return (
    <div>
      <h1 className="text-2xl font-bold">{session?.user?.name}</h1>
      <div>{properties?.map((pro) => <PropertyCard />)}</div>
    </div>
  );
};
