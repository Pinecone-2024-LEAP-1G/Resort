"use client";
import { Categories } from "@/components/Categories";
import HomeCard from "@/components/HomeCard";
import { Property } from "@/lib/models";
import { useState, useEffect } from "react";

const Home = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/api/properties");
      const data = await response.json();
      setProperties(data.properties);
    };
    getProducts();
  }, []);

  return (
    <div>
      <Categories />
      <div className="grid grow grid-cols-6 gap-8">
        {properties?.map((property) => {
          return (
            <HomeCard
              propertyId={property._id}
              key={property._id}
              propertyPictures={property.propertyPictures}
              property={property}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
