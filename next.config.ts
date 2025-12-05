import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["http://192.168.1.15:3000",]
    },
  },
};

export default nextConfig;
