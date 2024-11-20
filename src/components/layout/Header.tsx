"use client";

import Logo from "@/public/icon/Logo";

import { HeaderModal } from "./HeaderModal";
import Search from "@/public/Search";

const Header = () => {
  return (
    <div className=" flex justify-between items-center  container lg: mx-auto px-4 py-12 ">
      <div>
        <Logo />
      </div>

      <div className="relative flex items-center  ">
        <input
          placeholder="search"
          className="border border-solid rounded-full h-10 p-5 w-96"></input>
        <div className="border rounded-full p-1 absolute end-2 bg-[#ff336b] ">
          <Search />
        </div>
      </div>
      <div>
        <HeaderModal />
      </div>
    </div>
  );
};
export default Header;
