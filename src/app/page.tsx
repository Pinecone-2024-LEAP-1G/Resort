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
  const [filterProperty, setFilterProperty] = useState<Property[] | []>([]);
  useEffect(() => {
    const getProperties = async () => {
      try {
        const response = await axios.get(
          `/api/properties/searchProperties?address=${address}&from=${from}&to=${to}&guests=${guests}`,
        );
        setFilterProperty(response?.data.property);
        setProperties(response?.data.property);
      } catch (error) {
        console.log(error);
      }
    };

    getProperties();
  }, [guests, from, to, address]);

  const changePropertyCategory = (id: string) => {
    const filterProperties = properties.filter(
      (property) => property?.categoryId === id,
    );
    setFilterProperty(filterProperties);
  };

  return (
    <div>
      <Categories
        onClick={(id) => changePropertyCategory(id)}
        allProperties={() => setFilterProperty(properties)}
      />
      <div className="grid grow gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {filterProperty?.map((property, index) => {
          if (filterProperty[0].length === 0)
            return (
              <div key={index} className="p-10 text-center">
                Таны хайсан утга олдсонгүй.
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
