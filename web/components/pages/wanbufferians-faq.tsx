"use client";

import { useFaqAccordionInit } from "@/lib/use-faq-accordion-init";

const wanbufferiansFaq = [
  {
    q: "What is Wanbuffer's mission?",
    a: "Wanbuffer's mission is to drive innovation and excellence through cutting-edge technology solutions, empowering businesses to achieve their goals with efficiency and effectiveness.",
  },
  {
    q: "How does Wanbuffer support its clients?",
    a: "Wanbuffer supports its clients by offering personalized consultations, expert advice, and customized solutions tailored to meet the unique needs and challenges of each business.",
  },
  {
    q: "What makes Wanbuffer's technology solutions unique?",
    a: "Wanbuffer's technology solutions are unique due to their innovative approach, use of advanced technologies, and commitment to delivering high-quality, scalable, and effective solutions that address real-world problems.",
  },
  {
    q: "How does Wanbuffer ensure the success of its projects?",
    a: "Wanbuffer ensures project success through meticulous planning, robust execution strategies, regular client communication, and continuous performance monitoring to meet and exceed client expectations.",
  },
  {
    q: "What types of businesses can benefit from Wanbuffer's services?",
    a: "Wanbuffer's services are designed to benefit a wide range of businesses, from startups to established enterprises, across various industries, by providing tailored solutions that drive growth and operational efficiency.",
  },
  {
    q: "How can I get in touch with Wanbuffer for a consultation?",
    a: "You can get in touch with Wanbuffer for a consultation by visiting our website's contact page, filling out the inquiry form, or reaching out to us directly via email or phone.",
  },
] as const;

export function WanbufferiansFaq() {
  useFaqAccordionInit();

  return (
    <section className="faq-section" itemScope itemType="https://schema.org/FAQPage" id="wanbufferians-faq">
      <div className="faq-inner">
        <div className="faq-left rev">
          <div className="eyebrow">Frequently Asked Questions</div>
          <h2 className="sec-h">
            About <span className="acc">Wan Buffer</span>
          </h2>
          <p className="sec-p">Learn more about our mission, services, and how we can help your business grow.</p>
        </div>

        <div className="faq-list rev" id="faqList">
          {wanbufferiansFaq.map((item, idx) => (
            <div
              key={item.q}
              className={`faq-item${idx === 0 ? " open" : ""}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button className="faq-q" type="button" onClick={(e) => (window as any).toggleFaq?.(e.currentTarget)}>
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
