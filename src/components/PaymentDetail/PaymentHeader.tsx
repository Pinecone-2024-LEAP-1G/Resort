import { ChevronLeft } from "lucide-react";

export const PaymentHeader = () => {
  return (
    <div className="mr-8 flex flex-row items-center">
      <ChevronLeft className="w-8 justify-center" />
      <h3 className="px-12 text-3xl font-medium">Confirm and pay</h3>
    </div>
  );
};
