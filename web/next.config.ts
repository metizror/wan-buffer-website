import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/hosting", destination: "/odoo/hosting", permanent: true },
      {
        source: "/event/Wan_Buffer_Event/:slug",
        destination: "/event/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
