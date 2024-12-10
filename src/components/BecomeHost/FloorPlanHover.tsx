import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { Button } from "../ui/button";

export const PriceFloor = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="text-sm text-gray-500" variant="link">
          ?Таны тооцоолох орлого
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <p className="text-sm">
            Таны орлогоос 20% үйлчилгээний хураамж хасагдаж тооцогдох боломжтой.
            Хэрэв үйлчилгээний хураамж авах бол таньд урьдчилан мэдэгдэж мессэж
            илгээх болно.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
