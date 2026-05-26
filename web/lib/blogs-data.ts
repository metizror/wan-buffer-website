export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogDetail {
  sections: BlogSection[];
  faqs?: BlogFaq[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  sortDate: string;
  author: string;
  authorRole?: string;
  readTime: string;
  imageSrc: string;
  category: string;
  externalUrl: string;
  detail?: BlogDetail;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.filter((p) => p.detail).map((p) => p.slug);
}

export const BLOG_CATEGORIES = [
  "All",
  "Oil & Gas",
  "Manufacturing",
  "ERP",
  "Odoo",
  "Logistics",
  "eCommerce",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "rfq-management-software-for-oil-and-gas-suppliers",
    title: "RFQ Management Software for Oil and Gas Suppliers",
    excerpt: "RFQ management is at the core of oil and gas supply operations, yet many suppliers struggle to manage it effectively. Learn how specialised software enables better workflow control and response efficiency.",
    date: "April 6, 2026",
    sortDate: "2026-04-06",
    author: "Kush Parmar",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2026/04/Blog-Jigar-sir-FINAL-03.png",
    category: "Oil & Gas",
    authorRole: "Flutter Developer",
    externalUrl: "https://wanbuffer.com/blogs/rfq-management-software-for-oil-and-gas-suppliers/",
    detail: {
      sections: [
        {
          heading: "Introduction",
          paragraphs: [
            "In the oil and gas supply business, everything begins with an RFQ.",
            "It is the first interaction, the first commitment, and often the first impression a supplier makes. But behind every RFQ lies pressure — tight deadlines, multiple vendors, and high expectations.",
            "For many suppliers, managing RFQs is not just a task. It becomes a daily struggle.",
            "This is where RFQ Management for Oil and Gas Suppliers needs more than spreadsheets and emails. It needs structure, clarity, and a system that understands the urgency of every inquiry.",
          ],
        },
        {
          heading: "The Role of RFQs in Oil and Gas Supply Operations",
          paragraphs: [
            "RFQs are at the heart of supplier operations in the oil and gas industry. Every project begins with multiple inquiries that must be analyzed, quoted, and delivered with precision.",
            "Typical RFQ workflows involve:",
          ],
          bullets: [
            "Receiving detailed technical inquiries from EPC contractors",
            "Identifying the right vendors for sourcing",
            "Comparing multiple quotations",
            "Preparing client-specific proposals",
            "Managing revisions and negotiations",
          ],
        },
        {
          heading: "Why RFQ Management Becomes a Bottleneck",
          paragraphs: [
            "As the volume of inquiries increases, managing RFQs becomes more complex.",
            "Suppliers often face:",
          ],
          bullets: [
            "Multiple RFQs running simultaneously",
            "Tight turnaround times for quotations",
            "Dependency on internal and external coordination",
            "Constant revisions and follow-ups",
          ],
        },
        {
          heading: "Limitations of Manual and Generic Systems",
          paragraphs: [
            "Many suppliers still rely on spreadsheets, emails, or generic ERP tools to manage RFQs.",
            "Common challenges include:",
          ],
          bullets: [
            "Lack of centralized RFQ tracking",
            "Difficulty in managing revisions and versions",
            "No clear visibility into RFQ status",
            "Manual vendor comparison processes",
            "Disconnected communication across teams",
          ],
        },
        {
          heading: "What Oil and Gas Suppliers Actually Need from RFQ Management Software",
          paragraphs: [
            "RFQ management software must reflect the reality of how suppliers work.",
            "Essential capabilities include:",
          ],
          bullets: [
            "Centralized RFQ tracking from inquiry to final quotation",
            "Structured workflows for vendor sourcing and comparison",
            "Real-time status visibility for each RFQ",
            "Version control for quotations and revisions",
            "Integration with sales, procurement, and inventory",
          ],
        },
        {
          heading: "Core Capabilities of an Effective RFQ Management System",
          paragraphs: [
            "A well-designed system should support the full RFQ lifecycle.",
            "Key capabilities include:",
          ],
          bullets: [
            "Automated RFQ logging and assignment",
            "Vendor quotation comparison tools",
            "Template-based quotation generation",
            "Deadline tracking and alerts",
            "Integration with ERP for inventory and pricing data",
            "Reporting and analytics for RFQ performance",
          ],
        },
        {
          heading: "How RFQ Complexity Impacts Project Execution",
          paragraphs: [
            "When RFQs are not managed properly, the impact extends beyond the quotation stage.",
            "Suppliers may experience:",
          ],
          bullets: [
            "Incorrect procurement due to miscommunication",
            "Delays in project execution",
            "Pricing errors affecting margins",
            "Missed opportunities due to slow responses",
          ],
        },
        {
          heading: "Benefits of Structured RFQ Management for Suppliers",
          paragraphs: [
            "With the right RFQ management system in place, suppliers gain control over one of their most critical processes.",
            "Key benefits include:",
          ],
          bullets: [
            "Faster and more accurate quotation responses",
            "Better coordination between sales and procurement teams",
            "Clear visibility into all active RFQs",
            "Improved vendor selection and pricing decisions",
            "Reduced errors and missed opportunities",
          ],
        },
        {
          heading: "How Wan Buffer Helps Optimize RFQ Workflows",
          paragraphs: [
            "Wan Buffer Services works closely with oil and gas suppliers to simplify and structure RFQ management.",
            "The approach focuses on real workflows, not theoretical processes. This includes:",
          ],
          bullets: [
            "Designing RFQ workflows tailored to supplier operations",
            "Implementing structured quotation and vendor comparison systems",
            "Integrating RFQ management with ERP modules",
            "Automating repetitive tasks and approvals",
            "Creating scalable systems for growing RFQ volumes",
          ],
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "RFQ Management for Oil and Gas Suppliers is not just an operational function. It is the starting point of every business opportunity.",
            "When managed poorly, it creates delays, confusion, and lost revenue. But when structured properly, it becomes a powerful advantage.",
            "By adopting dedicated RFQ management software, suppliers can respond faster, operate with clarity, and build stronger relationships with clients.",
          ],
        },
      ],
      faqs: [
        { q: "What is RFQ management in oil and gas supply?", a: "It is the process of handling inquiries, sourcing vendors, preparing quotations, and managing revisions for project-based supply requirements." },
        { q: "Why do suppliers struggle with RFQ management?", a: "Due to high volume, tight deadlines, and lack of structured systems, many rely on manual processes that create inefficiencies." },
        { q: "Can ERP systems handle RFQ management?", a: "Yes, with proper customization, ERP systems like Odoo can support structured RFQ workflows and integration with procurement and sales." },
        { q: "What are the benefits of RFQ management software?", a: "Improved response time, better accuracy, enhanced visibility, and stronger coordination across teams." },
      ],
    },
  },
  {
    slug: "why-generic-erp-fails-for-oil-and-gas-suppliers",
    title: "Why Generic ERP Fails for Oil and Gas Suppliers",
    excerpt: "Generic ERP systems often fail oil and gas suppliers because they don't align with real project-based operations. Discover why specialised procurement workflows are essential.",
    date: "April 3, 2026",
    sortDate: "2026-04-03",
    author: "Vaishali Rathod",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2026/04/Blog-Jigar-sir-FINAL-02.png",
    category: "Oil & Gas",
    externalUrl: "https://wanbuffer.com/blogs/why-generic-erp-fails-for-oil-and-gas-suppliers/",
  },
  {
    slug: "odoo-erp-for-oil-and-gas-suppliers-in-uae",
    title: "Odoo ERP for Oil and Gas Suppliers in UAE",
    excerpt: "Tailored Odoo solutions address RFQ management, procurement cycles, and compliance for regional oil and gas suppliers in the UAE market.",
    date: "April 1, 2026",
    sortDate: "2026-04-01",
    author: "Mit Mathukiya",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2026/04/Blog-Jigar-sir-FINAL-01.png",
    category: "Oil & Gas",
    externalUrl: "https://wanbuffer.com/blogs/odoo-erp-for-oil-and-gas-suppliers-in-uae/",
  },
  {
    slug: "erp-systems-designed-for-fabric-manufacturers",
    title: "ERP Systems Designed for Fabric Manufacturers in India, Thailand and Vietnam",
    excerpt: "Fabric manufacturing requires coordination across yarn procurement, dyeing, weaving, and finishing stages — a complexity that demands purpose-built ERP systems.",
    date: "March 16, 2026",
    sortDate: "2026-03-16",
    author: "Vaishali Rathod",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2026/03/Febric-3-contary-01.png",
    category: "Manufacturing",
    externalUrl: "https://wanbuffer.com/blogs/erp-systems-designed-for-fabric-manufacturers-in-india-thailand-and-vietnam/",
  },
  {
    slug: "dedicated-engineering-teams-vs-in-house-hiring",
    title: "Dedicated Engineering Teams vs In-House Hiring for ERP Projects",
    excerpt: "Comparing staffing approaches for ERP implementations — highlighting challenges with internal hiring as project complexity increases and timelines tighten.",
    date: "March 3, 2026",
    sortDate: "2026-03-03",
    author: "Saloni Darji",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2026/03/dedicated-enginear.png",
    category: "ERP",
    externalUrl: "https://wanbuffer.com/blogs/dedicated-engineering-teams-vs-in-house-hiring-for-erp-projects/",
  },
  {
    slug: "why-fabric-manufacturers-are-rebuilding-erp",
    title: "Why Fabric Manufacturers Are Rebuilding ERP Before Peak Season",
    excerpt: "Seasonal manufacturing environments require proactive ERP optimisation before demand spikes — why the smartest factories rebuild their systems ahead of peak.",
    date: "February 16, 2026",
    sortDate: "2026-02-16",
    author: "Mit Mathukiya",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2026/02/FebBlog1701.png",
    category: "Manufacturing",
    externalUrl: "https://wanbuffer.com/blogs/why-fabric-manufacturers-are-rebuilding-erp-before-peak-season/",
  },
  {
    slug: "how-odoo-partners-scale-faster-with-dedicated-teams",
    title: "How Odoo Partners in USA and Europe Scale Faster With Dedicated Teams",
    excerpt: "Sales pipelines are full. Client expectations are high. Project complexity is increasing. Yet internal technical capacity remains limited for many Odoo partners.",
    date: "February 6, 2026",
    sortDate: "2026-02-06",
    author: "Saloni Darji",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2026/02/USA-EuropeBlog.png",
    category: "Odoo",
    externalUrl: "https://wanbuffer.com/blogs/how-odoo-partners-in-usa-and-europe-scale-faster-with-dedicated-teams/",
  },
  {
    slug: "how-odoo-becomes-a-real-3pl-erp",
    title: "How Odoo Becomes a Real 3PL ERP When It's Engineered Correctly",
    excerpt: "Logistics doesn't run on modules, it runs on engines. Learn why default Odoo fails in production for 3PL operations — and how engineering it correctly changes everything.",
    date: "January 20, 2026",
    sortDate: "2026-01-20",
    author: "Kush Parmar",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2026/01/Blog20.01.26.1.png",
    category: "Logistics",
    externalUrl: "https://wanbuffer.com/blogs/how-odoo-becomes-a-real-3pl-erp-when-its-engineered-correctly/",
  },
  {
    slug: "q1-enterprise-automation-blueprint",
    title: "Q1 Enterprise Automation Blueprint for Manufacturing and 3PL",
    excerpt: "Operational pressures around planning accuracy, fulfilment speed, cost control, and real-time visibility demand a structured automation blueprint for Q1.",
    date: "January 11, 2026",
    sortDate: "2026-01-11",
    author: "Nirav Rathod",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2026/01/Blog1101.png",
    category: "Manufacturing",
    externalUrl: "https://wanbuffer.com/blogs/q1-enterprise-automation-blueprint-for-manufacturing-and-3pl/",
  },
  {
    slug: "the-q1-erp-execution-playbook",
    title: "The Q1 ERP Execution Playbook: How Enterprises Go Live Faster and See ROI by Q2",
    excerpt: "When enterprises delay ERP execution to Q2, they don't just delay go-live — they lose half the value. A practical playbook for faster ERP launches.",
    date: "January 2, 2026",
    sortDate: "2026-01-02",
    author: "Mit Mathukiya",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2026/01/Blogjan0101.png",
    category: "ERP",
    externalUrl: "https://wanbuffer.com/blogs/the-q1-erp-execution-playbook-how-enterprises-go-live-faster-and-see-roi-by-q2/",
  },
  {
    slug: "why-q1-is-the-best-time-for-erp-transformation",
    title: "Why Q1 Is the Best Time for ERP Transformation — And Why You Must Prepare Now",
    excerpt: "Q1 is when organisations establish their operational roadmap. Early modernisation drives competitive advantage — here's why waiting costs more than starting.",
    date: "December 26, 2025",
    sortDate: "2025-12-26",
    author: "Vaishali Rathod",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/12/Blog-22.12.png",
    category: "ERP",
    externalUrl: "https://wanbuffer.com/blogs/why-q1-is-the-best-time-for-erp-transformation-and-why-you-must-prepare-now/",
  },
  {
    slug: "how-wan-buffer-engineers-enterprise-grade-erp",
    title: "How Wan Buffer Engineers Enterprise-Grade ERP: A Deep Dive Into Large-Scale Odoo Transformations",
    excerpt: "ERP modernisation becomes more than an IT project — it becomes a strategic shift. A deep dive into how Wan Buffer approaches enterprise-grade Odoo deployments.",
    date: "December 20, 2025",
    sortDate: "2025-12-20",
    author: "Nirav Rathod",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/12/Blog20.12.25.png",
    category: "Odoo",
    externalUrl: "https://wanbuffer.com/blogs/how-wan-buffer-engineers-enterprise-grade-erp-a-deep-dive-into-large-scale-odoo-transformations/",
  },
  {
    slug: "essential-odoo-integrations-us-companies-need-2025",
    title: "Essential Odoo Integrations U.S. Companies Need in 2025 (Shopify, Amazon, QuickBooks)",
    excerpt: "U.S. businesses rely on multiple systems for eCommerce, logistics, and finance. When these systems don't communicate, it creates data duplication and operational chaos.",
    date: "December 16, 2025",
    sortDate: "2025-12-16",
    author: "Kush Parmar",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/12/Blog16.12.2025.png",
    category: "eCommerce",
    externalUrl: "https://wanbuffer.com/blogs/essential-odoo-integrations-u-s-companies-need-in-2025-shopify-amazon-quickbooks/",
  },
  {
    slug: "why-custom-odoo-modules-fail",
    title: "Why Custom Odoo Modules Fail: Lessons Every Company Should Know",
    excerpt: "Customisation is one of Odoo's biggest strengths — but it's also where most implementations go wrong. Key lessons every company should learn before building custom modules.",
    date: "December 11, 2025",
    sortDate: "2025-12-11",
    author: "Mit Mathukiya",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/12/Blog-11.12.2025-02-scaled.jpg",
    category: "Odoo",
    externalUrl: "https://wanbuffer.com/blogs/why-custom-odoo-modules-fail-lessons-every-company-should-know/",
  },
  {
    slug: "how-odoo-fixes-inventory-warehouse-challenges-us",
    title: "How Odoo Fixes Inventory & Warehouse Challenges for U.S. Businesses",
    excerpt: "Inventory and warehouse management play a critical role in U.S. business success — especially for manufacturers, retailers, distributors, and eCommerce brands.",
    date: "December 9, 2025",
    sortDate: "2025-12-09",
    author: "Nirav Rathod",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/12/Blog-0912-01-scaled.jpg",
    category: "Odoo",
    externalUrl: "https://wanbuffer.com/blogs/how-odoo-fixes-inventory-warehouse-challenges-for-u-s-businesses/",
  },
  {
    slug: "how-odoo-reduces-manual-work",
    title: "How Odoo Reduces Manual Work Across Finance, Sales and Operations",
    excerpt: "In many growing businesses, manual work still dominates daily processes. From entering invoices to updating stock records, repetitive tasks consume valuable time.",
    date: "December 4, 2025",
    sortDate: "2025-12-04",
    author: "Saloni Darji",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/11/Blog0412-scaled.jpg",
    category: "ERP",
    externalUrl: "https://wanbuffer.com/blogs/how-odoo-reduces-manual-work-across-finance-sales-and-operations/",
  },
  {
    slug: "odoo-19-new-features-explained",
    title: "Odoo 19 New Features Explained: What Businesses Should Expect in 2025",
    excerpt: "Odoo 19 introduces powerful innovations focused on automation, intelligence, and industry readiness — shaping business efficiency for 2025 and beyond.",
    date: "December 2, 2025",
    sortDate: "2025-12-02",
    author: "Vaishali Rathod",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/11/Blog-0212-3.png",
    category: "Odoo",
    externalUrl: "https://wanbuffer.com/blogs/odoo-19-new-features-explained-what-businesses-should-expect-in-2025/",
  },
  {
    slug: "smes-in-france-odoo-erp",
    title: "SMEs in France: How Odoo ERP Helps Navigate Complex Operations",
    excerpt: "In France's dynamic business ecosystem, small and medium-sized enterprises are the backbone of innovation, job creation, and economic growth — and Odoo helps them scale.",
    date: "November 27, 2025",
    sortDate: "2025-11-27",
    author: "Nirav Rathod",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/11/27-11-SMEs-in-France-How-Odoo-ERP-Helps-Navigate-Complex-Operations.jpg",
    category: "Odoo",
    externalUrl: "https://wanbuffer.com/blogs/smes-in-france-how-odoo-erp-helps-navigate-complex-operations/",
  },
  {
    slug: "exploring-odoo-19-features-for-warehouse-optimization",
    title: "Exploring Odoo 19 Features for Warehouse Optimization",
    excerpt: "Delayed shipments, misplaced stock, and poor visibility into inventory levels often result in lost revenue and frustrated customers. Odoo 19 changes that.",
    date: "November 21, 2025",
    sortDate: "2025-11-21",
    author: "Kush Parmar",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/11/24-11-Exploring-Odoo-19-Features-for-Warehouse-Optimization.jpg",
    category: "Odoo",
    externalUrl: "https://wanbuffer.com/blogs/exploring-odoo-19-features-for-warehouse-optimization/",
  },
  {
    slug: "step-by-step-setting-up-crm-pipelines-in-odoo-19",
    title: "Step-by-Step: Setting Up CRM Pipelines in Odoo 19",
    excerpt: "Managing leads, follow-ups, and opportunities across multiple platforms can quickly become chaotic — unless you have a unified system like Odoo 19.",
    date: "November 20, 2025",
    sortDate: "2025-11-20",
    author: "Mit Mathukiya",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/11/20-11-Top-10-Odoo-19-Features.jpg",
    category: "Odoo",
    externalUrl: "https://wanbuffer.com/blogs/step-by-step-setting-up-crm-pipelines-in-odoo-19/",
  },
  {
    slug: "top-10-odoo-19-features-for-smes-in-2025",
    title: "Top 10 Odoo 19 Features for SMEs in 2025",
    excerpt: "Businesses require connected, intelligent, and scalable systems that drive real productivity. Here are the top 10 Odoo 19 features that deliver exactly that.",
    date: "November 17, 2025",
    sortDate: "2025-11-17",
    author: "Saloni Darji",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/11/17-Top-10-Odoo-19-Features.jpg",
    category: "Odoo",
    externalUrl: "https://wanbuffer.com/blogs/top-10-odoo-19-features-for-smes-in-2025/",
  },
  {
    slug: "step-by-step-configuring-odoo-19-project-management",
    title: "Step-by-Step: Configuring Odoo 19 Project Management",
    excerpt: "Most companies still struggle with scattered tools, missed deadlines and unclear accountability. Odoo 19 project management brings structure to the chaos.",
    date: "November 13, 2025",
    sortDate: "2025-11-13",
    author: "Nirav Rathod",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/11/13-Step-by-Step-Configuring.jpg",
    category: "Odoo",
    externalUrl: "https://wanbuffer.com/blogs/step-by-step-configuring-odoo-19-project-management/",
  },
  {
    slug: "odoo-erp-for-smes-in-kuwait",
    title: "Odoo ERP for SMEs in Kuwait: Solving Localization Challenges",
    excerpt: "Most global ERP systems fail to fully adapt to the Kuwaiti business environment. Discover how Odoo solves localisation challenges for Kuwait-based SMEs.",
    date: "November 10, 2025",
    sortDate: "2025-11-10",
    author: "Kush Parmar",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/11/10-11Step-by-step-Purchase-order.jpg",
    category: "ERP",
    externalUrl: "https://wanbuffer.com/blogs/odoo-erp-for-smes-in-kuwait-solving-localization-challenges/",
  },
  {
    slug: "exploring-new-odoo-19-features-for-inventory-management",
    title: "Exploring New Odoo 19 Features for Inventory Management",
    excerpt: "Many companies still struggle with stock discrepancies, warehouse inefficiencies and manual tracking. Odoo 19 introduces powerful new inventory features.",
    date: "November 6, 2025",
    sortDate: "2025-11-06",
    author: "Mit Mathukiya",
    readTime: "4 min",
    imageSrc: "https://wanbuffer.com/blogs/wp-content/uploads/2025/10/6-Exploring-New-Odoo-19-Features-for-Inventory-Management.jpg",
    category: "Odoo",
    externalUrl: "https://wanbuffer.com/blogs/exploring-new-odoo-19-features-for-inventory-management/",
  },
];

export const BLOG_COUNT = BLOG_POSTS.length;
