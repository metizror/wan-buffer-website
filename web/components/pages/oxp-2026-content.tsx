/* ────────────────────────────────────────────────────────────────────────
   ODOO EXPERIENCE 2026 INDIA — campaign landing page
   Hero + countdown · Intro · Highlights · Why attend · Our presence ·
   What you'll experience · Solutions · Integrations · Industries · Demos ·
   Challenges · Why us · Experts · Agenda · Details · Location · FAQ · CTA
──────────────────────────────────────────────────────────────────────── */

import Link from "next/link";

import { Oxp2026Countdown } from "./oxp-2026-countdown";
import { Oxp2026FaqSection, type Oxp2026Faq } from "./oxp-2026-faq";
import {
  ArrowRightIcon,
  ArrowsIcon,
  BarChartIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CheckIcon,
  CloudIcon,
  CodeIcon,
  CpuIcon,
  DatabaseIcon,
  EyeIcon,
  GraduationIcon,
  GridIcon,
  HeartIcon,
  MailIcon,
  MonitorIcon,
  PackageIcon,
  PhoneCallIcon,
  RocketIcon,
  SettingsIcon,
  SparklesIcon,
  TargetIcon,
  TrendingUpIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
} from "@/components/services/odoo-service-icons";

export const OXP_EVENT_URL =
  "https://www.odoo.com/event/odoo-experience-2026-india-10174/page/oxp26-india-introduction";

const VENUE_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Mahatma+Mandir+Convention+Centre+Gandhinagar+Gujarat";

/* ── Data ── */

const SUBNAV = [
  { href: "#about-event", label: "About Event" },
  { href: "#solutions", label: "Our Solutions" },
  { href: "#ai-automation", label: "AI & Automation" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
] as const;

const HIGHLIGHTS = [
  { n: "200+", l: "Talks & Sessions", b: "Explore business, functional, technical, development, and industry-focused sessions.", g: false },
  { n: "180+", l: "Exhibitors", b: "Discover Odoo partners, solutions, technologies, and real-world implementations.", g: false },
  { n: "10", l: "Master Classes", b: "Go deeper with practical, hands-on learning across key Odoo business areas.", g: false },
  { n: "45K+", l: "Attendees", b: "Connect with a growing global Odoo community and industry professionals.", g: false },
  { n: "Odoo 20", l: "Live Launch", b: "Get a first look at the next generation of Odoo and its latest capabilities.", g: true },
  { n: "2", l: "Days of Innovation", b: "Learn, network, explore, and experience the Odoo ecosystem under one roof.", g: false },
] as const;

const WHY_ATTEND = [
  { icon: <SparklesIcon />, t: "Discover What's New", b: "Get closer to the latest Odoo innovations and understand what's changing across the platform." },
  { icon: <GraduationIcon />, t: "Learn From Experts", b: "Gain practical insights from Odoo specialists, partners, developers, and business leaders." },
  { icon: <BriefcaseIcon />, t: "Explore Real Business Solutions", b: "See how businesses are using Odoo to solve real operational challenges." },
  { icon: <CpuIcon />, t: "Experience AI & Automation", b: "Discover how AI and automation are changing ERP and everyday business workflows." },
  { icon: <UsersIcon />, t: "Build Your Network", b: "Connect with people from across the Odoo ecosystem and explore new business opportunities." },
  { icon: <TargetIcon />, t: "Plan Your Digital Transformation", b: "Get ideas, insights, and expert perspectives to shape your next technology roadmap." },
] as const;

const PRESENCE = [
  { icon: <MailIcon />, t: "Discuss Your Requirements", b: "Bring your current business challenges and discuss them with our experts." },
  { icon: <GridIcon />, t: "Explore Our Solutions", b: "See our products, integrations, customizations, and automation capabilities." },
  { icon: <BookOpenIcon />, t: "Get Expert Guidance", b: "Understand how Odoo can fit into your existing business processes." },
  { icon: <RocketIcon />, t: "Explore Future Possibilities", b: "Discover how AI and automation can take your Odoo ecosystem further." },
] as const;

const EXPERIENCE = [
  { icon: <MonitorIcon />, t: "Live Product Demonstrations", b: "See our Odoo solutions working through real business scenarios." },
  { icon: <CpuIcon />, t: "AI & Automation Showcase", b: "Experience how AI can simplify business operations and reduce repetitive tasks." },
  { icon: <ArrowsIcon />, t: "Integration Showcase", b: "Discover how Odoo can connect with your existing business applications and platforms." },
  { icon: <BarChartIcon />, t: "Business Intelligence", b: "See how Odoo data can become meaningful dashboards and actionable insights." },
  { icon: <PackageIcon />, t: "Industry Use Cases", b: "Explore solutions designed around real-world business processes and industry challenges." },
  { icon: <PhoneCallIcon />, t: "One-to-One Discussions", b: "Get dedicated time with our Odoo experts to discuss your specific requirements." },
] as const;

const SOLUTIONS = [
  {
    n: "01",
    icon: <SettingsIcon />,
    tag: "Odoo Implementation",
    t: "Build Odoo Around Your Business",
    b: "From business analysis and configuration to deployment and optimization, create an Odoo environment aligned with your business processes.",
    href: "/odoo/implementation",
    cta: "Explore Odoo Implementation",
  },
  {
    n: "02",
    icon: <CodeIcon />,
    tag: "Odoo Customization",
    t: "Make Odoo Work Your Way",
    b: "Extend Odoo with customized workflows, features, reports, and business logic designed around your unique requirements.",
    href: "/odoo/odoo-customization-and-installation",
    cta: "Explore Customization",
  },
  {
    n: "03",
    icon: <ArrowsIcon />,
    tag: "Integrations",
    t: "Connect Odoo With Your Business Ecosystem",
    b: "Connect Odoo with eCommerce, communication, CRM, payment, and other business platforms.",
    href: "/odoo/odoo-erp-integration",
    cta: "Explore Integrations",
  },
  {
    n: "04",
    icon: <PackageIcon />,
    tag: "Odoo Apps",
    t: "Extend Your Odoo Experience",
    b: "Discover ready-to-use Odoo applications designed to add functionality and solve specific business requirements.",
    href: "/odoo/apps",
    cta: "Explore Our Apps",
  },
] as const;

const INTEGRATION_SPOKES = [
  { icon: <PackageIcon />, t: "eCommerce", b: "Shopify • Online Stores • Marketplaces" },
  { icon: <MailIcon />, t: "Communication", b: "WhatsApp • Email • Customer Messaging" },
  { icon: <BriefcaseIcon />, t: "Business Applications", b: "CRM • Finance • HR • Logistics" },
  { icon: <CodeIcon />, t: "Custom Platforms", b: "APIs • Third-Party Applications • Custom Systems" },
] as const;

const INDUSTRIES = [
  { icon: <SettingsIcon />, t: "Manufacturing", b: "Production • MRP • Quality • Planning" },
  { icon: <ArrowsIcon />, t: "Trading & Distribution", b: "Sales • Inventory • Procurement • Logistics" },
  { icon: <GridIcon />, t: "Retail & eCommerce", b: "POS • eCommerce • Inventory • Customer Management" },
  { icon: <UsersIcon />, t: "Services", b: "Projects • Timesheets • CRM • Accounting" },
  { icon: <BriefcaseIcon />, t: "Professional Services", b: "Projects • Timesheets • Sales • Invoicing" },
] as const;

const DEMOS = [
  { icon: <CpuIcon />, t: "Live AI Demo", b: "Watch AI read, classify, and act on real business documents and requests inside Odoo." },
  { icon: <MonitorIcon />, t: "Odoo Solution Demo", b: "Explore how Odoo can manage your core business operations." },
  { icon: <ArrowsIcon />, t: "Integration Demo", b: "See how systems can communicate and share business data." },
  { icon: <ZapIcon />, t: "Automation Demo", b: "Discover how repetitive processes can become smarter and faster." },
  { icon: <PackageIcon />, t: "Industry Demo", b: "Explore workflows designed around specific industry requirements." },
] as const;

const CHALLENGES = [
  "Manual processes",
  "Disconnected systems",
  "Limited business visibility",
  "Complex workflows",
  "Legacy software",
  "Odoo customization",
  "Data integration",
  "AI & automation",
] as const;

const WHY_US = [
  { icon: <TargetIcon />, t: "Functional Expertise", b: "We understand business processes — not just software." },
  { icon: <CodeIcon />, t: "Technical Expertise", b: "Build, customize, integrate, and extend Odoo around your requirements." },
  { icon: <CpuIcon />, t: "AI-Ready Solutions", b: "Explore the next generation of intelligent business automation." },
  { icon: <TrophyIcon />, t: "Industry Experience", b: "Solutions designed around real-world business challenges." },
  { icon: <HeartIcon />, t: "Long-Term Partnership", b: "From implementation to optimization and ongoing support, we're here for the journey." },
] as const;

/**
 * Team line-up. Names and photos are supplied by marketing before launch; until
 * then each card leads with the role, which is what visitors book time against.
 */
const EXPERTS = [
  { role: "Odoo Functional Expert", b: "Process mapping, fit-gap, and configuration decisions." },
  { role: "Odoo Technical Expert", b: "Custom modules, performance, upgrades, and code reviews." },
  { role: "AI & Automation Expert", b: "Document AI, agents, and workflow automation on top of Odoo." },
  { role: "Integration Specialist", b: "eCommerce, messaging, finance, and third-party API integrations." },
] as const;

const AGENDA = [
  {
    day: "Day 01",
    title: "Discover",
    items: [
      { t: "Opening Keynotes", b: "Hear what's shaping the future of Odoo." },
      { t: "Odoo 20 Launch", b: "Discover the latest generation of Odoo." },
      { t: "Business Sessions", b: "Explore practical business and functional use cases." },
      { t: "Exhibition", b: "Discover solutions from Odoo partners and technology providers." },
      { t: "Networking", b: "Connect with the Odoo ecosystem." },
    ],
  },
  {
    day: "Day 02",
    title: "Explore & Learn",
    items: [
      { t: "Technical Sessions", b: "Deep dives into Odoo development and technology." },
      { t: "Master Classes", b: "Hands-on learning across key business areas." },
      { t: "Product Demonstrations", b: "See Odoo capabilities in action." },
      { t: "Expert Meetings", b: "Discuss your requirements one-to-one." },
      { t: "Community & Networking", b: "Continue conversations and build relationships." },
    ],
  },
] as const;

const EVENT_DETAILS = [
  { l: "Date", v: "11–12 September 2026" },
  { l: "Venue", v: "Mahatma Mandir Convention Centre, Gandhinagar, Gujarat, India" },
  { l: "Entry", v: "Basic Pass — Free" },
  { l: "Event highlight", v: "Odoo 20 live launch" },
  { l: "Meet", v: "Odoo partners • Experts • Developers • Business leaders • Entrepreneurs" },
] as const;

const FAQS: Oxp2026Faq[] = [
  {
    q: "What is Odoo Experience 2026 India?",
    a: "Odoo Experience 2026 India is a major Odoo technology and business event bringing together businesses, partners, developers, consultants, and the wider Odoo community.",
  },
  {
    q: "When is Odoo Experience 2026 India?",
    a: "The event is scheduled for 11–12 September 2026 at Mahatma Mandir in Gandhinagar, Gujarat.",
  },
  {
    q: "Who should attend?",
    a: "Business owners, CEOs, decision-makers, Odoo users, developers, consultants, entrepreneurs, and anyone interested in ERP, automation, AI, and digital transformation.",
  },
  {
    q: "What can I experience at the event?",
    a: "You can explore Odoo innovations, attend talks and master classes, see live demonstrations, connect with partners, and network with the Odoo community.",
  },
  {
    q: "Can I meet your team?",
    a: "Yes. Visitors can schedule a meeting with our team to discuss Odoo implementation, customization, integrations, automation, AI, or other business requirements.",
  },
  {
    q: "Can I book a demo?",
    a: "Yes. Use our book a demo or schedule a meeting form to request a dedicated session with our experts.",
  },
];

const FOOTER_SOLUTIONS = [
  { label: "Odoo Implementation", href: "/odoo/implementation" },
  { label: "Odoo Customization", href: "/odoo/odoo-customization-and-installation" },
  { label: "Integrations", href: "/odoo/odoo-erp-integration" },
  { label: "Odoo Apps", href: "/odoo/apps" },
  { label: "Industry Solutions", href: "/industries" },
] as const;

/* ── Component ── */
export function Oxp2026Content() {
  return (
    <main className="svc-page oxp26-page">

      {/* 01 · HERO */}
      <section className="oi-hero-lux oxp26-hero">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">oxp</div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Odoo Experience 2026 India</div>
          </div>
          <h1 className="oi-hero-lux-h rev">
            <span className="ln">Experience the</span>
            <span className="ln">Future of <span className="ai">Odoo</span></span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Join us at Odoo Experience 2026 India and discover how Odoo, AI, automation, and connected
            business solutions can transform the way your business operates.
          </p>

          <div className="oxp26-hero-meta rev">
            <span className="oxp26-hero-chip">
              <BookOpenIcon />
              11–12 September 2026
            </span>
            <span className="oxp26-hero-chip">
              <TargetIcon />
              Mahatma Mandir, Gandhinagar, Gujarat
            </span>
          </div>

          <div className="rev">
            <Oxp2026Countdown />
          </div>

          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Book a Meeting</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#solutions">Explore Our Solutions</a>
          </div>

          <p className="oxp26-hero-support rev">
            Meet our experts. Explore our solutions. Discover what&apos;s possible with Odoo.
          </p>
        </div>
      </section>

      {/* Sticky in-page navigation */}
      <nav className="oxp26-subnav" aria-label="On this page">
        <div className="oxp26-subnav-inner">
          <div className="oxp26-subnav-links">
            {SUBNAV.map((item) => (
              <a key={item.href} className="oxp26-subnav-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="oxp26-subnav-cta" href="#contact">
            Book a Meeting
            <ArrowRightIcon />
          </a>
        </div>
      </nav>

      {/* 02 · EVENT INTRODUCTION */}
      <section className="oxp26-intro" id="about-event">
        <div className="oxp26-intro-inner">
          <div className="oxp26-intro-copy rev">
            <div className="eyebrow">About the event</div>
            <h2 className="sec-h">
              Odoo Experience is <span className="acc">coming to India</span>
            </h2>
            <p className="sec-p">
              Odoo Experience 2026 India brings together business leaders, entrepreneurs, developers,
              consultants, partners, and technology enthusiasts for two days of learning, innovation,
              networking, and business transformation.
            </p>
            <p className="sec-p">
              From the latest Odoo innovations and AI-powered capabilities to practical business use cases,
              technical sessions, workshops, and live demonstrations, the event offers a closer look at
              what&apos;s next in the Odoo ecosystem.
            </p>
          </div>
          <aside className="oxp26-intro-card rev">
            <div className="oxp26-intro-card-badge">And we&apos;ll be there</div>
            <p>
              Meet our team during the event to discuss your business challenges, explore Odoo
              opportunities, and see how our solutions can help you build a more connected and efficient
              business.
            </p>
            <a className="oxp26-btn oxp26-btn-primary" href="#contact">
              Meet Our Experts
              <ArrowRightIcon />
            </a>
          </aside>
        </div>
      </section>

      {/* 03 · EVENT HIGHLIGHTS */}
      <section className="oxp26-highlights">
        <div className="oxp26-highlights-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow lt">Event highlights</div>
            <h2 className="sec-h light">
              Two days. One powerful <span className="ai">Odoo experience.</span>
            </h2>
          </div>
          <div className="oxp26-highlights-grid rev">
            {HIGHLIGHTS.map((item) => (
              <article key={item.l} className="oxp26-highlight-card">
                <div className={`oxp26-highlight-n${item.g ? " gold" : ""}`}>{item.n}</div>
                <h3>{item.l}</h3>
                <p>{item.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 · WHY ATTEND */}
      <section className="oxp26-why">
        <div className="oxp26-why-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow">Why attend</div>
            <h2 className="sec-h">
              Why you should be at <span className="acc">Odoo Experience 2026</span>
            </h2>
          </div>
          <div className="oxp26-card-grid rev">
            {WHY_ATTEND.map((item) => (
              <article key={item.t} className="oxp26-card">
                <span className="oxp26-card-icon">{item.icon}</span>
                <h3>{item.t}</h3>
                <p>{item.b}</p>
              </article>
            ))}
          </div>
          <div className="oxp26-center-cta rev">
            <a className="oxp26-btn oxp26-btn-primary" href="#event-details">
              Plan Your Visit
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      {/* 05 · OUR PRESENCE */}
      <section className="oxp26-presence">
        <div className="oxp26-presence-inner">
          <div className="oxp26-presence-copy rev">
            <div className="eyebrow lt">Our presence</div>
            <h2 className="sec-h light">
              Meet us at <span className="ai">Odoo Experience 2026</span>
            </h2>
            <p className="sec-p light">
              We&apos;re bringing our Odoo expertise, business solutions, and latest innovations to Odoo
              Experience 2026 India.
            </p>
            <p className="sec-p light">
              Whether you&apos;re already using Odoo, planning an implementation, looking for customization,
              or exploring AI and automation, our team is ready to talk.
            </p>
            <a className="oxp26-btn oxp26-btn-light" href="#contact">
              Schedule a Meeting
              <ArrowRightIcon />
            </a>
          </div>
          <div className="oxp26-presence-grid rev">
            {PRESENCE.map((item) => (
              <article key={item.t} className="oxp26-presence-card">
                <span className="oxp26-card-icon ai">{item.icon}</span>
                <h3>{item.t}</h3>
                <p>{item.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 · WHAT YOU'LL EXPERIENCE */}
      <section className="oxp26-experience" id="ai-automation">
        <div className="oxp26-experience-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow">What you&apos;ll experience</div>
            <h2 className="sec-h">
              Step into our <span className="acc">Odoo experience</span>
            </h2>
            <p className="sec-p">
              Not just a booth visit — here is what you actually walk away with after spending time at
              our stand.
            </p>
          </div>
          <div className="oxp26-card-grid rev">
            {EXPERIENCE.map((item) => (
              <article key={item.t} className="oxp26-card">
                <span className="oxp26-card-icon">{item.icon}</span>
                <h3>{item.t}</h3>
                <p>{item.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 · FEATURED SOLUTIONS */}
      <section className="oxp26-solutions" id="solutions">
        <div className="oxp26-solutions-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow">Featured solutions</div>
            <h2 className="sec-h">
              Discover our <span className="acc">solutions</span>
            </h2>
            <p className="sec-p">
              From ERP implementation to AI-powered automation, we help businesses get more value from
              their Odoo ecosystem.
            </p>
          </div>
          <div className="oxp26-solutions-grid rev">
            {SOLUTIONS.map((item) => (
              <article key={item.n} className="oxp26-solution">
                <div className="oxp26-solution-top">
                  <span className="oxp26-solution-icon">{item.icon}</span>
                  <span className="oxp26-solution-n">{item.n}</span>
                </div>
                <span className="oxp26-solution-tag">{item.tag}</span>
                <h3>{item.t}</h3>
                <p>{item.b}</p>
                <Link className="oxp26-solution-cta" href={item.href}>
                  {item.cta}
                  <ArrowRightIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08 · INTEGRATIONS */}
      <section className="oxp26-integration">
        <div className="oxp26-integration-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow lt">Integrations</div>
            <h2 className="sec-h light">
              Odoo doesn&apos;t work alone.<br />
              <span className="ai">Connect everything. Run everything together.</span>
            </h2>
            <p className="sec-p light">
              Your business already uses multiple platforms. Your ERP shouldn&apos;t become another
              isolated system. We help connect Odoo with the tools and platforms your business relies on.
            </p>
          </div>

          <div className="oxp26-hub rev">
            <div className="oxp26-hub-core">
              <span className="oxp26-hub-core-label">Odoo</span>
            </div>
            <div className="oxp26-hub-stem" aria-hidden="true" />
            <div className="oxp26-hub-spokes">
              {INTEGRATION_SPOKES.map((spoke) => (
                <article key={spoke.t} className="oxp26-hub-spoke">
                  <span className="oxp26-card-icon ai">{spoke.icon}</span>
                  <h3>{spoke.t}</h3>
                  <p>{spoke.b}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="oxp26-integration-foot rev">
            <p className="oxp26-integration-line">One business. One connected ecosystem.</p>
            <Link className="oxp26-btn oxp26-btn-light" href="/odoo/odoo-erp-integration">
              Explore Integration Solutions
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* 09 · INDUSTRIES */}
      <section className="oxp26-industries">
        <div className="oxp26-industries-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow">Industries</div>
            <h2 className="sec-h">
              Solutions that <span className="acc">understand your business</span>
            </h2>
            <p className="sec-p">
              Every industry works differently. Our Odoo solutions are designed around real business
              processes, not one-size-fits-all workflows.
            </p>
          </div>
          <div className="oxp26-industries-grid rev">
            {INDUSTRIES.map((item) => (
              <article key={item.t} className="oxp26-industry">
                <span className="oxp26-card-icon">{item.icon}</span>
                <h3>{item.t}</h3>
                <p>{item.b}</p>
              </article>
            ))}
          </div>
          <div className="oxp26-center-cta rev">
            <Link className="oxp26-btn oxp26-btn-primary" href="/industries">
              Explore Industry Solutions
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* 10 · LIVE DEMO */}
      <section className="oxp26-demo">
        <div className="oxp26-demo-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow lt">Live demos</div>
            <h2 className="sec-h light">
              Don&apos;t just see it. <span className="ai">Experience it.</span>
            </h2>
            <p className="sec-p light">
              During Odoo Experience, our team will showcase practical solutions through live
              demonstrations and real-world scenarios.
            </p>
          </div>
          <div className="oxp26-demo-grid rev">
            {DEMOS.map((item) => (
              <article key={item.t} className="oxp26-demo-card">
                <span className="oxp26-card-icon ai">{item.icon}</span>
                <h3>{item.t}</h3>
                <p>{item.b}</p>
              </article>
            ))}
          </div>
          <div className="oxp26-center-cta rev">
            <a className="oxp26-btn oxp26-btn-light" href="#contact">
              Book Your Live Demo
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      {/* 11 · BUSINESS CHALLENGE */}
      <section className="oxp26-challenge">
        <div className="oxp26-challenge-inner rev">
          <div className="eyebrow">Bring your challenge</div>
          <h2 className="sec-h">
            Bring your business challenge.<br />
            <span className="acc">We&apos;ll bring the Odoo expertise.</span>
          </h2>
          <p className="sec-p">Are you facing challenges with:</p>
          <ul className="oxp26-challenge-chips">
            {CHALLENGES.map((item) => (
              <li key={item} className="oxp26-challenge-chip">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
          <p className="oxp26-challenge-line">
            Let&apos;s talk about it. Tell us what you&apos;re trying to solve.
          </p>
          <a className="oxp26-btn oxp26-btn-primary" href="#contact">
            Talk to an Odoo Expert
            <ArrowRightIcon />
          </a>
        </div>
      </section>

      {/* 12 · WHY WORK WITH US */}
      <section className="oxp26-whyus" id="why-us">
        <div className="oxp26-whyus-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow">Why work with us</div>
            <h2 className="sec-h">
              Your Odoo journey. <span className="acc">Our expertise.</span>
            </h2>
          </div>
          <div className="oxp26-whyus-grid rev">
            {WHY_US.map((item) => (
              <article key={item.t} className="oxp26-card">
                <span className="oxp26-card-icon">{item.icon}</span>
                <h3>{item.t}</h3>
                <p>{item.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13 · MEET OUR EXPERTS */}
      <section className="oxp26-team">
        <div className="oxp26-team-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow lt">Meet our experts</div>
            <h2 className="sec-h light">
              Let&apos;s talk Odoo. <span className="ai">Meet the team behind the solutions.</span>
            </h2>
            <p className="sec-p light">
              Have a business requirement? Want to discuss an Odoo implementation? Exploring AI? Need an
              integration? Our experts will be available during Odoo Experience 2026 India.
            </p>
          </div>
          <div className="oxp26-team-grid rev">
            {EXPERTS.map((item) => (
              <article key={item.role} className="oxp26-team-card">
                <span className="oxp26-team-avatar" aria-hidden="true">
                  <UsersIcon />
                </span>
                <h3>{item.role}</h3>
                <p>{item.b}</p>
              </article>
            ))}
          </div>
          <div className="oxp26-center-cta rev">
            <a className="oxp26-btn oxp26-btn-light" href="#contact">
              Schedule a Meeting
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      {/* 14 · AGENDA */}
      <section className="oxp26-agenda">
        <div className="oxp26-agenda-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow">What to expect</div>
            <h2 className="sec-h">
              Your two days at <span className="acc">Odoo Experience</span>
            </h2>
          </div>
          <div className="oxp26-agenda-grid rev">
            {AGENDA.map((day) => (
              <article key={day.day} className="oxp26-agenda-day">
                <header className="oxp26-agenda-day-head">
                  <span className="oxp26-agenda-day-n">{day.day}</span>
                  <h3>{day.title}</h3>
                </header>
                <ol className="oxp26-agenda-list">
                  {day.items.map((item) => (
                    <li key={item.t}>
                      <span className="oxp26-agenda-dot" aria-hidden="true" />
                      <div>
                        <h4>{item.t}</h4>
                        <p>{item.b}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 15 · EVENT DETAILS */}
      <section className="oxp26-details" id="event-details">
        <div className="oxp26-details-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow">Plan your visit</div>
            <h2 className="sec-h">
              Event <span className="acc">details</span>
            </h2>
          </div>
          <div className="oxp26-details-card rev">
            <dl className="oxp26-details-list">
              {EVENT_DETAILS.map((item) => (
                <div key={item.l} className="oxp26-details-row">
                  <dt>{item.l}</dt>
                  <dd>{item.v}</dd>
                </div>
              ))}
            </dl>
            <a
              className="oxp26-btn oxp26-btn-primary"
              href={OXP_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Your Event Pass
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      {/* 16 · LOCATION */}
      <section className="oxp26-location">
        <div className="oxp26-location-inner">
          <div className="oxp26-head rev">
            <div className="eyebrow">Location</div>
            <h2 className="sec-h">
              Find us at <span className="acc">Odoo Experience 2026</span>
            </h2>
          </div>
          <div className="oxp26-location-card rev">
            <div className="oxp26-location-copy">
              <h3>Mahatma Mandir Convention Centre</h3>
              <p>Gandhinagar, Gujarat, India</p>
              {/* Booth number goes here once the floor plan is confirmed. */}
              <p className="oxp26-location-note">See you there.</p>
              <a
                className="oxp26-btn oxp26-btn-primary"
                href={VENUE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
                <ArrowRightIcon />
              </a>
            </div>
            <div className="oxp26-location-visual" aria-hidden="true">
              <span className="oxp26-location-pin">
                <TargetIcon />
              </span>
              <span className="oxp26-location-visual-l">Gandhinagar, Gujarat</span>
            </div>
          </div>
        </div>
      </section>

      {/* 17 · FAQ */}
      <Oxp2026FaqSection faqs={FAQS} />

      {/* 18 · FINAL CTA */}
      <section className="oxp26-final">
        <div className="oxp26-final-inner rev">
          <div className="eyebrow lt">Odoo Experience 2026 India</div>
          <h2 className="sec-h light oxp26-final-h">
            Ready to experience <span className="ai">what&apos;s next?</span>
          </h2>
          <p className="oxp26-final-sub">Let&apos;s meet at Odoo Experience 2026 India.</p>
          <ul className="oxp26-final-points">
            <li><CheckIcon /> Discover new possibilities with Odoo</li>
            <li><CheckIcon /> Experience automation</li>
            <li><CheckIcon /> Connect your business</li>
            <li><CheckIcon /> Talk to our experts</li>
          </ul>
          <p className="oxp26-final-line">
            Your next Odoo opportunity could start with one conversation.
          </p>
          <div className="oxp26-final-actions">
            <a className="oxp26-btn oxp26-btn-light" href="#contact">
              Book a Meeting
              <ArrowRightIcon />
            </a>
            <a className="oxp26-btn oxp26-btn-ghost" href="#solutions">
              Explore Our Solutions
            </a>
          </div>
        </div>
      </section>

      {/* 19 · PRE-FOOTER BAND */}
      <section className="oxp26-prefooter">
        <div className="oxp26-prefooter-inner rev">
          <div className="oxp26-prefooter-col">
            <h3>Odoo solutions</h3>
            <p className="oxp26-prefooter-tag">Connected. Automated. Intelligent.</p>
            <ul>
              {FOOTER_SOLUTIONS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="oxp26-prefooter-col">
            <h3>Event</h3>
            <ul>
              <li>Odoo Experience 2026 India</li>
              <li>11–12 September 2026</li>
              <li>Mahatma Mandir, Gandhinagar</li>
              <li>
                <a href={OXP_EVENT_URL} target="_blank" rel="noopener noreferrer">
                  Official event page
                </a>
              </li>
            </ul>
          </div>
          <div className="oxp26-prefooter-col">
            <h3>Talk to our experts</h3>
            <p className="oxp26-prefooter-tag">
              Tell us what you want to solve and we will book a slot during the event.
            </p>
            <a className="oxp26-btn oxp26-btn-primary" href="#contact">
              Talk to Our Experts
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
