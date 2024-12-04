"use client";
import HomeCard from "@/components/HomeCard";
import { Property } from "@/lib/models";
import { useState, useEffect } from "react";
import axios from "axios";
import { useQueryState, useQueryStates } from "nuqs";
import { addDays, constructNow } from "date-fns";
import { DateRange } from "react-day-picker";
import { Categories } from "@/components/Category/Categories";
import { Property } from "./property/[propertyId]/page";
import { NextRequest } from "next/server";
import { useSearchParams } from "next/navigation";
const Home = () => {
  // const [addressSearch, setAddressSearch] = useQueryState("address");

  // const [setDate] = useQueryStates<DateRange | undefined>({
  //   from: new Date(2022, 0, 20),
  //   to: addDays(new Date(2022, 0, 20), 20),
  // });
  const searchParams = useSearchParams();
  const addresssearch = searchParams.get("address");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const guests = searchParams.get("guests");
  const [searchproperties, setSearchroperties] = useState<Property[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  // const searchProperty = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3000/api/properties/getAddress?address=${addressSearch}&from=${from}&to=${to}&guests=${guests}`,
  //     );
  //     setSearchroperties(response?.data.searchProperty);

  //     console.log(response?.data.searchProperty);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // console.log(properties);
  // useEffect(() => {
  //   searchProperty();
  // }, []);
  const getProperties = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/properties/getAddress?address=${addresssearch}&from=${from}&to=${to}&guests=${guests}`,
      );
      console.log(response);
      setProperties(response?.data.property);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div>
      <Categories />
      <div className="grid grow grid-cols-6 gap-8">
        {properties?.map((property) => {
          return (
            <HomeCard
              propertyId={property?._id}
              key={property?._id}
              propertyPictures={property?.propertyPictures}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
