import { redirect } from "next/navigation";
import { HeaderLogo } from "../icons/PropertyIcons/HeaderLogo";

export const PropertyHeader = () => {
  const handleClick = () => {
    redirect("/");
  };
  return (
    <div className="flex h-[74px] flex-row items-center justify-between">
      <button onClick={handleClick}>
        <HeaderLogo />
      </button>
    </div>
  );
};
