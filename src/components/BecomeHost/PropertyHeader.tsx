import { redirect } from "next/navigation";
import { HeaderLogo } from "../icons/PropertyIcons/HeaderLogo";
import { Button } from "../ui/button";

export const PropertyHeader = () => {
  const handleClick = () => {
    redirect("/");
  };
  return (
    <div className="flex h-[74px] flex-row items-center justify-between">
      <button onClick={handleClick}>
        <HeaderLogo />
      </button>
      <div className="">
        <Button className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black hover:border-black hover:bg-white hover:text-black">
          Save & exit
        </Button>
      </div>
    </div>
  );
};
