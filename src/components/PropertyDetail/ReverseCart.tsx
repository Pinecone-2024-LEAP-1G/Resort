import { Button } from "components/ui/button";
import { GustPopover } from "./GuestPopover";
import { DatePickerWithRange } from "./Calendar";

export const ReverseCart = () => {
  return (
    <div className="ml-auto grid h-[495px] w-[372px] justify-center gap-2 rounded-lg border p-8 shadow-lg">
      <p className="mb-4">Үнэ 0$</p>
      <DatePickerWithRange />
      <GustPopover />
      <Button className="mt-4 h-10 w-[300px] bg-gray-400">reserve</Button>
      <div className="mt-8 flex h-28 flex-col gap-2 border-b">
        <div className="flex justify-between">
          <p className="border-b border-black">price * 0</p>
          <p>total price</p>
        </div>
        <div className="flex justify-between">
          <p className="border-b border-black">tsewelgenii une</p>
          <p>0</p>
        </div>
        <div className="flex justify-between">
          <p className="border-b border-black">zuuchlaliin une</p>
          <p>0</p>
        </div>
      </div>
      <div className="text-md flex h-12 justify-between font-bold">
        <p>niit une</p>
        <p>0$</p>
      </div>
    </div>
  );
};
