"use client";

import axios from "axios";
import { Dot, Medal, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { ReverseCart } from "../PropertyDetail/ReverseCart";

export type Property = {
  _id: string;
  price: number;
  guests: number;
  address: string;
  description: string;
  propertyPictures: string;
  userId: string;
  categoryId: string;
  totalBedrooms: string;
  totalOccupancy: string;
  totalBathrooms: string;
};

interface Props {
  property?: Property;
  propertyId?: string;
}

const GetProperty = ({ propertyId }: Props) => {
  const [property, setProperty] = useState<Property>();
  useEffect(() => {
    const getProperty = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/properties/${propertyId}`,
        );
        setProperty(data?.property);
      } catch (error) {
        console.log(error);
      }
    };
    getProperty();
  }, []);
  return (
    <div className="sticky top-10 ml-auto flex flex-col gap-12">
      <div className="h-[150px] w-[372px] gap-4 rounded-2xl border p-6 shadow-lg">
        <div className="mb-4 flex flex-row gap-4">
          <div
            className="h-[104px] w-[104px] items-center rounded-xl"
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
      <ReverseCart property={property} propertyId={propertyId} text="Edit" />
    </div>
  );
};

export default GetProperty;
