import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mb',
  assetPrefix: '/mb',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

export default nextConfig;
