import { PropertyValue } from "@/app/become-host/page";
import { Apartment } from "@/components/icons/CategoryIcons/Apartment";
import { Cabin } from "@/components/icons/CategoryIcons/Cabin";
import { Chef } from "@/components/icons/CategoryIcons/Chef";
import { Ger } from "@/components/icons/CategoryIcons/Ger";
import { SimpleHouse } from "@/components/icons/CategoryIcons/House";
import { Luxe } from "@/components/icons/CategoryIcons/Luxe";
import { New } from "@/components/icons/CategoryIcons/New";
import { Room } from "@/components/icons/CategoryIcons/Room";
import { SmallHouse } from "@/components/icons/CategoryIcons/Small";
import { WoodHouse } from "@/components/icons/CategoryIcons/WoodHouse";
import { WoodPin } from "@/components/icons/CategoryIcons/WoodPin";
import { Yurts } from "@/components/icons/CategoryIcons/Yurts";
import { Tent } from "lucide-react";
export type Props = {
  text?: string;
  value?: PropertyValue;
};

export const mockdata = [
  { name: "Өрөө", icon: <Room /> },
  { name: "Гэр", icon: <Ger /> },
  { name: "Урц", icon: <Yurts /> },
  { name: "Шинэ", icon: <New /> },
  { name: "Тансаг зэрэглэлийнх", icon: <Luxe /> },
  { name: "Жижигхэн байшин", icon: <SmallHouse /> },
  { name: "Майхан", icon: <Tent /> },
  { name: "Тогоочтой", icon: <Chef /> },
  { name: "Байшин", icon: <SimpleHouse /> },
  { name: "Орон сууц", icon: <Apartment /> },
  { name: "Модон пин", icon: <WoodPin /> },
  { name: "Кабин", icon: <Cabin /> },
  { name: "Дүнзэн байшин", icon: <WoodHouse /> },
];
const categoryIcon = (props: Props) => {
  const { text } = props;
  const findIcon = mockdata.find((data) => data.name === text);
  return findIcon;
};
export default categoryIcon;
