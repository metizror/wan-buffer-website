import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { BlogDetailContent } from "@/components/pages/blog-detail-content";
import {
  getPublishedBlogBySlug,
  getBlogBySlugForPreview,
  getRelatedBlogs,
} from "@/lib/blog-service";
import { verifySession } from "@/lib/dal";
import type { BlogDocument } from "@/lib/definitions";

export const dynamic = "force-dynamic";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string }>;
}

/**
 * Resolve a post for a public page. When `?preview=1` is set AND a valid admin
 * session exists, bypass the published check so drafts/scheduled posts render.
 */
async function resolvePost(
  slug: string,
  preview: boolean
): Promise<BlogDocument | null> {
  if (preview) {
    const session = await verifySession();
    if (session) return getBlogBySlugForPreview(slug);
  }
  return getPublishedBlogBySlug(slug);
}

export async function generateMetadata({
  params,
  searchParams,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { preview } = await searchParams;
  const post = await resolvePost(slug, preview === "1");
  if (!post) return { title: "Article not found | Wan Buffer" };

  const ogImage = post.ogImage || post.imageSrc;

  return {
    title: post.metaTitle || `${post.title} | Wan Buffer Blog`,
    description: post.metaDescription || post.excerpt,
    keywords:
      post.keywords && post.keywords.length > 0 ? post.keywords : undefined,
    alternates: {
      canonical: post.canonical || `https://wanbuffer.com/blogs/${slug}`,
    },
    robots: post.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      siteName: "Wan Buffer",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  };
}

export default async function BlogDetailPage({
  params,
  searchParams,
}: BlogDetailPageProps) {
  const { slug } = await params;
  const { preview } = await searchParams;
  const post = await resolvePost(slug, preview === "1");
  if (!post) notFound();

  const related = await getRelatedBlogs(slug, post.category);

  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <BlogDetailContent post={post} related={related} />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
