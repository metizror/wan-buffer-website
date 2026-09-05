"use client";

import { useFaqAccordionInit } from "@/lib/use-faq-accordion-init";

export function HomeFaq() {
  useFaqAccordionInit();

  return (
    <section className="faq-section" itemScope itemType="https://schema.org/FAQPage">
      <div className="faq-inner">
        {/* LEFT sticky col */}
        <div className="faq-left rev">
          <div className="eyebrow">Questions &amp; Answers</div>
          <h2 className="sec-h">
            Answers to Your <span className="acc">FAQs</span>
          </h2>
          <p className="sec-p">
            Everything you need to know about our AI-powered ERP services, engagement models, and how we work.
          </p>
          <div className="faq-cats">
            <button
              className="faq-cat active"
              type="button"
              onClick={(e) => (window as any).filterFaq?.("all", e.currentTarget)}
            >
              All Questions
            </button>
            <button className="faq-cat" type="button" onClick={(e) => (window as any).filterFaq?.("ai", e.currentTarget)}>
              AI &amp; Automation
            </button>
            <button
              className="faq-cat"
              type="button"
              onClick={(e) => (window as any).filterFaq?.("erp", e.currentTarget)}
            >
              ERP &amp; Odoo
            </button>
            <button
              className="faq-cat"
              type="button"
              onClick={(e) => (window as any).filterFaq?.("engage", e.currentTarget)}
            >
              Engagement
            </button>
          </div>
        </div>

        {/* RIGHT accordion */}
        <div className="faq-list rev" id="faqList">
          <div
            className="faq-item open"
            data-cat="ai"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button className="faq-q" type="button" onClick={(e) => (window as any).toggleFaq?.(e.currentTarget)}>
              <span className="faq-q-text" itemProp="name">
                What exactly is the "AI Agent + Human Team" engagement model?
              </span>
              <span className="faq-arrow">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                We pair AI agents with senior Wan Buffer engineers. The agents take the repetitive ERP work: purchase
                orders, invoices, stock updates, alerts. The engineers handle custom logic, exceptions, architecture,
                and the parts that need judgment. Most clients spend about 50–70% less than a fully human team, with
                the same quality checks.
                <div>
                  <span className="faq-tag">⚡ New Model</span>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-item" data-cat="ai">
            <button className="faq-q" type="button" onClick={(e) => (window as any).toggleFaq?.(e.currentTarget)}>
              <span className="faq-q-text" itemProp="name">
                What AI do you use? Do you train custom models or plug in existing LLMs?
              </span>
              <span className="faq-arrow">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                Both. For most ERP automation we wire in proven models (GPT-4o, Claude, Mistral) through LangChain or
                LlamaIndex. That ships faster and holds up in production. For demand, quality defects, or churn we
                train models on your own ERP history with TensorFlow and Scikit-learn. We pick the path based on your
                data, how fast it needs to respond, and budget.
              </div>
            </div>
          </div>

          <div className="faq-item" data-cat="erp">
            <button className="faq-q" type="button" onClick={(e) => (window as any).toggleFaq?.(e.currentTarget)}>
              <span className="faq-q-text" itemProp="name">
                Which Odoo versions do you support, and can you migrate from older versions?
              </span>
              <span className="faq-arrow">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                We actively develop and support Odoo 16, 17, and 18. We also handle migrations from older versions (v12,
                v13, v14, v15), including custom module migration, data migration, and post-migration validation. Our
                migration projects use a proven 4-phase framework: audit → rebuild → migrate → validate, with zero
                downtime for most configurations. We also support Odoo Community and Odoo Enterprise.
              </div>
            </div>
          </div>

          <div className="faq-item" data-cat="erp">
            <button className="faq-q" type="button" onClick={(e) => (window as any).toggleFaq?.(e.currentTarget)}>
              <span className="faq-q-text" itemProp="name">
                How long does a typical Odoo implementation take?
              </span>
              <span className="faq-arrow">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                It depends on scope and complexity. A standard Odoo implementation (5–8 modules, moderate customisation)
                typically takes 8–14 weeks. Complex multi-company, multi-warehouse projects with AI integrations take
                16–24 weeks. Our pre-built accelerators and reusable AI module templates shorten timelines by
                approximately 40% compared to typical implementations. We always agree on a timeline at the start of the
                project and track it weekly with you.
              </div>
            </div>
          </div>

          <div className="faq-item" data-cat="ai">
            <button className="faq-q" type="button" onClick={(e) => (window as any).toggleFaq?.(e.currentTarget)}>
              <span className="faq-q-text" itemProp="name">
                Is my ERP data safe when you integrate AI? Where does data go?
              </span>
              <span className="faq-arrow">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                Data security is non-negotiable. We sign an NDA before any data is shared. For cloud AI integrations
                (OpenAI, etc.) we use API calls with no training data retention, and we can route data through private
                endpoints. For sensitive industries (healthcare, finance) we deploy local/on-premise AI models so your
                data never leaves your infrastructure. All our AI architectures comply with GDPR for EU clients and can
                be tailored to meet UAE PDPL, India DPDP, and GCC regulatory requirements.
              </div>
            </div>
          </div>

          <div className="faq-item" data-cat="engage">
            <button className="faq-q" type="button" onClick={(e) => (window as any).toggleFaq?.(e.currentTarget)}>
              <span className="faq-q-text" itemProp="name">
                How do I choose between Project-Based, Dedicated Team, and Retainer models?
              </span>
              <span className="faq-arrow">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <strong>Project-Based</strong> works best when you have a clearly defined deliverable, an Odoo
                implementation, a specific AI module, or a migration, with a fixed budget. <strong>Dedicated Team</strong>{" "}
                is ideal when you have ongoing development needs, need direct control over engineers, or want to scale a
                tech team without hiring in-house. <strong>Retainer</strong> suits businesses that already have Odoo live
                and want continuous improvement, priority support, and quarterly AI audits. <strong>AI Agent + Human Team</strong>{" "}
                is our most innovative model for ongoing operations where cost efficiency and automation maturity are
                priorities.
              </div>
            </div>
          </div>

          <div className="faq-item" data-cat="engage">
            <button className="faq-q" type="button" onClick={(e) => (window as any).toggleFaq?.(e.currentTarget)}>
              <span className="faq-q-text" itemProp="name">
                Do you offer post-launch support and what does it include?
              </span>
              <span className="faq-arrow">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                Yes. All project-based engagements include 3 months of free post-launch support covering bug fixes, minor
                configuration changes, and user query resolution. After that, we offer SLA-based support plans with
                response times from 4 hours (critical) to 1 business day (standard). Our Retainer model includes proactive
                monitoring, quarterly ERP health audits, and AI model performance reviews. We maintain a dedicated
                support portal for all active clients.
              </div>
            </div>
          </div>

          <div className="faq-item" data-cat="erp">
            <button className="faq-q" type="button" onClick={(e) => (window as any).toggleFaq?.(e.currentTarget)}>
              <span className="faq-q-text" itemProp="name">
                Can you integrate Odoo with our existing tools like Salesforce, Shopify, or third-party APIs?
              </span>
              <span className="faq-arrow">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                Absolutely. Integration is one of our strongest capabilities. We build REST API, webhook, and
                middleware-based integrations between Odoo and virtually any external platform. Salesforce, HubSpot,
                Shopify, Magento, WooCommerce, payment gateways (Stripe, PayTabs), shipping providers (FedEx, DHL, Aramex),
                custom ERPs, and more. We also use Zapier, Make (Integromat), and Kafka for event-driven integrations.
                Every integration is thoroughly tested with automated test suites before go-live.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

