"use client";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "./Category";

type Category = {
  name: string;
  icon?: JSX.Element;
  _id: string;
};
type FilterCategory = {
  onClick: (id: string) => void;
};

export const Categories = ({ onClick }: FilterCategory) => {
  const [categories, setCategories] = useState<CategoriesState>([]);
  const [hover, setHover] = useState<string | number | null>(null);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("/api/categories");
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <div className="flex items-center">
      <CircleChevronLeft />
      <ScrollArea className="w-screen">
        <div className="flex flex-row gap-9">
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
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <CircleChevronRight />
    </div>
  );
};
