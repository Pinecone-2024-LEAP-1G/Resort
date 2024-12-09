import React, { useEffect, useState } from "react";
import { MdOutlineHouse, MdApartment, MdCabin } from "react-icons/md";
import { PiBarn } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { TbSailboat } from "react-icons/tb";
import { FaCaravan } from "react-icons/fa";
import { CasaParticular } from "../icons/PropertyIcons/CasaParticular";
import { Castle } from "../icons/PropertyIcons/Castle";
import { PropertyHeader } from "./PropertyHeader";
import { PropertyClick } from "@/app/become-host/page";
import categoryIcon, { mockdata } from "@/util/findCategoryIcon";
import { CategoriesState } from "../Category/Categories";
import axios from "axios";
import { CategoryButton } from "./CategoryButton";

export const Structure = ({
  handleBack,
  handleNext,
  value,
  handleChange,
}: PropertyClick) => {
  // const places = [
  //   {
  //     id: "house",
  //     label: "House",
  //     icon: <MdOutlineHouse className="h-12 w-12" />,
  //   },
  //   {
  //     id: "apartment",
  //     label: "Apartment",
  //     icon: <MdApartment className="h-12 w-12" />,
  //   },
  //   { id: "barn", label: "Barn", icon: <PiBarn className="h-12 w-12" /> },
  //   {
  //     id: "bedBreakfast",
  //     label: "Bed & breakfast",
  //     icon: <GiCoffeeCup className="h-12 w-12" />,
  //   },
  //   { id: "boat", label: "Boat", icon: <TbSailboat className="h-12 w-12" /> },
  //   { id: "cabin", label: "Cabin", icon: <MdCabin className="h-12 w-12" /> },
  //   { id: "rv", label: "Camper/RV", icon: <FaCaravan className="h-12 w-12" /> },
  //   {
  //     id: "casaParticular",
  //     label: "Casa particular",
  //     icon: <CasaParticular />,
  //   },
  //   { id: "castle", label: "Castle", icon: <Castle /> },
  //   {
  //     id: "cave",
  //     label: "Cave",
  //     icon: <MdOutlineHouse className="h-12 w-12" />,
  //   },
  //   {
  //     id: "container",
  //     label: "Container",
  //     icon: <MdOutlineHouse className="h-12 w-12" />,
  //   },
  //   {
  //     id: "cycladicHome",
  //     label: "Cycladic home",
  //     icon: <MdOutlineHouse className="h-12 w-12" />,
  //   },
  // ];

  const [categories, setCategories] = useState<CategoriesState>([]);
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
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <PropertyHeader />
      <div className="mx-auto w-[680px] px-4 py-8">
        <h1 className="mb-6 text-[32px] font-semibold">
          Which of these best describes your place?
        </h1>
        <div className="grid w-[640px] grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {categories.map((category, index) => (
            <CategoryButton
              key={category._id}
              text={category.name}
              value={value}
              onClick={() =>
                handleChange({
                  target: { name: "categoryId", value: category?._id },
                })
              }
              categoryid={category._id}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t p-4">
        <button
          onClick={handleBack}
          aria-label="Go back to the previous step"
          className="text-sm font-medium text-gray-800 underline hover:text-gray-600"
        >
          Back
        </button>
        <button
          className={`rounded-md px-6 py-3 text-white transition-colors ${
            !value.categoryId
              ? "cursor-not-allowed bg-gray-300"
              : "bg-black hover:bg-gray-800"
          }`}
          disabled={!value.categoryId}
          aria-disabled={!value.categoryId}
          aria-label="Proceed to the next step"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
