
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Example; replace with your actual hostname
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

