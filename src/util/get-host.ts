import axios from "axios";

export const getHostById = async (hostId: string) => {
  const { data } = await axios.get(`/api/host/${hostId}`);
  return data?.host;
};

export const getHostReviewsByHostId = async (hostId: string) => {
  const { data } = await axios.get(`/api/reviews/hostReviews/${hostId}`);
  return data;
};
