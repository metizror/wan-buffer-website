import Image from "next/image";
import { HomeLogoBar } from "@/components/home/logo-bar";
import { ArrowRightIcon } from "@/components/services/odoo-service-icons";
import { WanbufferiansCarousel } from "@/components/pages/wanbufferians-case-studies";
import { WanbufferiansIndustries } from "@/components/pages/wanbufferians-industries";
import { WanbufferiansTestimonials } from "@/components/pages/wanbufferians-testimonials";

const VALUES = [
  "Deliver value through every action",
  "Promote fair and inclusive growth",
  "Foster workplace excellence",
  "Embrace responsibility",
  "Act compassionately",
  "Uphold principles",
] as const;

const TIMELINE = [
  {
    year: "October 2018",
    title: "Laying a Root of Wan Buffer with Vision and Dedication",
    image: "/wanbufferians/timeline-2018.webp",
    description:
      "A journey that began with a shared belief in '\u0938\u0930\u094D\u0935\u0947 \u0915\u0930\u094D\u092E\u0935\u0936\u093E \u0935\u092F\u092E\u094D\u0964' and '\u0935\u0938\u0941\u0927\u0948\u0935 \u0915\u0941\u091F\u0941\u092E\u094D\u092C\u0915\u0902,' where a group of passionate engineers came together with a mission to create innovative solutions.",
    stats: [
      { n: "10", l: "Engineers" },
      { n: "200", l: "Sq ft office" },
    ],
    highlights: [
      "Started with 10 Engineers",
      "200 Square Feet Office",
      "Focused on Mobile Application Development",
      "Established a Collaborative Environment",
      "Laid the Foundation for Future Growth",
      "First Project Completed Successfully",
    ],
  },
  {
    year: "August 2025",
    title: "Navigating the Future with Tech and Timeless Principles",
    image: "/wanbufferians/timeline-2025.webp",
    description:
      "Grown into a global team delivering enterprise-grade solutions across continents, guided by the same values that started the journey.",
    stats: [
      { n: "50+", l: "InHouse Employees" },
      { n: "250+", l: "Projects Delivered" },
      { n: "60+", l: "Clients Served" },
      { n: "1,400", l: "Sq ft HQ" },
    ],
    highlights: [
      "Grown to 50+ inHouse Employees",
      "Delivered more than 250+ Projects",
      "Adopt Multiple Technology",
      "Served 60+ Clients till date",
      "Begin operation in EU, MESA Region",
      "New Corporate headquarter with 1400 Square feet",
    ],
  },
] as const;

const GALLERY = [
  { src: "/wanbufferians/gallery-1.webp", alt: "Wan Buffer team and workspace" },
  { src: "/wanbufferians/gallery-2.webp", alt: "Wan Buffer team collaboration" },
  { src: "/wanbufferians/gallery-3.webp", alt: "Wan Buffer office environment" },
  { src: "/wanbufferians/gallery-4.webp", alt: "Wan Buffer corporate headquarters" },
] as const;

const HERO_STATS = [
  { n: "50+", l: "Employees" },
  { n: "250+", l: "Projects" },
  { n: "60+", l: "Clients" },
  { n: "20+", l: "Nations" },
] as const;

export function WanbufferiansContent() {
  return (
    <main className="svc-page">
      {/* HERO */}
      <section className="wb-about-hero">
        <div className="wb-about-hero-bg" aria-hidden="true" />
        <div className="wb-about-hero-inner rev">
          <div className="wb-about-hero-copy">
            <div className="eyebrow lt">{"\u0935\u0938\u0941\u0927\u0948\u0935 \u0915\u0941\u091F\u0941\u092E\u094D\u092C\u0915\u0902"}</div>
            <h1 className="wb-about-hero-h">
              Wan <span className="ai">Buffer</span>
            </h1>
            <p className="wb-about-hero-sub">
              At Wan Buffer, we are a global family committed to innovation and excellence. Since 2018, our diverse team
              has built impactful software solutions that empower businesses worldwide.
            </p>
            <div className="wb-about-hero-cta">
              <a
                className="btn-r"
                href="https://book-a-demo-wanbuffer-odoo-expert.odoo.com/book/WanBufferians"
                target="_blank"
                rel="noreferrer"
              >
                <span>Book A Meeting</span>
              </a>
              <a className="btn-o" href="#journey">
                Our Journey
              </a>
            </div>
          </div>
          <div className="wb-about-hero-stats">
            {HERO_STATS.map((s) => (
              <div key={s.l} className="wb-about-hero-stat">
                <div className="wb-about-hero-stat-n">{s.n}</div>
                <div className="wb-about-hero-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeLogoBar />

      {/* CORE VALUES */}
      <section className="wb-about-values section" id="values">
        <div className="wb-about-values-inner">
          <div className="wb-about-values-hdr rev">
            <div className="eyebrow">Our Values</div>
            <h2 className="sec-h">
              Driven by Karma, <span className="acc">United for Good</span>
            </h2>
          </div>

          <div className="wb-about-values-body rev">
            <div className="wb-about-values-quotes">
              <blockquote className="wb-about-sanskrit">
                <span className="wb-about-sanskrit-text">{"\u0938\u0930\u094D\u0935\u0947 \u0915\u0930\u094D\u092E\u0935\u0936\u093E \u0935\u092F\u092E\u094D\u0964"}</span>
                <cite>Everyone is governed by their actions</cite>
              </blockquote>
              <blockquote className="wb-about-sanskrit">
                <span className="wb-about-sanskrit-text">{"\u0935\u0938\u0941\u0927\u0948\u0935 \u0915\u0941\u091F\u0941\u092E\u094D\u092C\u0915\u0902"}</span>
                <cite>The world is one family</cite>
              </blockquote>
            </div>
            <p className="wb-about-values-lead">
              All WanBufferian believe in the power of karma &amp; unity of all beings. Our values drive us to deliver
              value, promote fair growth, foster workplace excellence, embrace responsibility, act compassionately &amp;
              uphold principles.
            </p>
            <ul className="wb-about-values-list">
              {VALUES.map((v) => (
                <li key={v}>
                  <span className="wb-about-values-check" aria-hidden="true">
                    ✓
                  </span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="wb-about-mv section alt">
        <div className="wb-about-mv-inner">
          <div className="wb-about-mv-card rev">
            <div className="wb-about-mv-icon-wrap">
              <Image
                src="https://res.cloudinary.com/dghplu26l/image/upload/v1731924187/wb-mission_aroq4b.svg"
                alt="Our Mission"
                width={72}
                height={72}
                className="wb-about-mv-icon-img"
              />
            </div>
            <h2 className="wb-about-mv-h">Our Mission</h2>
            <div className="wb-about-mv-divider" />
            <p>
              Our mission is to become the premier IT services provider by delivering exceptional solutions that drive
              success and innovation. We are dedicated to empowering both our clients and employees through cutting-edge
              technology and a collaborative work environment. Our approach is rooted in the values of karma, where every
              action is guided by integrity and purpose, and unity, which fosters a sense of collective achievement. We
              strive to set new standards in the industry by continuously evolving our services to meet the dynamic needs
              of the digital world while upholding our commitment to ethical practices and sustainable growth.
            </p>
          </div>

          <div className="wb-about-mv-card rev">
            <div className="wb-about-mv-icon-wrap">
              <Image
                src="https://res.cloudinary.com/dghplu26l/image/upload/v1731924191/wb-vision_vxeuk6.svg"
                alt="Our Vision"
                width={72}
                height={72}
                className="wb-about-mv-icon-img"
              />
            </div>
            <h2 className="wb-about-mv-h">Our Vision</h2>
            <div className="wb-about-mv-divider" />
            <p>
              We envision a future where our IT services company stands at the forefront of technological advancement
              and societal impact. Our vision is inspired by the guiding principles of
              &lsquo;{"\u0938\u0930\u094D\u0935\u0947 \u0915\u0930\u094D\u092E\u0935\u0936\u093E \u0935\u092F\u092E\u094D\u0964"}&rsquo; (Everyone is governed by their actions) and
              &lsquo;{"\u0935\u0938\u0941\u0927\u0948\u0935 \u0915\u0941\u091F\u0941\u092E\u094D\u092C\u0915\u0902"}&rsquo; (The world is one family). We are committed to creating
              transformative value through innovative solutions that drive fair and inclusive growth. By fostering a
              superior workplace culture, taking responsibility for our actions, and upholding the highest ethical
              standards, we aim to make a meaningful difference in the lives of our clients and contribute positively to
              the global community. Our goal is to lead by example and inspire others to embrace a similar vision of
              progress and unity.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="wb-about-journey section" id="journey">
        <div className="wb-about-journey-inner">
          <div className="wb-about-journey-hdr rev">
            <div className="eyebrow">Our Story</div>
            <h2 className="sec-h">
              Journey <span className="acc">Started</span>
            </h2>
          </div>

          <div className="wb-about-timeline">
            {TIMELINE.map((t, idx) => (
              <div key={t.year} className={`wb-about-timeline-block rev${idx % 2 === 1 ? " is-right" : ""}`}>
                <div className="wb-about-timeline-marker">
                  <span className="wb-about-timeline-dot" />
                </div>
                <div className="wb-about-timeline-card">
                  <div className="wb-about-timeline-img-wrap">
                    <Image
                      src={t.image}
                      alt={t.title}
                      width={560}
                      height={320}
                      className="wb-about-timeline-img"
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                  <div className="wb-about-timeline-year">{t.year}</div>
                  <h3 className="wb-about-timeline-title">{t.title}</h3>
                  <p className="wb-about-timeline-desc">{t.description}</p>
                  <div className="wb-about-timeline-stats">
                    {t.stats.map((s) => (
                      <div key={s.l} className="wb-about-timeline-stat">
                        <span className="wb-about-timeline-stat-n">{s.n}</span>
                        <span className="wb-about-timeline-stat-l">{s.l}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="wb-about-timeline-highlights">
                    {t.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="wb-about-timeline-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="wb-about-gallery section alt" id="gallery">
        <div className="wb-about-gallery-inner">
          <div className="wb-about-gallery-hdr rev">
            <div className="eyebrow">Life at Wan Buffer</div>
            <h2 className="sec-h">
              Our <span className="acc">Gallery</span>
            </h2>
          </div>
          <div className="wb-about-gallery-track-wrap">
            <div className="wb-about-gallery-track">
              {[...GALLERY, ...GALLERY].map((img, idx) => (
                <div key={`${img.src}-${idx}`} className="wb-about-gallery-slide">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={480}
                    height={320}
                    className="wb-about-gallery-img"
                    sizes="(max-width: 768px) 80vw, 400px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES CAROUSEL */}
      <WanbufferiansCarousel />

      {/* LET'S DISCUSS + TESTIMONIALS */}
      <WanbufferiansTestimonials />

      {/* INDUSTRIES */}
      <WanbufferiansIndustries />

    </main>
  );
}
