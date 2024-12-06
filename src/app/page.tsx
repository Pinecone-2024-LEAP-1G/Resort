"use client";
import HomeCard from "@/components/HomeCard";
import { Property } from "@/lib/models";
import { useState, useEffect } from "react";
import axios from "axios";
import { Categories } from "@/components/Category/Categories";
import { parseAsIsoDate, parseAsString, useQueryStates } from "nuqs";

const Home = () => {
  const [queryParams] = useQueryStates({
    from: parseAsIsoDate,
    to: parseAsIsoDate,
    guests: parseAsString,
    address: parseAsString,
  });
  const { from, to, guests, address } = queryParams;

  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/properties/getAddress?address=${address}&from=${from}&to=${to}&guests=${guests}`,
        );

        setProperties(response?.data.property);
      } catch (error) {
        console.log(error);
      }
    };

    getProperties();
  }, [guests, from, to, address, setProperties]);
  return (
    <div>
      <Categories />
      <div className="grid grow grid-cols-4 gap-8">
        {properties?.map((property) => {
          return (
            <HomeCard
              propertyId={property?._id}
              key={property?._id}
              propertyPictures={[property?.propertyPictures]}
              property={property}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
