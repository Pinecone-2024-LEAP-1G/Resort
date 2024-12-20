"use client";

import React from "react";
import categoryIcon from "@/util/findCategoryIcon";

type Category = {
  text: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hover: string;
  onClick: () => void;
  className: string;
};

export const Category = ({
  text,
  onMouseEnter,
  onMouseLeave,
  hover,
  onClick,
  className,
}: Category) => {
  const icons = categoryIcon({ text });
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-between gap-1 p-5 transition delay-150 duration-300 ease-in-out hover:cursor-pointer"
    >
      <div className={`${hover} text-gray-600`}>{icons?.icon}</div>
      <p
        onFocus={onMouseEnter}
        onBlur={onMouseLeave}
        className={`${hover} text-balance text-center text-xs font-medium`}
      >
        {text}
      </p>
    </button>
  );
};
