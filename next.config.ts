import type { NextConfig } from "next";

const isProd =
  process.env.NODE_ENV === "production" ||
  process.env.GITHUB_ACTIONS === "true" ||
  process.argv.includes("build");
const basePath = isProd ? "/quality-sound" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
