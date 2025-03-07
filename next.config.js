
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fonts.googleapis.com', 'fonts.gstatic.com'],
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

