import { PropertyDetail } from "@/components/PropertyDetail/PropertyDetail";

import { LuShare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import { RightArrow } from "@/components/icons";
import { FullOption } from "@/components/PropertyDetail/FullOption";
import { ReverseCart } from "@/components/PropertyDetail/ReverseCart";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Review from "@/components/Review";
import HostView from "@/app/hostView/[hostId]/page";
import HostViewCard from "@/components/HostView/HostViewCard";

const PropertyDetail = () => {
  const [property, setProperty] = useState<Property>();
  const params = useParams();
  const { propertyId } = params;

  const getPropertyById = async () => {
    try {
      const response = await axios.get<{ property: Property }>(
        `http://localhost:3000/api/properties/${propertyId}`,
      );

      setProperty(response.data.property);
    } catch (error) {
      console.log(error);
    }
  };
  const getReviewStatisticByPropertyId = async () => {};

  useEffect(() => {
    getPropertyById();
  }, []);

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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Image
              src={images[0]}
              alt="Main Image"
              width={1200}
              height={800}
              className="h-full w-full rounded-lg"
            />
          </div>

          {images.map((image, index) => (
            <div key={index} className="col-span-1 hidden lg:block">
              <Image
                src={image}
                alt=""
                width={400}
                height={400}
                className="h-full w-full rounded-lg"
              />
            </div>
          ))}
        </div>
        <div></div>

        <div className="mt-10 flex justify-between">
          <div className="h-[225px] w-[600px] flex-1 border-b-2">
            <p className="mb-2 text-xl font-normal">{property?.address}</p>
            <div className="flex gap-2">
              <p>{property?.guests} хүн</p>
              <p>~ {property?.totalBedrooms} унтлагын өрөө</p>
              <p>~ {property?.totalBathrooms} угаалгын өрөө</p>
            </div>
            <div className="mt-8 flex h-fit w-fit justify-between rounded-lg border p-4">
              <Review />
            </div>
            <div className="mt-24 h-[80px] border-b-2">
              <p>{property?.description}</p>
              <div className="flex gap-2">
                <h1 className="border-b-2 border-black font-bold">Show more</h1>
                <RightArrow />
              </div>
            </div>
            <div className="botto-4 right-4 z-50 flex">
              <FullOption />
            </div>
          </div>
          <div className="flex-1 rounded-lg">
            <ReverseCart property={property} />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <HostViewCard hostId={property?.userId} />
      </div>
    </div>
  );
};
export default PropertyDetail;
