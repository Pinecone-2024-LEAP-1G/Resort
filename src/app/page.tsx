"use client";

// import { Categories } from "@/components/Categories";
import HomeCard from "@/components/HomeCard";
import { useState, useEffect } from "react";
// import axios from "axios";
// import { Category } from "@/components/Category";
// type CategoriesState = Category[];
// type Category = {
//   name: string;
//   icon?: JSX.Element;
// };

const Home = () => {
  const [properties, setProperties] = useState<any[]>([]);
  useEffect(() => {
    const getProperties = async () => {
      const response = await fetch("http://localhost:3000/api/properties");
      const data = await response.json();
      setProperties(data.properties);
    };
    getProperties();
  }, []);

  return (
    <div>
      {/* <Categories /> */}
      <div className="grid grid-cols-6 gap-4">
        {properties?.map((property) => {
          return (
            <HomeCard
              key={property._id}
              price={property.price}
              propertyId={property._id}
              propertyPictures={property.propertyPictures}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
