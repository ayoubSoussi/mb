/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mb',
  assetPrefix: '/mb',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

module.exports = nextConfig;
