import { ChevronLeft, Gem } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function PaymentDetail() {
  return (
    <div className="w-full px-20">
      <div className="flex flex-row items-center mr-8">
        <ChevronLeft className="w-8 justify-start" />
        <h3 className="text-3xl font-medium">Confirm and pay</h3>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Alert className="flex flex-row  h-[98px] w-[556px] rounded-2xl justify-between items-center text-base">
            <div className="flex flex-col">
              <AlertTitle>This is a rare find.</AlertTitle>
              <AlertDescription>
                <p> Bua's place is usually booked.</p>
              </AlertDescription>
            </div>
            <div>
              <Gem className="fill-pink-700 justify-end" />
            </div>
          </Alert>
          <div>
            <h2 className="text-xl font-medium">Your trip</h2>
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-medium">Dates</p>
                <p>Jan 16 – 17, 2025</p>
              </div>
              <p className="">Edit</p>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-medium">Check-in time</p>
                <p>10:00 AM – 12:00 PM</p>
              </div>
              <p className="">Edit</p>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p>Guests</p>
                <p>3 guests</p>
                <div />
              </div>
              <p>Edit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
