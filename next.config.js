/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.google.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
