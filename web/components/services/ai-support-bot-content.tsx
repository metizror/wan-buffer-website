/* ────────────────────────────────────────────────────────────────────────
   AI CUSTOMER SUPPORT BOT — unique page design
   Hero split + support chat · Topic cards · Features grid · Metrics ·
   Channels · FAQ · Closer · Support
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

/* ── Support chat mockup ── */
const CHAT_MSGS = [
  { from: "customer" as const, text: "Where is my order #ORD-4821?" },
  { from: "bot" as const, text: "Your order shipped via BlueDart on May 25. Tracking: BD7721849. It's out for delivery today and should arrive by 6 PM." },
  { from: "customer" as const, text: "I want to return the leather wallet from that order." },
  { from: "bot" as const, text: "No problem! I've initiated a return for the Leather Wallet (₹2,190). A pickup is scheduled for tomorrow between 10 AM – 1 PM. Refund will process within 5–7 business days." },
] as const;

/* ── Support topics ── */
const TOPICS = [
  { icon: <PackageIcon />, t: "Order Tracking", s: "Real-time order status, delivery ETA, and carrier tracking — instant answers without human agents.", stat: "45%" },
  { icon: <RefreshIcon />, t: "Returns & Exchanges", s: "Automated return initiation, pickup scheduling, refund tracking, and exchange processing.", stat: "25%" },
  { icon: <SearchIcon />, t: "Product FAQs", s: "Size guides, material info, compatibility, availability — answers sourced from your product catalogue.", stat: "20%" },
  { icon: <WalletIcon />, t: "Payment Issues", s: "Failed payment recovery, refund status, invoice downloads, and payment method changes.", stat: "10%" },
] as const;

/* ── Features ── */
const FEATURES = [
  { icon: <CpuIcon />, t: "Natural Language Understanding", s: "Customers ask in their own words — not menu selections. The bot understands intent, extracts order IDs, product names, and issue types from unstructured messages." },
  { icon: <DatabaseIcon />, t: "Live Order Data Access", s: "Bot queries your ERP and shipping APIs in real time — no cached responses. Order status, tracking, and inventory are always current." },
  { icon: <RefreshIcon />, t: "Automated Returns Processing", s: "Bot initiates returns, checks return policy eligibility, schedules pickups, and triggers refund workflows — end to end, no agent needed." },
  { icon: <UsersIcon />, t: "Smart Agent Handoff", s: "When the bot can't resolve an issue, it transfers the full conversation context to a human agent — no repetition, no lost information." },
  { icon: <BarChartIcon />, t: "Conversation Analytics", s: "Track resolution rate, CSAT score, handoff rate, top topics, and response time. Identify gaps and train the bot on new patterns." },
  { icon: <ShieldIcon />, t: "Multilingual Support", s: "Support customers in English, Hindi, Arabic, and 20+ languages. Language detection is automatic — no customer selection needed." },
] as const;

/* ── Metrics ── */
const METRICS = [
  { n: "70%", l: "Tickets auto-resolved" },
  { n: "<10s", l: "Avg response time" },
  { n: "4.7/5", l: "Customer satisfaction" },
] as const;

/* ── Channels ── */
const CHANNELS = [
  { name: "Website Widget", color: "var(--ai)" },
  { name: "WhatsApp", color: "#25D366" },
  { name: "Instagram DM", color: "#E4405F" },
  { name: "Facebook Messenger", color: "#0084FF" },
  { name: "Email", color: "#F59E0B" },
  { name: "Shopify Chat", color: "#96BF48" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How does the bot handle order tracking?", a: "The bot extracts the order ID from the customer's message, queries your ERP and shipping carrier APIs in real time, and returns the current status, tracking link, and estimated delivery time — all within seconds." },
  { q: "Can the bot process returns automatically?", a: "Yes. The bot checks return eligibility against your policy, initiates the return in your ERP, schedules a pickup with the carrier, and sends confirmation to the customer — fully automated for eligible returns." },
  { q: "What happens when the bot can't answer?", a: "Smart handoff transfers the full conversation history, customer details, and issue context to a human agent. The customer never has to repeat themselves. Handoff triggers are configurable." },
  { q: "Which platforms does the bot work on?", a: "Website widget, WhatsApp Business API, Instagram DM, Facebook Messenger, email, and Shopify Chat. We deploy to whichever channels your customers use most." },
  { q: "Does the bot support multiple languages?", a: "Yes. 20+ languages with automatic detection. The bot responds in the customer's language without requiring them to select one. Hindi, English, Arabic, French, and more." },
  { q: "How long does setup take?", a: "Basic FAQ + order tracking bot: 2–3 weeks. Full bot with returns automation, multilingual, and multi-channel: 4–6 weeks. The bot improves continuously after launch." },
] as const;

/* ── Component ── */
export function AiSupportBotContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + support chat right ═══ */}
      <section className="cs-hero">
        <div className="cs-hero-glow cs-hero-glow-1" aria-hidden="true" />
        <div className="cs-hero-glow cs-hero-glow-2" aria-hidden="true" />
        <div className="cs-hero-inner">
          <div className="cs-hero-content">
            <div className="cs-hero-badge rev">
              <span className="cs-hero-badge-dot" />
              AI customer support bot
            </div>
            <h1 className="cs-hero-h rev">
              AI Customer<br />Support Bot.<br />
              <span className="acc">Instant. Accurate. 24/7.</span>
            </h1>
            <p className="cs-hero-sub rev">
              Automated order tracking, returns processing, FAQ resolution, and live agent handoff — <strong>reduce support tickets by 70%</strong> while improving customer satisfaction.
            </p>
            <div className="cs-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your support audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
          </div>

          {/* Support chat */}
          <div className="cs-chat rev">
            <div className="cs-chat-bar">
              <span className="cs-chat-bar-avatar">🤖</span>
              <div>
                <span className="cs-chat-bar-name">Support Bot</span>
                <span className="cs-chat-bar-status">Online · Avg reply &lt;10s</span>
              </div>
            </div>
            <div className="cs-chat-body">
              {CHAT_MSGS.map((msg, i) => (
                <div key={i} className={`cs-msg ${msg.from}`}>
                  <div className="cs-msg-bubble">{msg.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ METRICS ═══ */}
      <section className="cs-metrics">
        <div className="cs-metrics-inner rev">
          {METRICS.map((m, i) => (
            <div key={m.l} className="cs-metric">
              {i > 0 && <span className="cs-metrics-sep" />}
              <div className="cs-metric-n">{m.n}</div>
              <div className="cs-metric-l">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SUPPORT TOPICS ═══ */}
      <section className="cs-topics">
        <div className="cs-topics-inner">
          <div className="cs-topics-hdr rev">
            <div className="eyebrow">What the bot handles</div>
            <h2>Four support areas.<br /><span>Fully automated.</span></h2>
          </div>
          <div className="cs-topics-grid rev">
            {TOPICS.map((t) => (
              <div key={t.t} className="cs-topic">
                <div className="cs-topic-icon">{t.icon}</div>
                <div className="cs-topic-t">{t.t}</div>
                <p className="cs-topic-s">{t.s}</p>
                <div className="cs-topic-stat">
                  <span className="cs-topic-stat-n">{t.stat}</span>
                  <span className="cs-topic-stat-l">of tickets</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="cs-feat" id="features">
        <div className="cs-feat-inner">
          <div className="cs-feat-hdr rev">
            <div className="eyebrow lt">Bot capabilities</div>
            <h2>Six AI engines.<br /><span>One support platform.</span></h2>
          </div>
          <div className="cs-feat-grid rev">
            {FEATURES.map((f) => (
              <div key={f.t} className="cs-feat-card">
                <div className="cs-feat-card-icon">{f.icon}</div>
                <div className="cs-feat-card-t">{f.t}</div>
                <p className="cs-feat-card-s">{f.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHANNELS ═══ */}
      <section className="cs-channels">
        <div className="cs-channels-inner rev">
          <div className="cs-channels-label">Deploy on every channel your customers use</div>
          <div className="cs-channels-row">
            {CHANNELS.map((c) => (
              <span key={c.name} className="cs-channel-badge">
                <span className="cs-channel-dot" style={{ background: c.color }} />
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="cs-faq" id="faq">
        <div className="cs-faq-inner">
          <div className="cs-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>AI support bots.</span></h2>
          </div>
          <div className="cs-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="cs-faq-item">
                <summary className="cs-faq-q">{f.q}</summary>
                <p className="cs-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your support bot partner</div>
              <h3>Most support bots<br /><span>deflect tickets, not resolve them.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">80%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of customer support chatbots frustrate users more than they help.</strong>
                  Source: Forrester, 2024. The cause is bots that can only handle FAQ lookups — not bots connected to real order data, returns systems, and live agent handoff.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer support bot connects to your actual ERP and shipping data — resolving issues, not just answering questions.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><DatabaseIcon /></div>
                <div className="oi-closer-commit-t">Connected to real data</div>
                <p className="oi-closer-commit-b">Bot queries live ERP and shipping APIs. Order status, tracking, and inventory are always current — not cached or pre-loaded.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed resolution targets</div>
                <p className="oi-closer-commit-b">Auto-resolution rate, CSAT score, and handoff rate are defined before deployment. If we miss targets, we keep improving — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Smart agent handoff</div>
                <p className="oi-closer-commit-b">When the bot can&apos;t help, it hands off with full context — conversation history, customer profile, and issue details. No customer repetition.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><HeartIcon /></div>
                <div className="oi-closer-commit-t">Senior AI engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who builds your bot deploys, monitors, and improves it — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free support audit</div>
              <h4>Get your bot roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your support audit</span>
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
            <div className="eyebrow lt">Bot support</div>
            <h2>One team for <span>questions &amp; tuning.</span></h2>
            <p>Three channels. Senior AI engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For bot training, conversation flow updates, and analytics questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Bot downtime or incorrect responses. Answered by a senior AI engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring conversational AI engineers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CpuIcon /> AI-powered</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><UsersIcon /> Smart handoff</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
