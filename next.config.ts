import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization - prioritize modern formats
  images: {
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },

  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,
};

export default nextConfig;
