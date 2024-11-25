import { LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AlignJustify } from "lucide-react";
import Profile from "./icons/Profile";

export function HeaderModal() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-3 border rounded-full h-12 p-3">
          <AlignJustify />
          <Profile />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 flex flex-col gap-2 p-3 rounded-2xl">
        <DropdownMenuLabel>Sign up</DropdownMenuLabel>
        <DropdownMenuItem>
          <span>Log in</span>
        </DropdownMenuItem>
        <div>
          <p className="border border-solid"></p>
        </div>
        <DropdownMenuItem>
          <span>Gift cards</span>
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
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}