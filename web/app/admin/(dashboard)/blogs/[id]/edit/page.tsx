import { notFound } from "next/navigation";
import { getBlogById } from "@/lib/blog-service";
import { BlogForm } from "@/components/admin/blog-form";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) notFound();

  return (
    <>
      <div className="adm-page-header">
        <h1>Edit Blog</h1>
      </div>
      <BlogForm
        mode="edit"
        initialData={{
          _id: blog._id,
          title: blog.title,
          slug: blog.slug,
          excerpt: blog.excerpt,
          date: blog.date,
          sortDate: blog.sortDate,
          author: blog.author,
          authorRole: blog.authorRole,
          readTime: blog.readTime,
          imageSrc: blog.imageSrc,
          category: blog.category,
          externalUrl: blog.externalUrl,
          content: blog.content,
          faqs: blog.faqs || [],
          isPublished: blog.isPublished,
        }}
      />
    </>
  );
}
