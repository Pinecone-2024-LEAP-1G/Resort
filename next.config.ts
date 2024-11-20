import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
module.exports = {
  images: {
    domains: [
      'cdn.onekindesign.com',  // Add this domain
      'www.cud.ac.ae',          // Add other domains as needed
      'www.cvent.com',   
      'images.pexels.com'
    ],
  },
};
