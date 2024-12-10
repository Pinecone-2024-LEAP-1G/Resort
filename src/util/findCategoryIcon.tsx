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
  { name: "Rooms", icon: <Lamp /> },
  { name: "Yurts", icon: <Warehouse /> },
  { name: "New", icon: <KeyIcon /> },
  { name: "Luxe", icon: <HandPlatter /> },
  { name: "Tiny homes", icon: <Warehouse /> },
  { name: "Cabins", icon: <House /> },
  { name: "A-frames", icon: <Tent /> },
  { name: "Amazing views", icon: <Trees /> },
  { name: "Castles", icon: <Castle></Castle> },
  { name: "Lake", icon: <Waves /> },
  { name: "Shepherd's huts", icon: <Caravan /> },
  { name: "Tower", icon: <TowerControl /> },
  { name: "Camping", icon: <TentTree /> },
  { name: "Chef's kitchens", icon: <ChefHat /> },
  { name: "Play", icon: <MicVocal /> },
  { name: "Park", icon: <FerrisWheel /> },
  { name: "Pet", icon: <Dog /> },
  { name: "TV", icon: <Tv /> },
  { name: "Theater", icon: <Theater /> },
  { name: "Gem", icon: <Dumbbell /> },
  { name: "House", icon: <MdOutlineHouse /> },
  { name: "Apartment", icon: <MdApartment /> },
  { id: "barn", name: "Barn", icon: <PiBarn /> },
  {
    name: "Bed & breakfast",
    icon: <GiCoffeeCup />,
  },
  { name: "Boat", icon: <TbSailboat /> },
  { name: "Cabin", icon: <MdCabin /> },
  { name: "Camper/RV", icon: <FaCaravan /> },
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
