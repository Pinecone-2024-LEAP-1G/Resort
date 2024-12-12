"use client";
import HomeCard from "@/components/HomeCard";
import { Property } from "@/lib/models";
import { useState, useEffect } from "react";
import axios from "axios";
import { Categories } from "@/components/Category/Categories";
import { useSearchParams } from "next/navigation";

const Home = () => {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const guests = searchParams.get("guests");
  const [properties, setProperties] = useState<Property[] | []>([]);
  useEffect(() => {
    const getProperties = async () => {
      try {
        const response = await axios.get(
          `/api/properties/searchProperties?address=${address}&from=${from}&to=${to}&guests=${guests}`,
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
      <div className="grid grow grid-cols-6 gap-8">
        {properties?.map((property, index) => {
          if (properties[0].length === 0)
            return (
              <div key={index} className="p-10 text-center">
                Tanii haisan utga oldsongvi
              </div>
            );
          else
            return (
              <HomeCard
                key={index}
                property={property}
                propertyId={property?._id}
                propertyPictures={[property?.propertyPictures]}
              />
            );
        })}
      </div>
    </div>
  );
};

export default Home;
