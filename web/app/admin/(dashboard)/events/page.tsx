import Link from "next/link";
import { requireRole } from "@/lib/dal";
import { listEvents, getEventCategories } from "@/lib/events-service";
import { PageHeader } from "@/components/admin/form-fields";
import { EventsTable } from "@/components/admin/events-table";
import { EventsSeedButton } from "@/components/admin/events-seed-button";

export default async function AdminEventsPage() {
  await requireRole([]);
  const [items, categories] = await Promise.all([
    listEvents(),
    getEventCategories(),
  ]);

  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Webinars, conferences and expos shown on /event"
        actions={
          <>
            {items.length === 0 && <EventsSeedButton />}
            <Link
              href="/admin/events/new"
              className="adm-btn adm-btn-primary adm-btn-sm"
            >
              + New event
            </Link>
          </>
        }
      />
      <EventsTable initialItems={items} categories={categories} />
    </>
  );
}
