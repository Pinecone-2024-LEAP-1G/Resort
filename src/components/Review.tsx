"use client";

import { useState, useEffect } from "react";
import { ImStarEmpty } from "react-icons/im";
import { ImStarFull } from "react-icons/im";
import axios from "axios";
import { useParams } from "next/navigation";
import mongoose, { Model, Schema, model, models } from "mongoose";
import { Property } from "@/app/property/[propertyId]/page";

interface Props {
  property?: Property;
}

type PropertyType = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: string;
  rating: string;
  comment: string;
};

export const Review = () => {
  const [property, setUser] = useState<PropertyType>();
  const params = useParams();
  const { propertyId } = params;
  const [properties, setProperties] = useState<any[]>([]);

  const getUserById = async () => {
    try {
      const response = await axios.get<{ property: PropertyType }>(
        `http://localhost:3000/api/reviews/${propertyId}`,
      );

      setUser(response.data.property);
      console.log(response.data.property[0].comment);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserById();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex h-fit w-2/4 items-center gap-5">
          <div>
            <img
              className="rounded-3xl border bg-cover"
              style={{
                backgroundImage: `url("https://media.gettyimages.com/id/1250238624/photo/handsome-young-adult-businessman-with-stubble.jpg?s=612x612&w=gi&k=20&c=H2upefy-mU5MNlNhuXDyTboEmTMycZM-FcK4jYXx2TU=")`,
                width: "70px",
                height: "70px",
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="size-xl font-medium">Доржоо</p>
            <div className="flex">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarEmpty />
              <ImStarEmpty />
            </div>
          </div>
        </div>
        <div className="w-3/4">
          Янзын сайхан цэвэрхэн газар байна лээ. Эзэн нь надтай пиво уусан.
          Эелдэг найрсаг сайхан сэтгэлтэй хүн шиг санагдсан.
        </div>
      </div>
    </div>
  );
};
