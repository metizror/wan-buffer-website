import { requireRole } from "@/lib/dal";
import { getPortfolioCategories } from "@/lib/portfolio-service";
import { PageHeader } from "@/components/admin/form-fields";
import { PortfolioForm } from "@/components/admin/portfolio-form";

export default async function NewPortfolioPage() {
  await requireRole([]);
  const categories = await getPortfolioCategories();

  return (
    <>
      <PageHeader title="New portfolio item" />
      <PortfolioForm mode="create" categories={categories} />
    </>
  );
}
