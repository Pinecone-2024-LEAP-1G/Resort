import { Castle } from "lucide-react";

export const mockdata = [
  { name: "castle", icon: <Castle></Castle> },
  { name: "yurts", icon: <Castle></Castle> },
  { name: "rooms", icon: <Castle></Castle> },
  { name: "amazing views", icon: <Castle></Castle> },
  { name: "tiny homes", icon: <Castle></Castle> },
  { name: "cabins", icon: <Castle></Castle> },
  { name: "a-frames", icon: <Castle></Castle> },
];
export const categoryIcon = (props) => {
  const { text } = props;
  const findIcon = mockdata.find((data) => {
    data.name === text;
  });
  return findIcon;
};
