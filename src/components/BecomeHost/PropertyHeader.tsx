import { HeaderLogo } from "../icons/PropertyIcons/HeaderLogo";
import { Button } from "../ui/button";

export const PropertyHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <HeaderLogo />
      </div>
      <div>
        <Button className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black hover:border-black hover:bg-white hover:text-black">
          Save & exit
        </Button>
      </div>
    </div>
  );
};
