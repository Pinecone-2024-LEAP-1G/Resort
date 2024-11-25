import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Clock } from "lucide-react";
import { Users } from "lucide-react";
import { PawPrint } from "lucide-react";
import { Cigarette } from "lucide-react";
import Link from "next/link";
import { PayButton } from "./PayButton";

export function RulesAndPolicy() {
  return (
    <div className="mx-20 w-[556px] max-w-full border-t py-8 text-xs">
      <div className="py-6">
        <p>
          By selecting the button below, I agree to the{" "}
          <a>
            <Dialog>
              <DialogTrigger asChild>
                <a className="mb-4 mt-2 font-medium underline underline-offset-1">
                  Host's House Rules,
                </a>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="mt-8 text-2xl">
                    House rules
                  </DialogTitle>
                  <DialogDescription className="text-base text-gray-900">
                    You’ll be staying in someone’s home, so please treat it with
                    care and respect.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <h2 className="py-4 text-lg font-medium">
                    Checking in and out
                  </h2>
                  <div className="flex gap-4 py-6">
                    <Clock />
                    <p>Flexible check-in</p>
                  </div>

                  <h2 className="text-lg font-medium">During your stay</h2>
                  <div className="flex gap-4 py-6">
                    <Users />
                    <p>10 guests maximum</p>
                  </div>
                  <div className="flex gap-4 border-y py-6">
                    <PawPrint />
                    <p>Pets allowed</p>
                  </div>
                  <div className="flex gap-4 py-6">
                    <Cigarette />
                    <p>Smoking is allowed</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </a>
          <a>
            <Link
              className="font-medium underline underline-offset-1"
              href="/rules"
            >
              Ground rules for guests,
            </Link>
          </a>
          <a>
            <Dialog>
              <DialogTrigger className="font-medium underline underline-offset-1">
                Airbnb's Rebooking and Refund Policy
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="items-center justify-center border-b p-6">
                    Rebooking and Refund Policy
                  </DialogTitle>
                  <DialogDescription className="text-gray-900">
                    <div className="flex flex-col gap-2 p-6">
                      <p>
                        If a Host cancels your reservation prior to check-in,
                        you will automatically receive a full refund. If a Host
                        cancels 30 days or less prior to check-in, and you
                        contact us, we will also assist you with finding
                        comparable or better accommodations.
                      </p>
                      <p>
                        Other Travel Issues must be reported to us no later than
                        72 hours after discovery. If we determine that a Travel
                        Issue has disrupted the stay, we will provide a full or
                        partial refund and, depending on the circumstances, may
                        assist the guest with finding comparable or better
                        accommodations. The amount of any refund will depend on
                        the severity of the Travel Issue, the impact on you, the
                        portion of the stay affected, and whether you remain at
                        the accommodations.
                      </p>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Link
                    className="underline underline-offset-1"
                    href="/termsAndPolicy"
                  >
                    Read the full terms
                  </Link>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </a>
          <a> and that Airbnb can </a>
          <Dialog>
            <DialogTrigger className="font-medium underline underline-offset-1">
              charge my payment method
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="justify-center border-b p-6">
                  Getting charged for damage
                </DialogTitle>
                <DialogDescription className="gap-4 p-6 text-gray-900">
                  <div className="flex flex-col gap-4">
                    <p className="text-base">
                      Accidents are rare, but they happen. If you, someone you
                      invite, or a pet are responsible for damage during a stay,
                      your payment method may be charged.
                    </p>

                    <h2 className="text-lg font-medium text-black">
                      What can I be charged for?
                    </h2>
                    <p>
                      You could be charged for damage, any of your Host’s stuff
                      that goes missing, or unexpected cleaning costs due to
                      your stay.
                    </p>
                    <h2 className="text-lg font-medium text-black">
                      What’s the process?
                    </h2>
                    <p>
                      If you and your Host can’t work it out first, we’ll step
                      in to determine responsibility. We’ll only charge your
                      payment method if we have reason to believe you’re
                      responsible.
                    </p>
                    <h2 className="text-lg font-medium text-black">
                      What if I don’t agree?
                    </h2>
                    <p>
                      You’ll have a chance to appeal if you think we made a
                      mistake.
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <a> if I’m responsible for damage.</a>
        </p>
      </div>
      <PayButton />
    </div>
  );
}
