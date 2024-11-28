"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { PropertyLocationSearch } from "./HeaderDestination";

type Property = {
  _id: string;
  address: string;
  description: string;
  propertyPictures: string;
};
type SearchProps = {
  hover: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};
export const HeaderSearch = ({
  hover,
  onMouseEnter,
  onMouseLeave,
}: SearchProps) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [show, setShow] = useState(false);
  const [addressSearch, setAddressSearch] = useState("");
  // const [location, setLocation] = useState("");
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/properties",
        );
        Response.json({ response: response });
        setProperties(response.data?.properties);
      } catch (error) {
        Response.json({ error: error });
      }
    };
    fetchProperties();
  }, []);
  const searchproperties = properties?.filter((property) => {
    if (!addressSearch) return true;
    return property.description
      .toLocaleLowerCase()
      .includes(addressSearch?.toLocaleLowerCase());
  });
  const proProperties = searchproperties.slice(0, 6);
  // console.log(location);
  return (
    <div>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onBlur={() => setShow(false)}
        onFocus={() => setShow(true)}
        className={`flex w-[234px] flex-col items-center justify-center rounded-full px-6 py-3 ${hover}`}
      >
        Where
        <input
          // value={location}
          onChange={(e) => setAddressSearch(e.target.value)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onBlur={() => setShow(false)}
          onFocus={() => setShow(true)}
          className={`flex flex-col rounded-full text-black ${hover}`}
          placeholder="               Search "
        />
      </div>{" "}
      {show && (
        <div className="fixed bottom-0 left-0 right-0 top-24 z-30 flex justify-center">
          <div className="h-fit w-[450px] rounded-3xl border-2 bg-white p-10 px-5 py-7">
            <h4 className="font-medium leading-none">Search Region</h4>
            <div className="grid grid-flow-col grid-rows-2 gap-4 px-5 py-5">
              {proProperties.map((property) => {
                return (
                  <PropertyLocationSearch
                    // onClick={() => setLocation(property.description)}
                    address={property?.description}
                    propertyPicture={property?.propertyPictures[0]}
                    key={property._id}
                  />
                );
              })}
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
};
// show === true ? "border-2, bg-gray-100" : "border-none, bg-white"
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { PropertyLocationSearch } from "./HeaderDestination";
// import { ScrollArea } from "./ui/scroll-area";
// import { Separator } from "./ui/separator";

// type Property = {
//   _id: string;
//   address: string;
//   description: string;
//   propertyPictures: string;
// };
// type SearchProps = {
//   hover: string;
//   onMouseEnter: () => void;
//   onMouseLeave: () => void;
// };
// export function HeaderSearch({
//   hover,
//   onMouseEnter,
//   onMouseLeave,
// }: SearchProps) {
//   const [properties, setProperties] = useState<Property[]>([]);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/properties",
//         );
//         Response.json({ response: response });
//         setProperties(response.data?.properties);
//       } catch (error) {
//         Response.json({ error: error });
//       }
//     };
//     fetchProperties();
//   }, []);
//   const proProperties = properties.slice(0, 6);
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <div
//           onMouseEnter={onMouseEnter}
//           onMouseLeave={onMouseLeave}
//           className={`flex w-[234px] flex-col items-center justify-center rounded-full px-6 py-3 ${hover}`}
//         >
//           Where
//           <input
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//             className={`flex flex-col rounded-full text-black ${hover}`}
//             placeholder="               Search "
//           />
//         </div>
//       </PopoverTrigger>
//       <PopoverContent className="w-[450px] rounded-3xl px-5 py-7">
//         {" "}
//         <h4 className="font-medium leading-none">Search Region</h4>
//         {/* <ScrollArea className="grid h-80 w-80 rounded-md"> */}
//         <div className="grid grid-flow-col grid-rows-2 gap-4 px-5 py-5">
//           {proProperties.map((property) => {
//             return (
//               <>
//                 <PropertyLocationSearch
//                   address={property.address}
//                   propertyPicture={property?.propertyPictures[0]}
//                   key={property._id}
//                 />{" "}
//                 {/* <Separator className="my-2" /> */}
//               </>
//             );
//           })}
//         </div>{" "}
//         {/* </ScrollArea> */}
//       </PopoverContent>
//     </Popover>
//   );
// }
