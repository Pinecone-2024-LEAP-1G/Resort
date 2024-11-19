import { Caravan, Castle, HandPlatter, House, KeyIcon, Lamp, Tent, TowerControl, Trees, Warehouse, Waves } from "lucide-react"
type Props={
  text:string
}

export const mockdata = [
  { name: "Rooms", icon: <Lamp/> },
  { name: "Yurts", icon: <Warehouse/> },
  { name: "New", icon: <KeyIcon/>},
  { name: "Luxe", icon: <HandPlatter/>},
  { name: "Tiny homes", icon: <Warehouse/> },
  { name: "Cabins", icon: <House/> },
  { name: "A-frames", icon:<Tent/> },
  { name: "Amazing views", icon: <Trees/> },
  { name: "Castles", icon: <Castle></Castle> },
  { name: "Lake", icon: <Waves/> },
  { name: "Shepherd's huts", icon: <Caravan/> },
  { name: "Tower", icon: <TowerControl/> },
];
const categoryIcon = (props:Props ) => {
  const { text } = props;
  const findIcon = mockdata.find((data) =>
    data.name === text);
  return findIcon;
};
export default categoryIcon