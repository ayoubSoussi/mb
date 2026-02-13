/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/maryam-bakkar',
  assetPrefix: '/maryam-bakkar',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

module.exports = nextConfig;
