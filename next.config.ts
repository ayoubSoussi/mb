import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/maryam-bakkar',
  assetPrefix: '/maryam-bakkar',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

export default nextConfig;