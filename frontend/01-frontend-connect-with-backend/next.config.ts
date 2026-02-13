// This configuration allows us to connect the frontend to the backend
// It redirects any request starting with /api to the backend server (localhost:4000)
// This avoids CORS issues during development
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
