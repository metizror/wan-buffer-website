import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import {
  getAllPublicWorkSlugs,
  getPublicWorkBySlug,
} from "@/lib/portfolio-service";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPublicWorkSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = await getPublicWorkBySlug(slug);
  if (!item) return { title: "Work not found | Wan Buffer" };

  return {
    title: item.metaTitle || `${item.title} | Wan Buffer`,
    description: item.metaDescription || item.description,
    alternates: { canonical: `https://wanbuffer.com/work/${slug}` },
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const item = await getPublicWorkBySlug(slug);
  if (!item) notFound();

  const cover = item.images[0];

  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <main className="svc-page">
        <section className="oi-evt-detail-hero" aria-labelledby="oi-work-title">
          <div className="oi-evt-detail-hero-bg" aria-hidden="true" />
          <div className="oi-evt-detail-hero-inner">
            <div className="oi-evt-detail-hero-grid rev">
              <div className="oi-evt-detail-hero-copy">
                {item.client ? (
                  <span className="oi-cs-client oi-cs-client-hero">{item.client}</span>
                ) : null}
                <h1 id="oi-work-title" className="oi-evt-detail-title">
                  {item.title}
                </h1>
                {item.description ? (
                  <p className="oi-evt-detail-lead">{item.description}</p>
                ) : null}
                {item.techStack.length ? (
                  <ul className="oi-evt-detail-quick-meta">
                    <li>
                      <strong>Stack</strong>
                      <span>{item.techStack.join(" · ")}</span>
                    </li>
                    {item.category ? (
                      <li>
                        <strong>Category</strong>
                        <span>{item.category}</span>
                      </li>
                    ) : null}
                  </ul>
                ) : null}
                {item.projectUrl ? (
                  <p className="oi-evt-detail-p">
                    <Link href={item.projectUrl} className="oi-evt-aside-cta">
                      Visit project
                    </Link>
                  </p>
                ) : null}
              </div>
              {cover ? (
                <div className="oi-evt-detail-hero-media">
                  <Image
                    src={cover}
                    alt={item.title}
                    width={800}
                    height={500}
                    className="oi-evt-detail-hero-img"
                    sizes="(max-width: 900px) 100vw, 480px"
                    priority
                  />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {item.images.length > 1 ? (
          <section className="oi-evt-detail-body section alt">
            <div className="oi-cs-list-inner">
              <div className="oi-cs-screenshots-grid">
                {item.images.slice(1).map((src) => (
                  <figure key={src} className="oi-cs-screenshot">
                    <Image
                      src={src}
                      alt={item.title}
                      width={800}
                      height={500}
                      className="oi-cs-screenshot-img"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
    </>
  );
}
