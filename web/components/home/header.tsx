"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";

interface HomeHeaderProps {
  children?: ReactNode;
}

/* ── Mobile menu data — mirrors desktop mega-menu exactly ── */
const MOB_MENU = [
  {
    label: "AI & Automation",
    href: "/#ai-services",
    accent: "ai" as const,
    sections: [
      {
        title: "AI Services",
        subs: [
          { label: "AI Agents for ERP", href: "/ai-agents-for-erp" },
          { label: "Workflow Automation", href: "/workflow-automation" },
          { label: "Predictive Analytics", href: "/predictive-analytics" },
          { label: "AI Chatbots & Copilots", href: "/ai-chatbots" },
        ],
      },
      {
        title: "Capabilities",
        subs: [
          { label: "LangChain & LLM Integration", href: "/langchain-llm-integration" },
          { label: "ML-Powered Insights", href: "/ml-powered-insights" },
          { label: "RPA & Process Mining", href: "/rpa-process-mining" },
          { label: "AI Governance & Ethics", href: "/ai-governance" },
        ],
      },
      {
        title: "Use Cases",
        subs: [
          { label: "Smart Inventory Management", href: "/smart-inventory-management" },
          { label: "Automated Invoice Processing", href: "/automated-invoice-processing" },
          { label: "Predictive Maintenance", href: "/predictive-maintenance" },
          { label: "AI-Assisted HR & Payroll", href: "/ai-hr-payroll" },
        ],
      },
    ],
  },
  {
    label: "ERP",
    href: "/#platforms",
    accent: null,
    sections: [
      {
        title: "Odoo",
        subs: [
          { label: "Odoo Implementation", href: "/odoo/implementation" },
          { label: "Odoo Customisation", href: "/odoo/odoo-customization-and-installation" },
          { label: "Odoo Migration", href: "/odoo/migration" },
          { label: "Odoo Integration", href: "/odoo/odoo-erp-integration" },
          { label: "Odoo Apps", href: "/odoo/apps" },
          { label: "Odoo Training", href: "/odoo/training" },
          { label: "Odoo Hosting", href: "/odoo/hosting" },
        ],
      },
      {
        title: "Zoho & Salesforce",
        subs: [
          { label: "Zoho CRM Implementation", href: "/zoho-crm-implementation" },
          { label: "Zoho Books & Finance", href: "/zoho-books-finance" },
          { label: "Salesforce CRM Setup", href: "/salesforce-crm-setup" },
          { label: "Odoo ↔ Salesforce Sync", href: "/odoo-salesforce-sync" },
        ],
      },
      {
        title: "All ERP Services",
        subs: [
          { label: "ERP Consulting", href: "/erp-consulting" },
          { label: "Inventory & WMS", href: "/inventory-wms" },
          { label: "Finance & Accounting", href: "/finance-accounting" },
          { label: "HR & Payroll", href: "/hr-payroll" },
          { label: "ERP Support & AMC", href: "/erp-support-amc" },
        ],
      },
    ],
  },
  {
    label: "eCommerce",
    href: "/#platforms",
    accent: null,
    sections: [
      {
        title: "Magento",
        subs: [
          { label: "Magento Development", href: "/magento-development" },
          { label: "Magento → Odoo Integration", href: "/magento-odoo-integration" },
          { label: "Performance Optimisation", href: "/magento-performance" },
          { label: "Magento Security & AMC", href: "/magento-security-amc" },
        ],
      },
      {
        title: "Shopify",
        subs: [
          { label: "Shopify Store Setup", href: "/shopify-store-setup" },
          { label: "Shopify → Odoo Integration", href: "/shopify-odoo-integration" },
          { label: "Payment & Razorpay Setup", href: "/payment-razorpay-setup" },
          { label: "Shopify Analytics + AI", href: "/shopify-analytics-ai" },
        ],
      },
      {
        title: "More Services",
        subs: [
          { label: "AI Product Recommendations", href: "/ai-product-recommendations" },
          { label: "Multi-Warehouse + 3PL Sync", href: "/multi-warehouse-3pl" },
          { label: "AI Customer Support Bot", href: "/ai-customer-support-bot" },
          { label: "Multi-Currency & Multi-Region", href: "/multi-currency-multi-region" },
          { label: "eCommerce SEO & CRO", href: "/ecommerce-seo-cro" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    accent: null,
    sections: [
      {
        title: "Products & Goods",
        subs: [
          { label: "Manufacturing", href: "/manufacturing" },
          { label: "Retail & eCommerce", href: "/retail-ecommerce" },
          { label: "Steel & Metal Fabrication", href: "/steel-metal-fabrication" },
          { label: "Textile & Apparel", href: "/textile-apparel" },
        ],
      },
      {
        title: "Operations & Services",
        subs: [
          { label: "Logistics & 3PL", href: "/logistics-3pl" },
          { label: "Healthcare", href: "/healthcare" },
          { label: "Finance & Services", href: "/finance-services" },
          { label: "Construction & Projects", href: "/construction-projects" },
        ],
      },
      {
        title: "Markets",
        subs: [
          { label: "Real Estate", href: "/real-estate" },
          { label: "GCC & Middle East", href: "/gcc-middle-east" },
          { label: "India Market", href: "/india-market" },
          { label: "USA & Europe", href: "/usa-europe" },
        ],
      },
    ],
  },
];

const MOB_MENU_EXTRA = [
  {
    label: "Engagement",
    href: "/engagement",
    accent: null,
    sections: [
      {
        title: "Engagement Models",
        subs: [
          { label: "Project-Based", href: "/project-based" },
          { label: "AI Agent + Human Team", href: "/ai-agent-human-team" },
          { label: "Dedicated Team", href: "/dedicated-team" },
          { label: "Retainer Model", href: "/retainer-model" },
        ],
      },
    ],
  },
  {
    label: "Insights",
    href: "/blogs",
    accent: null,
    sections: [
      {
        title: "Blog & Articles",
        subs: [
          { label: "Essential Odoo Integrations for 2025", href: "/blogs/essential-odoo-integrations-u-s-companies-need-in-2025-shopify-amazon-quickbooks" },
          { label: "Why Generic ERP Fails for Oil & Gas", href: "/blogs/why-generic-erp-fails-for-oil-and-gas-suppliers" },
          { label: "Dedicated Teams vs In-House Hiring", href: "/blogs/dedicated-engineering-teams-vs-in-house-hiring-for-erp-projects" },
        ],
      },
      {
        title: "Case Studies",
        subs: [
          { label: "Textile Industry — Odoo ERP", href: "/case-study/odoo-erp-implementation-in-the-textile-industry" },
          { label: "Steel Product Customization", href: "/case-study/odoo-steel-solution" },
          { label: "eCommerce Retailer Integration", href: "/case-study/odoo-integration-ecommerce-retailer" },
        ],
      },
      {
        title: "Company",
        subs: [
          { label: "Events & Webinars", href: "/event" },
          { label: "Careers & Recruitment", href: "/wanbufferians" },
        ],
      },
    ],
  },
];

const MOB_PLAIN = [
  { label: "Events", href: "/event" },
  { label: "Contact", href: "/contact-us" },
];

export function HomeHeader(_props: HomeHeaderProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  function toggle(idx: number) {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  }

  function closeNav() {
    (window as any).closeNav?.();
    setOpenIdx(null);
  }

  return (
    <>
      {/* ══ MOBILE NAV ══ */}
      <div className="mob-nav" id="mobNav">
        <button className="mob-close" type="button" onClick={closeNav}>
          ✕
        </button>

        {/* Accordion categories */}
        {[...MOB_MENU, ...MOB_MENU_EXTRA].map((item, idx) => (
          <div key={item.label}>
            <div
              className={`mob-cat${openIdx === idx ? " open" : ""}`}
              onClick={() => toggle(idx)}
            >
              <span className={`mob-cat-label${item.accent === "ai" ? " ai" : ""}`}>
                {item.accent === "ai" && "⚡ "}
                {item.label}
              </span>
              <span className="mob-cat-arrow" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            <div className={`mob-cat-subs${openIdx === idx ? " open" : ""}`}>
              {item.sections.map((sec) => (
                <div key={sec.title}>
                  <span className="mob-cat-section-tag">{sec.title}</span>
                  {sec.subs.map((sub) => (
                    <Link
                      key={sub.label}
                      className="mob-cat-sub"
                      href={sub.href}
                      onClick={closeNav}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Plain links */}
        {MOB_PLAIN.map((item) => (
          <Link key={item.label} className="mob-cat-plain" href={item.href} onClick={closeNav}>
            {item.label}
          </Link>
        ))}

        {/* CTA buttons */}
        <div className="mob-btns">
          <Link className="mob-btn-ai" href="/#ai-services" onClick={closeNav}>
            Explore AI Services ⚡
          </Link>
          <Link className="mob-btn-r" href="/contact-us" onClick={closeNav}>
            Book a Discovery Call
          </Link>
        </div>
      </div>

      {/* ══ TICKER ══ */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-t">
          <span className="t-item">
            AI-Powered ERP Solutions <span className="t-dot">●</span> USA · Canada · UAE · Germany · Morocco · India
          </span>
          <span className="t-item">
            Odoo <span className="t-dot-r">●</span> Zoho <span className="t-dot-r">●</span> Salesforce{" "}
            <span className="t-dot-r">●</span> Magento <span className="t-dot-r">●</span> Shopify{" "}
            <span className="t-dot">●</span> Razorpay Partner
          </span>
          <span className="t-item">
            7+ Years <span className="t-dot-r">●</span> 254+ Projects <span className="t-dot">●</span> 20+ Nations
          </span>
          <span className="t-item">
            New: AI Agent + Human Team Engagement Model <span className="t-dot">●</span> ERP. Intelligent. At Scale.
          </span>

          {/* duplicate set for seamless loop */}
          <span className="t-item">
            AI-Powered ERP Solutions <span className="t-dot">●</span> USA · Canada · UAE · Germany · Morocco · India
          </span>
          <span className="t-item">
            Odoo <span className="t-dot-r">●</span> Zoho <span className="t-dot-r">●</span> Salesforce{" "}
            <span className="t-dot-r">●</span> Magento <span className="t-dot-r">●</span> Shopify{" "}
            <span className="t-dot">●</span> Razorpay Partner
          </span>
          <span className="t-item">
            7+ Years <span className="t-dot-r">●</span> 254+ Projects <span className="t-dot">●</span> 20+ Nations
          </span>
          <span className="t-item">
            New: AI Agent + Human Team Engagement Model <span className="t-dot">●</span> ERP. Intelligent. At Scale.
          </span>
        </div>
      </div>

      {/* ══ NAV ══ */}
      {/* NOTE: markup intentionally kept identical to original for pixel-perfect UI */}
      <nav id="mainNav">
        <Link className="n-logo" href="/">
          <img
            className="n-logo-img"
            src="https://res.cloudinary.com/dghplu26l/image/upload/v1719489724/logo-black_fxcdpr.png"
            alt="Wan Buffer — Odoo AI Integration Services"
          />
          <div className="n-logo-badges">
            <span className="n-badge erp">ERP</span>
            <span className="n-badge ai-b">AI</span>
          </div>
        </Link>
        <ul className="n-links">
          {/* AI Mega-menu item */}
          <li>
            <Link href="/#ai-services" className="n-ai-link">
              AI &amp; Automation
            </Link>
            <div className="n-mega-wrap">
              <div className="n-mega">
                <div className="mega-top">
                  <div className="mega-tag">Wan Buffer AI Division</div>
                  <div className="mega-title">AI &amp; Automation for ERP</div>
                  <div className="mega-sub">
                    Purpose-built AI agents, intelligent automation, and ML-powered analytics embedded directly into
                    your ERP workflows.
                  </div>
                </div>
                <div className="mega-body">
                  <div className="mega-col">
                    <div className="mega-col-title">AI Services</div>
                    <Link className="mega-item" href="/ai-agents-for-erp">
                      <div className="mega-icon">🤖</div>
                      <div>
                        <div className="mega-item-t">AI Agents for ERP</div>
                        <div className="mega-item-s">Autonomous agents that execute ERP tasks</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/workflow-automation">
                      <div className="mega-icon">⚡</div>
                      <div>
                        <div className="mega-item-t">Workflow Automation</div>
                        <div className="mega-item-s">End-to-end process automation</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/predictive-analytics">
                      <div className="mega-icon">🧠</div>
                      <div>
                        <div className="mega-item-t">Predictive Analytics</div>
                        <div className="mega-item-s">Demand forecasting &amp; anomaly detection</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/ai-chatbots">
                      <div className="mega-icon">💬</div>
                      <div>
                        <div className="mega-item-t">AI Chatbots &amp; Copilots</div>
                        <div className="mega-item-s">Natural language ERP interaction</div>
                      </div>
                    </Link>
                  </div>
                  <div className="mega-col">
                    <div className="mega-col-title">Capabilities</div>
                    <Link className="mega-item" href="/langchain-llm-integration">
                      <div className="mega-icon">🔗</div>
                      <div>
                        <div className="mega-item-t">LangChain &amp; LLM Integration</div>
                        <div className="mega-item-s">GPT-4, Claude &amp; open-source LLMs</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/ml-powered-insights">
                      <div className="mega-icon">📊</div>
                      <div>
                        <div className="mega-item-t">ML-Powered Insights</div>
                        <div className="mega-item-s">Real-time operational intelligence</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/rpa-process-mining">
                      <div className="mega-icon">🔄</div>
                      <div>
                        <div className="mega-item-t">RPA &amp; Process Mining</div>
                        <div className="mega-item-s">Automate repetitive ERP tasks</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/ai-governance">
                      <div className="mega-icon">🛡️</div>
                      <div>
                        <div className="mega-item-t">AI Governance &amp; Ethics</div>
                        <div className="mega-item-s">Responsible AI deployment</div>
                      </div>
                    </Link>
                  </div>
                  <div className="mega-col">
                    <div className="mega-col-title">Use Cases</div>
                    <Link className="mega-item" href="/smart-inventory-management">
                      <div className="mega-icon">📦</div>
                      <div>
                        <div className="mega-item-t">Smart Inventory Management</div>
                        <div className="mega-item-s">AI-driven stock optimisation</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/automated-invoice-processing">
                      <div className="mega-icon">💰</div>
                      <div>
                        <div className="mega-item-t">Automated Invoice Processing</div>
                        <div className="mega-item-s">OCR + AI validation</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/predictive-maintenance">
                      <div className="mega-icon">🏭</div>
                      <div>
                        <div className="mega-item-t">Predictive Maintenance</div>
                        <div className="mega-item-s">AI-triggered work orders</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/ai-hr-payroll">
                      <div className="mega-icon">👥</div>
                      <div>
                        <div className="mega-item-t">AI-Assisted HR &amp; Payroll</div>
                        <div className="mega-item-s">Intelligent onboarding flows</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="mega-footer">
                  <span className="mega-footer-t">Powered by OpenAI · LangChain · Python · Odoo</span>
                  <Link className="mega-footer-a" href="/#ai-services">
                    Explore All AI Services →
                  </Link>
                </div>
              </div>
            </div>
          </li>

          {/* ERP Mega Menu */}
          <li>
            <Link href="/#platforms" className="n-erp-link">
              ERP
            </Link>
            <div className="n-mega-wrap">
              <div className="n-mega n-mega-erp">
                <div className="mega-top erp-top">
                  <div className="mega-tag">ERP Solutions</div>
                  <div className="mega-title">Odoo · Zoho · Salesforce</div>
                  <div className="mega-sub">
                    Full-cycle ERP implementation, migration, customisation, and AI integration across the world's
                    leading platforms.
                  </div>
                </div>
                <div className="mega-body mega-4col">
                  <div className="mega-col erp-col">
                    <div className="mega-col-title">Odoo</div>
                    <Link className="mega-item" href="/odoo/implementation">
                      <div className="mega-icon">⚙️</div>
                      <div>
                        <div className="mega-item-t">Odoo Implementation</div>
                        <div className="mega-item-s">End-to-end Odoo 16/17/18 setup</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/odoo/odoo-customization-and-installation">
                      <div className="mega-icon">🔧</div>
                      <div>
                        <div className="mega-item-t">Odoo Customisation</div>
                        <div className="mega-item-s">Custom modules &amp; workflows</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/odoo/migration">
                      <div className="mega-icon">🔄</div>
                      <div>
                        <div className="mega-item-t">Odoo Migration</div>
                        <div className="mega-item-s">v12–v15 → Odoo 17/18</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/odoo/odoo-erp-integration">
                      <div className="mega-icon">🔗</div>
                      <div>
                        <div className="mega-item-t">Odoo Integration</div>
                        <div className="mega-item-s">API, Shopify, Salesforce &amp; more</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/odoo/apps">
                      <div className="mega-icon">📦</div>
                      <div>
                        <div className="mega-item-t">Odoo Apps</div>
                        <div className="mega-item-s">31 modules on Odoo Apps Store</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/odoo/training">
                      <div className="mega-icon">🎓</div>
                      <div>
                        <div className="mega-item-t">Odoo Training</div>
                        <div className="mega-item-s">Functional, technical &amp; corporate</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/odoo/hosting">
                      <div className="mega-icon">☁️</div>
                      <div>
                        <div className="mega-item-t">Odoo Hosting</div>
                        <div className="mega-item-s">Online, Odoo.sh, cloud &amp; on-prem</div>
                      </div>
                    </Link>
                    <div className="mega-cs">
                      <div className="mega-cs-tag">Case Study</div>
                      <div className="mega-cs-t">Fabric Mill cuts lead time 40% with Odoo MRP + AI</div>
                      <div className="mega-cs-s">Manufacturing · India · Odoo 17</div>
                    </div>
                  </div>

                  <div className="mega-col erp-col">
                    <div className="mega-col-title">Zoho &amp; Salesforce</div>
                    <Link className="mega-item" href="/zoho-crm-implementation">
                      <div className="mega-icon">☁️</div>
                      <div>
                        <div className="mega-item-t">Zoho CRM Implementation</div>
                        <div className="mega-item-s">Sales pipeline &amp; automation</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/zoho-books-finance">
                      <div className="mega-icon">📋</div>
                      <div>
                        <div className="mega-item-t">Zoho Books &amp; Finance</div>
                        <div className="mega-item-s">Accounting, invoicing, GST</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/salesforce-crm-setup">
                      <div className="mega-icon">💼</div>
                      <div>
                        <div className="mega-item-t">Salesforce CRM Setup</div>
                        <div className="mega-item-s">B2B sales &amp; lead management</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/odoo-salesforce-sync">
                      <div className="mega-icon">🔀</div>
                      <div>
                        <div className="mega-item-t">Odoo ↔ Salesforce Sync</div>
                        <div className="mega-item-s">Bi-directional CRM + ERP bridge</div>
                      </div>
                    </Link>
                    <div className="mega-cs">
                      <div className="mega-cs-tag">Case Study</div>
                      <div className="mega-cs-t">Gulf Logistics automates 3PL ops with Zoho + AI agents</div>
                      <div className="mega-cs-s">Logistics · Kuwait · Zoho One</div>
                    </div>
                  </div>

                  <div className="mega-col erp-col">
                    <div className="mega-col-title">All ERP Services</div>
                    <Link className="mega-item" href="/erp-consulting">
                      <div className="mega-icon">🏗️</div>
                      <div>
                        <div className="mega-item-t">ERP Consulting</div>
                        <div className="mega-item-s">Scope, roadmap &amp; vendor selection</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/inventory-wms">
                      <div className="mega-icon">📦</div>
                      <div>
                        <div className="mega-item-t">Inventory &amp; WMS</div>
                        <div className="mega-item-s">Multi-warehouse, lot &amp; serial tracking</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/finance-accounting">
                      <div className="mega-icon">💳</div>
                      <div>
                        <div className="mega-item-t">Finance &amp; Accounting</div>
                        <div className="mega-item-s">Multi-currency, GCC VAT, GST e-invoicing</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/hr-payroll">
                      <div className="mega-icon">🧑‍💼</div>
                      <div>
                        <div className="mega-item-t">HR &amp; Payroll</div>
                        <div className="mega-item-s">Leave, attendance, WPS payroll</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/erp-support-amc">
                      <div className="mega-icon">🛠️</div>
                      <div>
                        <div className="mega-item-t">ERP Support &amp; AMC</div>
                        <div className="mega-item-s">SLA-based maintenance plans</div>
                      </div>
                    </Link>
                  </div>

                  <div className="mega-col mega-cta-col">
                    <div className="mega-cta-label">Why Wan Buffer</div>
                    <div className="mega-cta-h">ERP that pays for itself</div>
                    <p className="mega-cta-body">
                      We map measurable ROI outcomes before writing a single line of code. Every ERP project has
                      pre-agreed KPIs — and we track them with you weekly.
                    </p>
                    <div className="mega-cta-stat">
                      <div className="mega-cta-stat-n">40%</div>
                      <div className="mega-cta-stat-l">Faster implementation vs industry average</div>
                    </div>
                    <div className="mega-cta-stat">
                      <div className="mega-cta-stat-n">84%</div>
                      <div className="mega-cta-stat-l">Client retention rate</div>
                    </div>
                    <Link className="mega-cta-btn" href="/contact-us">
                      Free ERP Audit →
                    </Link>
                  </div>
                </div>
                <div className="mega-footer">
                  <span className="mega-footer-t">Odoo Partner · Zoho · Salesforce · Razorpay Official Partner</span>
                  <Link className="mega-footer-a" href="/#platforms">
                    Explore All ERP Services →
                  </Link>
                </div>
              </div>
            </div>
          </li>

          {/* eCommerce Mega Menu */}
          <li>
            <Link href="/#platforms" className="n-ecom-link">
              eCommerce
            </Link>
            <div className="n-mega-wrap">
              <div className="n-mega n-mega-ecom">
                <div className="mega-top ecom-top">
                  <div className="mega-tag">eCommerce Solutions</div>
                  <div className="mega-title">Magento · Shopify</div>
                  <div className="mega-sub">
                    End-to-end eCommerce development, ERP integration, AI-powered personalisation, and performance
                    optimisation for growing brands.
                  </div>
                </div>
                <div className="mega-body mega-4col">
                  <div className="mega-col ecom-col">
                    <div className="mega-col-title">Magento</div>
                    <Link className="mega-item" href="/magento-development">
                      <div className="mega-icon">🏪</div>
                      <div>
                        <div className="mega-item-t">Magento Development</div>
                        <div className="mega-item-s">Custom themes &amp; module dev</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/magento-odoo-integration">
                      <div className="mega-icon">⚙️</div>
                      <div>
                        <div className="mega-item-t">Magento → Odoo Integration</div>
                        <div className="mega-item-s">Real-time inventory &amp; order sync</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/magento-performance">
                      <div className="mega-icon">🚀</div>
                      <div>
                        <div className="mega-item-t">Performance Optimisation</div>
                        <div className="mega-item-s">Core Web Vitals &amp; speed tuning</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/magento-security-amc">
                      <div className="mega-icon">🔐</div>
                      <div>
                        <div className="mega-item-t">Magento Security &amp; AMC</div>
                        <div className="mega-item-s">Patches, SSL, PCI compliance</div>
                      </div>
                    </Link>
                    <div className="mega-cs ecom-cs">
                      <div className="mega-cs-tag">Case Study</div>
                      <div className="mega-cs-t">Fashion brand scales to 10k orders/day via Magento + Odoo</div>
                      <div className="mega-cs-s">Retail · UAE · Magento 2</div>
                    </div>
                  </div>

                  <div className="mega-col ecom-col">
                    <div className="mega-col-title">Shopify</div>
                    <Link className="mega-item" href="/shopify-store-setup">
                      <div className="mega-icon">🛍️</div>
                      <div>
                        <div className="mega-item-t">Shopify Store Setup</div>
                        <div className="mega-item-s">Theme dev, apps &amp; launch</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/shopify-odoo-integration">
                      <div className="mega-icon">🔗</div>
                      <div>
                        <div className="mega-item-t">Shopify → Odoo Integration</div>
                        <div className="mega-item-s">Inventory, orders &amp; customers</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/payment-razorpay-setup">
                      <div className="mega-icon">💳</div>
                      <div>
                        <div className="mega-item-t">Payment &amp; Razorpay Setup</div>
                        <div className="mega-item-s">Checkout flows &amp; subscriptions</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/shopify-analytics-ai">
                      <div className="mega-icon">📊</div>
                      <div>
                        <div className="mega-item-t">Shopify Analytics + AI</div>
                        <div className="mega-item-s">AI demand forecasting &amp; LTV</div>
                      </div>
                    </Link>
                    <div className="mega-cs ecom-cs">
                      <div className="mega-cs-tag">Case Study</div>
                      <div className="mega-cs-t">D2C brand grows 3× revenue with Shopify + Odoo + AI agents</div>
                      <div className="mega-cs-s">Retail · India · Shopify Plus</div>
                    </div>
                  </div>

                  <div className="mega-col ecom-col">
                    <div className="mega-col-title">More Services</div>
                    <Link className="mega-item" href="/ai-product-recommendations">
                      <div className="mega-icon">🤖</div>
                      <div>
                        <div className="mega-item-t">AI Product Recommendations</div>
                        <div className="mega-item-s">Personalisation engine</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/multi-warehouse-3pl">
                      <div className="mega-icon">📦</div>
                      <div>
                        <div className="mega-item-t">Multi-Warehouse + 3PL Sync</div>
                        <div className="mega-item-s">Real-time fulfilment routing</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/ai-customer-support-bot">
                      <div className="mega-icon">💬</div>
                      <div>
                        <div className="mega-item-t">AI Customer Support Bot</div>
                        <div className="mega-item-s">Returns, FAQs, order tracking</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/multi-currency-multi-region">
                      <div className="mega-icon">🌍</div>
                      <div>
                        <div className="mega-item-t">Multi-Currency &amp; Multi-Region</div>
                        <div className="mega-item-s">UAE, India, GCC, EU localisation</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/ecommerce-seo-cro">
                      <div className="mega-icon">📈</div>
                      <div>
                        <div className="mega-item-t">eCommerce SEO &amp; CRO</div>
                        <div className="mega-item-s">GTM, schema, conversion rate</div>
                      </div>
                    </Link>
                  </div>

                  <div className="mega-col mega-cta-col ecom-cta">
                    <div className="mega-cta-label">Business Impact</div>
                    <div className="mega-cta-h">Sell more. Fulfil faster. Return less.</div>
                    <p className="mega-cta-body">
                      We connect your storefront to your ERP so inventory, orders, and customer data stay in perfect
                      sync — powered by AI that predicts demand before you run out.
                    </p>
                    <div className="mega-cta-stat">
                      <div className="mega-cta-stat-n">3×</div>
                      <div className="mega-cta-stat-l">Average revenue growth post-integration</div>
                    </div>
                    <div className="mega-cta-stat">
                      <div className="mega-cta-stat-n">60%</div>
                      <div className="mega-cta-stat-l">Reduction in stockouts with AI forecasting</div>
                    </div>
                    <Link className="mega-cta-btn" href="/contact-us">
                      Free eCommerce Audit →
                    </Link>
                  </div>
                </div>
                <div className="mega-footer">
                  <span className="mega-footer-t">Shopify Plus · Magento 2 · Odoo · Razorpay · AI-Powered</span>
                  <Link className="mega-footer-a" href="/#platforms">
                    Explore All eCommerce Services →
                  </Link>
                </div>
              </div>
            </div>
          </li>

          {/* Industries Mega Menu */}
          <li>
            <Link href="/industries">Industries</Link>
            <div className="n-mega-wrap">
              <div className="n-mega n-mega-erp" style={{ width: 860 }}>
                <div className="mega-top" style={{ borderBottomColor: "rgba(0,194,255,.15)" }}>
                  <div className="mega-tag">Industry Solutions</div>
                  <div className="mega-title">ERP + AI for Every Vertical</div>
                  <div className="mega-sub">
                    Purpose-built Odoo modules, industry-specific AI models, and compliance configurations — mapped to
                    measurable outcomes before a single line of code is written.
                  </div>
                </div>
                <div className="mega-body mega-4col">
                  <div className="mega-col">
                    <div className="mega-col-title">Products &amp; Goods</div>
                    <Link className="mega-item" href="/manufacturing">
                      <div className="mega-icon">🏭</div>
                      <div>
                        <div className="mega-item-t">Manufacturing</div>
                        <div className="mega-item-s">MRP, AI quality gates, predictive maintenance</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/retail-ecommerce">
                      <div className="mega-icon">🛒</div>
                      <div>
                        <div className="mega-item-t">Retail &amp; eCommerce</div>
                        <div className="mega-item-s">Omnichannel ERP, AI demand forecasting</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/steel-metal-fabrication">
                      <div className="mega-icon">🔩</div>
                      <div>
                        <div className="mega-item-t">Steel &amp; Metal Fabrication</div>
                        <div className="mega-item-s">Heat tracking, BOM, production scheduling</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/textile-apparel">
                      <div className="mega-icon">🧵</div>
                      <div>
                        <div className="mega-item-t">Textile &amp; Apparel</div>
                        <div className="mega-item-s">Style-level BOM, season planning, AI reorder</div>
                      </div>
                    </Link>
                  </div>

                  <div className="mega-col">
                    <div className="mega-col-title">Operations &amp; Services</div>
                    <Link className="mega-item" href="/logistics-3pl">
                      <div className="mega-icon">🚚</div>
                      <div>
                        <div className="mega-item-t">Logistics &amp; 3PL</div>
                        <div className="mega-item-s">Smart WMS, route AI, SLA monitoring</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/healthcare">
                      <div className="mega-icon">🏥</div>
                      <div>
                        <div className="mega-item-t">Healthcare</div>
                        <div className="mega-item-s">Patient flow, billing automation, scheduling AI</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/finance-services">
                      <div className="mega-icon">💼</div>
                      <div>
                        <div className="mega-item-t">Finance &amp; Services</div>
                        <div className="mega-item-s">Auto-reconcile, fraud detection, lead scoring</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/construction-projects">
                      <div className="mega-icon">🏗️</div>
                      <div>
                        <div className="mega-item-t">Construction &amp; Projects</div>
                        <div className="mega-item-s">Project ERP, BOQ, subcontractor management</div>
                      </div>
                    </Link>
                  </div>

                  <div className="mega-col">
                    <div className="mega-col-title">Property &amp; Markets</div>
                    <Link className="mega-item" href="/real-estate">
                      <div className="mega-icon">🏢</div>
                      <div>
                        <div className="mega-item-t">Real Estate</div>
                        <div className="mega-item-s">CRM, AI lead scoring, lease lifecycle</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/gcc-middle-east">
                      <div className="mega-icon">🌍</div>
                      <div>
                        <div className="mega-item-t">GCC &amp; Middle East</div>
                        <div className="mega-item-s">Arabic UI, GCC VAT, multi-currency</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/india-market">
                      <div className="mega-icon">🇮🇳</div>
                      <div>
                        <div className="mega-item-t">India Market</div>
                        <div className="mega-item-s">GST e-invoicing, Razorpay, MRP/manufacturing</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/usa-europe">
                      <div className="mega-icon">🇺🇸</div>
                      <div>
                        <div className="mega-item-t">USA &amp; Europe</div>
                        <div className="mega-item-s">Salesforce sync, GDPR, EU VAT, tax compliance</div>
                      </div>
                    </Link>
                  </div>

                  <div
                    className="mega-col mega-cta-col"
                    style={{
                      background: "linear-gradient(160deg,rgba(0,194,255,.07),rgba(11,22,39,.95))",
                      borderLeftColor: "rgba(0,194,255,.15)",
                    }}
                  >
                    <div className="mega-cta-label" style={{ color: "var(--ai)" }}>
                      Industry Expertise
                    </div>
                    <div className="mega-cta-h">We speak your industry's language</div>
                    <p className="mega-cta-body">
                      No generic templates. Every vertical gets domain-specific ERP configurations, pre-built AI models,
                      and a consultant who has solved the exact same problems before.
                    </p>
                    <div className="mega-cta-stat">
                      <div className="mega-cta-stat-n" style={{ color: "var(--ai)" }}>
                        10+
                      </div>
                      <div className="mega-cta-stat-l">Industries served globally</div>
                    </div>
                    <div className="mega-cta-stat">
                      <div className="mega-cta-stat-n" style={{ color: "var(--ai)" }}>
                        20+
                      </div>
                      <div className="mega-cta-stat-l">Countries with active deployments</div>
                    </div>
                    <Link
                      className="mega-cta-btn"
                      href="/contact-us"
                      style={{ background: "var(--ai)", color: "var(--navy)" }}
                    >
                      Discuss Your Industry →
                    </Link>
                  </div>
                </div>
                <div className="mega-footer">
                  <span className="mega-footer-t">
                    Manufacturing · Retail · Logistics · Healthcare · Finance · Real Estate
                  </span>
                  <Link className="mega-footer-a" href="/industries">
                    Explore All Industries →
                  </Link>
                </div>
              </div>
            </div>
          </li>

          {/* Engagement Mega Menu */}
          <li>
            <Link href="/engagement">Engagement</Link>
            <div className="n-mega-wrap">
              <div className="n-mega n-mega-erp" style={{ width: 900 }}>
                <div className="mega-top erp-top">
                  <div className="mega-tag">How We Work</div>
                  <div className="mega-title">4 Ways to Engage With Wan Buffer</div>
                  <div className="mega-sub">
                    Choose the model that fits your stage, budget, and goals — or mix them as your needs evolve. Every
                    model includes a dedicated point of contact and pre-agreed KPIs.
                  </div>
                </div>
                <div className="mega-body mega-4col">
                  {/* Model 01: Project-Based */}
                  <div className="mega-col erp-col">
                    <div
                      className="mega-col-title"
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                    >
                      Model 01{" "}
                      <span
                        style={{
                          fontSize: 9,
                          color: "rgba(255,255,255,.25)",
                          letterSpacing: 0,
                          textTransform: "none",
                          fontFamily: "var(--B)",
                        }}
                      >
                        Fixed Price
                      </span>
                    </div>
                    <div style={{ fontSize: 22, marginBottom: 10 }}>🎯</div>
                    <div className="mega-item-t" style={{ fontSize: 13, marginBottom: 6 }}>
                      Project-Based
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--B)",
                        fontSize: 11,
                        fontWeight: 300,
                        color: "rgba(255,255,255,.45)",
                        lineHeight: 1.65,
                        marginBottom: 14,
                      }}
                    >
                      Fixed scope, fixed price, defined delivery — ideal for one-time ERP implementations or AI module
                      builds.
                    </p>
                    <div className="mega-item" style={{ padding: "6px 0" }}>
                      <div
                        className="mega-icon"
                        style={{ background: "rgba(216,28,85,.1)", borderColor: "rgba(216,28,85,.2)" }}
                      >
                        📋
                      </div>
                      <div>
                        <div className="mega-item-t">Defined scope &amp; milestones</div>
                        <div className="mega-item-s">Transparent fixed-price contract</div>
                      </div>
                    </div>
                    <div className="mega-item" style={{ padding: "6px 0" }}>
                      <div
                        className="mega-icon"
                        style={{ background: "rgba(216,28,85,.1)", borderColor: "rgba(216,28,85,.2)" }}
                      >
                        🛡️
                      </div>
                      <div>
                        <div className="mega-item-t">3-month post-launch support</div>
                        <div className="mega-item-s">Included at no extra cost</div>
                      </div>
                    </div>
                    <Link
                      className="mega-footer-a"
                      href="/project-based"
                      style={{ marginTop: 14, fontSize: 10, color: "var(--red)" }}
                    >
                      Start a Project →
                    </Link>
                  </div>

                  {/* Model 02: AI Agent + Human Team — FEATURED */}
                  <div
                    className="mega-col"
                    style={{
                      background: "linear-gradient(160deg,rgba(0,194,255,.07),var(--navy2))",
                      borderLeft: "1px solid rgba(0,194,255,.2)",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 14,
                        right: 14,
                        fontFamily: "var(--H)",
                        fontSize: 7,
                        fontWeight: 700,
                        letterSpacing: ".15em",
                        textTransform: "uppercase",
                        background: "var(--ai)",
                        color: "var(--navy)",
                        padding: "3px 8px",
                        borderRadius: 100,
                      }}
                    >
                      ⚡ New
                    </div>
                    <div className="mega-col-title" style={{ color: "var(--ai)" }}>
                      Model 02
                    </div>
                    <div style={{ fontSize: 22, marginBottom: 10 }}>🤖</div>
                    <div className="mega-item-t" style={{ fontSize: 13, marginBottom: 6, color: "var(--ai)" }}>
                      AI Agent + Human Team
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--B)",
                        fontSize: 11,
                        fontWeight: 300,
                        color: "rgba(255,255,255,.45)",
                        lineHeight: 1.65,
                        marginBottom: 14,
                      }}
                    >
                      Our most innovative model — AI agents handle repetitive ERP execution while senior engineers focus
                      on strategy and custom logic.
                    </p>
                    <div className="mega-item" style={{ padding: "6px 0" }}>
                      <div className="mega-icon">⚡</div>
                      <div>
                        <div className="mega-item-t">50–70% lower cost</div>
                        <div className="mega-item-s">vs. fully human teams</div>
                      </div>
                    </div>
                    <div className="mega-item" style={{ padding: "6px 0" }}>
                      <div className="mega-icon">📊</div>
                      <div>
                        <div className="mega-item-t">Full transparency dashboard</div>
                        <div className="mega-item-s">Audit logs &amp; agent activity</div>
                      </div>
                    </div>
                    <Link
                      className="mega-footer-a"
                      href="/ai-agent-human-team"
                      style={{ marginTop: 14, fontSize: 10, color: "var(--ai)" }}
                    >
                      Explore This Model →
                    </Link>
                  </div>

                  {/* Model 03: Dedicated Team */}
                  <div className="mega-col erp-col" style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        top: 14,
                        right: 14,
                        fontFamily: "var(--H)",
                        fontSize: 7,
                        fontWeight: 700,
                        letterSpacing: ".15em",
                        textTransform: "uppercase",
                        background: "rgba(255,255,255,.1)",
                        color: "rgba(255,255,255,.7)",
                        padding: "3px 8px",
                        borderRadius: 100,
                      }}
                    >
                      Most Popular
                    </div>
                    <div className="mega-col-title">Model 03</div>
                    <div style={{ fontSize: 22, marginBottom: 10 }}>👥</div>
                    <div className="mega-item-t" style={{ fontSize: 13, marginBottom: 6 }}>
                      Dedicated Team
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--B)",
                        fontSize: 11,
                        fontWeight: 300,
                        color: "rgba(255,255,255,.45)",
                        lineHeight: 1.65,
                        marginBottom: 14,
                      }}
                    >
                      Your offshore ERP + AI engineering squad — 2–15 engineers, fully dedicated, scale up or down
                      monthly.
                    </p>
                    <div className="mega-item" style={{ padding: "6px 0" }}>
                      <div
                        className="mega-icon"
                        style={{ background: "rgba(216,28,85,.1)", borderColor: "rgba(216,28,85,.2)" }}
                      >
                        👥
                      </div>
                      <div>
                        <div className="mega-item-t">Direct Slack / Jira standups</div>
                        <div className="mega-item-s">Senior tech lead + AI specialist</div>
                      </div>
                    </div>
                    <div className="mega-item" style={{ padding: "6px 0" }}>
                      <div
                        className="mega-icon"
                        style={{ background: "rgba(216,28,85,.1)", borderColor: "rgba(216,28,85,.2)" }}
                      >
                        📈
                      </div>
                      <div>
                        <div className="mega-item-t">Flexible team scaling</div>
                        <div className="mega-item-s">Month-to-month adjustments</div>
                      </div>
                    </div>
                    <Link
                      className="mega-footer-a"
                      href="/dedicated-team"
                      style={{ marginTop: 14, fontSize: 10, color: "var(--red)" }}
                    >
                      Build My Team →
                    </Link>
                  </div>

                  {/* Model 04: Retainer */}
                  <div className="mega-col mega-cta-col">
                    <div className="mega-cta-label">Model 04</div>
                    <div style={{ fontSize: 22, marginBottom: 8 }}>🔄</div>
                    <div className="mega-cta-h">Retainer Model</div>
                    <p className="mega-cta-body">
                      Ongoing ERP support, AI optimisation, and managed platform evolution — a long-term strategic
                      partnership with SLA guarantees.
                    </p>
                    <div className="mega-cta-stat">
                      <div className="mega-cta-stat-n">24h</div>
                      <div className="mega-cta-stat-l">Priority bug fix SLA</div>
                    </div>
                    <div className="mega-cta-stat">
                      <div className="mega-cta-stat-n">4×</div>
                      <div className="mega-cta-stat-l">Quarterly AI + ERP health audits/yr</div>
                    </div>
                    <Link className="mega-cta-btn" href="/retainer-model">
                      Get a Retainer →
                    </Link>
                  </div>
                </div>
                <div className="mega-footer">
                  <span className="mega-footer-t">
                    Project-Based · AI Agent + Human · Dedicated Team · Retainer
                  </span>
                  <Link className="mega-footer-a" href="/engagement">
                    Compare All Models →
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <Link href="/event">Events</Link>
          </li>

          {/* Insights Mega Menu */}
          <li>
            <Link href="/blogs">Insights</Link>
            <div className="n-mega-wrap">
              <div className="n-mega n-mega-erp" style={{ width: 860 }}>
                <div className="mega-top" style={{ borderBottomColor: "rgba(255,255,255,.08)" }}>
                  <div className="mega-tag" style={{ color: "rgba(255,255,255,.5)" }}>
                    Knowledge &amp; Resources
                  </div>
                  <div className="mega-title">Insights, Guides &amp; More</div>
                  <div className="mega-sub">
                    Technical articles, case studies, career opportunities, and downloadable resources from the Wan
                    Buffer team.
                  </div>
                </div>
                <div className="mega-body mega-4col">
                  {/* Col 1: Blog & Articles */}
                  <div className="mega-col">
                    <div className="mega-col-title">Blog &amp; Articles</div>
                    <Link className="mega-item" href="/blogs/essential-odoo-integrations-u-s-companies-need-in-2025-shopify-amazon-quickbooks">
                      <div className="mega-icon">🔌</div>
                      <div>
                        <div className="mega-item-t">Essential Odoo Integrations for 2025</div>
                        <div className="mega-item-s">Shopify, Amazon &amp; QuickBooks</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/blogs/why-generic-erp-fails-for-oil-and-gas-suppliers">
                      <div className="mega-icon">🛢️</div>
                      <div>
                        <div className="mega-item-t">Why Generic ERP Fails for Oil &amp; Gas</div>
                        <div className="mega-item-s">Project-based ERP deep-dive</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/blogs/erp-systems-designed-for-fabric-manufacturers-in-india-thailand-and-vietnam">
                      <div className="mega-icon">🧵</div>
                      <div>
                        <div className="mega-item-t">ERP for Fabric Manufacturers</div>
                        <div className="mega-item-s">India, Thailand &amp; Vietnam</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/blogs/dedicated-engineering-teams-vs-in-house-hiring-for-erp-projects">
                      <div className="mega-icon">👨‍💻</div>
                      <div>
                        <div className="mega-item-t">Dedicated Teams vs In-House Hiring</div>
                        <div className="mega-item-s">For ERP projects</div>
                      </div>
                    </Link>
                    <Link className="mega-footer-a" href="/blogs" style={{ marginTop: 12, fontSize: 10 }}>
                      All Articles →
                    </Link>
                  </div>

                  {/* Col 2: Case Studies */}
                  <div className="mega-col">
                    <div className="mega-col-title">Case Studies</div>
                    <Link className="mega-item" href="/case-study/odoo-erp-implementation-in-the-textile-industry">
                      <div className="mega-icon">🧵</div>
                      <div>
                        <div className="mega-item-t">Textile Industry — Odoo ERP</div>
                        <div className="mega-item-s">Manufacturing · Odoo ERP</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/case-study/odoo-steel-solution">
                      <div className="mega-icon">🏗️</div>
                      <div>
                        <div className="mega-item-t">Steel Product Customization</div>
                        <div className="mega-item-s">Manufacturing · Odoo automation</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/case-study/odoo-integration-ecommerce-retailer">
                      <div className="mega-icon">🛒</div>
                      <div>
                        <div className="mega-item-t">eCommerce Retailer Integration</div>
                        <div className="mega-item-s">Retail · Odoo · USA</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/case-study/ui-product-management-enhancements">
                      <div className="mega-icon">🎨</div>
                      <div>
                        <div className="mega-item-t">UI &amp; Product Management</div>
                        <div className="mega-item-s">Odoo eCommerce enhancements</div>
                      </div>
                    </Link>
                    <Link className="mega-footer-a" href="/case-studies" style={{ marginTop: 12, fontSize: 10 }}>
                      All Case Studies →
                    </Link>
                  </div>

                  {/* Col 3: Company & Careers */}
                  <div className="mega-col">
                    <div className="mega-col-title">Company &amp; Careers</div>
                    <Link className="mega-item" href="/wanbufferians">
                      <div className="mega-icon">🏢</div>
                      <div>
                        <div className="mega-item-t">About Wan Buffer</div>
                        <div className="mega-item-s">Our story, mission &amp; team</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/contact-us">
                      <div className="mega-icon">🤝</div>
                      <div>
                        <div className="mega-item-t">Partner With Us</div>
                        <div className="mega-item-s">Reseller &amp; referral programmes</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/wanbufferians">
                      <div className="mega-icon">💼</div>
                      <div>
                        <div className="mega-item-t">Careers &amp; Recruitment</div>
                        <div className="mega-item-s">Open roles in AI, ERP &amp; dev</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/wanbufferians">
                      <div className="mega-icon">🎓</div>
                      <div>
                        <div className="mega-item-t">Wanbufferians</div>
                        <div className="mega-item-s">Culture, team &amp; life at WB</div>
                      </div>
                    </Link>
                    <Link className="mega-item" href="/event">
                      <div className="mega-icon">📅</div>
                      <div>
                        <div className="mega-item-t">Events &amp; Webinars</div>
                        <div className="mega-item-s">Odoo community days &amp; expos</div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 4: Resources CTA */}
                  <div
                    className="mega-col mega-cta-col"
                    style={{
                      background: "linear-gradient(160deg,rgba(255,255,255,.04),rgba(11,22,39,.95))",
                      borderLeftColor: "rgba(255,255,255,.08)",
                    }}
                  >
                    <div className="mega-cta-label" style={{ color: "rgba(255,255,255,.4)" }}>
                      Free Resources
                    </div>
                    <div className="mega-cta-h">Downloadable Guides</div>
                    <p className="mega-cta-body">
                      Practical tools to help you plan your ERP and AI transformation — no fluff, no sales pitch.
                    </p>
                    <div className="mega-cta-stat" style={{ cursor: "pointer" }}>
                      <div className="mega-cta-stat-n" style={{ color: "var(--ai)", fontSize: 13, fontWeight: 700 }}>
                        📋 AI ERP Readiness Checklist
                      </div>
                      <div className="mega-cta-stat-l">Is your business ready for AI + ERP? Free PDF</div>
                    </div>
                    <div className="mega-cta-stat" style={{ cursor: "pointer" }}>
                      <div className="mega-cta-stat-n" style={{ color: "var(--ai)", fontSize: 13, fontWeight: 700 }}>
                        📊 ROI Calculator Template
                      </div>
                      <div className="mega-cta-stat-l">Estimate your ERP automation ROI in 5 mins</div>
                    </div>
                    <div className="mega-cta-stat" style={{ cursor: "pointer" }}>
                      <div className="mega-cta-stat-n" style={{ color: "var(--ai)", fontSize: 13, fontWeight: 700 }}>
                        🆚 Odoo vs SAP Comparison
                      </div>
                      <div className="mega-cta-stat-l">Feature-by-feature breakdown for mid-market</div>
                    </div>
                    <Link
                      className="mega-cta-btn"
                      href="/contact-us"
                      style={{
                        background: "rgba(255,255,255,.1)",
                        border: "1px solid rgba(255,255,255,.15)",
                        color: "var(--white)",
                      }}
                    >
                      Get Free Resources →
                    </Link>
                  </div>
                </div>
                <div className="mega-footer">
                  <span className="mega-footer-t">Blog · Case Studies · Careers · Events · Downloads</span>
                  <Link className="mega-footer-a" href="/blogs">
                    All Insights →
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>

        <div className="n-end">
          <Link className="n-ai-cta" href="/#ai-services">
            AI Services ⚡
          </Link>
          <Link className="n-cta" href="/contact-us">
            Book a Call
          </Link>
          <button
            className="ham"
            type="button"
            onClick={() => (window as any).openNav?.()}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  );
}
