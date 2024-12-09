import React from "react";

type SearchProps = {
  address: string;
  propertyPicture: string;
  onClick: () => void;
};
export const PropertyLocationSearch = ({
  address,
  propertyPicture,
  onClick,
}: SearchProps) => {
  return (
    <div className="flex flex-col gap-1">
      {/* <div
        style={{
          backgroundImage: `url(${propertyPicture})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-28 w-28 rounded-xl"
      ></div> */}
      <div onClick={onClick}>{address}</div>
    </div>
  );
};
