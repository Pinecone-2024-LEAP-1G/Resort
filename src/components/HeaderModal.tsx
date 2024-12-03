"use client";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Profile from "./icons/Profile";
import Kebab from "./icons/Kebab";
import { signIn, signOut } from "next-auth/react";
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
          className="h-[40px] w-[40px] rounded-full"
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
        <DropdownMenuItem>
          {" "}
          <button
            type="submit"
            className="text-sm font-normal"
            onClick={() => signIn("google")}
          >
            Log in
          </button>{" "}
        </DropdownMenuItem>
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

          <button
            className="ml-2 text-sm font-normal"
            onClick={() => signOut()}
          >
            Log Out
          </button>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
