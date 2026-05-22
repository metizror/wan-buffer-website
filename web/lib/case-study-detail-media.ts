import type { CaseStudyDetailFields, CaseStudyImage } from "@/lib/case-study-data";

type CaseStudyDetailMedia = Pick<
  CaseStudyDetailFields,
  "screenshots" | "solutionsIntro" | "solutionRows" | "approachIntro" | "techStackLogos"
>;

const TECH = {
  odoo: { src: "/case-study/shared/tech/odoo.webp", alt: "Odoo" },
  python: { src: "/case-study/shared/tech/python.png", alt: "Python" },
  postgresql: { src: "/case-study/shared/tech/postgresql.png", alt: "PostgreSQL" },
  magento: { src: "/case-study/shared/tech/magento.png", alt: "Magento" },
  git: { src: "/case-study/shared/tech/git.png", alt: "Git" },
  docker: { src: "/case-study/shared/tech/docker.png", alt: "Docker" },
  wordpress: { src: "/case-study/shared/tech/wordpress.webp", alt: "WordPress" },
  javascript: { src: "/case-study/shared/tech/javascript.webp", alt: "JavaScript" },
  php: { src: "/case-study/shared/tech/php.webp", alt: "PHP" },
  html: { src: "/case-study/shared/tech/html.webp", alt: "HTML" },
  css: { src: "/case-study/shared/tech/css.webp", alt: "CSS" },
  mysql: { src: "/case-study/shared/tech/mysql.webp", alt: "MySQL" },
} satisfies Record<string, CaseStudyImage>;

export const CASE_STUDY_DETAIL_MEDIA: Record<string, CaseStudyDetailMedia> = {
  "odoo-erp-implementation-in-the-textile-industry": {
    screenshots: [
      { src: "/case-study/detail/textile/screenshot-1.webp", alt: "Textile ERP screenshot 1" },
      { src: "/case-study/detail/textile/screenshot-2.webp", alt: "Textile ERP screenshot 2" },
      { src: "/case-study/detail/textile/screenshot-3.webp", alt: "Textile ERP screenshot 3" },
    ],
    solutionsIntro:
      "To tackle these issues, Wan Buffer Services implemented an advanced, end-to-end Odoo ERP system covering inventory, production, quality, and analytics — fully optimized for textile operations.",
    solutionRows: [
      {
        imageSrc: "/case-study/detail/textile/solution-1.jpg",
        imageAlt: "Fabric roll and batch management in Odoo",
        imagePosition: "left",
        solutions: [
          {
            title: "Fabric roll & batch management",
            bullets: [
              "Added a Fabric Details tab in Odoo with roll number, GSM, color, QC status, and production date.",
              "Enabled full traceability from weaving to dispatch.",
            ],
          },
          {
            title: "Smart stock segmentation",
            bullets: [
              'Built filters by Fabric Type, GSM, Color, and Dye Lot, allowing instant stock lookups like "Blue 200 GSM Cotton."',
            ],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/textile/solution-2.jpg",
        imageAlt: "IoT and barcode automation for textile inventory",
        imagePosition: "right",
        solutions: [
          {
            title: "Real-time IoT & barcode automation",
            bullets: [
              "Integrated barcode scanners and IoT devices for automatic movement updates across departments.",
              "Achieved real-time roll location tracking without manual input.",
            ],
          },
          {
            title: "Fabric quality control",
            bullets: [
              'Created a digital "Quality Test" screen linked to each roll.',
              "Failed rolls move automatically to quarantine stock; approved rolls go to dispatch.",
            ],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/textile/solution-3.jpg",
        imageAlt: "AI-powered reordering in textile ERP",
        imagePosition: "left",
        solutions: [
          {
            title: "AI-Powered Reordering",
            bullets: [
              "Implemented automatic reorder suggestions based on past consumption, sales forecast, and machine capacity.",
            ],
          },
          {
            title: "QR / barcode for each roll",
            bullets: [
              "Every roll is assigned a QR code displaying its details, QC results, and linked orders — accessible by scanning.",
            ],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/textile/solution-4.jpg",
        imageAlt: "Predictive analytics and role-based access",
        imagePosition: "right",
        solutions: [
          {
            title: "Predictive inventory analytics",
            bullets: [
              "Built smart dashboards to monitor fast-moving, slow-moving, and low-stock fabrics, supporting proactive management.",
            ],
          },
          {
            title: "Role-based access & audit trail",
            bullets: [
              "Each department manages its own part — QC, Dyeing, or Stores — ensuring accountability and security.",
            ],
          },
        ],
      },
    ],
    approachIntro:
      "We implemented a phased and data-driven approach to transform textile inventory management using Odoo ERP — focusing equally on user adoption, accuracy, and automation.",
    techStackLogos: [TECH.odoo, TECH.python, TECH.postgresql],
  },
  "odoo-steel-solution": {
    screenshots: [
      { src: "/case-study/detail/steel/screenshot-1.png", alt: "Steel eCommerce screenshot 1" },
      { src: "/case-study/detail/steel/screenshot-2.png", alt: "Steel eCommerce screenshot 2" },
      { src: "/case-study/detail/steel/screenshot-3.png", alt: "Steel eCommerce screenshot 3" },
      { src: "/case-study/detail/steel/screenshot-4.png", alt: "Steel eCommerce screenshot 4" },
      { src: "/case-study/detail/steel/screenshot-5.png", alt: "Steel eCommerce screenshot 5" },
    ],
    solutionRows: [
      {
        imageSrc: "/case-study/detail/steel/solution-1.webp",
        imageAlt: "Steel website customization and dynamic pricing",
        imagePosition: "left",
        solutions: [
          {
            title: "Website Customization & Dynamic Pricing",
            intro:
              "We customized the website to recognize standard and custom products instantly. For custom-built items, a pricing engine was implemented that dynamically calculates price based on user-defined dimensions (length) and steel rate.",
            bullets: [
              "Custom Pricing Engine: Developed real-time calculations using steel rates, product weight, and size inputs.",
              "Category-Level Pricing Logic: Enabled category-wise control over pricing rules for easier management.",
              "Min/Max Length Enforcement: Prevented invalid product orders through enforced length validation directly on the website.",
              "Product Master Enhancements: Extended product fields to include weight and pricing logic parameters.",
            ],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/steel/solution-2.webp",
        imageAlt: "Bulk order automation via Excel upload",
        imagePosition: "right",
        solutions: [
          {
            title: "Bulk Order Automation via Excel Upload",
            intro:
              "To streamline order intake, we developed an Excel import feature that automatically reads and processes custom and standard product orders.",
            bullets: [
              "Sales & Purchase Order Generation: Automatically generated SOs and POs from uploaded Excel data.",
              "Missing Product Alerts: System flags any missing items not found in the master, ensuring data accuracy.",
              "Rapid Entry Processing: Significantly reduced time spent on bulk order creation.",
            ],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/steel/solution-3.webp",
        imageAlt: "Smart picking system with mobile app",
        imagePosition: "left",
        solutions: [
          {
            title: "Smart Picking System with Mobile App",
            intro:
              "A mobile-compatible picking solution was introduced for warehouse teams to improve accuracy and efficiency.",
            bullets: [
              "Auto Picking Assignment: Based on sales confirmation, pickings are automatically generated considering user workload and capacity.",
              "Mobile App Execution: Users can scan location and product codes, start batch picking, and record inputs on the go.",
              "Optimized Input Validation: For single items, scanning is sufficient. For multiple items, enforced quantity input for accurate validation.",
            ],
          },
        ],
      },
    ],
    approachIntro:
      "We implemented a smart, end-to-end Odoo ERP solution that simplified complex product pricing, automated bulk ordering, and enhanced warehouse operations through mobile-driven tools.",
    techStackLogos: [TECH.odoo, TECH.python, TECH.postgresql],
  },
  "odoo-integration-ecommerce-retailer": {
    solutionRows: [
      {
        imageSrc: "/case-study/detail/ecommerce-usa/solution-1.webp",
        imageAlt: "Listing Mirror integration with Odoo",
        imagePosition: "left",
        solutions: [
          {
            title: "Listing Mirror Integration with Odoo",
            intro: "Developed a robust integration to fetch orders directly from Listing Mirror into Odoo. This allowed seamless synchronization of Omnichannel, Amazon FBA, and Merchant-Fulfilled orders into a unified ERP dashboard.",
            bullets: [],
          },
          {
            title: "Real-Time Inventory Sync",
            intro: "Enabled dynamic inventory tracking to reflect real-time stock availability across all sales channels. This helped prevent overselling and ensured accurate warehouse management.",
            bullets: [],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/ecommerce-usa/solution-2.webp",
        imageAlt: "Bulk Excel order import and fulfillment dashboard",
        imagePosition: "right",
        solutions: [
          {
            title: "Bulk Excel Order Import",
            intro: "Implemented a custom tool within Odoo to upload and process bulk manual orders from Excel sheets, reducing data entry time and eliminating manual errors.",
            bullets: [],
          },
          {
            title: "Centralized Fulfillment Dashboard",
            intro: "Created a unified view of all incoming orders, their fulfillment status, and related inventory/purchase actions for better decision-making and workflow monitoring.",
            bullets: [],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/ecommerce-usa/solution-3.webp",
        imageAlt: "Automated sales-to-purchase workflow and customer portal",
        imagePosition: "left",
        solutions: [
          {
            title: "Automated Sales-to-Purchase Workflow",
            intro: "Configured Odoo to automatically generate purchase orders based on sales activity. This ensured that restocking was proactive and aligned with fulfillment demand.",
            bullets: [],
          },
          {
            title: "Customer Portal & Self-Service Automation",
            intro: "We developed a powerful Customer Portal that enables customers to track orders, download invoices, submit support tickets, and manage returns – all fully integrated with Odoo. This solution improves customer experience while reducing manual support efforts.",
            bullets: [],
          },
        ],
      },
    ],
    approachIntro:
      "We adopted a systematic approach to streamline this eCommerce retailer’s multi-channel operations using Odoo—focusing on integration, automation, and centralized visibility.",
    techStackLogos: [TECH.odoo, TECH.python, TECH.postgresql, TECH.git],
  },
  "odoo-erp-implementation": {
    screenshots: [
      { src: "/case-study/detail/magento/screenshot-1.png", alt: "Magento Odoo integration screenshot 1" },
      { src: "/case-study/detail/magento/screenshot-2.png", alt: "Magento Odoo integration screenshot 2" },
      { src: "/case-study/detail/magento/screenshot-3.png", alt: "Magento Odoo integration screenshot 3" },
      { src: "/case-study/detail/magento/screenshot-4.png", alt: "Magento Odoo integration screenshot 4" },
    ],
    solutionsIntro:
      "To meet these challenges, Wan Buffer Services deployed a customized, scalable Odoo ERP environment with the following core enhancements:",
    solutionRows: [
      {
        imageSrc: "/case-study/detail/magento/solution-1.webp",
        imageAlt: "Magento-Odoo and logistics integration",
        imagePosition: "left",
        solutions: [
          {
            title: "Magento-Odoo Integration",
            intro: "We integrated Odoo with the existing Magento eCommerce store to automate the synchronization of products, inventory levels, and customer orders. This ensured real-time data flow between the two platforms and eliminated manual entries.",
            bullets: [],
          },
          {
            title: "Multi-Carrier Logistics Integration",
            intro: "We configured Odoo to work seamlessly with Freightcom, Lumis, and UPS. The logistics setup supports rate fetching, shipping label generation, tracking updates, and streamlined dispatching – ensuring faster and more transparent deliveries.",
            bullets: [],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/magento/solution-2.webp",
        imageAlt: "Moneris payment gateway and vendor portal",
        imagePosition: "right",
        solutions: [
          {
            title: "Moneris Payment Gateway Integration",
            intro: "For secure payment processing, we integrated the Moneris gateway into the Odoo platform. This enabled to manage online payments directly through their ERP, with transaction records linked to invoices and orders.",
            bullets: [],
          },
          {
            title: "Custom Vendor Portal",
            intro: "To improve collaboration, we developed a dedicated Vendor Portal. Suppliers can log in to manage purchase orders, update shipping details, and communicate directly with that team – reducing email overhead and improving purchase timelines.",
            bullets: [],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/magento/solution-3.webp",
        imageAlt: "RMA workflow and business intelligence",
        imagePosition: "left",
        solutions: [
          {
            title: "RMA (Return Merchandise Authorization) Workflow",
            intro: "We designed a robust RMA system within Odoo, enabling the customer service team to handle product returns efficiently. The workflow supports return reason tracking, product validation, status updates, and inventory adjustments post-return.",
            bullets: [],
          },
          {
            title: "Centralized Business Intelligence",
            intro: "All modules were connected within Odoo to provide comprehensive reporting on inventory, orders, vendors, payments, and returns – giving actionable insights for strategic planning.",
            bullets: [],
          },
        ],
      },
    ],
    approachIntro:
      "We implemented a unified ERP solution for client by aligning their multi-channel operations into one intelligent, scalable Odoo system—bridging gaps between sales, logistics, vendors, and returns.",
    techStackLogos: [TECH.odoo, TECH.magento, TECH.python, TECH.postgresql],
  },
  "ui-product-management-enhancements": {
    screenshots: [
      { src: "/case-study/detail/uk-ecommerce/screenshot-1.png", alt: "UK eCommerce UI screenshot 1" },
      { src: "/case-study/detail/uk-ecommerce/screenshot-2.png", alt: "UK eCommerce UI screenshot 2" },
    ],
    solutionsIntro:
      "To help overcome their eCommerce challenges, Wan Buffer Services implemented a multi-faceted solution that addressed both frontend usability and backend product management. Here's how we approached it:",
    solutionRows: [
      {
        imageSrc: "/case-study/detail/uk-ecommerce/solution-1.webp",
        imageAlt: "Modern UI/UX redesign for Odoo eCommerce",
        imagePosition: "left",
        solutions: [
          {
            title: "Modern UI/UX Redesign",
            intro: "We revamped the entire frontend interface to ensure a clean, intuitive, and responsive shopping experience. The new layout improved navigation, reduced visual clutter, and guided users smoothly from product discovery to checkout—on both desktop and mobile devices.",
            bullets: [],
          },
          {
            title: "Advanced Product Filtering System",
            intro: "To support highly technical product range, we introduced dynamic filters that allow customers to refine searches by key specifications such as voltage, wattage, bulb type, color temperature, and compatibility. This made product discovery faster and more accurate.",
            bullets: [],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/uk-ecommerce/solution-2.webp",
        imageAlt: "Product categorization and variants",
        imagePosition: "right",
        solutions: [
          {
            title: "Multi-Level Product Categorization",
            intro: "We configured Odoo to support hierarchical category structures, enabling to classify products across multiple dimensions like brand, use-case, fixture type, and technical category. This improved catalog organization and product findability.",
            bullets: [],
          },
          {
            title: "Custom Attributes & Variant Management",
            intro: "Each product was configured with detailed custom fields and variant combinations to reflect different SKUs, such as size, power, finish, or pack quantity. This allowed Company to manage complex product listings with greater flexibility and control.",
            bullets: [],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/uk-ecommerce/solution-3.webp",
        imageAlt: "Real-time inventory management",
        imagePosition: "left",
        solutions: [
          {
            title: "Real-Time Inventory Management",
            intro: "We implemented inventory workflows that automatically reflect stock changes in real time. This included stock level tracking, reordering rules, and warehouse synchronization—ensuring accurate availability and minimizing customer dissatisfaction from stock errors.",
            bullets: [],
          },
          {
            title: "Scalable Backend Infrastructure",
            intro: "Our configurations were built with scalability in mind, ensuring Company can expand its catalog and operations without disruption. The backend setup allows for easy onboarding of new products, attributes, and suppliers as the business grows.",
            bullets: [],
          },
        ],
      },
    ],
    approachIntro:
      "We adopted a comprehensive strategy to enhance the eCommerce experience by focusing on both an intuitive, user-friendly design and robust backend capabilities to ensure operational efficiency and scalability.",
    techStackLogos: [TECH.odoo, TECH.python, TECH.postgresql, TECH.git, TECH.docker],
  },
  "e-commerce-baby-mother-care": {
    screenshots: [
      { src: "/case-study/detail/omahat/screenshot-1.webp", alt: "Omahat eCommerce screenshot 1" },
      { src: "/case-study/detail/omahat/screenshot-2.webp", alt: "Omahat eCommerce screenshot 2" },
      { src: "/case-study/detail/omahat/screenshot-3.webp", alt: "Omahat eCommerce screenshot 3" },
      { src: "/case-study/detail/omahat/screenshot-4.webp", alt: "Omahat eCommerce screenshot 4" },
    ],
    solutionsIntro:
      "We developed tailored e-commerce solutions that aligned with Omahat's goals, focusing on user-centric design, seamless functionality, and enhanced digital experiences for parents.",
    solutionRows: [
      {
        imageSrc: "/case-study/detail/omahat/solution-1.webp",
        imageAlt: "Unified product catalog with API integration",
        imagePosition: "left",
        solutions: [
          {
            title: "Unified Product Catalog with API Integration",
            intro: "We integrated third-party APIs to consolidate product data from various brands, ensuring a consistent and up-to-date catalog. This streamlined product discovery and improved the shopping experience for customers.",
            bullets: [],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/omahat/solution-2.webp",
        imageAlt: "Enhanced mobile experience with PWA",
        imagePosition: "right",
        solutions: [
          {
            title: "Enhanced Mobile Experience with PWA",
            intro: "We implemented a mobile-first design and Progressive Web App (PWA) components to improve the mobile shopping experience, reducing bounce rates and increasing conversions on mobile devices.",
            bullets: [],
          },
        ],
      },
      {
        imageSrc: "/case-study/detail/omahat/solution-3.webp",
        imageAlt: "Streamlined checkout with secure payments",
        imagePosition: "left",
        solutions: [
          {
            title: "Streamlined Checkout with Secure Payments",
            intro: "We simplified the checkout process by implementing a one-page checkout and integrated secure payment gateways, reducing cart abandonment and enhancing transaction security.",
            bullets: [],
          },
        ],
      },
    ],
    approachIntro:
      "We adopted a strategic approach to enhance Omahat's e-commerce platform, focusing on user experience, functionality, and digital growth.",
    techStackLogos: [
      TECH.wordpress,
      TECH.javascript,
      TECH.php,
      TECH.html,
      TECH.css,
      TECH.mysql,
    ],
  },
};
