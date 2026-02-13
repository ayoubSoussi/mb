import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/maryam-bakkar',
  assetPrefix: '/mb',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

export default nextConfig;
