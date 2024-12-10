import { baseUrl, getRequest } from "@/utils/services";
import { useEffect, useState } from "react";

export const useFetchRecipientUser = (chat) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const hostId = chat?.hostId;

  useEffect(() => {
    const getUser = async () => {
      if (!hostId) return;

      try {
        const response = await getRequest(`${baseUrl}/host/${hostId}`);
        if (response.error) {
          setError(response.error);
          return;
        }
        setRecipientUser(response.host);
      } catch (err) {
        setError(err.message || "An error occurred while fetching the user.");
      }
    };

    getUser();
  }, [hostId]);

  return { recipientUser, error };
};
