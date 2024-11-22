"use client";

import { Categories } from "@/components/Categories";
import HomeCard from "@/components/HomeCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Category } from "@/components/Category";
type CategoriesState = Category[];
type Category = {
  name: string;
  icon?: JSX.Element;
};

// const properties = [
//   {
//     _id: 1,
//     price: { perNight: 10, cleaningFee: 10, airbnbFee: 10 },
//     propertyPictures: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
//     ],
//     location: {
//       address: { street: "", state: "", city: "", zipcode: "" },
//       geo: { type: "Point", coordinates: ["37.119560", "-113.409010"] },
//     },
//     description:
//       "Exercitation consectetur esse anim aliquip eu veniam nulla commodo, Nostrud ipsum proident nulla proident.",
//     guests: 2,
//     userId: "673d2f3a37267d5d6f2569ab",
//     categoryId: "",
//     totalBedrooms: 3,
//     totalOccupancy: 7,
//     totalBathrooms: 3,
//   },
// ];

// Fetch URL

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
  console.log(properties);
  return (
    <div>
      {/* <Categories /> */}
      <div className="grid grid-cols-6 gap-5">
        {properties?.map((property) => {
          return (
            <HomeCard
              _id={property._id}
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
