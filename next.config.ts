import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI ?? "",
    AUTH_SECRET: process.env.AUTH_SECRET ?? "",
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET ?? "",
    GMAIL_USER: process.env.GMAIL_USER ?? "",
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD ?? "",
  },
};
