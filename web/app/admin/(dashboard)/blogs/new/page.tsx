import { BlogForm } from "@/components/admin/blog-form";

export default function NewBlogPage() {
  return (
    <>
      <div className="adm-page-header">
        <h1>Create New Blog</h1>
      </div>
      <BlogForm mode="create" />
    </>
  );
}
