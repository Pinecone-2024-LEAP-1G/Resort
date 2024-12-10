import React from "react";

type SearchProps = {
  address: string;
  propertyPicture: string;
  onClick: () => void;
};
export const PropertyLocationSearch = ({ address, onClick }: SearchProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div onClick={onClick}>{address}</div>
    </div>
  );
};
