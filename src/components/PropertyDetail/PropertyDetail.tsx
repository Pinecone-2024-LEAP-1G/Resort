"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuShare } from "react-icons/lu";
import Review, { PropertyType } from "../Review";
import { ReverseCart } from "./ReverseCart";
import axios from "axios";
import HostViewCard from "../HostView/HostViewCard";

export const PropertyDetail = ({ propertyId }: { propertyId: string }) => {
  const [property, setProperty] = useState<PropertyType>();

  useEffect(() => {
    const getPropertyById = async () => {
      try {
        const response = await axios.get<{ property: PropertyType }>(
          `http://localhost:3000/api/properties/${propertyId}`,
        );

        setProperty(response.data.property);
      } catch (error) {
        console.log(error);
      }
    };

    getPropertyById();
  }, [propertyId]);

  return (
    <div className="mx-auto w-[1200px]">
      <div className="flex justify-between py-4">
        <h1 className="text-3xl font-semibold">{property?.address}</h1>
        <div className="flex gap-2">
          <div className="grid place-items-center rounded-full bg-white lg:flex lg:gap-2">
            <LuShare />
            <p className="hidden lg:block">share</p>
          </div>
          <div className="grid place-items-center rounded-full bg-white lg:flex lg:gap-2">
            <FaRegHeart className="flex items-center justify-center" />
            <p className="hidden lg:block">like</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {property?.propertyPictures?.map((image, index) => (
            <div key={index} className="col-span-1 hidden lg:block">
              <Image
                src={image}
                alt=""
                width={400}
                height={400}
                className="h-[400px] w-[400px] rounded-lg"
              />
            </div>
          ))}
        </div>
        <div></div>

        <div className="mt-10 flex justify-between">
          <div className="h-[225px] w-[600px] flex-1">
            <p className="mb-2 text-xl font-normal">{property?.description}</p>
            <div className="flex gap-2">
              <p>{property?.guests} хүн</p>
              <p>~ {property?.totalBedrooms} унтлагын өрөө</p>
              <p>~ {property?.totalBathrooms} угаалгын өрөө</p>
            </div>
            <div className="mt-20 flex h-fit w-fit justify-between rounded-lg border-b border-t p-4">
              <HostViewCard hostId={property?.userId} />
            </div>
            <div className="mt-24 h-[80px]"></div>
          </div>
          <div className="sticky top-10 mr-auto flex flex-col items-center justify-start gap-8 p-5">
            <ReverseCart
              property={property}
              propertyId={propertyId}
              text="Захиалга үүсгэх"
            />
          </div>
        </div>
      </div>
      <Review property={property} />
      <div className="mt-20"></div>
    </div>
  );
};
