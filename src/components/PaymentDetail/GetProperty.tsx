"use client";

import axios from "axios";
import { Dot, Medal, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { ReverseCart } from "../PropertyDetail/ReverseCart";
import { PropertyType } from "../Review";

interface Props {
  property?: PropertyType;
  propertyId?: string;
}

const GetProperty = ({ propertyId }: Props) => {
  const [property, setProperty] = useState<PropertyType>();
  useEffect(() => {
    const getProperty = async () => {
      try {
        const { data } = await axios.get(`/api/properties/${propertyId}`);
        setProperty(data?.property);
      } catch (error) {
        console.log(error);
      }
    };
    getProperty();
  }, [propertyId]);
  return (
    <div className="sticky top-16 mt-16 flex flex-col gap-12">
      <div className="h-[150px] w-[372px] gap-4 rounded-lg border p-6 shadow-lg">
        <div className="mb-4 flex flex-row gap-4">
          <div
            className="h-[104px] w-[104px] items-center rounded-xl bg-cover"
            style={{
              backgroundImage: `url(${property?.propertyPictures[0]})`,
            }}
          ></div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-lg font-medium">{property?.address}</p>
            <p>{property?.description}</p>
            <div className="flex flex-row items-center gap-1 text-sm">
              <Star className="h-3 w-3 fill-black" />
              <p className="font-semibold">4.94</p>
              <p>(434 reviews)</p>
              <Dot className="h-5 w-5 fill-black" />
              <Medal className="h-3 w-3 fill-black" />
              <p>Superhost</p>
            </div>
          </div>
        </div>
      </div>
      <ReverseCart property={property} propertyId={propertyId} text="Засах" />
    </div>
  );
};

export default GetProperty;
