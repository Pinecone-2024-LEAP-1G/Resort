"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useQueryState } from "nuqs";
import { PropertyType } from "../Review";
import { toast } from "sonner";

export const Footer = () => {
  const [showAll, setShowAll] = useState(false);
  const [, setFilter] = useState<PropertyType[]>();
  const [address, setAdress] = useQueryState("address");

  useEffect(() => {
    const getaddressProperty = async () => {
      try {
        const response = await axios.get(
          `/api/properties/address/?address=${address}`,
        );

        setFilter(response.data.properties);
      } catch (error) {
        toast.error("error");
      }
    };
    getaddressProperty();
  }, [address]);

  const regions = [
    { name: "Aрхангай", id: "arhangai" },
    { name: "Баян-Өлгий", id: "bayn-olgii" },
    { name: "Баянхонгор", id: "baynkhongor" },
    { name: "Булган", id: "bulgan" },
    { name: "Говь-Алтай", id: "gobi-altai" },
    { name: "Дархан-Уул", id: "darkhan-uul" },
    { name: "Төв Аймаг", id: "tov" },
    { name: "Хэнтий", id: "khentii" },
    { name: "Увс", id: "uvs" },
    { name: "Сүхбаатар", id: "sukhbaatar" },
    { name: "Дорно-Говь", id: "dorno-gobi" },
    { name: "Өвөрхангай", id: "ovorhangai" },
    { name: "Завхан", id: "zavhan" },
    { name: "Хөвсгөл", id: "khuvsgul" },
    { name: "Өмнө-Говь", id: "omno-gobi" },
    { name: "Багануур", id: "bagannur" },
    { name: "Сэлэнгэ", id: "selenge" },
  ];

  return (
    <footer className="bg-gray-100 p-6 text-sm text-gray-700">
      <div className="p-4">
        <h2 className="mb-4 text-xl font-bold"></h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {regions.map((region, index) => (
            <p
              key={index}
              className="w-full p-4 text-center text-gray-800 underline"
              onClick={() => setAdress(region.name)}
            >
              <h3 className="font-semibold">{region.name}</h3>
            </p>
          ))}
        </div>
      </div>
      <div className="my-6 border-t border-gray-300"></div>
    </footer>
  );
};
