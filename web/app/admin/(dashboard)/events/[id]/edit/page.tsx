import { notFound } from "next/navigation";
import { requireRole } from "@/lib/dal";
import {
  getEventById,
  getEventCategories,
  getEventLocations,
} from "@/lib/events-service";
import { PageHeader } from "@/components/admin/form-fields";
import { EventForm } from "@/components/admin/event-form";

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireRole([]);
  const { id } = await params;
  const [item, categories, locations] = await Promise.all([
    getEventById(id),
    getEventCategories(),
    getEventLocations(),
  ]);

  if (!item) notFound();

  return (
    <>
      <PageHeader title="Edit event" />
      <EventForm
        mode="edit"
        initialData={item}
        categories={categories}
        locations={locations}
      />
    </>
  );
}
