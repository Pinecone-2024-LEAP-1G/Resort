"use client";

import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuShare } from "react-icons/lu";
import Review, { PropertyType } from "../Review";
import { ReverseCart } from "./ReverseCart";
import axios from "axios";
import HostViewCard from "../HostView/HostLeftCard";
import { Skeleton } from "@/components/ui/skeleton";
import { ReviewProperty } from "../PropertyReview/View";
import { toast } from "sonner";

export const PropertyDetail = ({ propertyId }: { propertyId: string }) => {
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState<PropertyType>();
  const [, setCheckOut] = useState();
  const [showReview, setShowReview] = useState(false);
  const [checkReview, setCheckReview] = useState();
  console.log("ldnc");
  useEffect(() => {
    const getPropertyById = async () => {
      setLoading(true);
      try {
        const response = await axios.get<{ property: PropertyType }>(
          `/api/properties/${propertyId}`,
        );

        setProperty(response.data.property);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPropertyById();
  }, [propertyId]);

  const propertyPictures = property?.propertyPictures;

  useEffect(() => {
    const getreservations = async () => {
      try {
        const response = await axios.get(
          `/api/reservations/userCheckoutDay/${propertyId}`,
        );
        setCheckOut(response.data.reservation);
        if (response.data.reservation.length === 1 && checkReview === 0)
          return (
            setShowReview(true),
            toast.message("Тухайн газарт төрсөн сэтгэгдэлээ үнэлнэ үү")
          );
      } catch (error) {
        console.log(error);
      }
    };
    getreservations();
  }, [propertyId, checkReview]);
  useEffect(() => {
    const getReview = async () => {
      try {
        const response = await axios.get(
          `/api/reviews/propertyAndUserid?propertyId=${propertyId}`,
        );
        if (response.data.length > 0) setShowReview(false);
        setCheckReview(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    getReview();
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
        <div className="grid- gap-4">
          <div className="flex h-[560px] gap-2">
            {loading ? (
              <Skeleton className="w-1/2 rounded-xl" />
            ) : (
              <div
                className="relative flex-1 rounded-xl"
                style={{
                  backgroundImage: `url(${propertyPictures?.[0]})`,
                  backgroundSize: "cover",
                }}
              ></div>
            )}

            <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-2">
              {loading ? (
                <Skeleton className="rounded-xl" />
              ) : (
                <div
                  className="rounded-xl"
                  style={{
                    backgroundImage: `url(${propertyPictures?.[1]})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              )}

              {loading ? (
                <Skeleton className="rounded-xl" />
              ) : (
                <div
                  className="rounded-xl"
                  style={{
                    backgroundImage: `url(${propertyPictures?.[2]})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              )}
              {loading ? (
                <Skeleton className="rounded-xl" />
              ) : (
                <div
                  className="rounded-xl"
                  style={{
                    backgroundImage: `url(${propertyPictures?.[3]})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              )}

              {loading ? (
                <Skeleton className="rounded-xl" />
              ) : (
                <div
                  className="rounded-xl"
                  style={{
                    backgroundImage: `url(${propertyPictures?.[4]})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          <div className="h-[225px] w-[600px] flex-1">
            <p className="mb-2 text-xl font-normal">{property?.description}</p>
            <div className="flex gap-2">
              <p>{property?.guests} хүн</p>
              <p>~ {property?.totalBedrooms} унтлагын өрөө</p>
              <p>~ {property?.totalBathrooms} угаалгын өрөө</p>
            </div>
            <div className="mt-20 flex h-fit w-fit flex-col justify-between rounded-lg border-b border-t p-4">
              {showReview && <ReviewProperty propertyId={propertyId} />}
              <HostViewCard userId={property?.userId} />
            </div>
            <div className="mt-24 h-[80px]"> </div>
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
      <Review property={property?.reviewId} />
      <div className="mt-20"></div>
    </div>
  );
};
