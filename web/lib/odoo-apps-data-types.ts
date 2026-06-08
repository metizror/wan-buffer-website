export type OdooAppVersion = "17.0" | "18.0" | "19.0";

export type OdooAppCategory =
  | "Productivity"
  | "Sales & CRM"
  | "Accounting"
  | "Inventory"
  | "Manufacturing"
  | "Human Resources"
  | "Website"
  | "Project";

export interface OdooAppFaq {
  q: string;
  a: string;
}

export interface OdooAppScreenshot {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export interface OdooAppSetupStep {
  title: string;
  body: string;
}

export interface OdooAppFeature {
  title: string;
  body: string;
  imageSrc?: string;
}

export interface OdooAppHighlight {
  title: string;
  body: string;
}

export interface OdooAppTrustStat {
  value: string;
  label: string;
}

export interface OdooApp {
  slug: string;
  name: string;
  technicalName: string;
  summary: string;
  description: string;
  introParagraphs: string[];
  categories: OdooAppCategory[];
  versions: OdooAppVersion[];
  priceLabel: string;
  priceAmount?: string;
  license: string;
  linesOfCode?: number;
  dependencies: string[];
  features: OdooAppFeature[];
  setupSteps: OdooAppSetupStep[];
  screenshots: OdooAppScreenshot[];
  highlights: OdooAppHighlight[];
  trustStats: OdooAppTrustStat[];
  faqs: OdooAppFaq[];
  odooStoreUrl: string;
  iconSrc: string;
  cardImageSrc: string;
  heroImageSrc: string;
  featured?: boolean;
}

export const ODOO_APP_CATEGORIES: OdooAppCategory[] = [
  "Productivity",
  "Sales & CRM",
  "Accounting",
  "Inventory",
  "Manufacturing",
  "Human Resources",
  "Website",
  "Project",
];

export const ODOO_APP_VERSIONS: OdooAppVersion[] = ["17.0", "18.0", "19.0"];
