"use client";

import { ChatContext } from "@/context/ChatContext";
import { useFetchRecipientUser } from "@/hooks/useFetchRecipient";
import { useContext } from "react";

export const UserChat = ({ chat }) => {
  const { recipientUser } = useFetchRecipientUser(chat);
  const { userChats } = useContext(ChatContext);
  console.log(recipientUser);

  if (!userChats || userChats.length === 0) {
    return <p>No chats available</p>;
  }

  return (
    <div>
      <h1>{recipientUser[0].name}</h1>
      <input placeholder="chat" />
    </div>
  );
};
