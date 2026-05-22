import { CASE_STUDY_DETAILS } from "@/lib/case-study-details";
import { CASE_STUDY_DETAIL_MEDIA } from "@/lib/case-study-detail-media";

export type CaseStudyIndustry =
  | "distribution"
  | "ecommerce"
  | "hospitality"
  | "logistics"
  | "manufacturing"
  | "retail"
  | "supply-chain"
  | "textile"
  | "wholesale";

export type CaseStudyRegion = "canada" | "kuwait" | "united-kingdom" | "united-states";

export type CaseStudyTechnology = "magento" | "odoo" | "postgresql" | "python";

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyChallenge {
  title: string;
  description: string;
}

export interface CaseStudySolution {
  title: string;
  intro?: string;
  bullets: string[];
}

export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudySolutionRow {
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  solutions: CaseStudySolution[];
}

export type CaseStudyApproachIcon = "revamp" | "integration" | "updates" | "optimization";

export interface CaseStudyApproach {
  title: string;
  description: string;
  icon?: CaseStudyApproachIcon;
}

export interface CaseStudyTestimonial {
  company: string;
  role: string;
  quote: string;
}

export interface CaseStudyDetailFields {
  aboutParagraphs: string[];
  businessType: string;
  location: string;
  goalParagraph: string;
  highlights: string[];
  challenges: CaseStudyChallenge[];
  solutions: CaseStudySolution[];
  solutionsIntro?: string;
  solutionRows?: CaseStudySolutionRow[];
  screenshots?: CaseStudyImage[];
  approach: CaseStudyApproach[];
  approachIntro?: string;
  results: CaseStudyMetric[];
  testimonial: CaseStudyTestimonial;
  techStack: string[];
  techStackLogos?: CaseStudyImage[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  pageHeading: string;
  clientLabel: string;
  excerpt: string;
  imageSrc: string;
  imageW: number;
  imageH: number;
  metrics: CaseStudyMetric[];
  industries: CaseStudyIndustry[];
  regions: CaseStudyRegion[];
  technologies: CaseStudyTechnology[];
}

export type CaseStudyWithDetail = CaseStudy & CaseStudyDetailFields;

export const INDUSTRY_FILTERS: { id: CaseStudyIndustry | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "distribution", label: "Distribution" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "hospitality", label: "Hospitality" },
  { id: "logistics", label: "Logistics" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "retail", label: "Retail" },
  { id: "supply-chain", label: "Supply Chain" },
  { id: "textile", label: "Textile" },
  { id: "wholesale", label: "Wholesale" },
];

export const REGION_FILTERS: { id: CaseStudyRegion | "all"; label: string }[] = [
  { id: "all", label: "All regions" },
  { id: "canada", label: "Canada" },
  { id: "kuwait", label: "Kuwait" },
  { id: "united-kingdom", label: "United Kingdom" },
  { id: "united-states", label: "United States" },
];

export const TECHNOLOGY_FILTERS: { id: CaseStudyTechnology | "all"; label: string }[] = [
  { id: "all", label: "All technologies" },
  { id: "magento", label: "Magento" },
  { id: "odoo", label: "Odoo" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "python", label: "Python" },
];

export const WAN_BUFFER_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "odoo-erp-implementation-in-the-textile-industry",
    title: "Odoo ERP Implementation in the Textile Industry",
    pageHeading: "Odoo ERP Implementation in the Textile Industry",
    clientLabel: "Textile Industry",
    excerpt:
      "The textile industry makes cotton, linen, and polyester fabrics in many colors and rolls. Their warehouses and production units were growing, but they tracked everything manually. Staff often spent hours searching for the right rolls, and managers didn't know which fabrics were ready or passed quality checks. It caused stress, delays, and mistakes. They chose Odoo ERP to make inventory easy, accurate, and stress-free for everyone.",
    imageSrc: "/case-study/textile.webp",
    imageW: 800,
    imageH: 500,
    metrics: [
      { value: "100%", label: "Automation" },
      { value: "80%", label: "Increase in efficiency" },
    ],
    industries: ["logistics", "manufacturing", "textile", "wholesale"],
    regions: ["canada"],
    technologies: ["odoo", "python", "postgresql"],
  },
  {
    slug: "odoo-steel-solution",
    title: "Odoo-Powered Solution for Steel Product Customization & Automation",
    pageHeading: "Odoo-Powered Solution for Steel Product Customization & Automation",
    clientLabel: "Steel Manufacturing",
    excerpt:
      "The client required a robust Odoo-based solution to manage a complex range of standard and customized steel products. This involved streamlining website ordering, implementing dynamic pricing based on real-time dimensions, and improving backend operations through automation tools and mobile integration. The project scope included both frontend (eCommerce enhancements) and backend (Odoo ERP workflows) development.",
    imageSrc: "/case-study/steel.webp",
    imageW: 800,
    imageH: 500,
    metrics: [
      { value: "100%", label: "Automation of custom pricing logic" },
      { value: "80%", label: "Increase in warehouse picking speed" },
    ],
    industries: ["distribution", "logistics", "manufacturing", "wholesale"],
    regions: ["canada"],
    technologies: ["odoo", "python", "postgresql"],
  },
  {
    slug: "odoo-integration-ecommerce-retailer",
    title: "Odoo Integration for a USA-based eCommerce Retailer",
    pageHeading: "Odoo Integration for a USA-based eCommerce Retailer",
    clientLabel: "E-Commerce Retailer",
    excerpt:
      "A dynamic eCommerce retailer based in the USA, managing sales across multiple channels. With increasing sales volume from marketplaces like Amazon, Walmart, and eBay (via Listing Mirror), they required a unified system to handle complex fulfillment workflows. Wan Buffer Services was engaged to implement an integrated Odoo solution that could centralize order processing, automate inventory tracking, and improve operational agility.",
    imageSrc: "/case-study/ecommerce-usa.webp",
    imageW: 800,
    imageH: 500,
    metrics: [
      { value: "90%", label: "Reduction in manual order processing time" },
      { value: "100%", label: "Visibility into fulfillment operations" },
    ],
    industries: ["distribution", "ecommerce", "logistics", "retail", "supply-chain", "wholesale"],
    regions: ["united-states"],
    technologies: ["odoo", "python", "postgresql"],
  },
  {
    slug: "odoo-erp-implementation",
    title: "Magento Odoo Integration",
    pageHeading: "Magento Odoo Integration",
    clientLabel: "ERP",
    excerpt:
      "A well-established supplier serving the textile and hospitality sectors across North America. As their operations scaled, they sought a unified ERP platform to streamline business processes, improve order accuracy, and strengthen third-party integrations. Wan Buffer Services was engaged to implement a full-scale Odoo ERP solution that would integrate seamlessly with their Magento store, logistics providers, and payment gateways – while also enabling better vendor and return management.",
    imageSrc: "/case-study/magento.webp",
    imageW: 800,
    imageH: 500,
    metrics: [
      { value: "45%", label: "Improvement in operational efficiency" },
      { value: "30%", label: "Faster order processing" },
    ],
    industries: ["distribution", "ecommerce", "hospitality", "logistics", "textile", "wholesale"],
    regions: ["united-states"],
    technologies: ["odoo", "python"],
  },
  {
    slug: "ui-product-management-enhancements",
    title: "UI & Product Management Enhancements for Odoo E-Commerce",
    pageHeading: "UI & Product Management Enhancements for Odoo E-Commerce",
    clientLabel: "E-Commerce",
    excerpt:
      "UK-based eCommerce retailer specializing in premium electronic lighting products. To support their expanding customer base and product catalog, Enhance their Odoo-based online platform. The core focus was on delivering a seamless user experience, improving product discoverability, and strengthening backend product and inventory management capabilities.",
    imageSrc: "/case-study/uk-ecommerce.webp",
    imageW: 800,
    imageH: 500,
    metrics: [
      { value: "40%", label: "Faster checkout process" },
      { value: "60%", label: "Reduction in backend processing time" },
    ],
    industries: ["ecommerce", "retail"],
    regions: ["united-kingdom"],
    technologies: ["odoo", "python"],
  },
  {
    slug: "e-commerce-baby-mother-care",
    title: "E-Commerce (Baby & Mother Care)",
    pageHeading: "E-Commerce (Baby & Mother Care)",
    clientLabel: "OMAHAT",
    excerpt:
      "We revamped Omahat's e-commerce platform by optimizing the design, integrating advanced e-commerce features, and implementing real-time inventory updates. Our digital marketing strategies boosted their online visibility, driving user engagement and sales growth.",
    imageSrc: "/case-study/baby-mother-care.webp",
    imageW: 1920,
    imageH: 1081,
    metrics: [
      { value: "35%", label: "Improved Customer Engagement" },
      { value: "50%", label: "Increase in Online Sales" },
    ],
    industries: ["ecommerce", "retail"],
    regions: ["kuwait"],
    technologies: ["magento"],
  },
];

export function countCaseStudiesByIndustry(industry: CaseStudyIndustry | "all"): number {
  if (industry === "all") return WAN_BUFFER_CASE_STUDIES.length;
  return WAN_BUFFER_CASE_STUDIES.filter((c) => c.industries.includes(industry)).length;
}

export function countCaseStudiesByRegion(region: CaseStudyRegion | "all"): number {
  if (region === "all") return WAN_BUFFER_CASE_STUDIES.length;
  return WAN_BUFFER_CASE_STUDIES.filter((c) => c.regions.includes(region)).length;
}

export function countCaseStudiesByTechnology(technology: CaseStudyTechnology | "all"): number {
  if (technology === "all") return WAN_BUFFER_CASE_STUDIES.length;
  return WAN_BUFFER_CASE_STUDIES.filter((c) => c.technologies.includes(technology)).length;
}

export const CASE_STUDY_COUNT = WAN_BUFFER_CASE_STUDIES.length;

export function caseStudyPath(slug: string): string {
  return `/case-study/${slug}`;
}

export function getCaseStudyBySlug(slug: string): CaseStudyWithDetail | undefined {
  const base = WAN_BUFFER_CASE_STUDIES.find((c) => c.slug === slug);
  const detail = CASE_STUDY_DETAILS[slug];
  const media = CASE_STUDY_DETAIL_MEDIA[slug];
  if (!base || !detail) return undefined;
  return { ...base, ...detail, ...media };
}

export function getAllCaseStudySlugs(): string[] {
  return WAN_BUFFER_CASE_STUDIES.map((c) => c.slug);
}
