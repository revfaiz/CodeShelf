import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
  // swcMinify: true,
  // Add more config options as needed
};

export default nextConfig;
