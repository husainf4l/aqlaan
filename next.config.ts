import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization - prioritize modern formats
  images: {
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },

  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,

  // Enable optimized package imports
  optimizePackageImports: [
    '@react-three/fiber',
    '@react-three/drei',
    'lucide-react',
  ],

  // Optimize webpack
  webpack: (config, { isServer }) => {
    config.optimization.usedExports = true;
    return config;
  },
};

export default nextConfig;
