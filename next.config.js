/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mb',
  assetPrefix: '/mb',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '/mb',
  },
};

module.exports = nextConfig;
