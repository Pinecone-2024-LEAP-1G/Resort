import {
  Caravan,
  Castle,
  ChefHat,
  HandPlatter,
  House,
  KeyIcon,
  Lamp,
  Tent,
  TentTree,
  TowerControl,
  Trees,
  Warehouse,
  Waves,
} from "lucide-react";
import { MdApartment, MdCabin, MdOutlineHouse } from "react-icons/md";
import { PiBarn } from "react-icons/pi";
import { FaCaravan } from "react-icons/fa";
import { PropertyValue } from "@/app/become-host/page";
import { RiTentFill } from "react-icons/ri";
import { GiHouse } from "react-icons/gi";
import { GiWoodCabin } from "react-icons/gi";
import { GiForest } from "react-icons/gi";
import { MdOutlineCastle } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdHouseSiding } from "react-icons/md";
import { GiBarracksTent } from "react-icons/gi";
import { GiBaseDome } from "react-icons/gi";
export type Props = {
  text?: string;
  value?: PropertyValue;
};

export const mockdata = [
  { name: "Өрөө", icon: <Lamp /> },
  { name: "Гэр", icon: <Warehouse /> },
  { name: "Урц", icon: <RiTentFill /> },
  { name: "Шинэ", icon: <KeyIcon /> },
  { name: "Тансаг зэрэглэлийнх", icon: <HandPlatter /> },
  { name: "Жижигхэн байшин", icon: <Warehouse /> },
  { name: "Кабин", icon: <House /> },
  { name: "A-frames", icon: <Tent /> },
  { name: "Гайхамшигт харагдацтай", icon: <Trees /> },
  { name: "Castles", icon: <Castle></Castle> },
  { name: "Нууртай", icon: <Waves /> },
  { name: "Shepherd's huts", icon: <Caravan /> },
  { name: "Цамхаг", icon: <TowerControl /> },
  { name: "Майхан", icon: <TentTree /> },
  { name: "Тогоочтой", icon: <ChefHat /> },
  { name: "Байшин", icon: <MdOutlineHouse /> },
  { name: "Орон сууц", icon: <MdApartment /> },
  { name: "Модон пин", icon: <PiBarn /> },
  { name: "Кабин", icon: <MdCabin /> },
  { name: "Фургон", icon: <FaCaravan /> },
  {
    name: "Торхон байшин",
    icon: <GiBaseDome />,
  },
  {
    name: "Дүнзэн байшин",
    icon: <MdHouseSiding />,
  },
  {
    name: "Тоосгон байшин",
    icon: <GiHouse />,
  },
  {
    name: "Модон байшин",
    icon: <GiWoodCabin />,
  },
  {
    name: "Ой модтой",
    icon: <GiForest />,
  },

  {
    name: "Харш",
    icon: <MdOutlineCastle />,
  },
  {
    name: "Том байшин",
    icon: <GiFamilyHouse />,
  },
  {
    name: "Бааз",
    icon: <GiBarracksTent />,
  },
];
const categoryIcon = (props: Props) => {
  const { text, value } = props;
  const findIcon = mockdata.find(
    (data) => data.name === text || data.name === value?.categoryname,
  );
  return findIcon;
};
export default categoryIcon;
