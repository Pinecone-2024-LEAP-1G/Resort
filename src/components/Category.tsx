"use client";
import categoryIcon from "@/util/findCategoryIcon";

type Category = {
  text: string;
};

export const Category = (props: Category) => {
  const icons = categoryIcon(props);
  return (
    <div className="flex flex-col items-center gap-1 py-5 px-2">
      <div className="items-center text-gray-600">{icons?.icon}</div>
      <p className="text-center text-gray-600 text-xs font-sans">
        {props.text}
      </p>
    </div>
  );
};
