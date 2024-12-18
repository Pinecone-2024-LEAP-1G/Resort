import { PropertyValue } from "@/app/become-host/page";
import { Apartment } from "@/components/icons/CategoryIcons/Apartment";
import { Cabin } from "@/components/icons/CategoryIcons/Cabin";
import { Chef } from "@/components/icons/CategoryIcons/Chef";
import { Ger } from "@/components/icons/CategoryIcons/Ger";
import { SimpleHouse } from "@/components/icons/CategoryIcons/House";
import { Luxe } from "@/components/icons/CategoryIcons/Luxe";
import { New } from "@/components/icons/CategoryIcons/New";
import { SmallHouse } from "@/components/icons/CategoryIcons/Small";
import { Yurts } from "@/components/icons/CategoryIcons/Yurts";
import { Tent } from "@/components/icons/CategoryIcons/Tent";
import { NiceView } from "@/components/icons/CategoryIcons/NiceView";
import { LakeArea } from "@/components/icons/CategoryIcons/LakeArea";
import { BigHouse } from "@/components/icons/CategoryIcons/BigHouse";
import { WithPark } from "@/components/icons/CategoryIcons/WithPark";
import { Forest } from "@/components/icons/CategoryIcons/Forest";
import { Party } from "@/components/icons/CategoryIcons/Party";

export type Props = {
  text?: string;
  value?: PropertyValue;
};

export const mockdata = [
  { name: "Гэр", icon: <Ger /> },
  { name: "Урц", icon: <Yurts /> },
  { name: "Шинэ", icon: <New /> },
  { name: "Тансаг зэрэглэлийнх", icon: <Luxe /> },
  { name: "Жижигхэн байшин", icon: <SmallHouse /> },
  { name: "Майхан", icon: <Tent /> },
  { name: "Тогоочтой", icon: <Chef /> },
  { name: "Байшин", icon: <SimpleHouse /> },
  { name: "Орон сууц", icon: <Apartment /> },
  { name: "Кабин", icon: <Cabin /> },
  { name: "Ой модтой", icon: <Forest /> },
  { name: "Нууртай", icon: <LakeArea /> },
  { name: "Гоё харагдацтай", icon: <NiceView /> },
  { name: "Том байшин", icon: <BigHouse /> },
  { name: "Тоглоомын талбайтай", icon: <WithPark /> },
  { name: "Парти", icon: <Party /> },
];
const categoryIcon = (props: Props) => {
  const { text } = props;
  const findIcon = mockdata.find((data) => data.name === text);
  return findIcon;
};
export default categoryIcon;
