"use client";
import { PotentialChat } from "@/components/UserChat/PotentialChat";
import { UserChat } from "@/components/UserChat/UserChat";
import { ChatContext } from "@/context/ChatContext";
import { useContext } from "react";

const Page = () => {
  const { userChats, isUserChatLoadin, userChatsError } =
    useContext(ChatContext);

  return (
    <div>
      {userChats?.length < 0 ? null : <div>list chstbox</div>}
      <div>
        {isUserChatLoadin && <p>...loadingChats</p>}
        <div>
          {userChats?.map((chat, index) => {
            return (
              <div key={index} className="flex justify-between">
                <UserChat chat={chat} />
                <PotentialChat />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Page;
