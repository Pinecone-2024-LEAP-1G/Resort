import React, { createContext, useEffect, useState } from "react";
import { baseUrl, getRequest } from "@/utils/services";

interface Chat {
  _id: string;
  name: string;
  userId: string;
  hostId: string;
}

interface ChatContextType {
  userChats: Chat[];
  isUserChatLoading: boolean;
  userChatsError: string | null;
  potentialChats: Chat[];
}

export const ChatContext = createContext<ChatContextType>({
  userChats: [],
  isUserChatLoading: false,
  userChatsError: null,
  potentialChats: [], // Defaults to an empty array
});

export const ChatContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userChats, setUserChats] = useState<Chat[]>([]);
  const [isUserChatLoading, setIsUserChatLoading] = useState(false);
  const [userChatsError, setUserChatsError] = useState<string | null>(null);
  const [potentialChats, setPotentialChats] = useState<Chat[]>([]);

  const userId = "674ec1843ec43bcb847236f6";

  useEffect(() => {
    const getUserChats = async () => {
      if (!userId) return;

      setIsUserChatLoading(true);
      setUserChatsError(null);

      try {
        const response = await getRequest(`${baseUrl}/chats/${userId}`);
        setIsUserChatLoading(false);

        if (response.error) {
          setUserChatsError(response.error);
        } else {
          setUserChats(response);
        }
      } catch (error) {
        setIsUserChatLoading(false);
        setUserChatsError(
          error.message || "An error occurred while fetching chats.",
        );
      }
    };

    getUserChats();
  }, [userId]);

  useEffect(() => {
    const getPotentialChats = async () => {
      try {
        const response = await getRequest(`${baseUrl}/users`);
        console.log("Response from /users:", response);

        if (!Array.isArray(response)) {
          console.error("Expected an array but got:", response);
          return;
        }

        const filteredChats = response.filter((user: Chat) => {
          if (userId === user._id) return false;

          const alreadyInChat = userChats?.some(
            (chat) => chat.userId === user._id || chat.hostId === user._id,
          );

          return !alreadyInChat;
        });

        setPotentialChats(filteredChats);
      } catch (error) {
        console.error("Error fetching potential chats:", error.message);
      }
    };

    getPotentialChats();
  }, [userChats, userId]);

  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatLoading,
        userChatsError,
        potentialChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
