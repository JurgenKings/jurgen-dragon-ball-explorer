import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dragonballapi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dragonball-api.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
}

export default nextConfig
