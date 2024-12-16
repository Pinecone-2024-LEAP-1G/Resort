"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const Footer = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const getaddressProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/address/Bulgan`);
        setFilter(response.data.address);
      } catch (error) {
        console.log(error);
      }
    };
    getaddressProperty();
  }, []);
  console.log(filter);

  const regions = [
    { name: "Arhangai", id: "arhangai" },
    { name: "Bayn-Olgii", id: "bayn-olgii" },
    { name: "Baynkhongor", id: "baynkhongor" },
    { name: "Bulgan", id: "bulgan" },
    { name: "Gobi-Altai", id: "gobi-altai" },
    { name: "Darkhan-uul", id: "darkhan-uul" },
    { name: "Tov", id: "tov" },
    { name: "Khentii", id: "khentii" },
    { name: "Uvs", id: "uvs" },
    { name: "Sukhbaatar", id: "sukhbaatar" },
    { name: "Dorno-gobi", id: "dorno-gobi" },
    { name: "Ovorhangai", id: "ovorhangai" },
    { name: "Zavhan", id: "zavhan" },
    { name: "Khuvsgul", id: "khuvsgul" },
    { name: "Omno-gobi", id: "omno-gobi" },
    { name: "Bagannur", id: "bagannur" },
    { name: "Selenge", id: "selenge" },
  ];

  const router = useRouter();

  const handleRegionClick = (regionId: string) => {
    const element = document.getElementById(regionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="p-6 text-sm text-gray-700">
      <div className="p-4">
        <h2 className="mb-4 text-xl font-bold">
          Inspiration for future getaways
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {regions.map((region, index) => (
            <button
              key={index}
              className="block w-full rounded-lg border p-4 text-center text-gray-800 hover:bg-gray-100"
              onClick={() => handleRegionClick(region.id)}
            >
              <h3 className="font-semibold">{region.name}</h3>
            </button>
          ))}
        </div>
        <button
          className="mt-4 text-blue-500 underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className="my-6 border-t border-gray-300"></div>
      <div className="grid grid-cols-1 gap-6 px-10 md:grid-cols-3">
        {/* Add your other sections here */}
      </div>
      <div className="my-6 border-t border-gray-300"></div>
      <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
        {/* Add your footer social media links and other content here */}
      </div>
    </footer>
  );
};
