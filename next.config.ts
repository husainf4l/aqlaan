import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',

  // Image optimization - prioritize modern formats
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    qualities: [100],
  },

  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental optimizations
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@react-three/fiber',
      '@react-three/drei',
    ],
  },

  // Enable webpack bundle analyzer with ANALYZE=true
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: isServer
            ? '../analyze/server.html'
            : './analyze/client.html',
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
};

export default nextConfig;
