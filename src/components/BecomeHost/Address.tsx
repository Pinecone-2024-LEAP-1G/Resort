import { PropertyHeader } from "./PropertyHeader";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Provinces } from "../Provinces";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropertyClick } from "@/app/become-host/page";
import { Textarea } from "../ui/textarea";

export const Address = ({
  handleBack,
  handleNext,
  value,
  handleChange,
}: PropertyClick) => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <PropertyHeader />
      <div className="mx-auto my-8 flex w-[630px] flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-[32px] font-semibold">
            Таны байр хаана байдаг вэ?
          </h1>
        </div>
        <div>
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700">
              Бүсээ сонгоно уу
            </label>
            <Select
              value={value.address}
              onValueChange={(province) =>
                handleChange({ target: { name: "address", value: province } })
              }
            >
              <SelectTrigger className="w-[630px]">
                <SelectValue placeholder="Аймаг сонгоно уу" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Provinces?.map((province) => (
                    <SelectItem value={province.name} key={province.name}>
                      {province.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Дэлгэрэнгүй хаяг
              </label>
              <Textarea
                id="streetAddress"
                onChange={(value) =>
                  handleChange({
                    target: { name: "description", value: value.target.value },
                  })
                }
                placeholder="Хаягаа тодорхой бичнэ үү"
              />
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="streetAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Давуу тал
            </label>
            <Textarea
              id="streetAddress"
              onChange={(value) =>
                handleChange({
                  target: { name: "advantage", value: value.target.value },
                })
              }
              placeholder="Сууцны давуу талаа бичнэ үү"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between border-t px-6 py-4">
        <button
          onClick={handleBack}
          aria-label="Go back to the previous step"
          className="text-sm font-medium text-gray-800 underline hover:text-gray-600"
        >
          Буцах
        </button>
        <Button
          disabled={!value.address || !value.description}
          aria-disabled={!value.address || !value.description}
          onClick={handleNext}
          aria-label="Proceed to the next step"
          className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Үргэлжүүлэх
        </Button>
      </div>
    </div>
  );
};
