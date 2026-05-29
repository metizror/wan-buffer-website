import Link from "next/link";
import { getPaginatedBlogs } from "@/lib/blog-service";
import { BlogTable } from "@/components/admin/blog-table";

export default async function AdminBlogsPage() {
  const initial = await getPaginatedBlogs({ page: 1, limit: 10 });

  return (
    <>
      <div className="adm-page-header">
        <h1>Blogs</h1>
        <Link href="/admin/blogs/new" className="adm-btn adm-btn-primary adm-btn-sm">
          + New Blog
        </Link>
      </div>
      <BlogTable
        initialBlogs={initial.blogs}
        initialTotal={initial.total}
        initialTotalPages={initial.totalPages}
      />
    </>
  );
}
