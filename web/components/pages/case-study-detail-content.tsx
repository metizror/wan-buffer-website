import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, CheckIcon, MailIcon, PhoneCallIcon } from "@/components/services/odoo-service-icons";
import { CASE_STUDY_APPROACH_ICON_SRC, getCaseStudyApproachIcon } from "@/lib/case-study-assets";
import {
  WAN_BUFFER_CASE_STUDIES,
  caseStudyPath,
  type CaseStudySolution,
  type CaseStudySolutionRow,
  type CaseStudyWithDetail,
} from "@/lib/case-study-data";

interface CaseStudyDetailContentProps {
  study: CaseStudyWithDetail;
}

function CaseStudySolutionsSection({ study }: { study: CaseStudyWithDetail }) {
  const rows = study.solutionRows;
  let solutionIndex = 0;

  function renderSolution(sol: CaseStudySolution) {
    solutionIndex += 1;
    const n = solutionIndex;
    return (
      <div key={`${n}-${sol.title}`} className="oi-cs-solution">
        <h3 className="oi-cs-solution-h">
          {n}. {sol.title}
        </h3>
        {sol.intro ? <p className="oi-evt-detail-p">{sol.intro}</p> : null}
        <ul className="oi-evt-detail-list">
          {sol.bullets.map((b) => (
            <li key={b.slice(0, 40)}>{b}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (rows?.length) {
    return (
      <div className="oi-evt-detail-block">
        <h2 className="oi-evt-detail-h2">The solution we provide</h2>
        {study.solutionsIntro ? <p className="oi-evt-detail-p oi-cs-section-lead">{study.solutionsIntro}</p> : null}
        {rows.map((row) => (
          <div
            key={row.imageSrc}
            className={`oi-cs-solution-row${row.imagePosition === "right" ? " is-image-right" : ""}`}
          >
            <div className="oi-cs-solution-row-media">
              <Image
                src={row.imageSrc}
                alt={row.imageAlt}
                width={640}
                height={480}
                className="oi-cs-solution-row-img"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="oi-cs-solution-row-copy">{row.solutions.map((sol) => renderSolution(sol))}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="oi-evt-detail-block">
      <h2 className="oi-evt-detail-h2">The solution we provide</h2>
      {study.solutions.map((sol, i) => (
        <div key={sol.title} className="oi-cs-solution">
          <h3 className="oi-cs-solution-h">
            {i + 1}. {sol.title}
          </h3>
          {sol.intro ? <p className="oi-evt-detail-p">{sol.intro}</p> : null}
          <ul className="oi-evt-detail-list">
            {sol.bullets.map((b) => (
              <li key={b.slice(0, 40)}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyDetailContent({ study }: CaseStudyDetailContentProps) {
  const related = WAN_BUFFER_CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <main className="svc-page">
      <section className="oi-evt-detail-hero oi-cs-detail-hero" aria-labelledby="oi-cs-detail-title">
        <div className="oi-evt-detail-hero-bg" aria-hidden="true" />
        <div className="oi-evt-detail-hero-inner">
          <div className="oi-evt-detail-hero-grid rev">
            <div className="oi-evt-detail-hero-copy">
              <span className="oi-cs-client oi-cs-client-hero">{study.clientLabel}</span>
              <h1 id="oi-cs-detail-title" className="oi-evt-detail-title">
                {study.pageHeading}
              </h1>
              <p className="oi-evt-detail-lead">{study.excerpt}</p>
              <ul className="oi-evt-detail-quick-meta">
                <li>
                  <strong>Business</strong>
                  <span>{study.businessType}</span>
                </li>
                <li>
                  <strong>Location</strong>
                  <span>{study.location}</span>
                </li>
                <li>
                  <strong>Stack</strong>
                  <span>{study.techStack.join(" · ")}</span>
                </li>
              </ul>
            </div>
            <div className="oi-evt-detail-hero-media">
              <Image
                src={study.imageSrc}
                alt={study.title}
                width={study.imageW}
                height={study.imageH}
                className="oi-evt-detail-hero-img"
                sizes="(max-width: 900px) 100vw, 480px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="oi-evt-detail-body section alt">
        <div className="oi-evt-detail-layout">
          <article className="oi-evt-detail-article rev">
            <div className="oi-evt-detail-block">
              <h2 className="oi-evt-detail-h2">About project</h2>
              {study.aboutParagraphs.map((p) => (
                <p key={p.slice(0, 48)} className="oi-evt-detail-p">
                  {p}
                </p>
              ))}
              <p className="oi-evt-detail-p oi-cs-goal">
                <strong>Goal: </strong>
                {study.goalParagraph}
              </p>
            </div>

            <div className="oi-evt-detail-block">
              <h2 className="oi-evt-detail-h2">Project highlights</h2>
              <ul className="oi-train-highlights">
                {study.highlights.map((item) => (
                  <li key={item} className="oi-train-highlight-row">
                    <span className="oi-train-highlight-icon" aria-hidden>
                      <CheckIcon />
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="oi-evt-detail-block">
              <h2 className="oi-evt-detail-h2">Key challenges</h2>
              <ul className="oi-train-highlights">
                {study.challenges.map((c) => (
                  <li key={c.title} className="oi-train-highlight-row">
                    <span className="oi-train-highlight-icon" aria-hidden>
                      <CheckIcon />
                    </span>
                    <p>
                      <strong>{c.title}: </strong>
                      {c.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {study.screenshots?.length ? (
              <div className="oi-evt-detail-block" id="screenshots">
                <h2 className="oi-evt-detail-h2">Screenshots</h2>
                <div className="oi-cs-screenshots-grid">
                  {study.screenshots.map((shot) => (
                    <figure key={shot.src} className="oi-cs-screenshot">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={800}
                        height={500}
                        className="oi-cs-screenshot-img"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            ) : null}

            <CaseStudySolutionsSection study={study} />

            <div className="oi-evt-detail-block">
              <h2 className="oi-evt-detail-h2">Our approach</h2>
              {study.approachIntro ? <p className="oi-evt-detail-p oi-cs-section-lead">{study.approachIntro}</p> : null}
              <div className="oi-cs-approach-grid">
                {study.approach.map((step) => {
                  const iconKey = getCaseStudyApproachIcon(step.title, step.icon);
                  return (
                    <div key={step.title} className="oi-cs-approach-card">
                      <Image
                        src={CASE_STUDY_APPROACH_ICON_SRC[iconKey]}
                        alt=""
                        width={50}
                        height={50}
                        className="oi-cs-approach-icon"
                        aria-hidden
                      />
                      <span className="oi-cs-approach-k">{step.title}</span>
                      <p>{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {study.techStackLogos?.length ? (
              <div className="oi-evt-detail-block" id="technology">
                <h2 className="oi-evt-detail-h2">Technology stack</h2>
                <div className="oi-cs-tech-grid">
                  {study.techStackLogos.map((logo) => (
                    <div key={logo.src} className="oi-cs-tech-item">
                      <Image src={logo.src} alt={logo.alt} width={120} height={48} className="oi-cs-tech-logo" />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="oi-evt-detail-block">
              <h2 className="oi-evt-detail-h2">Key results</h2>
              <div className="oi-cs-results-grid">
                {study.results.map((r) => (
                  <div key={r.label} className="oi-cs-result-card">
                    <span className="oi-cs-result-v">{r.value}</span>
                    <span className="oi-cs-result-l">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="oi-cs-testimonial rev">
              <p>&ldquo;{study.testimonial.quote}&rdquo;</p>
              <footer>
                <strong>{study.testimonial.company}</strong>
                <span>{study.testimonial.role}</span>
              </footer>
            </blockquote>
          </article>

          <aside className="oi-evt-detail-aside rev">
            <div className="oi-evt-aside-card">
              <h2 className="oi-evt-aside-title">At a glance</h2>
              <dl className="oi-evt-aside-dl">
                <div>
                  <dt>Client</dt>
                  <dd>{study.clientLabel}</dd>
                </div>
                <div>
                  <dt>Business</dt>
                  <dd>{study.businessType}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{study.location}</dd>
                </div>
              </dl>
              <div className="oi-cs-aside-metrics">
                {study.metrics.map((m) => (
                  <div key={m.label} className="oi-cs-aside-metric">
                    <span className="oi-cs-stat-v">{m.value}</span>
                    <span className="oi-cs-stat-l">{m.label}</span>
                  </div>
                ))}
              </div>
              <Link className="oi-evt-aside-cta" href="/contact-us">
                Discuss your project
                <ArrowRightIcon />
              </Link>
            </div>
            <Link className="oi-evt-back" href="/case-study">
              ← All case studies
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="oi-cs-related section">
          <div className="oi-cs-list-inner">
            <div className="oi-cs-grid-head rev">
              <div className="eyebrow">Similar projects</div>
              <h2 className="sec-h">
                More <span className="ai">case studies</span>
              </h2>
            </div>
            <ul className="oi-cs-related-grid">
              {related.map((cs) => (
                <li key={cs.slug} className="oi-cs-related-card">
                  <span className="oi-cs-client">{cs.clientLabel}</span>
                  <h3>
                    <Link href={caseStudyPath(cs.slug)}>{cs.title}</Link>
                  </h3>
                  <p>{cs.excerpt.slice(0, 140)}…</p>
                  <Link href={caseStudyPath(cs.slug)} className="oi-cs-related-link">
                    View case study →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="oi-supp" id="contact">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Get in touch</div>
            <h2>
              Ready for <span>similar results?</span>
            </h2>
            <p>Talk to Wan Buffer about Odoo ERP, integrations, and custom software for your industry.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <div className="oi-supp-icon-v2">
                <MailIcon />
              </div>
              <div className="oi-supp-label">Enquiries</div>
              <Link className="oi-supp-title-v2" href="/contact-us">
                Contact us
              </Link>
              <p className="oi-supp-body-v2">Tell us about your industry, stack, and goals.</p>
              <Link className="oi-supp-cta-v2" href="/contact-us">
                Open form <ArrowRightIcon />
              </Link>
            </div>
            <div className="oi-supp-card">
              <div className="oi-supp-icon-v2">
                <PhoneCallIcon />
              </div>
              <div className="oi-supp-label">Phone</div>
              <a className="oi-supp-title-v2" href="tel:+919825555555">
                +91 98255 55555
              </a>
              <p className="oi-supp-body-v2">Speak with our delivery team directly.</p>
              <a className="oi-supp-cta-v2" href="tel:+919825555555">
                Call now <ArrowRightIcon />
              </a>
            </div>
            <div className="oi-supp-card">
              <div className="oi-supp-icon-v2">
                <ArrowRightIcon />
              </div>
              <div className="oi-supp-label">Odoo services</div>
              <Link className="oi-supp-title-v2" href="/odoo/implementation">
                Odoo implementation
              </Link>
              <p className="oi-supp-body-v2">See how we deliver ERP projects end to end.</p>
              <Link className="oi-supp-cta-v2" href="/odoo/implementation">
                Learn more <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
