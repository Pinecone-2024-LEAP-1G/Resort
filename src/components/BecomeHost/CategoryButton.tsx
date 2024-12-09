import categoryIcon from "@/util/findCategoryIcon";
import { Category } from "../Category/Category";
import { CategoriesState } from "../Category/Categories";
import { PropertyValue } from "@/app/become-host/page";

type CategoryProps = {
  text: string;
  value: PropertyValue[];
  onClick: () => void;
  categoryid: CategoriesState;
  categoryId: string;
};
export const CategoryButton = ({
  text,
  value,
  onClick,
  categoryid,
}: CategoryProps) => {
  const icons = categoryIcon({ text });

  return (
    <button
      className={`flex h-[98px] w-[202px] flex-col rounded-lg border p-4 transition-shadow hover:shadow-md ${
        value.categoryId === categoryid
          ? "border-black bg-gray-100"
          : "border-gray-300"
      }`}
      onClick={onClick}
      aria-label={`Select ${text}`}
      value={categoryid}
    >
      <div className="flex flex-col items-start justify-start">
        <div className="h-12 w-12">{icons?.icon}</div>
        <span className="font-medium">{text}</span>
      </div>
    </button>
  );
};
