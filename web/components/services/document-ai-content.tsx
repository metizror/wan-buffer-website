/* ────────────────────────────────────────────────────────────────────────
   DOCUMENT AI — unique page design
   Hero split + document pipeline mock · Operations cards · Alternating
   feature rows · Dotted process flow · Document types section ·
   Platforms · FAQ · Closer · Support
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
  StarIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "./odoo-service-icons";

/* ── Document pipeline mockup ── */
const PIPELINE = [
  { doc: "INV-2024-4871.pdf", type: "Vendor Invoice", fields: 14, confidence: 98, status: "posted" as const },
  { doc: "PO-88321.pdf", type: "Purchase Order", fields: 11, confidence: 96, status: "posted" as const },
  { doc: "Receipt-0042.jpg", type: "Expense Receipt", fields: 8, confidence: 94, status: "review" as const },
  { doc: "Contract-NDA.pdf", type: "Legal Contract", fields: 22, confidence: 91, status: "extracted" as const },
  { doc: "BOL-SHP-119.pdf", type: "Bill of Lading", fields: 16, confidence: 97, status: "posted" as const },
  { doc: "GRN-W3-445.pdf", type: "Goods Receipt", fields: 9, confidence: 99, status: "posted" as const },
] as const;

/* ── Document AI operations ── */
const OPERATIONS = [
  { icon: <EyeIcon />, t: "Intelligent OCR", s: "AI-powered optical character recognition that reads printed text, handwriting, stamps, and signatures from scanned documents, photos, and PDFs — with 98%+ accuracy across 40+ languages.", color: "ai" as const },
  { icon: <SparklesIcon />, t: "Smart Data Extraction", s: "ML models that identify and extract structured fields — invoice numbers, line items, amounts, dates, vendor names, and tax details — from unstructured documents without templates or rules.", color: "green" as const },
  { icon: <GridIcon />, t: "Document Classification", s: "Automatic sorting of incoming documents by type — invoices, purchase orders, receipts, contracts, delivery notes — before extraction begins. No manual filing, no misrouted documents.", color: "purple" as const },
  { icon: <DatabaseIcon />, t: "ERP Auto-Posting", s: "Extracted data flows directly into your ERP — vendor bills, journal entries, purchase orders, and expense reports created automatically with validation rules and approval routing.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <EyeIcon />, t: "AI-Powered OCR Engine", s: "Deep-learning OCR that reads printed text, handwritten notes, rubber stamps, and signatures — from scanned PDFs, phone photos, and email attachments. Handles skewed images, low resolution, and multi-page documents. Supports 40+ languages including Arabic, Hindi, and CJK characters." },
  { num: "02", icon: <SparklesIcon />, t: "Template-Free Data Extraction", s: "ML models trained on thousands of document layouts extract fields without predefined templates. Invoice numbers, line items with quantities and amounts, tax breakdowns, payment terms, and bank details — all identified automatically. New vendor formats are learned within 5–10 documents." },
  { num: "03", icon: <GridIcon />, t: "Automatic Document Classification", s: "Documents uploaded via email, scanner, or portal are classified instantly — vendor invoices, purchase orders, expense receipts, contracts, delivery notes, and bank statements. Each type routes to the correct extraction model and approval workflow." },
  { num: "04", icon: <DatabaseIcon />, t: "ERP Auto-Posting & Validation", s: "Extracted data creates ERP records automatically — vendor bills in Accounts Payable, purchase orders in Procurement, expense reports in HR. Validation rules check for duplicates, amount mismatches, and missing fields before posting. Exceptions route to human review." },
  { num: "05", icon: <ShieldIcon />, t: "Fraud & Anomaly Detection", s: "AI flags suspicious documents — duplicate invoice numbers, altered amounts, mismatched vendor details, and unsigned contracts. Risk scores assigned per document with automated escalation. Reduces fraudulent payment exposure by up to 60%." },
  { num: "06", icon: <BarChartIcon />, t: "Processing Analytics & Audit Trail", s: "Real-time dashboards for document volume, extraction accuracy, processing time, and exception rates. Full audit trail from original document to ERP posting — every field extraction logged with confidence score and human override history." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Upload", s: "Email, scan, drag-drop or API upload" },
  { icon: <EyeIcon />, t: "Extract", s: "AI reads, classifies & extracts fields" },
  { icon: <ShieldIcon />, t: "Validate", s: "Rules check, duplicate detect & review" },
  { icon: <DatabaseIcon />, t: "Post", s: "Auto-create ERP records & notify" },
] as const;

/* ── Document types ── */
const DOC_TYPES = [
  { t: "Vendor Invoices", sub: "AP automation with line-item extraction", volume: "5K+/mo", active: true },
  { t: "Purchase Orders", sub: "PO matching and goods receipt linking", volume: "2K+/mo", active: true },
  { t: "Contracts & Agreements", sub: "Clause extraction and renewal alerts", volume: "On demand", active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo Accounting", color: "#714B67" },
  { name: "Odoo Purchase", color: "#714B67" },
  { name: "Odoo Documents", color: "#714B67" },
  { name: "Google Document AI", color: "#4285F4" },
  { name: "AWS Textract", color: "#FF9900" },
  { name: "Azure Form Recognizer", color: "#0078D4" },
  { name: "Custom ML Models", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How accurate is the AI extraction for invoices?", a: "Our models achieve 96–99% field-level accuracy on invoices — line items, amounts, tax breakdowns, vendor names, and dates. Accuracy improves as the model processes more documents from the same vendor. For new vendor formats, the system reaches 95%+ accuracy within 5–10 sample documents." },
  { q: "Does it work with scanned PDFs and phone photos?", a: "Yes. The OCR engine handles scanned PDFs, photos from phone cameras, email attachments, and faxes. It auto-corrects skew, adjusts for low resolution, and processes multi-page documents. Handwritten notes, rubber stamps, and signatures are also recognised — though handwriting accuracy varies by legibility." },
  { q: "Do I need to create templates for each vendor?", a: "No. Our ML models extract fields without predefined templates. The AI learns document layouts dynamically — when a new vendor sends an invoice in a format the system hasn't seen before, it still extracts the key fields. After 5–10 documents from the same vendor, accuracy reaches near-perfect levels." },
  { q: "How does the ERP auto-posting work?", a: "Extracted data maps to your ERP schema — vendor name to partner record, line items to product/account codes, amounts to journal entry fields. The system creates draft records (vendor bills, PO entries, expense reports) with all fields pre-filled. Validation rules check for duplicates and mismatches before auto-posting or routing to human approval." },
  { q: "Can Document AI detect fraudulent or duplicate invoices?", a: "Yes. The system checks every extracted invoice against historical data — duplicate invoice numbers, altered amounts, mismatched vendor bank details, and unsigned documents are flagged automatically. Risk scores are assigned and high-risk items are escalated to designated approvers before any payment is processed." },
  { q: "How long does Document AI implementation take?", a: "Basic invoice processing with ERP posting takes 3–4 weeks. Full Document AI with multi-document classification, contract extraction, and fraud detection takes 8–12 weeks. Enterprise deployments with custom ML models and multi-ERP integration take 12–18 weeks." },
] as const;

/* ── Component ── */
export function DocumentAiContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + document pipeline right ═══ */}
      <section className="da-hero">
        <div className="da-hero-glow da-hero-glow-1" aria-hidden="true" />
        <div className="da-hero-glow da-hero-glow-2" aria-hidden="true" />
        <div className="da-hero-dots" aria-hidden="true" />
        <div className="da-hero-inner">
          <div className="da-hero-content">
            <div className="da-hero-badge rev">
              <span className="da-hero-badge-dot" />
              Document AI
            </div>
            <h1 className="da-hero-h rev">
              Document<br />AI.<br />
              <span className="acc">Every document.<br />Every field.<br />Extracted.</span>
            </h1>
            <p className="da-hero-sub rev">
              Intelligent OCR, template-free data extraction, automatic classification, and ERP auto-posting — <strong>90% less manual data entry.</strong>
            </p>
            <div className="da-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your Document AI demo</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
            {/* stat pills */}
            <div className="da-hero-stats rev">
              <div className="da-hero-stat">
                <span className="da-hero-stat-n">98%</span>
                <span className="da-hero-stat-l">Extraction accuracy</span>
              </div>
              <span className="da-hero-stat-div" />
              <div className="da-hero-stat">
                <span className="da-hero-stat-n">90%</span>
                <span className="da-hero-stat-l">Less manual entry</span>
              </div>
              <span className="da-hero-stat-div" />
              <div className="da-hero-stat">
                <span className="da-hero-stat-n">&lt;3s</span>
                <span className="da-hero-stat-l">Per document</span>
              </div>
            </div>
          </div>

          {/* Document pipeline mockup */}
          <div className="da-pipe rev">
            <div className="da-pipe-hdr">
              <div className="da-pipe-live">
                <span className="da-pipe-live-dot" />
                Live
              </div>
              <div className="da-pipe-title">Document Pipeline</div>
            </div>
            <div className="da-pipe-list">
              {PIPELINE.map((d) => (
                <div key={d.doc} className={`da-doc da-doc-${d.status}`}>
                  <div className="da-doc-top">
                    <span className="da-doc-name">{d.doc}</span>
                    <span className={`da-doc-status da-doc-status-${d.status}`}>
                      {d.status === "posted" ? "Posted" : d.status === "review" ? "Review" : "Extracted"}
                    </span>
                  </div>
                  <div className="da-doc-mid">
                    <span className="da-doc-type">{d.type}</span>
                    <span className="da-doc-fields">{d.fields} fields</span>
                  </div>
                  <div className="da-doc-conf">
                    <div className="da-doc-conf-bar">
                      <div className={`da-doc-conf-fill da-doc-conf-${d.status}`} style={{ width: `${d.confidence}%` }} />
                    </div>
                    <span className="da-doc-conf-pct">{d.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="da-ops">
        <div className="da-ops-inner">
          <div className="da-ops-hdr rev">
            <div className="eyebrow">Document operations</div>
            <h2>Scan. Extract. Validate.<br /><span>Post.</span></h2>
          </div>
          <div className="da-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`da-op da-op-${op.color}`}>
                <div className="da-op-icon">{op.icon}</div>
                <div className="da-op-t">{op.t}</div>
                <p className="da-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="da-feat" id="features">
        <div className="da-feat-inner">
          <div className="da-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete document intelligence.</span></h2>
          </div>
          <div className="da-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`da-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="da-feat-row-num">{f.num}</div>
                <div className="da-feat-row-icon">{f.icon}</div>
                <div className="da-feat-row-body">
                  <div className="da-feat-row-t">{f.t}</div>
                  <p className="da-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="da-proc" id="process">
        <div className="da-proc-inner">
          <div className="da-proc-hdr rev">
            <div className="eyebrow">How it works</div>
            <h2>Four steps to<br /><span>zero manual entry.</span></h2>
          </div>
          <div className="da-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="da-proc-step-wrap">
                {i > 0 && <div className="da-proc-dots" />}
                <div className="da-proc-step">
                  <div className="da-proc-step-icon">{p.icon}</div>
                  <div className="da-proc-step-t">{p.t}</div>
                  <div className="da-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to automate</div>
              <h3>Want your documents <span>processing themselves?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a Document AI engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DOCUMENT TYPES — split ═══ */}
      <section className="da-multi" id="doc-types">
        <div className="da-multi-inner">
          <div className="da-multi-hdr rev">
            <div className="eyebrow lt">Document types</div>
            <h2>One AI.<br /><span>Every document.</span></h2>
          </div>
          <div className="da-multi-split rev">
            <div className="da-multi-left">
              <div className="da-multi-big-n">15+</div>
              <div className="da-multi-big-l">Document types processed by one system</div>
              <p className="da-multi-big-s">Invoices, purchase orders, receipts, contracts, delivery notes, bank statements, and custom documents — all extracted, validated, and posted into your ERP from a single AI pipeline.</p>
            </div>
            <div className="da-multi-right">
              {DOC_TYPES.map((dt) => (
                <div key={dt.t} className={`da-multi-loc${dt.active ? "" : " inactive"}`}>
                  <div className="da-multi-loc-t">{dt.t}</div>
                  <div className="da-multi-loc-sub">{dt.sub}</div>
                  <div className="da-multi-loc-stat">{dt.volume}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="da-plat">
        <div className="da-plat-inner rev">
          <div className="da-plat-label">Document AI &amp; ERP integrations</div>
          <div className="da-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="da-plat-badge">
                <span className="da-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="da-faq" id="faq">
        <div className="da-faq-inner">
          <div className="da-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Document AI.</span></h2>
          </div>
          <div className="da-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="da-faq-item">
                <summary className="da-faq-q">{f.q}</summary>
                <p className="da-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your Document AI partner</div>
              <h3>Most OCR tools read text,<br /><span>not understand documents.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">82%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of finance teams still key invoice data into their ERP manually.</strong>
                  Source: IOFM, 2024. The result is data entry errors, processing delays, missed early-payment discounts, and staff spending hours on work that AI can do in seconds.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer Document AI deployment extracts, validates, and posts — not just OCR scans. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">98%+ extraction accuracy — guaranteed</div>
                <p className="oi-closer-commit-b">Field-level accuracy targets are defined per document type before go-live. If extraction accuracy falls below the agreed threshold, we retrain the model at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><DatabaseIcon /></div>
                <div className="oi-closer-commit-t">ERP auto-posting — not just extraction</div>
                <p className="oi-closer-commit-b">Data doesn't stop at a spreadsheet. Extracted fields create ERP records automatically — vendor bills, PO entries, expense reports — with validation and approval routing built in.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><SparklesIcon /></div>
                <div className="oi-closer-commit-t">Template-free — no setup per vendor</div>
                <p className="oi-closer-commit-b">ML models learn document layouts dynamically. No templates to create, no rules to maintain, no format-specific configurations. New vendors work from day one.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior AI engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who builds your extraction models is the one who trains, tunes, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free document audit</div>
              <h4>Get your Document AI roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your Document AI demo</span>
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
            <div className="eyebrow lt">Document AI support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior AI engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For extraction accuracy, model tuning, and ERP posting questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Pipeline failures or extraction accuracy drops. Answered by a senior AI engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring AI/ML engineers and document processing specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior AI engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> 98%+ accuracy</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
