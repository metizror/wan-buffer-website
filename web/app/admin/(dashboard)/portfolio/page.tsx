import Link from "next/link";
import { requireRole } from "@/lib/dal";
import { listPortfolio, getPortfolioCategories } from "@/lib/portfolio-service";
import { PageHeader } from "@/components/admin/form-fields";
import { PortfolioTable } from "@/components/admin/portfolio-table";

export default async function AdminPortfolioPage() {
  await requireRole([]);
  const [items, categories] = await Promise.all([
    listPortfolio(),
    getPortfolioCategories(),
  ]);

  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Work items and case studies"
        actions={
          <Link
            href="/admin/portfolio/new"
            className="adm-btn adm-btn-primary adm-btn-sm"
          >
            + New item
          </Link>
        }
      />
      <PortfolioTable initialItems={items} categories={categories} />
    </>
  );
}
