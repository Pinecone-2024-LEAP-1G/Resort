import React from "react";

type SearchProps = {
  address: string;
  propertyPicture: string;
  // onClick: (e: React.onClick) => void;
};
export const PropertyLocationSearch = ({
  address,
  propertyPicture,
  // onClick,
}: SearchProps) => {
  // const [location, setLocation] = useState("");
  // console.log(location);
  return (
    <div className="flex flex-col gap-1">
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
