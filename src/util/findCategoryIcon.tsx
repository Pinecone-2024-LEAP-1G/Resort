import {
  Caravan,
  Castle,
  ChefHat,
  Dog,
  Dumbbell,
  FerrisWheel,
  HandPlatter,
  House,
  KeyIcon,
  Lamp,
  MicVocal,
  Tent,
  TentTree,
  Theater,
  TowerControl,
  Trees,
  Tv,
  Warehouse,
  Waves,
} from "lucide-react";
import { CasaParticular } from "@/components/icons/PropertyIcons/CasaParticular";
import { MdApartment, MdCabin, MdOutlineHouse } from "react-icons/md";
import { PiBarn } from "react-icons/pi";
import { TbSailboat } from "react-icons/tb";
import { FaCaravan } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { PropertyValue } from "@/app/become-host/page";

export type Props = {
  text: string;
  value: PropertyValue;
};

export const mockdata = [
  { name: "Өрөө", icon: <Lamp /> },
  { name: "Гэр", icon: <Warehouse /> },
  { name: "Шинэ", icon: <KeyIcon /> },
  { name: "Тансан зэрэглэлийнх", icon: <HandPlatter /> },
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
  { name: "Play", icon: <MicVocal /> },
  { name: "Park", icon: <FerrisWheel /> },
  { name: "Pet", icon: <Dog /> },
  { name: "TV", icon: <Tv /> },
  { name: "Theater", icon: <Theater /> },
  { name: "Gem", icon: <Dumbbell /> },
  { name: "Байшин", icon: <MdOutlineHouse /> },
  { name: "Орон сууц", icon: <MdApartment /> },
  { id: "barn", name: "Barn", icon: <PiBarn /> },
  {
    name: "Bed & breakfast",
    icon: <GiCoffeeCup />,
  },
  { name: "Boat", icon: <TbSailboat /> },
  { name: "Кабин", icon: <MdCabin /> },
  { name: "Фургон", icon: <FaCaravan /> },
  {
    name: "Casa particular",
    icon: <CasaParticular />,
  },
  { name: "Castle", icon: <Castle /> },
  {
    name: "Cave",
    icon: <MdOutlineHouse />,
  },
  {
    name: "Container",
    icon: <MdOutlineHouse />,
  },
  {
    name: "Cycladic home",
    icon: <MdOutlineHouse />,
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
