import Logo from "./icons/Logo";
import { DiCodeigniter } from "react-icons/di";

import Search from "./icons/Search";
import { HeaderModal } from "./HeaderModal";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between px-2 py-8">
      <div className="flex gap-2" onClick={() => router.push("/")}>
        <DiCodeigniter className="h-10 w-10" />
        <p className="w-[30px] font-bold">Хөдөө гарья</p>
      </div>
      <div className="relative">
        <input
          className="w-80 rounded-full border-2 p-2 px-4"
          placeholder="search"
        ></input>

        <div className="absolute bottom-[3px] end-1 rounded-full border bg-gray-800 p-[6px]">
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
