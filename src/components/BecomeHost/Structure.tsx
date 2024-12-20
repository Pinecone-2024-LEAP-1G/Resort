import React, { useEffect, useState } from "react";
import { PropertyHeader } from "./PropertyHeader";
import { PropertyClick } from "@/app/become-host/page";
import axios from "axios";
import { CategoryButton } from "./CategoryButton";
import { Button } from "react-day-picker";

type Category = {
  name: string;
  _id: string;
};

export const Structure = ({
  handleBack,
  handleNext,
  value,
  handleChange,
}: PropertyClick) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <PropertyHeader />
      <div className="mx-auto w-[680px] px-4 py-8">
        <p className="mb-12 text-[32px] font-semibold">
          Эдгээрээс аль нь таны газрыг тодорхойлж байна вэ?
        </p>
        <div className="grid w-[640px] grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {categories.map((category) => (
            <button
              onClick={() =>
                handleChange({
                  target: { name: "categoryname", value: category.name },
                })
              }
              key={category._id}
            >
              <CategoryButton
                key={category._id}
                text={category.name}
                value={value}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "categoryId",
                      value: category._id,
                    },
                  })
                }
                categoryid={category._id}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t p-4">
        <button
          onClick={handleBack}
          aria-label="Go back to the previous step"
          className="text-sm font-medium text-gray-800 underline hover:text-gray-600"
        >
          Буцах
        </button>
        <button
          className={`rounded-lg px-6 py-2 text-sm text-white transition-colors ${
            !value.categoryId
              ? "cursor-not-allowed bg-gray-300"
              : "bg-black hover:bg-gray-800"
          }`}
          disabled={!value.categoryId}
          aria-label="Proceed to the next step"
          onClick={handleNext}
        >
          Үргэлжүүлэх
        </button>
      </div>
    </div>
  );
};
