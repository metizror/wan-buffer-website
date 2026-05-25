"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

const INDUSTRIES = [
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376184/education_bg1djn.webp",
    title: "Education",
    description: "Empower institutions with innovative software solutions designed to enhance learning and streamline educational administration.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376183/hospitality_hzyplg.webp",
    title: "Hospitality",
    description: "Transform your hospitality services with cutting-edge technology that enhances guest experiences and optimizes operations.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376184/retail_qhnnzs.webp",
    title: "Retail",
    description: "Boost your retail business with customized software solutions that improve customer engagement and streamline sales processes.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376182/health-care_mmjbzh.webp",
    title: "Healthcare",
    description: "Enhance patient care and operational efficiency with our healthcare software solutions to meet your facility's needs.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376182/real-estate_vuhzns.webp",
    title: "Real Estate",
    description: "Elevate your real estate business with technology solutions that simplify property management & client interactions.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376182/goverment_aqnndg.webp",
    title: "Government",
    description: "Modernize public services and improve citizen engagement with innovative government software solutions.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376183/manufacturing_d2wh2i.webp",
    title: "Manufacturing",
    description: "Optimize your manufacturing processes and improve product quality with our tailored software solutions.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376181/hr-payroll_sidckg.webp",
    title: "HR & Payroll",
    description: "Streamline your HR and payroll operations with software designed to manage employee data and ensure accurate payroll processing.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376181/travel_gyvaq5.webp",
    title: "Travel",
    description: "Enhance your travel services with technology that offers seamless booking experiences and improves customer satisfaction.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376182/restaurants_divzbh.webp",
    title: "Restaurants",
    description: "Revamp your restaurant operations with software solutions that improve order management and customer experiences.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376182/media-ott_gia2pc.webp",
    title: "Media & OTT",
    description: "Drive your media and OTT platform's growth with software that improves content delivery and user engagement.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1733376181/logistic_ysf2ag.webp",
    title: "Logistics",
    description: "Optimize your logistics and supply chain operations with technology that ensures transportation and inventory management.",
  },
];

export function WanbufferiansIndustries() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [maxIdx, setMaxIdx] = useState(0);

  const calcMax = useCallback(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return;
    const scrollable = track.scrollWidth - wrap.clientWidth;
    if (scrollable <= 0) { setMaxIdx(0); return; }
    const cards = track.querySelectorAll<HTMLElement>(".wb-ind-card");
    if (!cards.length) return;
    const cardW = cards[0].offsetWidth + 20; // card width + gap
    const steps = Math.ceil(scrollable / cardW);
    setMaxIdx(steps);
  }, []);

  useEffect(() => {
    calcMax();
    window.addEventListener("resize", calcMax);
    return () => window.removeEventListener("resize", calcMax);
  }, [calcMax]);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(maxIdx, i + 1));

  // Calculate pixel offset so last card is fully visible
  const getOffset = () => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return 0;
    const cards = track.querySelectorAll<HTMLElement>(".wb-ind-card");
    if (!cards.length) return 0;
    const cardW = cards[0].offsetWidth + 20;
    const maxScroll = track.scrollWidth - wrap.clientWidth;
    const desired = idx * cardW;
    return Math.min(desired, maxScroll);
  };

  return (
    <section className="wb-ind-section section alt">
      <div className="wb-ind-inner">
        <div className="wb-ind-layout">

          {/* Left info panel */}
          <div className="wb-ind-info rev">
            <div className="eyebrow">Sectors we serve</div>
            <h2 className="sec-h">Industries</h2>
            <p className="wb-ind-desc">
              Wan Buffer is your one-stop software development company, offering a full range of
              services for all industries. Drive your business progress with smart tech decisions
              tailored to a specific field.
            </p>
            <a href="/industries" className="wb-ind-discover-btn">
              Discover More
            </a>
          </div>

          {/* Cards track */}
          <div className="wb-ind-track-wrap" ref={wrapRef}>
            <div
              className="wb-ind-track"
              ref={trackRef}
              style={{
                transform: `translateX(-${getOffset()}px)`,
              }}
            >
              {INDUSTRIES.map((ind) => (
                <a
                  key={ind.title}
                  href="https://wanbuffer.com/odoo/"
                  target="_blank"
                  rel="noreferrer"
                  className="wb-ind-card"
                >
                  <div className="wb-ind-card-img-wrap">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      width={600}
                      height={400}
                      className="wb-ind-card-img"
                      sizes="(max-width: 768px) 80vw, 300px"
                    />
                  </div>
                  <div className="wb-ind-card-body">
                    <h3 className="wb-ind-card-title">{ind.title}</h3>
                    <p className="wb-ind-card-desc">{ind.description}</p>
                    <span className="wb-ind-card-link">View More</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Navigation */}
        <div className="wb-ind-nav">
          <button className="wb-ind-nav-btn" onClick={prev} disabled={idx === 0} aria-label="Previous">
            <ChevronLeftIcon />
          </button>
          <button className="wb-ind-nav-btn" onClick={next} disabled={idx >= maxIdx} aria-label="Next">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
