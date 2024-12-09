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

type Props = {
  text: string;
};

export const mockdata = [
  { name: "Rooms", icon: <Lamp className="h-12 w-12" /> },
  { name: "Yurts", icon: <Warehouse className="h-12 w-12" /> },
  { name: "New", icon: <KeyIcon className="h-12 w-12" /> },
  { name: "Luxe", icon: <HandPlatter className="h-12 w-12" /> },
  { name: "Tiny homes", icon: <Warehouse className="h-12 w-12" /> },
  { name: "Cabins", icon: <House className="h-12 w-12" /> },
  { name: "A-frames", icon: <Tent className="h-12 w-12" /> },
  { name: "Amazing views", icon: <Trees className="h-12 w-12" /> },
  { name: "Castles", icon: <Castle className="h-12 w-12"></Castle> },
  { name: "Lake", icon: <Waves className="h-12 w-12" /> },
  { name: "Shepherd's huts", icon: <Caravan className="h-12 w-12" /> },
  { name: "Tower", icon: <TowerControl className="h-12 w-12" /> },
  { name: "Camping", icon: <TentTree className="h-12 w-12" /> },
  { name: "Chef's kitchens", icon: <ChefHat className="h-12 w-12" /> },
  { name: "Play", icon: <MicVocal className="h-12 w-12" /> },
  { name: "Park", icon: <FerrisWheel className="h-12 w-12" /> },
  { name: "Pet", icon: <Dog className="h-12 w-12" /> },
  { name: "TV", icon: <Tv className="h-12 w-12" /> },
  { name: "Theater", icon: <Theater className="h-12 w-12" /> },
  { name: "Gem", icon: <Dumbbell className="h-12 w-12" /> },
  { name: "House", icon: <MdOutlineHouse className="h-12 w-12" /> },
  { name: "Apartment", icon: <MdApartment className="h-12 w-12" /> },
  { id: "barn", name: "Barn", icon: <PiBarn className="h-12 w-12" /> },
  {
    name: "Bed & breakfast",
    icon: <GiCoffeeCup className="h-12 w-12" />,
  },
  { name: "Boat", icon: <TbSailboat className="h-12 w-12" /> },
  { name: "Cabin", icon: <MdCabin className="h-12 w-12" /> },
  { name: "Camper/RV", icon: <FaCaravan className="h-12 w-12" /> },
  {
    name: "Casa particular",
    icon: <CasaParticular />,
  },
  { name: "Castle", icon: <Castle /> },
  {
    name: "Cave",
    icon: <MdOutlineHouse className="h-12 w-12" />,
  },
  {
    name: "Container",
    icon: <MdOutlineHouse className="h-12 w-12" />,
  },
  {
    name: "Cycladic home",
    icon: <MdOutlineHouse className="h-12 w-12" />,
  },
];
const categoryIcon = (props: Props) => {
  const { text } = props;
  const findIcon = mockdata.find((data) => data.name === text);
  return findIcon;
};
export default categoryIcon;
