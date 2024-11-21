import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-select";

export function RulesAndPolicy() {
    return (
        <div>
            <p>By selecting the button below, I agree to the <a>
                <Dialog>
      <DialogTrigger asChild>
        <a className="underline underline-offset-1">Host's House Rules</a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>House rules</DialogTitle>
          <DialogDescription>
You’ll be staying in someone’s home, so please treat it with care and respect.          </DialogDescription>
        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <h2>Checking in and out</h2>
                            <p>Flexible check-in</p>
                            <h2>During your stay
</h2>
        </div>
     
      </DialogContent>
    </Dialog></a>, Ground rules for guests, Airbnb's Rebooking and Refund Policy, and that Airbnb can charge my payment method if I’m responsible for damage.</p>
        </div>
    )
}