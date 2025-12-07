import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/health-plan-web",
  assetPrefix: "/health-plan-web/",
};

export default nextConfig;
