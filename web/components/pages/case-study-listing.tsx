"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  INDUSTRY_FILTERS,
  REGION_FILTERS,
  TECHNOLOGY_FILTERS,
  caseStudyPath,
  type CaseStudy,
  type CaseStudyIndustry,
  type CaseStudyRegion,
  type CaseStudyTechnology,
} from "@/lib/case-study-data";

type FilterTab = "industry" | "region" | "technology";

interface CaseStudyListingProps {
  studies: CaseStudy[];
}

export function CaseStudyListing({ studies }: CaseStudyListingProps) {
  const [tab, setTab] = useState<FilterTab>("industry");
  const [industry, setIndustry] = useState<CaseStudyIndustry | "all">("all");
  const [region, setRegion] = useState<CaseStudyRegion | "all">("all");
  const [technology, setTechnology] = useState<CaseStudyTechnology | "all">("all");

  const countByIndustry = (id: CaseStudyIndustry | "all") =>
    id === "all" ? studies.length : studies.filter((c) => c.industries.includes(id)).length;
  const countByRegion = (id: CaseStudyRegion | "all") =>
    id === "all" ? studies.length : studies.filter((c) => c.regions.includes(id)).length;
  const countByTechnology = (id: CaseStudyTechnology | "all") =>
    id === "all" ? studies.length : studies.filter((c) => c.technologies.includes(id)).length;

  const filtered = useMemo(() => {
    return studies.filter((cs) => {
      if (industry !== "all" && !cs.industries.includes(industry)) return false;
      if (region !== "all" && !cs.regions.includes(region)) return false;
      if (technology !== "all" && !cs.technologies.includes(technology)) return false;
      return true;
    });
  }, [studies, industry, region, technology]);

  const hasFilters = industry !== "all" || region !== "all" || technology !== "all";

  function clearFilters() {
    setIndustry("all");
    setRegion("all");
    setTechnology("all");
  }

  const activeFilters =
    tab === "industry"
      ? INDUSTRY_FILTERS
      : tab === "region"
        ? REGION_FILTERS
        : TECHNOLOGY_FILTERS;

  const activeValue = tab === "industry" ? industry : tab === "region" ? region : technology;

  function setActiveValue(id: string) {
    if (tab === "industry") setIndustry(id as CaseStudyIndustry | "all");
    else if (tab === "region") setRegion(id as CaseStudyRegion | "all");
    else setTechnology(id as CaseStudyTechnology | "all");
  }

  const resultLabel =
    filtered.length === studies.length
      ? `${studies.length} case studies`
      : `${filtered.length} of ${studies.length} case studies`;

  return (
    <>
      <div className="oi-cs-filters rev">
        <div className="oi-cs-filter-tabs" role="tablist" aria-label="Filter by">
          {(
            [
              { id: "industry" as const, label: "Industries" },
              { id: "region" as const, label: "Region" },
              { id: "technology" as const, label: "Technology" },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={`oi-cs-filter-tab${tab === t.id ? " is-active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="oi-cs-filter-options" role="tabpanel">
          {activeFilters.map((f) => {
            let count: number | null = null;
            if (tab === "industry") {
              count = countByIndustry(f.id as CaseStudyIndustry | "all");
            } else if (tab === "region") {
              count = countByRegion(f.id as CaseStudyRegion | "all");
            } else if (tab === "technology") {
              count = countByTechnology(f.id as CaseStudyTechnology | "all");
            }
            const label = count !== null && f.id !== "all" ? `${f.label} (${count})` : f.id === "all" && tab === "industry" ? `All (${count})` : f.label;
            return (
              <button
                key={f.id}
                type="button"
                className={`oi-cs-filter-chip${activeValue === f.id ? " is-active" : ""}`}
                onClick={() => setActiveValue(f.id)}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="oi-cs-filter-foot">
          <p className="oi-cs-filter-note">{resultLabel}</p>
          {hasFilters ? (
            <button type="button" className="oi-evt-clear" onClick={clearFilters}>
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="oi-cs-empty">
          <p>No case studies match your filters.</p>
          <button type="button" className="oi-evt-clear" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="cs-portfolio-grid">
          {filtered.map((cs, index) => (
            <Link
              key={cs.slug}
              href={caseStudyPath(cs.slug)}
              className="cs-portfolio-card"
              aria-label={`View case study: ${cs.title}`}
            >
              <div className="cs-portfolio-card-img-wrap">
                <Image
                  src={cs.imageSrc}
                  alt={cs.title}
                  width={800}
                  height={450}
                  className="cs-portfolio-card-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="cs-portfolio-card-overlay">
                  <span className="cs-portfolio-card-view">View Case Study</span>
                </div>
              </div>
              <div className="cs-portfolio-card-body">
                <span className="cs-portfolio-card-badge">{cs.clientLabel}</span>
                <h2 className="cs-portfolio-card-title">{cs.title}</h2>
                <p className="cs-portfolio-card-info">{cs.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
