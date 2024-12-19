import axios from "axios";

export const getHostById = async (userId: string) => {
  const { data } = await axios.get(`/api/users/${userId}`);
  return data?.user;
};

export const getHostReviewsByHostId = async (userId: string) => {
  const { data } = await axios.get(`/api/reviews/hostReviews/${userId}`);
  return data;
};
