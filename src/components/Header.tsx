import Logo from "./icons/Logo";

import Search from "./icons/Search";
import { HeaderModal } from "./HeaderModal";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-2 py-8">
      <div>
        <Logo />
      </div>
      <div className="relative">
        <input
          className="w-80 rounded-full border-2 p-2 px-4"
          placeholder="search"
        ></input>

        <div className="absolute bottom-[3px] end-1 rounded-full border bg-[#f75998] p-[6px]">
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
