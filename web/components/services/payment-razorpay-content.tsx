/* ────────────────────────────────────────────────────────────────────────
   PAYMENT & RAZORPAY SETUP — unique page design
   Hero split + checkout mock · Payment method badges · Services grid ·
   Checkout flow · Stats · FAQ · Closer · Support
──────────────────────────────────────────────────────────────────────── */

import Link from "next/link";

import {
  ArrowRightIcon,
  BarChartIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  CloudIcon,
  CodeIcon,
  CpuIcon,
  DatabaseIcon,
  EyeIcon,
  FlagIcon,
  GridIcon,
  HeartIcon,
  MailIcon,
  MonitorIcon,
  PackageIcon,
  PhoneCallIcon,
  RefreshIcon,
  RocketIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  SparklesIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "./odoo-service-icons";

/* ── Checkout mockup ── */
const CHECKOUT_METHODS = [
  { name: "UPI", detail: "Google Pay · PhonePe · Paytm", active: true },
  { name: "Credit / Debit Card", detail: "Visa · Mastercard · RuPay", active: false },
  { name: "Razorpay", detail: "All payment modes", active: false },
  { name: "Net Banking", detail: "50+ banks supported", active: false },
] as const;

/* ── Payment gateways ── */
const GATEWAYS = [
  { name: "Razorpay", color: "#3395FF" },
  { name: "Stripe", color: "#635BFF" },
  { name: "PayPal", color: "#003087" },
  { name: "Shopify Payments", color: "#96BF48" },
  { name: "Cashfree", color: "#0D9488" },
  { name: "PayU", color: "#00C853" },
  { name: "CCAvenue", color: "#E91E63" },
  { name: "UPI Direct", color: "#4CAF50" },
] as const;

/* ── Services ── */
const SERVICES = [
  { icon: <WalletIcon />, num: "01", t: "Gateway Integration", s: "Razorpay, Stripe, PayPal, Cashfree, PayU, or CCAvenue — configured and tested on your Shopify, Magento, or custom store. Multiple gateways with intelligent routing for higher success rates." },
  { icon: <SettingsIcon />, num: "02", t: "Checkout Optimisation", s: "Reduce cart abandonment with optimised checkout flows — guest checkout, address auto-fill, saved payment methods, one-click reorder, and progress indicators that keep buyers moving." },
  { icon: <RefreshIcon />, num: "03", t: "Subscription Billing", s: "Recurring payment setup with Razorpay Subscriptions or Stripe Billing — trial periods, plan upgrades, prorated charges, and dunning management for failed renewals." },
  { icon: <GridIcon />, num: "04", t: "Multi-Currency & Tax", s: "Accept payments in any currency with automatic conversion. Tax-inclusive pricing, GST calculation, and geo-based tax rules configured per market — India, UAE, USA, or EU." },
  { icon: <DatabaseIcon />, num: "05", t: "ERP Reconciliation", s: "Payment data syncs to your ERP automatically — Odoo, Zoho, or QuickBooks. Invoice matching, settlement tracking, and refund reconciliation without manual bank statement imports." },
  { icon: <ShieldIcon />, num: "06", t: "Security & Compliance", s: "PCI DSS compliance, 3D Secure authentication, tokenisation, and fraud detection rules. Every transaction encrypted, every card number tokenised, every regulation met." },
] as const;

/* ── Checkout flow ── */
const FLOW_STEPS = [
  { icon: <PackageIcon />, t: "Cart", s: "Product selected, quantity confirmed" },
  { icon: <UsersIcon />, t: "Details", s: "Address, shipping method chosen" },
  { icon: <WalletIcon />, t: "Payment", s: "Gateway loads, payment processed" },
  { icon: <CheckCircleIcon />, t: "Confirmed", s: "Order created, receipt sent" },
] as const;

/* ── Stats ── */
const STATS = [
  { n: "98%", l: "Payment success rate" },
  { n: "<3s", l: "Checkout load time" },
  { n: "35%", l: "Cart abandonment reduced" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Which payment gateways do you support?", a: "Razorpay, Stripe, PayPal, Cashfree, PayU, CCAvenue, Shopify Payments, and UPI direct integrations. We recommend the best gateway mix based on your target markets and transaction volume." },
  { q: "Can you set up Razorpay on Shopify?", a: "Yes. We configure Razorpay as a payment gateway on Shopify — including UPI, cards, net banking, wallets, and EMI options. Checkout customisation and webhook setup for order confirmation included." },
  { q: "Do you handle subscription/recurring payments?", a: "Yes. We set up Razorpay Subscriptions or Stripe Billing — plan creation, trial periods, upgrades/downgrades, prorated charges, and automated dunning for failed payments." },
  { q: "How do you reduce cart abandonment?", a: "Optimised checkout flow, guest checkout option, saved payment methods, address auto-complete, express payment (UPI/Apple Pay), and abandoned cart recovery emails — each proven to improve completion rates." },
  { q: "Do you sync payments with ERP systems?", a: "Yes. Payment confirmations, refunds, and settlements sync to Odoo, Zoho, or QuickBooks in real time. Invoice matching and bank reconciliation happen automatically." },
  { q: "Is the setup PCI compliant?", a: "Yes. All gateway integrations follow PCI DSS guidelines. Card data is tokenised by the gateway — your servers never touch raw card numbers. 3D Secure and fraud rules are configured by default." },
] as const;

/* ── Component ── */
export function PaymentRazorpayContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + checkout mock right ═══ */}
      <section className="pr-hero">
        <div className="pr-hero-glow pr-hero-glow-1" aria-hidden="true" />
        <div className="pr-hero-glow pr-hero-glow-2" aria-hidden="true" />
        <div className="pr-hero-inner">
          <div className="pr-hero-content">
            <div className="pr-hero-badge rev">
              <span className="pr-hero-badge-dot" />
              Payment &amp; Razorpay setup
            </div>
            <h1 className="pr-hero-h rev">
              Payment &amp;<br />Razorpay Setup.<br />
              <span className="acc">Every payment, captured.</span>
            </h1>
            <p className="pr-hero-sub rev">
              Payment gateway integration, checkout optimisation, subscription billing, and ERP reconciliation — <strong>for Shopify, Magento, and custom eCommerce stores.</strong>
            </p>
            <div className="pr-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your payment audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#services">See services</a>
            </div>
          </div>

          {/* Checkout mockup */}
          <div className="pr-checkout rev">
            <div className="pr-checkout-bar">
              <span className="pr-checkout-bar-title">Select payment method</span>
            </div>
            <div className="pr-checkout-methods">
              {CHECKOUT_METHODS.map((m) => (
                <div key={m.name} className={`pr-checkout-method${m.active ? " active" : ""}`}>
                  <div className="pr-checkout-method-radio" />
                  <div className="pr-checkout-method-body">
                    <div className="pr-checkout-method-name">{m.name}</div>
                    <div className="pr-checkout-method-detail">{m.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pr-checkout-footer">
              <div className="pr-checkout-total">
                <span>Total</span>
                <span className="pr-checkout-total-amount">₹4,820.00</span>
              </div>
              <div className="pr-checkout-btn">Pay Now</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GATEWAY BADGES ═══ */}
      <section className="pr-gateways">
        <div className="pr-gateways-inner rev">
          <div className="pr-gateways-label">Payment gateways we integrate</div>
          <div className="pr-gateways-row">
            {GATEWAYS.map((g) => (
              <span key={g.name} className="pr-gateway-badge">
                <span className="pr-gateway-dot" style={{ background: g.color }} />
                {g.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="pr-svc" id="services">
        <div className="pr-svc-inner">
          <div className="pr-svc-hdr rev">
            <div className="eyebrow">Payment services</div>
            <h2>Six services.<br /><span>Complete payment stack.</span></h2>
            <p>From gateway integration to ERP reconciliation — every payment touchpoint configured, optimised, and secured.</p>
          </div>
          <div className="pr-svc-grid rev">
            {SERVICES.map((s) => (
              <div key={s.num} className="pr-svc-card">
                <div className="pr-svc-card-num">{s.num}</div>
                <div className="pr-svc-card-icon">{s.icon}</div>
                <div className="pr-svc-card-t">{s.t}</div>
                <p className="pr-svc-card-s">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHECKOUT FLOW ═══ */}
      <section className="pr-flow" id="checkout-flow">
        <div className="pr-flow-inner">
          <div className="pr-flow-hdr rev">
            <div className="eyebrow lt">Checkout flow</div>
            <h2>Four steps.<br /><span>Zero friction.</span></h2>
          </div>
          <div className="pr-flow-steps rev">
            {FLOW_STEPS.map((s, i) => (
              <div key={s.t} className="pr-flow-step-wrap">
                {i > 0 && <div className="pr-flow-conn"><ArrowRightIcon /></div>}
                <div className="pr-flow-step">
                  <div className="pr-flow-step-icon">{s.icon}</div>
                  <div className="pr-flow-step-t">{s.t}</div>
                  <div className="pr-flow-step-s">{s.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="pr-stats">
        <div className="pr-stats-inner rev">
          {STATS.map((s, i) => (
            <div key={s.l} className="pr-stat">
              {i > 0 && <span className="pr-stats-sep" />}
              <div className="pr-stat-n">{s.n}</div>
              <div className="pr-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="pr-faq" id="faq">
        <div className="pr-faq-inner">
          <div className="pr-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>payment setup.</span></h2>
          </div>
          <div className="pr-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="pr-faq-item">
                <summary className="pr-faq-q">{f.q}</summary>
                <p className="pr-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSER ═══ */}
      <section className="oi-closer">
        <div className="oi-closer-inner">
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your payment partner</div>
              <h3>Most checkout setups<br /><span>leave 30% of revenue on the table.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">70%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of online shopping carts are abandoned before payment.</strong>
                  Source: Baymard Institute, 2024. The top causes: forced account creation, complex checkout forms, hidden fees, and limited payment methods.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer payment integration is optimised for completion — not just connectivity.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><WalletIcon /></div>
                <div className="oi-closer-commit-t">Multiple gateway support</div>
                <p className="oi-closer-commit-b">We configure the optimal gateway mix for your markets — UPI for India, Stripe for global, Razorpay for hybrid. Intelligent routing maximises payment success rates.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ZapIcon /></div>
                <div className="oi-closer-commit-t">Sub-3s checkout load</div>
                <p className="oi-closer-commit-b">Payment page loads in under 3 seconds on mobile. Lazy-loaded gateway scripts, optimised payment forms, and pre-fetched resources ensure speed.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">PCI compliant</div>
                <p className="oi-closer-commit-b">All integrations follow PCI DSS guidelines. Card data tokenised, 3D Secure enabled, fraud rules configured. Your store never touches raw card data.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who configures your payments is the one who tests, deploys, and supports them.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free checkout audit</div>
              <h4>Get your payment roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your payment audit</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
              <a className="oi-closer-cta-link" href="#support">Or talk to our team first</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SUPPORT ═══ */}
      <section className="oi-supp" id="support">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Payment support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior payment engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For gateway configuration, checkout issues, and reconciliation questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Payment failures or checkout downtime. Answered by a senior engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring payment integration engineers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior engineers only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> PCI compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
