import { requireRole } from "@/lib/dal";
import { getEventCategories, getEventLocations } from "@/lib/events-service";
import { PageHeader } from "@/components/admin/form-fields";
import { EventForm } from "@/components/admin/event-form";

export default async function NewEventPage() {
  await requireRole([]);
  const [categories, locations] = await Promise.all([
    getEventCategories(),
    getEventLocations(),
  ]);

  return (
    <>
      <PageHeader title="New event" />
      <EventForm mode="create" categories={categories} locations={locations} />
    </>
  );
}
