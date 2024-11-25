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

export function HeaderModal() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="flex items-center gap-3 rounded-full border-2 px-4 py-2">
          <Kebab />
          <Profile />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex w-56 flex-col gap-3 rounded-2xl">
        <DropdownMenuLabel>Sign Up</DropdownMenuLabel>
        <DropdownMenuItem>
          <span>Log in</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
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
