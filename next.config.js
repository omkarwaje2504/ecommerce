/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["loremflickr.com"], // Add the hostname here
    // You can also configure remotePatterns if needed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/640/480/**", // Adjust the pathname pattern
      },
    ],
  },
};
