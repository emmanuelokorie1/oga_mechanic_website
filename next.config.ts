import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },

} as NextConfig;

export default nextConfig;
