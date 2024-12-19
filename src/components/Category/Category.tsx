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
    <div onClick={onClick} className={className}>
      <div className={`${hover} `}>{icons?.icon}</div>
      <p
        onFocus={onMouseEnter}
        onBlur={onMouseLeave}
        className={`${hover} text-balance text-center text-xs font-medium`}
      >
        {text}
      </p>
    </div>
  );
};
