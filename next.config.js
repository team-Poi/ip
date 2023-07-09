/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://poi.kr/ip",
      },
    ];
  },
};

module.exports = nextConfig;
