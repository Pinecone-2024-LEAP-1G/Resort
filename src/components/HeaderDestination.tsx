import { useRouter } from "next/navigation";
import React from "react";

type SearchProps = {
  address: string;
  propertyPicture: string;
  propertyId: string;
};
export const PropertyLocationSearch = ({
  address,
  propertyPicture,
  propertyId,
}: SearchProps) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-1"
      onClick={() => router.push(`/property/${propertyId}`)}
    >
      <div
        style={{
          backgroundImage: `url(${propertyPicture})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-28 w-28 rounded-xl"
      ></div>
      <p>{address}</p>
    </div>
  );
};
