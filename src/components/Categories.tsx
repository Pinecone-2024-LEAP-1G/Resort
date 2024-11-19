import { Castle } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const mockdata = [
  { name: "castle", icon: <Castle></Castle> },
  { name: "yurts", icon: <Castle></Castle> },
  { name: "rooms", icon: <Castle></Castle> },
  { name: "amazing views", icon: <Castle></Castle> },
  { name: "tiny homes", icon: <Castle></Castle> },
  { name: "cabins", icon: <Castle></Castle> },
  { name: "a-frames", icon: <Castle></Castle> },
];

export const Categories = () => {
  return (
    <ScrollArea className="w-screen">
      <div className="flex flex-row justify-around border">
        {" "}
        {mockdata.map((data, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-1">
              <div className="items-center">{data.icon}</div>
              <p className="m-0 p-0">{data.name}</p>
            </div>
          );
        })}
      </div>{" "}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
