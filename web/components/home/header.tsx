"use client";

import type { ReactNode } from "react";

interface HomeHeaderProps {
  children?: ReactNode;
}

export function HomeHeader(_props: HomeHeaderProps) {
  return (
    <>
      {/* ══ MOBILE NAV ══ */}
      <div className="mob-nav" id="mobNav">
        <button
          className="mob-close"
          type="button"
          onClick={() => (window as any).closeNav?.()}
        >
          ✕
        </button>
        <a className="mob-a ai-mob" href="/#ai-services" onClick={() => (window as any).closeNav?.()}>
          ⚡ AI &amp; Automation
        </a>
        <div className="mob-section">AI Services</div>
        <a className="mob-sub" href="/#ai-services" onClick={() => (window as any).closeNav?.()}>
          AI Agents for ERP
        </a>
        <a className="mob-sub" href="/#ai-services" onClick={() => (window as any).closeNav?.()}>
          Workflow Automation
        </a>
        <a className="mob-sub" href="/#ai-services" onClick={() => (window as any).closeNav?.()}>
          Intelligent Analytics
        </a>
        <a className="mob-a" href="/#industries" onClick={() => (window as any).closeNav?.()}>
          Industries
        </a>
        <a className="mob-a" href="/#models" onClick={() => (window as any).closeNav?.()}>
          Engagement
        </a>
        <a className="mob-a" href="/#insights" onClick={() => (window as any).closeNav?.()}>
          Insights
        </a>
        <a className="mob-a" href="/#contact" onClick={() => (window as any).closeNav?.()}>
          Contact
        </a>
        <div className="mob-btns">
          <a className="mob-btn-ai" href="/#ai-services" onClick={() => (window as any).closeNav?.()}>
            Explore AI Services ⚡
          </a>
          <a className="mob-btn-r" href="/#contact" onClick={() => (window as any).closeNav?.()}>
            Book a Discovery Call
          </a>
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
        <a className="n-logo" href="/">
          <img
            className="n-logo-img"
            src="https://res.cloudinary.com/dghplu26l/image/upload/v1719489724/logo-black_fxcdpr.png"
            alt="Wan Buffer — Odoo AI Integration Services"
          />
          <div className="n-logo-badges">
            <span className="n-badge erp">ERP</span>
            <span className="n-badge ai-b">AI</span>
          </div>
        </a>
        <ul className="n-links">
          {/* AI Mega-menu item */}
          <li>
            <a href="/#ai-services" className="n-ai-link">
              AI &amp; Automation
            </a>
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
                    <div className="mega-item">
                      <div className="mega-icon">🤖</div>
                      <div>
                        <div className="mega-item-t">AI Agents for ERP</div>
                        <div className="mega-item-s">Autonomous agents that execute ERP tasks</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">⚡</div>
                      <div>
                        <div className="mega-item-t">Workflow Automation</div>
                        <div className="mega-item-s">End-to-end process automation</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🧠</div>
                      <div>
                        <div className="mega-item-t">Predictive Analytics</div>
                        <div className="mega-item-s">Demand forecasting &amp; anomaly detection</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">💬</div>
                      <div>
                        <div className="mega-item-t">AI Chatbots &amp; Copilots</div>
                        <div className="mega-item-s">Natural language ERP interaction</div>
                      </div>
                    </div>
                  </div>
                  <div className="mega-col">
                    <div className="mega-col-title">Capabilities</div>
                    <div className="mega-item">
                      <div className="mega-icon">🔗</div>
                      <div>
                        <div className="mega-item-t">LangChain &amp; LLM Integration</div>
                        <div className="mega-item-s">GPT-4, Claude &amp; open-source LLMs</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">📊</div>
                      <div>
                        <div className="mega-item-t">ML-Powered Insights</div>
                        <div className="mega-item-s">Real-time operational intelligence</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🔄</div>
                      <div>
                        <div className="mega-item-t">RPA &amp; Process Mining</div>
                        <div className="mega-item-s">Automate repetitive ERP tasks</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🛡️</div>
                      <div>
                        <div className="mega-item-t">AI Governance &amp; Ethics</div>
                        <div className="mega-item-s">Responsible AI deployment</div>
                      </div>
                    </div>
                  </div>
                  <div className="mega-col">
                    <div className="mega-col-title">Use Cases</div>
                    <div className="mega-item">
                      <div className="mega-icon">📦</div>
                      <div>
                        <div className="mega-item-t">Smart Inventory Management</div>
                        <div className="mega-item-s">AI-driven stock optimisation</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">💰</div>
                      <div>
                        <div className="mega-item-t">Automated Invoice Processing</div>
                        <div className="mega-item-s">OCR + AI validation</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🏭</div>
                      <div>
                        <div className="mega-item-t">Predictive Maintenance</div>
                        <div className="mega-item-s">AI-triggered work orders</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">👥</div>
                      <div>
                        <div className="mega-item-t">AI-Assisted HR &amp; Payroll</div>
                        <div className="mega-item-s">Intelligent onboarding flows</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mega-footer">
                  <span className="mega-footer-t">Powered by OpenAI · LangChain · Python · Odoo</span>
                  <a className="mega-footer-a" href="/#ai-services">
                    Explore All AI Services →
                  </a>
                </div>
              </div>
            </div>
          </li>

          {/* ERP Mega Menu */}
          <li>
            <a href="/#platforms" className="n-erp-link">
              ERP
            </a>
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
                    <div className="mega-item">
                      <div className="mega-icon">⚙️</div>
                      <div>
                        <div className="mega-item-t">Odoo Implementation</div>
                        <div className="mega-item-s">End-to-end Odoo 16/17/18 setup</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🔧</div>
                      <div>
                        <div className="mega-item-t">Odoo Customisation</div>
                        <div className="mega-item-s">Custom modules &amp; workflows</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🔄</div>
                      <div>
                        <div className="mega-item-t">Odoo Migration</div>
                        <div className="mega-item-s">v12–v15 → Odoo 17/18</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🔗</div>
                      <div>
                        <div className="mega-item-t">Odoo Integration</div>
                        <div className="mega-item-s">API, Shopify, Salesforce &amp; more</div>
                      </div>
                    </div>
                    <div className="mega-cs">
                      <div className="mega-cs-tag">Case Study</div>
                      <div className="mega-cs-t">Fabric Mill cuts lead time 40% with Odoo MRP + AI</div>
                      <div className="mega-cs-s">Manufacturing · India · Odoo 17</div>
                    </div>
                  </div>

                  <div className="mega-col erp-col">
                    <div className="mega-col-title">Zoho &amp; Salesforce</div>
                    <div className="mega-item">
                      <div className="mega-icon">☁️</div>
                      <div>
                        <div className="mega-item-t">Zoho CRM Implementation</div>
                        <div className="mega-item-s">Sales pipeline &amp; automation</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">📋</div>
                      <div>
                        <div className="mega-item-t">Zoho Books &amp; Finance</div>
                        <div className="mega-item-s">Accounting, invoicing, GST</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">💼</div>
                      <div>
                        <div className="mega-item-t">Salesforce CRM Setup</div>
                        <div className="mega-item-s">B2B sales &amp; lead management</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🔀</div>
                      <div>
                        <div className="mega-item-t">Odoo ↔ Salesforce Sync</div>
                        <div className="mega-item-s">Bi-directional CRM + ERP bridge</div>
                      </div>
                    </div>
                    <div className="mega-cs">
                      <div className="mega-cs-tag">Case Study</div>
                      <div className="mega-cs-t">Gulf Logistics automates 3PL ops with Zoho + AI agents</div>
                      <div className="mega-cs-s">Logistics · Kuwait · Zoho One</div>
                    </div>
                  </div>

                  <div className="mega-col erp-col">
                    <div className="mega-col-title">All ERP Services</div>
                    <div className="mega-item">
                      <div className="mega-icon">🏗️</div>
                      <div>
                        <div className="mega-item-t">ERP Consulting</div>
                        <div className="mega-item-s">Scope, roadmap &amp; vendor selection</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">📦</div>
                      <div>
                        <div className="mega-item-t">Inventory &amp; WMS</div>
                        <div className="mega-item-s">Multi-warehouse, lot &amp; serial tracking</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">💳</div>
                      <div>
                        <div className="mega-item-t">Finance &amp; Accounting</div>
                        <div className="mega-item-s">Multi-currency, GCC VAT, GST e-invoicing</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🧑‍💼</div>
                      <div>
                        <div className="mega-item-t">HR &amp; Payroll</div>
                        <div className="mega-item-s">Leave, attendance, WPS payroll</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🛠️</div>
                      <div>
                        <div className="mega-item-t">ERP Support &amp; AMC</div>
                        <div className="mega-item-s">SLA-based maintenance plans</div>
                      </div>
                    </div>
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
                    <a className="mega-cta-btn" href="/#contact">
                      Free ERP Audit →
                    </a>
                  </div>
                </div>
                <div className="mega-footer">
                  <span className="mega-footer-t">Odoo Partner · Zoho · Salesforce · Razorpay Official Partner</span>
                  <a className="mega-footer-a" href="/#platforms">
                    Explore All ERP Services →
                  </a>
                </div>
              </div>
            </div>
          </li>

          {/* eCommerce Mega Menu */}
          <li>
            <a href="/#platforms" className="n-ecom-link">
              eCommerce
            </a>
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
                    <div className="mega-item">
                      <div className="mega-icon">🏪</div>
                      <div>
                        <div className="mega-item-t">Magento Development</div>
                        <div className="mega-item-s">Custom themes &amp; module dev</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">⚙️</div>
                      <div>
                        <div className="mega-item-t">Magento → Odoo Integration</div>
                        <div className="mega-item-s">Real-time inventory &amp; order sync</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🚀</div>
                      <div>
                        <div className="mega-item-t">Performance Optimisation</div>
                        <div className="mega-item-s">Core Web Vitals &amp; speed tuning</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🔐</div>
                      <div>
                        <div className="mega-item-t">Magento Security &amp; AMC</div>
                        <div className="mega-item-s">Patches, SSL, PCI compliance</div>
                      </div>
                    </div>
                    <div className="mega-cs ecom-cs">
                      <div className="mega-cs-tag">Case Study</div>
                      <div className="mega-cs-t">Fashion brand scales to 10k orders/day via Magento + Odoo</div>
                      <div className="mega-cs-s">Retail · UAE · Magento 2</div>
                    </div>
                  </div>

                  <div className="mega-col ecom-col">
                    <div className="mega-col-title">Shopify</div>
                    <div className="mega-item">
                      <div className="mega-icon">🛍️</div>
                      <div>
                        <div className="mega-item-t">Shopify Store Setup</div>
                        <div className="mega-item-s">Theme dev, apps &amp; launch</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🔗</div>
                      <div>
                        <div className="mega-item-t">Shopify → Odoo Integration</div>
                        <div className="mega-item-s">Inventory, orders &amp; customers</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">💳</div>
                      <div>
                        <div className="mega-item-t">Payment &amp; Razorpay Setup</div>
                        <div className="mega-item-s">Checkout flows &amp; subscriptions</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">📊</div>
                      <div>
                        <div className="mega-item-t">Shopify Analytics + AI</div>
                        <div className="mega-item-s">AI demand forecasting &amp; LTV</div>
                      </div>
                    </div>
                    <div className="mega-cs ecom-cs">
                      <div className="mega-cs-tag">Case Study</div>
                      <div className="mega-cs-t">D2C brand grows 3× revenue with Shopify + Odoo + AI agents</div>
                      <div className="mega-cs-s">Retail · India · Shopify Plus</div>
                    </div>
                  </div>

                  <div className="mega-col ecom-col">
                    <div className="mega-col-title">More Services</div>
                    <div className="mega-item">
                      <div className="mega-icon">🤖</div>
                      <div>
                        <div className="mega-item-t">AI Product Recommendations</div>
                        <div className="mega-item-s">Personalisation engine</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">📦</div>
                      <div>
                        <div className="mega-item-t">Multi-Warehouse + 3PL Sync</div>
                        <div className="mega-item-s">Real-time fulfilment routing</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">💬</div>
                      <div>
                        <div className="mega-item-t">AI Customer Support Bot</div>
                        <div className="mega-item-s">Returns, FAQs, order tracking</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🌍</div>
                      <div>
                        <div className="mega-item-t">Multi-Currency &amp; Multi-Region</div>
                        <div className="mega-item-s">UAE, India, GCC, EU localisation</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">📈</div>
                      <div>
                        <div className="mega-item-t">eCommerce SEO &amp; CRO</div>
                        <div className="mega-item-s">GTM, schema, conversion rate</div>
                      </div>
                    </div>
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
                    <a className="mega-cta-btn" href="/#contact">
                      Free eCommerce Audit →
                    </a>
                  </div>
                </div>
                <div className="mega-footer">
                  <span className="mega-footer-t">Shopify Plus · Magento 2 · Odoo · Razorpay · AI-Powered</span>
                  <a className="mega-footer-a" href="/#platforms">
                    Explore All eCommerce Services →
                  </a>
                </div>
              </div>
            </div>
          </li>

          {/* Industries Mega Menu */}
          <li>
            <a href="/#industries">Industries</a>
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
                    <div className="mega-item">
                      <div className="mega-icon">🏭</div>
                      <div>
                        <div className="mega-item-t">Manufacturing</div>
                        <div className="mega-item-s">MRP, AI quality gates, predictive maintenance</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🛒</div>
                      <div>
                        <div className="mega-item-t">Retail &amp; eCommerce</div>
                        <div className="mega-item-s">Omnichannel ERP, AI demand forecasting</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🔩</div>
                      <div>
                        <div className="mega-item-t">Steel &amp; Metal Fabrication</div>
                        <div className="mega-item-s">Heat tracking, BOM, production scheduling</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🧵</div>
                      <div>
                        <div className="mega-item-t">Textile &amp; Apparel</div>
                        <div className="mega-item-s">Style-level BOM, season planning, AI reorder</div>
                      </div>
                    </div>
                  </div>

                  <div className="mega-col">
                    <div className="mega-col-title">Operations &amp; Services</div>
                    <div className="mega-item">
                      <div className="mega-icon">🚚</div>
                      <div>
                        <div className="mega-item-t">Logistics &amp; 3PL</div>
                        <div className="mega-item-s">Smart WMS, route AI, SLA monitoring</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🏥</div>
                      <div>
                        <div className="mega-item-t">Healthcare</div>
                        <div className="mega-item-s">Patient flow, billing automation, scheduling AI</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">💼</div>
                      <div>
                        <div className="mega-item-t">Finance &amp; Services</div>
                        <div className="mega-item-s">Auto-reconcile, fraud detection, lead scoring</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🏗️</div>
                      <div>
                        <div className="mega-item-t">Construction &amp; Projects</div>
                        <div className="mega-item-s">Project ERP, BOQ, subcontractor management</div>
                      </div>
                    </div>
                  </div>

                  <div className="mega-col">
                    <div className="mega-col-title">Property &amp; Markets</div>
                    <div className="mega-item">
                      <div className="mega-icon">🏢</div>
                      <div>
                        <div className="mega-item-t">Real Estate</div>
                        <div className="mega-item-s">CRM, AI lead scoring, lease lifecycle</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🌍</div>
                      <div>
                        <div className="mega-item-t">GCC &amp; Middle East</div>
                        <div className="mega-item-s">Arabic UI, GCC VAT, multi-currency</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🇮🇳</div>
                      <div>
                        <div className="mega-item-t">India Market</div>
                        <div className="mega-item-s">GST e-invoicing, Razorpay, MRP/manufacturing</div>
                      </div>
                    </div>
                    <div className="mega-item">
                      <div className="mega-icon">🇺🇸</div>
                      <div>
                        <div className="mega-item-t">USA &amp; Europe</div>
                        <div className="mega-item-s">Salesforce sync, GDPR, EU VAT, tax compliance</div>
                      </div>
                    </div>
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
                    <a
                      className="mega-cta-btn"
                      href="/#contact"
                      style={{ background: "var(--ai)", color: "var(--navy)" }}
                    >
                      Discuss Your Industry →
                    </a>
                  </div>
                </div>
                <div className="mega-footer">
                  <span className="mega-footer-t">
                    Manufacturing · Retail · Logistics · Healthcare · Finance · Real Estate
                  </span>
                  <a className="mega-footer-a" href="/#industries">
                    Explore All Industries →
                  </a>
                </div>
              </div>
            </div>
          </li>

          {/* Engagement Mega Menu (kept as link for now; mega content still in injected HTML sections later) */}
          <li>
            <a href="/#models">Engagement</a>
          </li>

          <li>
            <a href="/#insights">Insights</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>

        <div className="n-end">
          <a className="n-ai-cta" href="/#ai-services">
            AI Services ⚡
          </a>
          <a className="n-cta" href="/#contact">
            Book a Call
          </a>
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

