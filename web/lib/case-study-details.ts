import type { CaseStudyDetailFields } from "@/lib/case-study-data";

export const CASE_STUDY_DETAILS: Record<string, CaseStudyDetailFields> = {
  "odoo-erp-implementation-in-the-textile-industry": {
    aboutParagraphs: [
      "A textile manufacturing company producing cotton, linen, and polyester fabrics was facing serious inefficiencies in managing its growing warehouses and product lines. Operations were largely manual, with Excel sheets used for stock tracking. Employees spent hours searching for the right fabric rolls, managers lacked real-time visibility, and quality control was paper-based.",
      "To overcome these challenges, the company partnered with Wan Buffer Services to implement a fully customized Odoo ERP system designed for the textile sector — delivering automation, accuracy, and real-time control across all operations.",
    ],
    businessType: "Textile Industry",
    location: "Manufacturing",
    goalParagraph:
      "The goal was to digitize and streamline fabric inventory, enhance production visibility, and implement end-to-end automation — from roll tracking to quality control — while improving team collaboration and decision-making.",
    highlights: [
      "Complete roll-level tracking and traceability",
      "Barcode & IoT automation for real-time updates",
      "AI-based reorder and predictive stock analytics",
      "Digital QC process with full traceability",
      "Centralized, real-time dashboard visibility",
      "Role-based user controls and audit trail",
      "Smart filters by color, GSM, fabric type, and lot",
    ],
    challenges: [
      { title: "Dynamic Custom Pricing", description: "Handling real-time price calculation based on varying product lengths and steel rates." },
      { title: "Manual Bulk Order Entries", description: "Significant time and errors involved in entering orders from Excel files." },
      { title: "Invalid Custom Entries", description: "Need for automated enforcement of minimum and maximum product limits." },
      { title: "Inefficient Warehouse Picking", description: "Lack of a structured, mobile-enabled system for managing pick lists." },
    ],
    solutions: [
      {
        title: "Fabric Roll & Batch Management",
        bullets: [
          'Added a "Fabric Details" tab in Odoo with roll number, GSM, color, QC status, and production date.',
          "Enabled full traceability from weaving to dispatch.",
        ],
      },
      {
        title: "Smart Stock Segmentation",
        bullets: ['Built filters by Fabric Type, GSM, Color, and Dye Lot, allowing instant stock lookups like "Blue 200 GSM Cotton."'],
      },
      {
        title: "Real-Time IoT & Barcode Automation",
        bullets: [
          "Integrated barcode scanners and IoT devices for automatic movement updates across departments.",
          "Achieved real-time roll location tracking without manual input.",
        ],
      },
      {
        title: "Fabric Quality Control",
        bullets: [
          'Created a digital "Quality Test" screen linked to each roll.',
          "Failed rolls move automatically to quarantine stock; approved rolls go to dispatch.",
        ],
      },
      {
        title: "AI-Powered Reordering",
        bullets: ["Implemented automatic reorder suggestions based on past consumption, sales forecast, and machine capacity."],
      },
    ],
    approach: [
      { title: "Revamp", description: "Digitized roll-level inventory tracking, eliminating manual Excel workflows and centralizing operations under one Odoo system.", icon: "revamp" },
      { title: "Integration", description: "Connected IoT devices, barcode scanners, and AI dashboards to enable real-time visibility from production to warehouse to dispatch.", icon: "integration" },
      { title: "Updates", description: "Implemented automated pricing, reorder, and quality workflows — reducing errors, improving speed, and ensuring full product traceability.", icon: "updates" },
      { title: "Optimization", description: "Introduced predictive dashboards and role-based access controls for smarter decision-making and transparent cross-department collaboration.", icon: "optimization" },
    ],
    results: [
      { value: "100% Roll Traceability", label: "ensuring complete stock accuracy" },
      { value: "70% Reduction", label: "in human errors during operations" },
      { value: "25% Decrease", label: "in dead stock and material wastage" },
      { value: "Fulfillment Speed Boost", label: "picking time reduced from hours to seconds" },
      { value: "100% Digital QC Records", label: "with fully traceable test data" },
      { value: "Unified Collaboration", label: "QC, Production & Stores working seamlessly under one system" },
    ],
    testimonial: {
      company: "Textile Manufacturing Company",
      role: "Operations Head",
      quote:
        "Roll-level tracking changed our day-to-day. We can locate exact fabrics in seconds, trace quality results, and replenish stock on time. The stress is gone — and our customers notice the difference.",
    },
    techStack: ["Odoo", "Python", "PostgreSQL", "IoT", "Barcode"],
  },
  "odoo-steel-solution": {
    aboutParagraphs: [
      "The client required a robust Odoo-based solution to manage a complex range of standard and customized steel products. This involved streamlining website ordering, implementing dynamic pricing based on real-time dimensions, and improving backend operations through automation tools and mobile integration.",
      "The project scope included both frontend (eCommerce enhancements) and backend (Odoo ERP workflows) development.",
    ],
    businessType: "Steel Manufacturing",
    location: "Canada",
    goalParagraph:
      "The main objective was to offer a seamless ordering experience for both standard and custom products via the website, while reducing manual workload in pricing, order entry, and inventory operations. The client also aimed to automate Excel-based bulk order processing and enable warehouse teams to handle picking through a mobile-friendly app.",
    highlights: [
      "Dynamic pricing based on user-defined dimensions and steel rates",
      "Category-level pricing rule engine for flexible control",
      "Min/Max limit checks on website to prevent invalid orders",
      "Excel-based bulk order automation with SO/PO generation",
      "Alerts for missing product entries during import",
      "Mobile app-based smart picking with batch scanning",
      "Role-based workload distribution and input validation during picking",
    ],
    challenges: [
      { title: "Dynamic Custom Pricing", description: "Handling real-time price calculation based on varying product lengths and steel rates." },
      { title: "Manual Bulk Order Entries", description: "Significant time and errors involved in entering orders from Excel files." },
      { title: "Invalid Custom Entries", description: "Need for automated enforcement of minimum and maximum product limits." },
      { title: "Inefficient Warehouse Picking", description: "Lack of a structured, mobile-enabled system for managing pick lists." },
    ],
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
      {
        title: "Smart Picking System with Mobile App",
        intro:
          "A mobile-compatible picking solution was introduced for warehouse teams to improve accuracy and efficiency.",
        bullets: [
          "Optimized Input Validation: For single items, scanning is sufficient. For multiple items, enforced quantity input for accurate validation.",
        ],
      },
    ],
    approach: [
      { title: "Revamp", description: "Transformed the website into a dynamic ordering interface capable of handling standard and custom steel products, with built-in validation and pricing logic.", icon: "revamp" },
      { title: "Integration", description: "Enabled seamless bulk order entry via Excel uploads, mobile picking integration for warehouse staff, and dynamic pricing algorithms within Odoo.", icon: "integration" },
      { title: "Updates", description: "Automated custom pricing calculations, sales/purchase order creation from bulk files, and real-time picking assignments based on user workload.", icon: "updates" },
      { title: "Optimization", description: "Deployed a mobile-enabled smart picking system with scanning, batch handling, and validation workflows—streamlining warehouse execution and boosting operational speed.", icon: "optimization" },
    ],
    results: [
      { value: "100% Automation", label: "of custom pricing logic" },
      { value: "70% Reduction", label: "in manual order entry time" },
      { value: "80% Increase", label: "in warehouse picking speed" },
      { value: "Improved customer", label: "satisfaction through accurate pricing & delivery" },
      { value: "Scalable backend", label: "structure for future growth and product expansion" },
    ],
    testimonial: {
      company: "Steel Manufacturing Company",
      role: "Project Head",
      quote:
        "The custom pricing logic, automation tools, and mobile app integration drastically improved our operational workflow. Wan Buffer Services delivered a seamless solution that works exactly how we envisioned – from web customization to warehouse execution.",
    },
    techStack: ["Odoo", "Python", "PostgreSQL"],
  },
  "odoo-integration-ecommerce-retailer": {
    aboutParagraphs: [
      "A dynamic eCommerce retailer based in the USA, managing sales across multiple channels. With increasing sales volume from marketplaces like Amazon, Walmart, and eBay (via Listing Mirror), they required a unified system to handle complex fulfillment workflows. Wan Buffer Services was engaged to implement an integrated Odoo solution that could centralize order processing, automate inventory tracking, and improve operational agility.",
    ],
    businessType: "E-Commerce Retailer",
    location: "United States",
    goalParagraph:
      "The primary goal was to build a centralized hub within Odoo to consolidate orders from Listing Mirror—including Omnichannel, Merchant-Fulfilled, and Fulfilled by Amazon (FBA) orders. The business also needed to automate backend operations such as bulk order entry, stock updates, and purchase workflows to reduce manual overhead and minimize fulfillment delays.",
    highlights: [
      "Integrated Listing Mirror orders (Omnichannel, FBA, and MFN) with Odoo",
      "Enabled Excel-based bulk order uploads into the Odoo system",
      "Automated purchasing from sales activity",
      "Real-time inventory updates and syncing",
      "Centralized dashboard for fulfillment management",
    ],
    challenges: [
      { title: "Scattered Order Sources", description: "Managing different order types across multiple marketplaces with no centralized visibility." },
      { title: "Manual Order Imports", description: "Excel-based manual order entries were time-consuming and error-prone." },
      { title: "Inventory Inconsistencies", description: "Lack of real-time inventory updates resulted in overselling and stock mismatches." },
      { title: "Disjointed Sales-to-Purchase Workflow", description: "The absence of automation between sales and purchasing led to fulfillment lags." },
    ],
    solutions: [
      {
        title: "Listing Mirror Integration with Odoo",
        bullets: ["Developed a robust integration to fetch orders directly from Listing Mirror into Odoo. This allowed seamless synchronization of Omnichannel, Amazon FBA, and Merchant-Fulfilled orders into a unified ERP dashboard."],
      },
      {
        title: "Real-Time Inventory Sync",
        bullets: ["Enabled dynamic inventory tracking to reflect real-time stock availability across all sales channels. This helped prevent overselling and ensured accurate warehouse management."],
      },
      {
        title: "Bulk Excel Order Import",
        bullets: ["Implemented a custom tool within Odoo to upload and process bulk manual orders from Excel sheets, reducing data entry time and eliminating manual errors."],
      },
      {
        title: "Centralized Fulfillment Dashboard",
        bullets: ["Created a unified view of all incoming orders, their fulfillment status, and related inventory/purchase actions for better decision-making and workflow monitoring."],
      },
      {
        title: "Automated Sales-to-Purchase Workflow",
        bullets: ["Configured Odoo to automatically generate purchase orders based on sales activity. This ensured that restocking was proactive and aligned with fulfillment demand."],
      },
      {
        title: "Customer Portal & Self-Service Automation",
        bullets: ["We developed a powerful Customer Portal that enables customers to track orders, download invoices, submit support tickets, and manage returns – all fully integrated with Odoo. This solution improves customer experience while reducing manual support efforts."],
      },
    ],
    approach: [
      { title: "Revamp", description: "Eliminated manual order entry and fragmented workflows by introducing a centralized ERP dashboard tailored to manage omnichannel fulfillment.", icon: "revamp" },
      { title: "Integration", description: "Connected Listing Mirror with Odoo to automatically fetch and process Amazon FBA, Merchant-Fulfilled, and other marketplace orders, along with Excel-based bulk imports.", icon: "integration" },
      { title: "Updates", description: "Enabled real-time inventory syncing and automated sales-to-purchase conversions to ensure accurate stock levels and proactive restocking.", icon: "updates" },
      { title: "Optimization", description: "Developed a unified fulfillment dashboard for complete visibility, faster decision-making, and streamlined backend operations across all channels.", icon: "optimization" },
    ],
    results: [
      { value: "90%", label: "Reduction in manual order processing time" },
      { value: "Zero overselling", label: "Incidents post-implementation" },
      { value: "100%", label: "Visibility into fulfillment operations" },
      { value: "Streamlined", label: "Multi-channel inventory tracking" },
      { value: "Enhanced productivity", label: "Through workflow automation" },
    ],
    testimonial: {
      company: "USA-based eCommerce Retailer",
      role: "Head of Operations",
      quote:
        "Working with Wan Buffer Services gave us a new level of control over our operations. The Listing Mirror integration with Odoo has been a game-changer, and the bulk upload tool saved us countless hours every week. This was the digital transformation we were looking for.",
    },
    techStack: ["Odoo", "Python", "PostgreSQL"],
  },
  "odoo-erp-implementation": {
    aboutParagraphs: [
      "A well-established supplier serving the textile and hospitality sectors across North America. As their operations scaled, they sought a unified ERP platform to streamline business processes, improve order accuracy, and strengthen third-party integrations. Wan Buffer Services was engaged to implement a full-scale Odoo ERP solution that would integrate seamlessly with their Magento store, logistics providers, and payment gateways – while also enabling better vendor and return management.",
    ],
    businessType: "Logistics",
    location: "United States",
    goalParagraph:
      "A company aimed to centralize its core operations—sales, inventory, procurement, logistics, and vendor communications—under one intelligent system. The company needed a reliable ERP that could automate order flows from Magento, synchronize real-time inventory, streamline multi-carrier shipping, and enhance financial operations through secure payment processing. An additional goal was to provide vendors with better collaboration tools and implement an efficient RMA (Return Merchandise Authorization) process to boost customer satisfaction and reduce return processing time.",
    highlights: [
      "Seamless Magento-Odoo synchronization for products and orders",
      "Real-time logistics integrations with Freightcom, Lumis, and UPS",
      "Moneris payment gateway for secure ERP-based transactions",
      "Custom-built Vendor Portal for supplier collaboration",
      "Streamlined RMA (Return Merchandise Authorization) within Odoo",
      "Improved visibility across sales, purchases, logistics, and returns",
    ],
    challenges: [
      { title: "Disconnected Systems", description: "Disjointed platforms for eCommerce, logistics, and payments caused data silos and operational delays." },
      { title: "Complex Shipping Workflows", description: "Multiple carriers and shipping methods required dynamic integrations and real-time tracking." },
      { title: "Vendor Communication Gaps", description: "Manual processes made it difficult to manage supplier relationships, purchase orders, and shipments." },
      { title: "Inefficient Returns Handling", description: "Lack of a structured RMA workflow led to delays and inconsistent return experiences." },
    ],
    solutions: [
      {
        title: "Magento-Odoo Integration",
        bullets: ["We integrated Odoo with the existing Magento eCommerce store to automate the synchronization of products, inventory levels, and customer orders. This ensured real-time data flow between the two platforms and eliminated manual entries."],
      },
      {
        title: "Multi-Carrier Logistics Integration",
        bullets: ["We configured Odoo to work seamlessly with Freightcom, Lumis, and UPS. The logistics setup supports rate fetching, shipping label generation, tracking updates, and streamlined dispatching – ensuring faster and more transparent deliveries."],
      },
      {
        title: "Moneris Payment Gateway Integration",
        bullets: ["For secure payment processing, we integrated the Moneris gateway into the Odoo platform. This enabled to manage online payments directly through their ERP, with transaction records linked to invoices and orders."],
      },
      {
        title: "Custom Vendor Portal",
        bullets: ["To improve collaboration, we developed a dedicated Vendor Portal. Suppliers can log in to manage purchase orders, update shipping details, and communicate directly with that team – reducing email overhead and improving purchase timelines."],
      },
      {
        title: "RMA (Return Merchandise Authorization) Workflow",
        bullets: ["We designed a robust RMA system within Odoo, enabling the customer service team to handle product returns efficiently. The workflow supports return reason tracking, product validation, status updates, and inventory adjustments post-return."],
      },
      {
        title: "Centralized Business Intelligence",
        bullets: ["All modules were connected within Odoo to provide comprehensive reporting on inventory, orders, vendors, payments, and returns – giving actionable insights for strategic planning."],
      },
    ],
    approach: [
      { title: "Revamp", description: "Centralized disconnected systems—Magento, logistics platforms, and payment gateways—into a unified Odoo ERP, eliminating data silos and manual interventions.", icon: "revamp" },
      { title: "Integration", description: "Integrated third-party systems including Magento, Freightcom, Lumis, UPS, and Moneris to ensure seamless order processing, real-time shipping updates, and secure payment flows.", icon: "integration" },
      { title: "Updates", description: "Automated workflows for logistics, vendor management, and RMA processing—improving operational speed, accuracy, and customer satisfaction.", icon: "updates" },
      { title: "Optimization", description: "Developed a custom Vendor Portal and centralized reporting tools to enhance supplier collaboration and provide real-time business intelligence for smarter decision-making.", icon: "optimization" },
    ],
    results: [
      { value: "100% real-time", label: "Synchronization between Magento and Odoo" },
      { value: "30% faster order", label: "Fulfillment through automated logistics" },
      { value: "Improved vendor", label: "Coordination via a dedicated portal" },
      { value: "Streamlined RMA", label: "Process, cutting return handling time by 40%" },
      { value: "Centralized dashboard", label: "Enabled better decision-making and inventory accuracy" },
    ],
    testimonial: {
      company: "Logistics Business",
      role: "Director of Operations",
      quote:
        "Wan Buffer Services helped us transform the way we operate. The seamless integration between Magento, logistics, payments, and vendor processes has not only improved our efficiency but also enabled better service for our customers. Their team truly understands the real-world needs of businesses like ours.",
    },
    techStack: ["Odoo", "Magento", "Python", "PostgreSQL"],
  },
  "ui-product-management-enhancements": {
    aboutParagraphs: [
      "UK-based eCommerce retailer specializing in premium electronic lighting products. To support their expanding customer base and product catalog, Enhance their Odoo-based online platform. The core focus was on delivering a seamless user experience, improving product discoverability, and strengthening backend product and inventory management capabilities.",
    ],
    businessType: "E-Commerce",
    location: "United Kingdom",
    goalParagraph:
      "The company aimed to elevate their customer experience and strengthen backend efficiency to support rapid growth in their online lighting business. With an ever-expanding product catalog featuring technical specifications and variant combinations, they needed a more intuitive and visually appealing storefront. Additionally, the backend required robust enhancements to manage multi-level product categorization, inventory accuracy, and real-time updates. The overall objective was to create a scalable digital foundation that could support business growth, improve product discoverability, and reduce operational complexity.",
    highlights: [
      "Enhanced website UI for better navigation and shopping experience",
      "Advanced product filters based on technical attributes",
      "Multi-level product category structure in Odoo",
      "Support for product variants with custom attributes",
      "Real-time inventory updates reflecting actual stock",
      "Backend configuration for scalable product management",
    ],
    challenges: [
      { title: "Limited Product Filtering", description: "Customers found it difficult to refine their searches based on technical product features such as voltage, wattage, or fitting types." },
      { title: "Unstructured Product Listings", description: "The existing system lacked support for multi-level categories and structured attributes, making catalog management inefficient." },
      { title: "Outdated User Interface", description: "The storefront design was not optimized for modern shopping behaviors, resulting in lower engagement and higher bounce rates." },
      { title: "Inventory Inaccuracy", description: "Without real-time stock visibility, the risk of overselling or delays in order fulfillment increased." },
    ],
    solutions: [
      {
        title: "Modern UI/UX Redesign",
        bullets: ["We revamped the entire frontend interface to ensure a clean, intuitive, and responsive shopping experience. The new layout improved navigation, reduced visual clutter, and guided users smoothly from product discovery to checkout—on both desktop and mobile devices."],
      },
      {
        title: "Advanced Product Filtering System",
        bullets: ["To support highly technical product range, we introduced dynamic filters that allow customers to refine searches by key specifications such as voltage, wattage, bulb type, color temperature, and compatibility. This made product discovery faster and more accurate."],
      },
      {
        title: "Multi-Level Product Categorization",
        bullets: ["We configured Odoo to support hierarchical category structures, enabling to classify products across multiple dimensions like brand, use-case, fixture type, and technical category. This improved catalog organization and product findability."],
      },
      {
        title: "Custom Attributes & Variant Management",
        bullets: ["Each product was configured with detailed custom fields and variant combinations to reflect different SKUs, such as size, power, finish, or pack quantity. This allowed Company to manage complex product listings with greater flexibility and control."],
      },
      {
        title: "Real-Time Inventory Management",
        bullets: ["We implemented inventory workflows that automatically reflect stock changes in real time. This included stock level tracking, reordering rules, and warehouse synchronization—ensuring accurate availability and minimizing customer dissatisfaction from stock errors."],
      },
      {
        title: "Scalable Backend Infrastructure",
        bullets: ["Our configurations were built with scalability in mind, ensuring Company can expand its catalog and operations without disruption. The backend setup allows for easy onboarding of new products, attributes, and suppliers as the business grows."],
      },
    ],
    approach: [
      { title: "Revamp", description: "Redesigned the frontend with a clean, responsive, and user-centric interface for seamless navigation and a modern shopping experience.", icon: "revamp" },
      { title: "Integration", description: "Integrated advanced product filtering, variant configurations, and multi-level categorization within Odoo to manage complex lighting SKUs effectively.", icon: "integration" },
      { title: "Updates", description: "Implemented real-time inventory workflows for accurate stock levels, automated reordering, and synchronized warehouse operations.", icon: "updates" },
      { title: "Optimization", description: "Deployed scalable backend architecture to support product expansion, technical attribute handling, and efficient catalog management.", icon: "optimization" },
    ],
    results: [
      { value: "35% improvement", label: "in customer product search accuracy." },
      { value: "Enhanced UI", label: "led to increased user engagement and time spent on-site." },
      { value: "Streamlined catalog management", label: "with scalable product attribute handling." },
      { value: "Real-time stock visibility", label: "reduced order errors and stock mismatches." },
    ],
    testimonial: {
      company: "UK-based Retail Company",
      role: "Operations Manager",
      quote:
        "The improvements brought by Wan Buffer Services truly transformed our online store. From better product navigation to smarter inventory control, we now offer a smoother experience to our customers while gaining greater control on the backend. Their team's understanding of both business and technology made all the difference.",
    },
    techStack: ["Odoo", "Python", "PostgreSQL"],
  },
  "e-commerce-baby-mother-care": {
    aboutParagraphs: [
      "Omahat is a leading e-commerce platform specializing in baby and mother care products, serving parents across Kuwait and beyond. The platform brings together a wide range of international and local brands, offering everything from baby clothes and accessories to maternity essentials. Omahat aimed to enhance its online shopping experience by revamping the website and mobile app for seamless navigation, product discovery, and secure transactions.",
    ],
    businessType: "E-Commerce",
    location: "Kuwait",
    goalParagraph:
      "Omahat sought to become the go-to e-commerce platform for baby and mother care products in the Middle East. Our team revamped the platform's design, integrated advanced e-commerce features like product filters and secure payment gateways, and ensured real-time inventory updates. Our digital marketing strategies increased their online visibility, driving user engagement and sales growth.",
    highlights: [
      "Leading Baby & Mother Care Platform",
      "Comprehensive E-Commerce Solutions",
      "WordPress E-Commerce Customization",
      "Intuitive UI/UX Design",
    ],
    challenges: [
      {
        title: "Fragmented Product Data",
        description: "Disparate data from multiple brands and categories led to inconsistent product listings and difficulty in maintaining a unified catalog.",
      },
      {
        title: "Poor Mobile Experience",
        description: "The existing mobile interface was not user-friendly, resulting in high bounce rates and low mobile conversion rates.",
      },
      {
        title: "Limited Real-Time Inventory",
        description: "Lack of real-time inventory updates caused overselling and stock discrepancies, frustrating customers.",
      },
      {
        title: "Complex Checkout Process",
        description: "A cumbersome checkout process led to cart abandonment, impacting overall sales performance.",
      },
    ],
    solutions: [
      {
        title: "Unified Product Catalog with API Integration",
        bullets: [
          "We integrated third-party APIs to consolidate product data from various brands, ensuring a consistent and up-to-date catalog. This streamlined product discovery and improved the shopping experience for customers.",
        ],
      },
      {
        title: "Enhanced Mobile Experience with PWA",
        bullets: [
          "We implemented a mobile-first design and Progressive Web App (PWA) components to improve the mobile shopping experience, reducing bounce rates and increasing conversions on mobile devices.",
        ],
      },
      {
        title: "Streamlined Checkout with Secure Payments",
        bullets: [
          "We simplified the checkout process by implementing a one-page checkout and integrated secure payment gateways, reducing cart abandonment and enhancing transaction security.",
        ],
      },
    ],
    approach: [
      { title: "Revamp", description: "Redesigned the platform for intuitive navigation and a visually appealing interface tailored for parents.", icon: "revamp" },
      { title: "Integration", description: "Seamlessly integrated e-commerce features like product filters, wishlists, and secure payments.", icon: "integration" },
      { title: "Updates", description: "Implemented real-time inventory and pricing updates for accurate product availability.", icon: "updates" },
      { title: "Marketing", description: "Deployed SEO and social media strategies to boost online visibility and user acquisition.", icon: "optimization" },
    ],
    results: [
      { value: "5M to 12M Monthly Users", label: "Monthly users surged due to improved responsiveness and a seamless shopping experience." },
      { value: "50% Faster Checkout", label: "Checkout time was reduced by 50% through streamlined processes and secure payment integration." },
      { value: "Bounce Rate Drops 45%", label: "Enhanced UI/UX and mobile optimization reduced bounce rates significantly." },
      { value: "35% Sales Increase", label: "Sales grew by 35% due to improved user engagement and targeted digital marketing." },
    ],
    testimonial: {
      company: "Omahat",
      role: "Co-Founder, Omahat, Kuwait",
      quote:
        "Working with Wanbuffer has been an incredible pleasure for the last six years. Our website and mobile application have been completely revamped thanks to their outstanding technical know-how and creative solutions, substantially increasing our online presence. The Wanbuffer team constantly meets our expectations and produces excellent outcomes that are in line with our business objectives. They have proven to be an excellent partner in our digital journey thanks to their expertise, dedication, and proactive approach. I heartily urge anyone looking for a dependable and exceptional technical partner to check out Wanbuffer.",
    },
    techStack: ["WordPress", "JavaScript", "PHP", "HTML", "CSS", "MySQL"],
  },
};
