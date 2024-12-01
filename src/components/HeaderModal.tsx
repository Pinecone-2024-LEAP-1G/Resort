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
import { auth } from "@/auth";
import { useState } from "react";
import Image from "next/image";

export function HeaderModal() {
  const [profile, setProfile] = useState(false);
  const [user, setUser] = useState<string | null>("");
  const authSession = async () => {
    const session = await auth();
    if (session?.user?.email) {
      setProfile(true);
    }
    console.log(session);
    setUser(session?.user?.image || null);
  };
  authSession();
  console.log(profile);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="flex items-center gap-3 rounded-full border-2 px-4 py-2">
          <Kebab />
          {profile ? (
            <Image src={user || ""} width={50} height={50} alt="img" />
          ) : (
            <Profile />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex w-56 flex-col gap-3 rounded-2xl">
        <DropdownMenuLabel>Sign Up</DropdownMenuLabel>
        <DropdownMenuItem></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Gift cards</span>
        </DropdownMenuItem>
        <form action={SignIn}>
          <button className="ml-2 text-sm font-normal" type="submit">
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
            <button className="ml-2 text-sm font-normal" type="submit">
              Log out
            </button>
          </form>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
