import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { BlogDetailContent } from "@/components/pages/blog-detail-content";
import { getPublishedBlogBySlug, getRelatedBlogs } from "@/lib/blog-service";

export const dynamic = "force-dynamic";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);
  if (!post) return { title: "Article not found | Wan Buffer" };

  return {
    title: `${post.title} | Wan Buffer Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://wanbuffer.com/blogs/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      siteName: "Wan Buffer",
      images: [{ url: post.imageSrc }],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);
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
