"use client";

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
  addresssearchClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addresssearch: string;
};

export const HeaderSearch = ({
  hover,
  onMouseEnter,
  onMouseLeave,
  addresssearchClick,
  addresssearch,
}: SearchProps) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [show, setShow] = useState(false);

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
    if (!addresssearch) return true;
    return property.address
      .toLocaleLowerCase()
      .includes(addresssearch?.toLocaleLowerCase());
  });
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
          onChange={(e) => addresssearchClick(e)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onBlur={() => setShow(false)}
          onFocus={() => setShow(true)}
          className={`flex flex-col rounded-full text-black ${hover}`}
          placeholder="               Search "
        />
      </div>
      {show && (
        <div className="fixed bottom-0 left-0 right-0 top-24 z-30 flex justify-center">
          <div className="h-fit w-[450px] rounded-3xl border-2 bg-white p-10 px-5 py-7">
            <h4 className="font-medium leading-none">Search Region</h4>
            <div className="grid grid-flow-col grid-rows-2 gap-4 px-5 py-5">
              {searchproperties.slice(0, 6).map((property) => {
                return (
                  <PropertyLocationSearch
                    propertyId={property._id}
                    address={property?.address}
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
