"use client";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect } from "next/navigation";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Profile from "../icons/Profile";
import Kebab from "../icons/Kebab";

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

  const handleAirbnbHome = () => {
    redirect("/become-host");
  };
  const handlejump = () => {
    redirect("ReservationPage");
  };
  const handleContact = () => {
    redirect("HostContact");
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
        <DropdownMenuItem onClick={() => signIn("google")}>
          <button type="submit" className="text-sm font-normal">
            Нэвтрэх
          </button>
        </DropdownMenuItem>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem onClick={handleAirbnbHome}>
          <span>Сууц бүртгүүлэх</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handlejump}>
          <span>Захиалга харуулах</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleContact}>
          <span>Холбоо барих</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut />

          <button
            className="ml-2 text-sm font-normal"
            onClick={() => signOut()}
          >
            Гарах
          </button>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
