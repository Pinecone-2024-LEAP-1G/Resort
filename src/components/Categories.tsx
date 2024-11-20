"use client";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "components/ui/scroll-area";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "./Category";
type CategoriesState = Category[];
type Category = {
  name: string;
  icon?: JSX.Element;
};

export const Categories = () => {
  const [categories, setCategories] = useState<CategoriesState>([]);
  const [hover, setHover] = useState<string | number | null>(null);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/categories",
        );
        Response.json({ categories });
        setCategories(response.data);
      } catch (error) {
        Response.json({ error: error });
      }
    };
    getCategories();
  }, [categories]);

  return (
    <div className="flex items-center">
      <CircleChevronLeft />
      <ScrollArea className="w-screen">
        <div className="flex flex-row gap-9">
          {" "}
          {categories.map((data, index) => {
            return (
              <Category
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
                hover={hover === index ? "text-gray-800" : "text-gray-500"}
                key={index}
                text={data.name}
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
