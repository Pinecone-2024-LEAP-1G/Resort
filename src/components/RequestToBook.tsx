import { ChevronLeft } from "lucide-react";
import { Gem } from "lucide-react";
import { PriceDetails } from "./PriceDetails";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function RequestToBook() {
  return (
    <div className="">
      <div className="flex flex-row">
        <ChevronLeft />
        <h2>Request to book</h2>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Alert className="flex h-[98px] w-[556px] flex-row items-center justify-between rounded-2xl">
            <div className="flex flex-col">
              <AlertTitle>This is a rare find.</AlertTitle>
              <AlertDescription>
                <p> Bua's place is usually booked.</p>
              </AlertDescription>
            </div>
            <Gem />
          </Alert>

          <div>
            <h2>Your trip</h2>
            <div className="flex flex-row">
              <div>
                <p>Dates</p>
                <p>Jan 16 – 17, 2025</p>
              </div>
              <p>Edit</p>
            </div>
            <div className="flex flex-row">
              <div>
                <p>Guests</p>
                <p>3 guests</p>
                <div />
              </div>
              <p>Edit</p>
            </div>
          </div>
        </div>
        <PriceDetails />
      </div>
    </div>
  );
}
