import { ChatContext } from "@/context/ChatContext";
import { useContext } from "react";

export const PotentialChat = () => {
  const { potentialChats } = useContext(ChatContext);
  console.log(potentialChats);

  return (
    <div>
      {potentialChats.map((po) => {
        return (
          <div key={po._id}>
            <h1>{po.name}</h1>
          </div>
        );
      })}
    </div>
  );
};
