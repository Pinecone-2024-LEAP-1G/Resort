"use client";
<<<<<<< HEAD
import categoryIcon from "util/findCategoryIcon";
=======
>>>>>>> 3d7a1dc (update)
import React from "react";
import categoryIcon from "util/findCategoryIcon";

type Category = {
  text: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hover: string;
};

export const Category = ({
  text,
  onMouseEnter,
  onMouseLeave,
  hover,
}: Category) => {
  const icons = categoryIcon({ text });
  return (
    <div className="flex flex-col items-center gap-1 p-5">
      <div className={`${hover}items-center text-gray-600`}>{icons?.icon}</div>
      <p
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`${hover} text-center text-xs font-medium`}
      >
        {text}
      </p>
    </div>
  );
};
