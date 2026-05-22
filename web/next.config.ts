import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/hosting", destination: "/odoo/hosting", permanent: true },
      {
        source: "/event/Wan_Buffer_Event/:slug",
        destination: "/event/:slug",
        permanent: true,
      },
      { source: "/case-studies", destination: "/case-study", permanent: true },
      { source: "/case-studies/:slug", destination: "/case-study/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
