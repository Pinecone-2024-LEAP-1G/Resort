"use client";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Profile from "./icons/Profile";
import Kebab from "./icons/Kebab";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
import Image from "next/image";
import { useSession } from "next-auth/react";

export function HeaderModal() {
  const { data: session } = useSession();

  const renderUserProfile = () => {
    if (session) {
      return (
        <Image
          src={session?.user?.image || ""}
          width={40}
          height={40}
          alt="img"
          className="rounded-full"
        />
      );
    }

    return <Profile />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-3 rounded-full border-2 px-4 py-2">
          <Kebab />
          {renderUserProfile()}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex w-56 flex-col gap-3 rounded-2xl">
        <form action={SignIn}>
          <button type="submit" className="ml-2 text-sm font-normal">
            Log in
          </button>
        </form>
        <DropdownMenuItem>
          <span>Airbnb your home</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Host an experience</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Help center</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut />
          <form action={SignOut}>
            <button type="submit" className="ml-2 text-sm font-normal">
              Log out
            </button>
          </form>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
