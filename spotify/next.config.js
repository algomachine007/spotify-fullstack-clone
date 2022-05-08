/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
