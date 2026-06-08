"use client";

import { useFaqAccordionInit } from "@/lib/use-faq-accordion-init";
import type { OdooAppFaq } from "@/lib/odoo-apps-data";

interface OdooAppFaqProps {
  appName: string;
  faqs: OdooAppFaq[];
}

export function OdooAppFaqSection({ appName, faqs }: OdooAppFaqProps) {
  useFaqAccordionInit();

  return (
    <section className="faq-section" itemScope itemType="https://schema.org/FAQPage" id="faq">
      <div className="faq-inner">
        <div className="faq-left rev">
          <div className="eyebrow">Frequently asked questions</div>
          <h2 className="sec-h">
            {appName} <span className="acc">FAQs</span>
          </h2>
          <p className="sec-p">Common questions about setup, licensing, and day-to-day use.</p>
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
                <div className="faq-a-inner" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
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
