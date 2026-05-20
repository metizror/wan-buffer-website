"use client";

import { useFaqAccordionInit } from "@/lib/use-faq-accordion-init";

const customizationFaq = [
  {
    q: "Why Wan Buffer Services for Odoo Customization?",
    a: "We offer complete customisation services for Odoo, the company management software you need to run and organise your operations. Rudimentary business analysis is necessary to grasp the intricacies of business processes and needs. From installing Odoo to implementing specialised modules and providing after-the-fact support, Wan Buffer Services has you covered.",
  },
  {
    q: "Why choose Wan Buffer Services over freelancers for Odoo customization?",
    a: "Wan Buffer Services is an approved Odoo partner you can trust. We excel in Odoo consultancy, Odoo installation, Odoo customization, and Odoo training. Enterprise Edition source code access for authorised signatories expedites problem response.",
  },
  {
    q: "How do Wan Buffer Services' customization options help achieve your organization's objectives?",
    a: "It is beneficial in the short and long term. It gives you access to the features your company needs to thrive. While implementing the customization, we consider business needs and internal processes. We guarantee that the alterations will work perfectly for your company.",
  },
  {
    q: "Why do Odoo partners have higher pricing compared to independent contractors?",
    a: "Odoo partners command a higher rate because they provide reliable, long-term support. Partners are certified in Odoo and bring proven expertise. Their costs are modest in light of the company's projected longevity.",
  },
  {
    q: "What are the steps to customize an Odoo module?",
    a: "Requirement analysis involves studying current business workflows, understanding pitfalls that limit returns and efficiency, and performing gap analysis to bridge current inefficiencies with future improvements. Wan Buffer customizes modules as per your need—through our eight-step process from requirement gathering to delivery.",
  },
] as const;

export function OdooCustomizationFaq() {
  useFaqAccordionInit();

  return (
    <section className="faq-section" itemScope itemType="https://schema.org/FAQPage" id="faq">
      <div className="faq-inner">
        <div className="faq-left rev">
          <div className="eyebrow">Frequently asked questions</div>
          <h2 className="sec-h">
            Odoo customization <span className="acc">FAQs</span>
          </h2>
          <p className="sec-p">Common questions about our customization process, pricing, and why to work with an Odoo partner.</p>
        </div>

        <div className="faq-list rev" id="faqList">
          {customizationFaq.map((item, idx) => (
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
                onClick={(e) => (window as Window & { toggleFaq?: (el: HTMLElement) => void }).toggleFaq?.(e.currentTarget)}
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
