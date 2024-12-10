"use client";
import { UserChat } from "@/components/UserChat/UserChat";
import { ChatContext } from "@/context/ChatContext";
import { useContext } from "react";

const Page = () => {
  const { userChats, isUserChatLoadin, userChatsError } =
    useContext(ChatContext);
  console.log(userChats, isUserChatLoadin, userChatsError);

  return (
    <div>
      {userChats?.length < 0 ? null : <div>list chstbox</div>}
      <div>
        {isUserChatLoadin && <p>...loadingChats</p>}
        <div>
          {userChats?.map((chat, index) => {
            return (
              <div key={index}>
                <UserChat chat={chat} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Page;
