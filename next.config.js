/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://poi.kr/ip",
      },
    ];
  },
};

module.exports = nextConfig;
