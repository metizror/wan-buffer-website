import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/hosting", destination: "/odoo/hosting", permanent: true }];
  },
};

export default nextConfig;
