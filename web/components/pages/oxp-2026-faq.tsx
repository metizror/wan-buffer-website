"use client";

import { useFaqAccordionInit } from "@/lib/use-faq-accordion-init";

export interface Oxp2026Faq {
  q: string;
  a: string;
}

interface Oxp2026FaqSectionProps {
  faqs: Oxp2026Faq[];
}

export function Oxp2026FaqSection({ faqs }: Oxp2026FaqSectionProps) {
  useFaqAccordionInit();

  return (
    <section className="faq-section" itemScope itemType="https://schema.org/FAQPage" id="faq">
      <div className="faq-inner">
        <div className="faq-left rev">
          <div className="eyebrow">Frequently asked questions</div>
          <h2 className="sec-h">
            Odoo Experience <span className="acc">2026 India</span>
          </h2>
          <p className="sec-p">
            What the event covers, who it is for, and how to book time with our team while we are there.
          </p>
        </div>

        <div className="faq-list rev" id="faqList">
          {faqs.map((item, idx) => (
            <div
              key={item.q}
              className={`faq-item${idx === 0 ? " open" : ""}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                type="button"
                onClick={(e) =>
                  (window as Window & { toggleFaq?: (el: HTMLElement) => void }).toggleFaq?.(
                    e.currentTarget,
                  )
                }
              >
                <span className="faq-q-text" itemProp="name">
                  {item.q}
                </span>
                <span className="faq-arrow">+</span>
              </button>
              <div className="faq-a">
                <div
                  className="faq-a-inner"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{item.a}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
