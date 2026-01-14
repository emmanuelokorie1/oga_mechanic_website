import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://ogamechanic.twopikin.com/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
