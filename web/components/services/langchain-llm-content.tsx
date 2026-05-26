/* ────────────────────────────────────────────────────────────────────────
   LANGCHAIN & LLM INTEGRATION — unique page design
   Centered hero + code terminal · LLM ticker · Architecture stack ·
   Offset masonry capabilities · Vertical process list · Compact use
   case grid · Closer · Support
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

/* ── Code terminal lines ── */
const CODE_LINES = [
  { cls: "kw", text: "from" },
  { cls: "mod", text: " langchain.chat_models " },
  { cls: "kw", text: "import" },
  { cls: "mod", text: " ChatOpenAI" },
] as const;

const CODE_BLOCK = `from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.vectorstores import Pinecone

llm = ChatOpenAI(model="gpt-4", temperature=0)
qa = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=erp_vectorstore.as_retriever(),
    chain_type="stuff"
)
result = qa.run("What invoices are overdue?")`;

/* ── Supported LLMs ── */
const LLMS = [
  { name: "GPT-4o", vendor: "OpenAI", color: "#10A37F" },
  { name: "Claude 4", vendor: "Anthropic", color: "#D97706" },
  { name: "Llama 3", vendor: "Meta", color: "#1877F2" },
  { name: "Gemini", vendor: "Google", color: "#4285F4" },
  { name: "Mistral", vendor: "Mistral AI", color: "#FF7000" },
  { name: "Command R+", vendor: "Cohere", color: "#39594D" },
  { name: "Qwen 2", vendor: "Alibaba", color: "#FF6A00" },
  { name: "DeepSeek", vendor: "DeepSeek", color: "#4F46E5" },
] as const;

/* ── Architecture layers ── */
const LAYERS = [
  { label: "Your Business Systems", items: ["Odoo ERP", "Zoho CRM", "Salesforce", "SAP", "Custom APIs"], accent: "navy" as const },
  { label: "LangChain Orchestration", items: ["Chains", "Agents", "Memory", "Tools", "Callbacks"], accent: "ai" as const },
  { label: "LLM & Vector Layer", items: ["GPT-4 / Claude", "Embeddings", "Pinecone / Weaviate", "Fine-tuned Models", "Guardrails"], accent: "purple" as const },
] as const;

/* ── Capabilities — offset masonry ── */
const CAPS = [
  { icon: <DatabaseIcon />, t: "RAG Pipelines", s: "Retrieval-Augmented Generation that grounds LLM responses in your actual business data — ERP records, documents, knowledge bases, and SOPs. No hallucinations, no generic answers.", tag: "Core", tall: true },
  { icon: <CpuIcon />, t: "Autonomous AI Agents", s: "LangChain agents that reason, plan, and execute multi-step tasks across your ERP using tool-calling and structured outputs.", tag: "Advanced" },
  { icon: <SearchIcon />, t: "Semantic Search", s: "Vector-powered search across your entire document corpus. Find information by meaning, not keywords — contracts, specs, emails, and manuals.", tag: "Search" },
  { icon: <SparklesIcon />, t: "Conversational Interfaces", s: "Natural language chatbots that query, summarise, and action ERP data. Deploy to Slack, Teams, WhatsApp, or custom UIs with full context memory.", tag: "UX", tall: true },
  { icon: <SettingsIcon />, t: "Fine-Tuning & Evaluation", s: "Domain-specific fine-tuning on your business vocabulary, product catalogue, and process rules. Rigorous eval pipelines ensure accuracy before production.", tag: "ML Ops" },
  { icon: <ShieldIcon />, t: "Guardrails & Governance", s: "Content filtering, PII redaction, output validation, and approval gates built into every chain. SOC 2 and GDPR compliance from day one.", tag: "Security" },
] as const;

/* ── Process steps ── */
const PROCESS = [
  { num: "01", icon: <SearchIcon />, t: "Discovery & data mapping", b: "We audit your data landscape — ERP schema, document repositories, APIs — and identify the highest-ROI LLM use cases for your business.", deliverables: ["Data inventory", "Use-case matrix", "Architecture proposal"] },
  { num: "02", icon: <DatabaseIcon />, t: "Embedding & indexing", b: "Your business data is chunked, embedded, and indexed into vector databases. We engineer the retrieval strategy that gives your LLM accurate, up-to-date context.", deliverables: ["Vector store", "Embedding pipeline", "Retrieval benchmarks"] },
  { num: "03", icon: <CodeIcon />, t: "Chain & agent development", b: "Purpose-built LangChain chains and agents trained on your workflows. Every tool call, memory strategy, and output parser is engineered for your specific ERP operations.", deliverables: ["Custom chains", "Agent configs", "Test suite"] },
  { num: "04", icon: <CloudIcon />, t: "Integration & deployment", b: "Deploy to production with secure API connections to your ERP, monitoring dashboards, and automated fallback strategies. Role-based access controls on every endpoint.", deliverables: ["Live deployment", "API docs", "Monitoring"] },
  { num: "05", icon: <RefreshIcon />, t: "Optimisation & scaling", b: "Continuous prompt engineering, retrieval tuning, and model evaluation. As your data grows, we scale the pipeline — adding new data sources, use cases, and LLM capabilities.", deliverables: ["Performance reports", "Expansion roadmap"] },
] as const;

/* ── Use case grid ── */
const USE_CASES = [
  { icon: <WalletIcon />, t: "Financial Q&A", s: "Ask questions about invoices, cash flow, and budgets in plain English." },
  { icon: <PackageIcon />, t: "Inventory Intelligence", s: "Semantic search across product specs, supplier docs, and stock data." },
  { icon: <UsersIcon />, t: "HR Knowledge Base", s: "Employees query policies, benefits, and procedures conversationally." },
  { icon: <BarChartIcon />, t: "Sales Copilot", s: "AI-generated deal summaries, competitor analysis, and follow-up drafts." },
  { icon: <MonitorIcon />, t: "Document Processing", s: "Extract, classify, and route information from contracts and invoices." },
  { icon: <GridIcon />, t: "Code Generation", s: "Generate Odoo module code, API integrations, and SQL queries from prompts." },
] as const;

/* ── Component ── */
export function LangchainLlmContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered with code terminal ═══ */}
      <section className="lc-hero">
        <div className="lc-hero-glow lc-hero-glow-1" aria-hidden="true" />
        <div className="lc-hero-glow lc-hero-glow-2" aria-hidden="true" />
        <div className="lc-hero-grid-bg" aria-hidden="true" />
        <div className="lc-hero-inner">
          <div className="lc-hero-badge rev">
            <span className="lc-hero-badge-dot" />
            LangChain &amp; LLM integration
          </div>
          <h1 className="lc-hero-h rev">
            LangChain &amp; LLM<br />
            <span className="acc">Integration.</span>
          </h1>
          <p className="lc-hero-sub rev">
            Build production-grade AI applications with LangChain, GPT-4, Claude, and open-source LLMs — <strong>integrated directly into your ERP and business systems.</strong> RAG pipelines, AI agents, and semantic search engineered for enterprise.
          </p>
          <div className="lc-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your LLM roadmap</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#process">See the process</a>
          </div>

          {/* Code terminal */}
          <div className="lc-term rev">
            <div className="lc-term-bar">
              <span className="lc-term-dot" /><span className="lc-term-dot y" /><span className="lc-term-dot g" />
              <span className="lc-term-title">langchain_erp.py</span>
            </div>
            <pre className="lc-term-code"><code>{CODE_BLOCK}</code></pre>
          </div>
        </div>
      </section>

      {/* ═══ LLM TICKER — scrolling model badges ═══ */}
      <section className="lc-ticker">
        <div className="lc-ticker-label">Supported LLMs &amp; frameworks</div>
        <div className="lc-ticker-track" aria-hidden="true">
          <div className="lc-ticker-scroll">
            {[...LLMS, ...LLMS].map((llm, i) => (
              <div key={`${llm.name}-${i}`} className="lc-ticker-item">
                <span className="lc-ticker-dot" style={{ background: llm.color }} />
                <span className="lc-ticker-name">{llm.name}</span>
                <span className="lc-ticker-vendor">{llm.vendor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ARCHITECTURE — layered stack ═══ */}
      <section className="lc-arch" id="architecture">
        <div className="lc-arch-inner">
          <div className="lc-arch-hdr rev">
            <div className="eyebrow">Architecture</div>
            <h2>Three layers.<br /><span>One intelligent system.</span></h2>
            <p>LangChain sits between your business systems and the LLM layer — orchestrating data retrieval, prompt engineering, tool calling, and response validation so your AI applications are accurate, secure, and production-ready.</p>
          </div>
          <div className="lc-arch-stack rev">
            {LAYERS.map((layer, i) => (
              <div key={layer.label} className={`lc-arch-layer lc-arch-${layer.accent}`}>
                <div className="lc-arch-layer-label">{layer.label}</div>
                <div className="lc-arch-layer-items">
                  {layer.items.map((item) => (
                    <span key={item} className="lc-arch-layer-chip">{item}</span>
                  ))}
                </div>
                {i < LAYERS.length - 1 && (
                  <div className="lc-arch-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M6 12l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES — offset masonry ═══ */}
      <section className="lc-caps" id="capabilities">
        <div className="lc-caps-inner">
          <div className="lc-caps-hdr rev">
            <div className="eyebrow lt">Core capabilities</div>
            <h2>What we build with<br /><span>LangChain &amp; LLMs.</span></h2>
          </div>
          <div className="lc-caps-grid rev">
            {CAPS.map((cap) => (
              <div key={cap.t} className={`lc-cap${"tall" in cap && cap.tall ? " lc-cap-tall" : ""}`}>
                <div className="lc-cap-tag">{cap.tag}</div>
                <div className="lc-cap-icon">{cap.icon}</div>
                <div className="lc-cap-t">{cap.t}</div>
                <p className="lc-cap-s">{cap.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — vertical numbered list ═══ */}
      <section className="lc-proc" id="process">
        <div className="lc-proc-inner">
          <div className="lc-proc-hdr rev">
            <div className="eyebrow">Our process</div>
            <h2>Five stages to<br /><span>production LLM.</span></h2>
          </div>
          <div className="lc-proc-list">
            {PROCESS.map((step) => (
              <div key={step.num} className="lc-proc-item rev">
                <div className="lc-proc-item-left">
                  <div className="lc-proc-item-num">{step.num}</div>
                  <div className="lc-proc-item-icon">{step.icon}</div>
                </div>
                <div className="lc-proc-item-body">
                  <div className="lc-proc-item-t">{step.t}</div>
                  <p className="lc-proc-item-b">{step.b}</p>
                  <div className="lc-proc-item-delivs">
                    {step.deliverables.map((d) => (
                      <span key={d} className="lc-proc-item-deliv"><FlagIcon />{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to build</div>
              <h3>Want LangChain powering <span>your ERP?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to an AI engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ USE CASES — compact icon grid ═══ */}
      <section className="lc-use" id="use-cases">
        <div className="lc-use-inner">
          <div className="lc-use-hdr rev">
            <div className="eyebrow lt">Use cases</div>
            <h2>LLMs embedded in<br /><span>every department.</span></h2>
          </div>
          <div className="lc-use-grid rev">
            {USE_CASES.map((uc) => (
              <div key={uc.t} className="lc-use-card">
                <div className="lc-use-card-icon">{uc.icon}</div>
                <div className="lc-use-card-t">{uc.t}</div>
                <p className="lc-use-card-s">{uc.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSER ═══ */}
      <section className="oi-closer" id="why-us">
        <div className="oi-closer-inner">
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your LLM partner</div>
              <h3>Most LLM projects<br /><span>never leave the notebook.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">90%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of LLM prototypes never reach production.</strong>
                  Source: a16z, 2024. The gap is not model capability — it&apos;s the engineering required to connect LLMs to real business data, enforce access controls, handle edge cases, and maintain accuracy over time.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer LLM engagement is built around four commitments — written into the contract and tracked weekly.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><DatabaseIcon /></div>
                <div className="oi-closer-commit-t">Grounded in your data</div>
                <p className="oi-closer-commit-b">Every LLM response is grounded in your actual business data via RAG — not generic training data. Hallucination rates measured and minimised before production.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Enterprise-grade security</div>
                <p className="oi-closer-commit-b">PII redaction, role-based access, encrypted data pipelines, and SOC 2 compliance built into every chain. Your data never leaves your infrastructure.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Full observability</div>
                <p className="oi-closer-commit-b">Every LLM call logged with input, output, latency, token usage, and cost. LangSmith integration for debugging, evaluation, and continuous improvement.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior AI engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineers who architect your LLM pipeline are the ones who build, deploy, and support it — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free AI audit</div>
              <h4>Get your LLM integration roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your AI audit</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
              <a className="oi-closer-cta-link" href="#support">Or talk to our AI team first</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SUPPORT ═══ */}
      <section className="oi-supp" id="support">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">LLM support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior AI engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For chain debugging, prompt tuning, and RAG accuracy questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">LLM pipeline failures or production incidents. Answered by a senior AI engineer — not a call centre.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring LangChain developers and ML engineers. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior AI engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
