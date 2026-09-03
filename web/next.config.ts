import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "apps.odoocdn.com",
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
      { source: "/events", destination: "/event", permanent: true },
      { source: "/engagement-models", destination: "/engagement", permanent: true },
      { source: "/odoo/odoo-customization-and-installation", destination: "/odoo/customization", permanent: true },
      {
        source: "/odoo/odoo-customization-and-installation.php",
        destination: "/odoo/customization",
        permanent: true,
      },
      { source: "/contact-us.php", destination: "/contact-us", permanent: true },
      { source: "/wanbufferians.php", destination: "/wanbufferians", permanent: true },
      { source: "/services.php", destination: "/services", permanent: true },
      { source: "/solutions.php", destination: "/industries", permanent: true },
      { source: "/privacy-policy.php", destination: "/privacy-policy", permanent: true },
      { source: "/terms-of-use.php", destination: "/terms-of-use", permanent: true },
      { source: "/cookie-policy.php", destination: "/cookie-policy", permanent: true },
      { source: "/gdpr.php", destination: "/gdpr", permanent: true },
      {
        source: "/services/web-application-service.php",
        destination: "/magento-development",
        permanent: true,
      },
      {
        source: "/services/application-service.php",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/blogs/essential-odoo-integrations-u-s-companies-need-in-2025-shopify-amazon-quickbooks",
        destination: "/blogs/essential-odoo-integrations-us-companies-need-2025",
        permanent: true,
      },
      {
        source: "/blogs/erp-systems-designed-for-fabric-manufacturers-in-india-thailand-and-vietnam",
        destination: "/blogs/erp-systems-designed-for-fabric-manufacturers",
        permanent: true,
      },
      {
        source: "/blogs/dedicated-engineering-teams-vs-in-house-hiring-for-erp-projects",
        destination: "/blogs/dedicated-engineering-teams-vs-in-house-hiring",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
