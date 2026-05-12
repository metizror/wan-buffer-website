/* ────────────────────────────────────────────────────────────────────────
   ODOO IMPLEMENTATION — full redesign
   Hero luxe · Stats band · Methodology cards · Chaptered roadmap ·
   Gold Partner spotlight + comparison · Bento · Closer · Clean support
──────────────────────────────────────────────────────────────────────── */

/* ── SVG icon library ── */
const SearchIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>);
const CodeIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const SettingsIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>);
const DatabaseIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>);
const GraduationIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>);
const RocketIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>);
const CpuIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/></svg>);
const PackageIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>);
const RefreshIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>);
const SparklesIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/></svg>);
const ClockIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const TrophyIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>);
const GridIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>);
const MonitorIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>);
const EyeIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>);
const TrendingUpIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>);
const PhoneIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.45 2 2 0 0 1 3.6 2.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.82-1.82a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const MailIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const PhoneCallIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.45 2 2 0 0 1 3.6 2.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.82-1.82a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>);
const BriefcaseIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>);
const TargetIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
const WalletIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>);
const BarChartIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>);
const UsersIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const MilestoneIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5z"/><path d="M12 13v8"/><path d="M12 3v3"/></svg>);
const CloudIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>);
const ArrowsIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>);
const CheckCircleIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>);
const BookOpenIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>);
const ZapIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>);
const ShieldIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
const StarIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>);
const ArrowRightIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);
const CheckIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);
const CrossIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>);
const FlagIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>);
const HeartIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>);

/* ── Data ── */
const PHASES = [
  { icon: <SearchIcon/>, title: "Analysis of requirements", body: "We first understand your company's requirements. It is extremely difficult to create the right solution without fully grasping your business needs.", tag: "Discovery", ai: false, outcome: "Signed-off scope", duration: "1–2 weeks", deliverables: ["Stakeholder interviews", "Process mapping", "Fit-gap analysis", "Risk register"] },
  { icon: <CodeIcon/>, title: "Development & personalisation", body: "After understanding your needs, we proceed with Odoo ERP development. Modules are built to serve your business, following industry norms.", tag: "Build", ai: true, outcome: "Modules shipped", duration: "4–6 weeks", deliverables: ["Custom modules", "Peer code reviews", "API integrations", "Sprint demos"] },
  { icon: <SettingsIcon/>, title: "Odoo installation & configuration", body: "Configuration flexibility aligned to your business. ERP functions and analysis tools are tuned for the highest practical level of customisation.", tag: "Configure", ai: false, outcome: "Fit-gap closed", duration: "2–3 weeks", deliverables: ["Master data setup", "Workflows & rules", "Permissions matrix", "Reports & KPIs"] },
  { icon: <DatabaseIcon/>, title: "Data transfer", body: "Data transfer is vital. We move data from legacy software, spreadsheets, and older Odoo versions into your new Odoo ERP with care.", tag: "Migrate", ai: true, outcome: "Data reconciled", duration: "1–2 weeks", deliverables: ["Data cleansing", "Mapping rules", "Mock cutovers", "Reconciliation"] },
  { icon: <GraduationIcon/>, title: "Assistance & training", body: "Odoo's breadth makes training essential. After go-live, we train end users through live sessions, recordings, and documentation.", tag: "Enable", ai: false, outcome: "Teams ready", duration: "1–2 weeks", deliverables: ["Role-based journeys", "Live training sessions", "Documentation pack", "Champions program"] },
  { icon: <RocketIcon/>, title: "Going live", body: "We stay with you through launch and stabilisation so unclear edge cases are handled quickly from day one.", tag: "Launch", ai: true, outcome: "Live in production", duration: "1 week + 90 days hypercare", deliverables: ["Cutover plan", "Hypercare desk", "Defect tracking", "Stabilisation review"] },
] as const;

const ROADMAP_CHAPTERS = [
  { chapter: "01", tag: "Foundation", title: "Plan & Decide", desc: "Lay the foundation. Define outcomes, budget, ERP fit, and the right partner — before a single module is touched.", accent: "ai" as const,
    steps: [
      { n: "01", icon: <TargetIcon/>, title: "Defining business objectives", body: "We align on the outcomes you need so recommendations map to measurable goals.", deliverable: "Outcome map" },
      { n: "02", icon: <WalletIcon/>, title: "Allocation of finances", body: "Budget clarity early so scope, phases, and hosting choices stay realistic.", deliverable: "Phased budget" },
      { n: "03", icon: <BarChartIcon/>, title: "Choosing the most appropriate ERP", body: "If Odoo is the fit, we document why and how each app supports your processes.", deliverable: "Fit assessment" },
      { n: "04", icon: <UsersIcon/>, title: "Picking the right implementation partner", body: "Experience, methodology, and post-go-live support matter as much as technical skill.", deliverable: "Partner decision" },
    ]},
  { chapter: "02", tag: "Construction", title: "Build & Validate", desc: "Construct, configure, migrate, and test — every step gated, so nothing reaches users until it's ready.", accent: "r" as const,
    steps: [
      { n: "05", icon: <MilestoneIcon/>, title: "Specifying implementation stages", body: "Phased delivery with clear milestones reduces risk and keeps teams productive.", deliverable: "Delivery plan" },
      { n: "06", icon: <CloudIcon/>, title: "Selecting the most suitable plan", body: "Hosting, integrations, and SLAs are chosen to match performance and compliance needs.", deliverable: "Hosting & SLAs" },
      { n: "07", icon: <ArrowsIcon/>, title: "Transfer of data", body: "Legacy data is cleaned, mapped, and reconciled before cutover.", deliverable: "Clean dataset" },
      { n: "08", icon: <CheckCircleIcon/>, title: "Testing", body: "Finance, inventory, and sales flows are thoroughly tested before go-live.", deliverable: "UAT sign-off" },
    ]},
  { chapter: "03", tag: "Operations", title: "Launch & Operate", desc: "Train, cut over, and stay. The rollout doesn't end at go-live — hypercare and upkeep keep Odoo aligned to the business.", accent: "gold" as const,
    steps: [
      { n: "09", icon: <BookOpenIcon/>, title: "Teaching", body: "Users learn the system in the context of their real jobs—not generic demos.", deliverable: "Trained users" },
      { n: "10", icon: <ZapIcon/>, title: "Going live", body: "Controlled cutover with rollback thinking and hypercare when you need it.", deliverable: "Cutover complete" },
      { n: "11", icon: <ShieldIcon/>, title: "Assistance & upkeep", body: "Ongoing support keeps Odoo aligned as your business and regulations evolve.", deliverable: "Ongoing partnership" },
    ]},
] as const;

const GOLD_FEATURES = [
  { icon: <CpuIcon/>, t: "Certified depth", b: "Functional and technical consultants who work in Odoo every day—not occasional freelancers." },
  { icon: <EyeIcon/>, t: "Fewer blind spots", b: "Standard processes for upgrades, security, and performance so surprises are reduced before go-live." },
  { icon: <TrendingUpIcon/>, t: "Economical long term", b: "Recommendations prioritise stable operations and clean upgrades over quick hacks." },
  { icon: <PhoneIcon/>, t: "Direct escalation paths", b: "When issues are rare but critical, partner-level backing matters for your business continuity." },
] as const;

const COMPARE = [
  { row: "Day-1 cost", g: "Lower upfront", p: "Higher upfront" },
  { row: "Code quality", g: "Variable", p: "Reviewed & audited" },
  { row: "Upgrade safety", g: "Risky for customised stacks", p: "Standard, repeatable process" },
  { row: "Escalation path", g: "Limited routes", p: "Partner-level backing" },
  { row: "Total lifecycle cost", g: "Often higher", p: "Predictable & lower" },
] as const;

const BENTO_DATA = [
  { icon: <CpuIcon/>, t: "Exceptional engineering discipline", b: "Clean, maintainable Odoo code that survives upgrades, audits, and growth.", tag: "Engineering", size: "feature", ai: true, variant: "", stat: { n: "100%", l: "Peer reviewed" } },
  { icon: <PackageIcon/>, t: "Strong Odoo Apps footprint", b: "Deep experience shipping modules the community and enterprises actually use.", tag: "Apps", size: "", ai: false, variant: "glow-red", mini: { n: "40+", l: "Modules" } },
  { icon: <RefreshIcon/>, t: "Skilled across Odoo versions", b: "From older instances to Odoo 17/18—we plan migrations with zero surprises.", tag: "Versions", size: "", ai: true, variant: "glow-ai", mini: { n: "v10–v18", l: "Coverage" } },
  { icon: <SparklesIcon/>, t: "Uncompromised quality", b: "Reviews, automated checks, and partner-grade standards on every delivery.", tag: "Quality", size: "wide", ai: false, variant: "pattern", mini: { n: "0", l: "Critical regressions" } },
  { icon: <ClockIcon/>, t: "Years of execution", b: "Long-running programmes across manufacturing, services, and distribution.", tag: "Execution", size: "", ai: true, variant: "glow-ai", mini: { n: "7+", l: "Years" } },
  { icon: <TrophyIcon/>, t: "Thousands of success stories", b: "A track record you can verify through references and shipped projects.", tag: "Track record", size: "", ai: false, variant: "glow-red", mini: { n: "254+", l: "Live" } },
  { icon: <GridIcon/>, t: "All major Odoo domains", b: "Accounting, inventory, MRP, CRM, HR, eCommerce, and custom verticals.", tag: "Domains", size: "wide", ai: false, variant: "pattern", mini: { n: "9", l: "Domains" } },
  { icon: <MonitorIcon/>, t: "UI & UX depth", b: "Interfaces your teams enjoy using—not cluttered forms bolted together.", tag: "UI/UX", size: "", ai: true, variant: "glow-ai", mini: { n: "WCAG AA", l: "Standard" } },
] as const;

const STATS = [
  { n: "7+", l: "Years active", g: false },
  { n: "254+", l: "Projects delivered", g: false },
  { n: "20+", l: "Nations served", g: false },
  { n: "Gold", l: "Odoo partner", g: true },
] as const;

/* ── Component ── */
export function OdooImplementationContent() {
  return (
    <main className="svc-page">

      {/* HERO LUXE */}
      <section className="oi-hero-lux">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">odoo</div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Odoo ERP services</div>
            <div className="oi-hero-lux-pin">
              <span className="oi-hero-lux-pin-dot" />
              <StarIcon />
              <span>Odoo Gold Partner</span>
            </div>
          </div>
          <h1 className="oi-hero-lux-h rev">
            <span className="ln">Implementation,</span>
            <span className="ln"><span className="ai">without the risk.</span></span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Senior-led, sign-off gated Odoo rollouts. <strong>Discovery to hypercare in 12–16 weeks</strong> — with a method refined across 254+ go-lives.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Plan your rollout</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#phases">See the methodology</a>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">Built for</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">Manufacturing</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Retail &amp; Distribution</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Pharma</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Logistics</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="oi-stats-band">
        <div className="oi-stats-band-inner">
          {STATS.map((s) => (
            <div key={s.l} className="oi-stats-band-item">
              <div className={`oi-stats-band-n${s.g ? " gold" : ""}`}>{s.n}</div>
              <div className="oi-stats-band-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="oi-meth" id="phases">
        <div className="oi-meth-inner">
          <div className="oi-meth-intro rev">
            <div className="oi-meth-intro-l">
              <div className="eyebrow">Methodology</div>
              <h2>From requirements<br /><span>to confident go-live.</span></h2>
              <div className="oi-meth-intro-l-meta">
                <span className="oi-meth-intro-l-meta-k">Last refined</span>
                <span className="oi-meth-intro-l-meta-v">
                  <span className="oi-meth-intro-l-meta-dot" />
                  After the 250th go-live · Q4 2025
                </span>
              </div>
            </div>
            <div className="oi-meth-intro-r">
              <p>Six gated phases. Each one staffed by senior consultants who have run comparable rollouts before — so you always know what is happening next, what you walk away with, and why it matters for your KPIs.</p>
              <div className="oi-meth-intro-mini">
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">6</span><span className="oi-meth-mini-u">phases</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Sign-off gated</div>
                  <div className="oi-meth-mini-s">Each one ends in your acceptance.</div>
                </div>
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">12–16</span><span className="oi-meth-mini-u">weeks</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Typical timeline</div>
                  <div className="oi-meth-mini-s">End-to-end, discovery → go-live.</div>
                </div>
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">100</span><span className="oi-meth-mini-u">%</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Senior-led</div>
                  <div className="oi-meth-mini-s">Never juniors or shadow staffing.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="oi-meth-strip rev">
            {PHASES.map((phase, i) => (
              <div key={phase.tag} className={`oi-meth-strip-step${phase.ai ? " ai" : ""}`}>
                <div className="oi-meth-strip-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="oi-meth-strip-label">{phase.tag}</div>
              </div>
            ))}
          </div>

          <div className="oi-meth-grid rev">
            {PHASES.map((phase, i) => (
              <div key={phase.title} className={`oi-meth-card${phase.ai ? " ai" : ""}`}>
                <div className="oi-meth-card-head">
                  <div className="oi-meth-card-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="oi-meth-card-icon">{phase.icon}</div>
                </div>
                <div className="oi-meth-card-tag">{phase.tag}</div>
                <div className="oi-meth-card-title">{phase.title}</div>
                <p className="oi-meth-card-body">{phase.body}</p>
                <div className="oi-meth-card-deliv-l">What you walk away with</div>
                <div className="oi-meth-card-deliv">
                  {phase.deliverables.map((d) => (
                    <div key={d} className="oi-meth-card-deliv-item">
                      <span className="oi-meth-card-deliv-icon"><CheckIcon /></span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
                <div className="oi-meth-card-foot">
                  <div className="oi-meth-card-foot-l">
                    <span className="oi-meth-card-foot-k">{phase.duration}</span>
                    <span className="oi-meth-card-foot-v">{phase.outcome}</span>
                  </div>
                  <span className="oi-meth-card-foot-arrow"><ArrowRightIcon /></span>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready when you are</div>
              <h3>Want this methodology applied to <span>your operation?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a consultant</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP — editorial light */}
      <section className="oi-rmap" id="roadmap">
        <div className="oi-rmap-inner">

          {/* Section header */}
          <div className="oi-rmap-hdr rev">
            <div>
              <div className="eyebrow">Implementation roadmap</div>
              <h2>Eleven gates.<br /><span>Zero surprises.</span></h2>
            </div>
            <div className="oi-rmap-hdr-r">
              <p>Every stage in your rollout is <strong>sign-off gated</strong> — a phase only begins once you&apos;ve accepted the one before it. No scope drift, no silent overruns, no go-live shock. Refined across <strong>254+ go-lives</strong> in 20+ countries.</p>
              <div className="oi-rmap-overview-row">
                <div className="oi-rmap-overview">
                  <span className="oi-rmap-overview-dot" />
                  <div>
                    <div className="oi-rmap-overview-t">Sign-off gated</div>
                    <div className="oi-rmap-overview-s">You decide what&apos;s done.</div>
                  </div>
                </div>
                <div className="oi-rmap-overview">
                  <span className="oi-rmap-overview-dot r" />
                  <div>
                    <div className="oi-rmap-overview-t">Battle-tested</div>
                    <div className="oi-rmap-overview-s">254+ go-lives shipped.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All-stages at-a-glance strip */}
          <div className="oi-rmap-strip rev">
            {ROADMAP_CHAPTERS.flatMap((c) =>
              c.steps.map((step) => (
                <span key={step.n} className="oi-rmap-strip-chip" data-accent={c.accent}>
                  <span className="oi-rmap-strip-n">{step.n}</span>
                  <span>{step.title.split(" ").slice(0, 2).join(" ")}</span>
                </span>
              ))
            )}
          </div>

          {/* Chapter rows */}
          {ROADMAP_CHAPTERS.map((c) => (
            <div key={c.chapter} className={`oi-rmap-chapter ${c.accent}`} data-cols={c.steps.length === 3 ? "3" : "2"}>
              {/* Info card */}
              <div className="oi-rmap-info rev">
                <div className="oi-rmap-info-top">
                  <div className="oi-rmap-info-num">{c.chapter}</div>
                  <span className="oi-rmap-info-tag">Chapter · {c.tag}</span>
                  <h3 className="oi-rmap-info-title">{c.title}</h3>
                  <p className="oi-rmap-info-desc">{c.desc}</p>
                </div>
                <div className="oi-rmap-info-foot">
                  <span className="oi-rmap-info-foot-l">Stages {c.steps[0].n}–{c.steps[c.steps.length - 1].n}</span>
                  <span className="oi-rmap-info-foot-pill">{c.steps.length} stages</span>
                </div>
              </div>

              {/* Steps grid */}
              <div className="oi-rmap-steps rev">
                {c.steps.map((step) => (
                  <div key={step.n} className="oi-rmap-step">
                    <div className="oi-rmap-step-head">
                      <div className="oi-rmap-step-icon">{step.icon}</div>
                    </div>
                    <div className="oi-rmap-step-title">{step.title}</div>
                    <p className="oi-rmap-step-body">{step.body}</p>
                    <span className="oi-rmap-step-deliv">
                      <FlagIcon />
                      {step.deliverable}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GOLD PARTNER */}
      <section className="oi-gp" id="gold-partner">
        <div className="oi-gp-inner">
          <div className="oi-gp-hdr rev">
            <div className="eyebrow">Why a gold partner</div>
            <h2 className="sec-h">Odoo Gold Partner: <span className="acc">what you gain</span></h2>
          </div>

          <div className="oi-gp-spotlight rev">
            <div className="oi-gp-spotlight-top">
              <div className="oi-gp-spotlight-l">
                <div className="oi-gp-spotlight-head">
                  <div className="oi-gp-badge-lg">
                    <StarIcon />
                    <span className="oi-gp-badge-lg-t">Odoo Gold Partner · Certified</span>
                  </div>
                </div>
                <h3>Trained, certified specialists who treat your stack as a <span>long-term asset</span>.</h3>
              </div>
              <div className="oi-gp-spotlight-stat">
                <div className="oi-gp-spotlight-stat-n">Gold</div>
                <div className="oi-gp-spotlight-stat-l">Tier-1<br />Partner Status</div>
              </div>
            </div>
            <div className="oi-gp-features">
              {GOLD_FEATURES.map((f) => (
                <div key={f.t} className="oi-gp-feature">
                  <div className="oi-gp-feature-icon">{f.icon}</div>
                  <div>
                    <div className="oi-gp-feature-t">{f.t}</div>
                    <div className="oi-gp-feature-b">{f.b}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="oi-gp-spotlight-meta">
              <div className="oi-gp-meta-item"><StarIcon /> Tier-1 Certified</div>
              <div className="oi-gp-meta-item"><CheckCircleIcon /> Methodology audited</div>
              <div className="oi-gp-meta-item"><HeartIcon /> 254+ verifiable references</div>
            </div>
          </div>

          <div className="oi-gp-compare-wrap rev">
            <div className="oi-gp-recommend"><StarIcon /> Recommended</div>
            <div className="oi-gp-compare">
              <div className="oi-gp-compare-hdr">
                <div>Decision factor</div>
                <div>Generalist shop</div>
                <div><StarIcon /> Gold Partner</div>
              </div>
              {COMPARE.map((c) => (
                <div key={c.row} className="oi-gp-compare-row">
                  <div>{c.row}</div>
                  <div><span className="oi-gp-cell-content"><span className="oi-gp-cross"><CrossIcon /></span>{c.g}</span></div>
                  <div><span className="oi-gp-cell-content"><span className="oi-gp-check"><CheckIcon /></span>{c.p}</span></div>
                </div>
              ))}
            </div>
          </div>

          <div className="oi-gp-cta rev">
            <div className="oi-gp-cta-l">
              <a className="oi-cta-big" href="#contact">
                <span>Engage Wan Buffer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
            <span className="oi-gp-cta-note">
              <strong>Day-1 cost is a number.</strong> Lifecycle cost is the truth.
            </span>
          </div>
        </div>
      </section>

      {/* BENTO — magazine spread */}
      <section className="oi-bento-sec" id="why-us">
        <div className="oi-bento-inner">

          {/* Header: intro + credentials card */}
          <div className="oi-bento-hdr rev">
            <div className="oi-bento-hdr-l">
              <div className="eyebrow">Why Wan Buffer</div>
              <h2>What you get<br /><span>on the ground.</span></h2>
            </div>
            <div className="oi-bento-hdr-r">
              <p>We help you trace technical issues to root cause, ship maintainable code, and keep UX in mind so adoption actually happens after go-live.</p>
              <div className="oi-bento-credit">
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n r">254<span style={{ fontSize: ".7em" }}>+</span></div>
                  <div className="oi-bento-credit-l">Projects shipped</div>
                </div>
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n">7<span style={{ fontSize: ".7em" }}>+ yrs</span></div>
                  <div className="oi-bento-credit-l">Senior avg</div>
                </div>
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n ai">100<span style={{ fontSize: ".7em" }}>%</span></div>
                  <div className="oi-bento-credit-l">Peer reviewed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero feature banner */}
          <div className="oi-bento-hero rev">
            <div className="oi-bento-hero-icon"><CpuIcon /></div>
            <div className="oi-bento-hero-body">
              <div className="oi-bento-hero-tag">Engineering discipline</div>
              <div className="oi-bento-hero-t">Clean, maintainable Odoo code — built to survive upgrades, audits, and growth.</div>
              <p className="oi-bento-hero-b">Every line shipped is peer-reviewed against partner-grade standards. We treat your stack as a long-term asset, not a one-time delivery.</p>
            </div>
            <div className="oi-bento-hero-stat">
              <div className="oi-bento-hero-stat-n">0</div>
              <div className="oi-bento-hero-stat-l">Critical regressions<br />in last 24 months</div>
            </div>
          </div>

          {/* 3-col card grid (7 supporting features) */}
          <div className="oi-bento rev">
            {BENTO_DATA.filter((b) => b.size !== "feature").map((b, i) => (
              <div key={b.t} className={`oi-bento-card${b.ai ? " ai" : ""}`}>
                <div className="oi-bento-card-head">
                  <div className="oi-bento-card-num">{String(i + 2).padStart(2, "0")}</div>
                  <div className="oi-bento-icon">{b.icon}</div>
                </div>
                <div className="oi-bento-card-tag">{b.tag}</div>
                <div className="oi-bento-card-t">{b.t}</div>
                <p className="oi-bento-card-b">{b.b}</p>
                {"mini" in b && b.mini && (
                  <div className="oi-bento-card-foot">
                    <div className="oi-bento-card-stat">
                      <span className={`oi-bento-card-stat-n${b.ai ? " ai" : " r"}`}>{b.mini.n}</span>
                      <span className="oi-bento-card-stat-l">{b.mini.l}</span>
                    </div>
                    <span className="oi-bento-card-arrow"><ArrowRightIcon /></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSER — manifesto + commitments + CTA */}
      <section className="oi-closer" id="capabilities">
        <div className="oi-closer-inner">

          {/* Top: sharp insight + manifesto */}
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your partner</div>
              <h3>The software rarely fails.<br /><span>The team behind it does.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">1 in 3<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>ERP rollouts miss their go-live.</strong>
                  Source: Panorama Consulting, 2023. The decisive factor isn&apos;t the software — it&apos;s the team that runs it. Methodology, seniority, and accountability matter more than license cost.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer engagement is built around four written commitments. None are optional, none get traded away under deadline pressure.</p>
            </div>
          </div>

          {/* Commitments grid */}
          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior consultants only</div>
                <p className="oi-closer-commit-b">Average 7+ years on Odoo. No juniors and no shadow staffing — the name on the SoW is the person doing the work.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><CheckCircleIcon /></div>
                <div className="oi-closer-commit-t">Fixed-price phases</div>
                <p className="oi-closer-commit-b">Scope, deliverables, and price agreed in writing before each phase begins. No scope drift, no surprise invoices.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">90-day hypercare</div>
                <p className="oi-closer-commit-b">Senior support included for 90 days post go-live. We stay until your team is genuinely independent — not billed extra.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><TrendingUpIcon /></div>
                <div className="oi-closer-commit-t">Methodology, not theory</div>
                <p className="oi-closer-commit-b">11-stage roadmap refined across 254+ go-lives. Each stage has its own acceptance criteria — and you sign off.</p>
              </div>
            </div>
          </div>

          {/* Bottom: closing CTA */}
          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Last decision before the work begins</div>
              <h4>Get a written proposal in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Plan your rollout</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
              <a className="oi-closer-cta-link" href="#support">Or talk to support first</a>
            </div>
          </div>

        </div>
      </section>

      {/* SUPPORT (clean) */}
      <section className="oi-supp" id="support">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Odoo support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior-led. SLA in writing.</p>
          </div>

          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live">
                <span className="oi-supp-status-v2-dot" />
                Online now
              </span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For detailed questions, screenshots, and full ticket history. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>

            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent">
                <span className="oi-supp-status-v2-dot" />
                Urgent issues
              </span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 × 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Production-down incidents and time-sensitive decisions. Answered by a senior consultant.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>

            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring">
                <span className="oi-supp-status-v2-dot" />
                We&apos;re hiring
              </span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring and career enquiries. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>

          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior-led only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> NDA-protected</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
