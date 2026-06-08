import generatedApps from "./odoo-apps-catalog.generated.json";
import { ACTIVITY_MANAGEMENT_APP } from "./odoo-apps-activity-management";

import type { OdooApp, OdooAppCategory, OdooAppVersion } from "./odoo-apps-data-types";

export type {
  OdooApp,
  OdooAppCategory,
  OdooAppVersion,
  OdooAppFaq,
  OdooAppScreenshot,
  OdooAppSetupStep,
  OdooAppFeature,
  OdooAppHighlight,
  OdooAppTrustStat,
} from "./odoo-apps-data-types";

export { ODOO_APP_CATEGORIES, ODOO_APP_VERSIONS } from "./odoo-apps-data-types";

export const ODOO_APPS: OdooApp[] = [
  ACTIVITY_MANAGEMENT_APP,
  ...(generatedApps as unknown as OdooApp[]),
].sort((left, right) => left.name.localeCompare(right.name));

export function getAllOdooApps(): OdooApp[] {
  return ODOO_APPS;
}

export function getOdooAppBySlug(slug: string): OdooApp | undefined {
  return ODOO_APPS.find((app) => app.slug === slug);
}

export function getAllOdooAppSlugs(): string[] {
  return ODOO_APPS.map((app) => app.slug);
}

export function getRelatedOdooApps(slug: string, limit = 3): OdooApp[] {
  const current = getOdooAppBySlug(slug);
  if (!current) return ODOO_APPS.filter((app) => app.slug !== slug).slice(0, limit);

  return ODOO_APPS.filter(
    (app) =>
      app.slug !== slug &&
      app.categories.some((category) => current.categories.includes(category)),
  ).slice(0, limit);
}

const FEATURED_ROTATION_DAYS = 3;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

function getFeaturedRotationPeriod(referenceDate: Date): number {
  const utcDay = Math.floor(
    Date.UTC(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate()) /
      MS_PER_DAY,
  );
  return Math.floor(utcDay / FEATURED_ROTATION_DAYS);
}

export function getRotatingFeaturedOdooApp(
  apps: OdooApp[] = ODOO_APPS,
  referenceDate: Date = new Date(),
): OdooApp {
  const rotationPool = [...apps].sort((left, right) => left.slug.localeCompare(right.slug));
  if (rotationPool.length === 0) {
    throw new Error("No Odoo apps available for featured rotation.");
  }

  const appIndex = getFeaturedRotationPeriod(referenceDate) % rotationPool.length;
  return rotationPool[appIndex];
}

export function isRotatingFeaturedOdooApp(
  app: OdooApp,
  referenceDate: Date = new Date(),
): boolean {
  return getRotatingFeaturedOdooApp(ODOO_APPS, referenceDate).slug === app.slug;
}
