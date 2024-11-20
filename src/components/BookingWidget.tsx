import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function BookingWidget() {
  return (
    <div>
      <div>Add dates for prices</div>
      <div>
        <div>
          <div>
            <label>Check in:</label>
            <input type="date"></input>
          </div>
          <div>
            <label>Check out:</label>
            <input type="date"></input>
          </div>
        </div>
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
