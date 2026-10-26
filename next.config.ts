import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopackFileSystemCacheForDev: false, // Отключает сохранение кэша Turbopack на диск
  },
};

export default nextConfig;
