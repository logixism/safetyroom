/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/rooms/entrance",
        permanent: true,
      },
      {
        source: "/rooms",
        destination: "/rooms/entrance",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
