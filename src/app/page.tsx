"use client";

import { Categories } from "components/Categories";
import HomeCard from "components/HomeCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Category } from "components/Category";
type CategoriesState = Category[];
type Category = {
  name: string;
  icon?: JSX.Element;
};

const Properties = [
  {
    _id: 1,
    price: 10,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
    ],
    location: {
      address: { street: "", state: "", city: "", zipcode: "" },
      geo: { type: "Point", coordinates: ["37.119560", "-113.409010"] },
    },
  },
];

// const Properties = () => {
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     const getCategories = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/properties"
//         );
//         Response.json({ categories });
//         setCategories(response.data);
//       } catch (error) {
//         Response.json({ error: error });
//       }
//     };
//     getCategories();
//   }, [categories]);

const Home = () => {
  return (
    <div>
      <Categories />
      <div className="grid grid-cols-6 gap-5">
        {Properties.map((property) => {
          return (
            <HomeCard
              key={property._id}
              price={property.price}
              images={property.images}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
