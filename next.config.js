
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hyperscript.ng", // 
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

