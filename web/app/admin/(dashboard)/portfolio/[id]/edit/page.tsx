import { notFound } from "next/navigation";
import { requireRole } from "@/lib/dal";
import { getPortfolioById, getPortfolioCategories } from "@/lib/portfolio-service";
import { PageHeader } from "@/components/admin/form-fields";
import { PortfolioForm } from "@/components/admin/portfolio-form";

export default async function EditPortfolioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireRole([]);
  const { id } = await params;
  const [item, categories] = await Promise.all([
    getPortfolioById(id),
    getPortfolioCategories(),
  ]);

  if (!item) notFound();

  return (
    <>
      <PageHeader title="Edit portfolio item" />
      <PortfolioForm mode="edit" initialData={item} categories={categories} />
    </>
  );
}
