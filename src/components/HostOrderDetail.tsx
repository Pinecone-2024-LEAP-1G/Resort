import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Button } from "./ui/button";

export const HostOrderDetail = ({ userName }: { userName: string }) => {
  return (
    <div className="my-[50px]">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Welcome, {userName}!</h1>
          <Button
            variant="outline"
            className="h-9 rounded-[4px] border-[2px] border-[#000000] px-4 py-2 text-sm"
          >
            Complete your listing
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Your reservations</h2>
          <Button variant="link" className="underline text-sm">
            All reservations
          </Button>
        </div>
        <ToggleGroup
          variant="outline"
          type="multiple"
          className="flex justify-start gap-4"
        >
          <ToggleGroupItem
            value="checkingOut"
            className="rounded-[18px] px-4 py-2 text-sm font-normal"
          >
            Checking out (0)
          </ToggleGroupItem>
          <ToggleGroupItem
            value="currentlyHosting"
            className="rounded-[18px] px-4 py-2 text-sm font-normal"
          >
            Currently hosting (0)
          </ToggleGroupItem>
          <ToggleGroupItem
            value="arrivingSoon"
            className="rounded-[18px] px-4 py-2 text-sm font-normal"
          >
            Arriving soon (0)
          </ToggleGroupItem>
          <ToggleGroupItem
            value="upcoming"
            className="rounded-[18px] px-4 py-2 text-sm font-normal"
          >
            Upcoming (0)
          </ToggleGroupItem>
          <ToggleGroupItem
            value="pendingReview"
            className="rounded-[18px] px-4 py-2 text-sm font-normal"
          >
            Pending review (0)
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center h-[200px] w-full rounded-lg bg-[#f9f9f9]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12l2 2 4-4"></path>
          <path d="M21 12a9 9 0 1 0-9 9 9 9 0 0 0 9-9z"></path>
        </svg>
        <p className="mt-4 text-sm text-gray-500">
          You don’t have any guests checking out today or tomorrow.
        </p>
      </div>
    </div>
  );
};