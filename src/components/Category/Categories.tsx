"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "./Category";
import { SeeAllIcon } from "../icons/CategoryIcons/SeeAllIcon";

type Category = {
  name: string;
  icon?: JSX.Element;
  _id: string;
};

type FilterCategory = {
  onClick: (id: string) => void;
  allProperties: () => void;
};

export const Categories = ({ onClick, allProperties }: FilterCategory) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [hover, setHover] = useState<string | number | null>(null);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("/api/categories");
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <div className="flex items-center pb-6">
      <ScrollArea className="w-screen">
        <div className="flex flex-row py-2">
          <div
            className="flex flex-col items-center justify-center gap-1 p-5 hover:cursor-pointer"
            onClick={allProperties}
          >
            <SeeAllIcon />
            <p className="text-nowrap text-center text-xs font-medium text-black">
              Бүгдийг харах
            </p>
          </div>
          <div className="flex w-full flex-row">
            {categories?.map((category, index) => {
              return (
                <Category
                  onClick={() => onClick(category._id)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                  hover={hover === index ? "text-gray-800" : "text-gray-500"}
                  key={index}
                  text={category.name}
                />
              );
            })}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
