"use client";

import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const getTimeFormat = (hour: number) => {
  const isPM = hour >= 12;
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const period = isPM ? "PM" : "AM";
  return `${displayHour}:00 ${period}`;
};

const tags = Array.from({ length: 12 }).map((_, i) => {
  const startHour = i + 10;
  const endHour = startHour + 2;
  return `${getTimeFormat(startHour)} - ${getTimeFormat(endHour)}`;
});

export function CheckInTime() {
  return (
    <div className="flex w-[250px] flex-col justify-start space-y-2 p-1">
      <div className="">
        <Select>
          <SelectTrigger className="my-4">
            <SelectValue className="flex p-6" placeholder="Select time" />
          </SelectTrigger>
          <SelectContent className="">
            {tags.map((tag, index) => (
              <SelectItem
                className="flex cursor-pointer items-center border-b border-gray-200 bg-white p-2"
                key={index}
                value={tag}
              >
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between p-2">
        <p className="underline underline-offset-1">Cancel</p>
        <Button>Save</Button>
      </div>
    </div>
  );
}
