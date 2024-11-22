"use client";
import { Categories } from "@/components/Categories";
import HomeCard from "@/components/HomeCard";
import { useState, useEffect } from "react";

const Home = () => {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:3000/api/properties");
      const data = await response.json();
      setProperties(data.properties);
    };
    getProducts();
  }, []);

  return (
    <div>
      <Categories />
      <div className="grid grid-cols-6 gap-5">
        {properties?.map((property) => {
          return (
            <HomeCard
              propertyId={property._id}
              key={property._id}
              propertyPictures={property.propertyPictures}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
