/* Odoo hosting — content aligned with wanbuffer.com/odoo/odoo-hosting.php (no extra marketing sections). */

import type { ReactNode } from "react";
import Image from "next/image";

import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckIcon,
  ClockIcon,
  HeartIcon,
  MailIcon,
  PhoneCallIcon,
  ShieldIcon,
} from "./odoo-service-icons";

const CHOOSING_POINTS = [
  "The performance of the platform and response times are critical to hosting a successful website.",
  "Odoo's pricing includes the cost of hosting, so it's important to find a cost-effective solution.",
  "The quality of support can be improved by using the right hosting.",
  "The right hosting provider will be able to upgrade the service based on operational requirements.",
] as const;

const ONLINE_CONCERNS = [
  "Based on a subscription model",
  "No maintenance",
  "Minimum customisation",
  "No database access",
  "No installation",
] as const;

const ODOO_SH_POINTS = [
  "Less downtime",
  "Backup of data",
  "Customisation",
  "Monitoring",
  "GitHub integration",
  "Online editor",
  "Automated testing",
  "Backup servers",
  "Replication of database",
  "E-mail server",
  "Easy to maintain",
  "Accurate and error-free operations",
] as const;

const CLOUD_BULLETS = ["Cloud-based", "Remote accessibility", "Third-party integration"] as const;

const CLOUD_PROVIDERS = ["Amazon Web Services", "Google Cloud", "Microsoft Azure"] as const;

const OS_LIST = ["Linux - Ubuntu (most suited)", "Windows", "macOS"] as const;

function HostingHighlightList({ items }: { items: readonly string[] }) {
  return (
    <ul className="oi-train-highlights" aria-label="Highlights">
      {items.map((text) => (
        <li key={text} className="oi-train-highlight-row">
          <span className="oi-train-highlight-icon" aria-hidden>
            <CheckIcon />
          </span>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}

interface HostingSplitProps {
  imageSrc: string;
  imageW: number;
  imageH: number;
  imageAlt: string;
  priority?: boolean;
  children: ReactNode;
}

function HostingSplit({ imageSrc, imageW, imageH, imageAlt, priority, children }: HostingSplitProps) {
  return (
    <div className="oi-train-split-wrap">
      <div className="oi-meth-intro oi-int-meth-intro rev">
        <div className="oi-int-split-media">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageW}
            height={imageH}
            className="oi-int-img"
            sizes="(max-width: 900px) 100vw, 50vw"
            priority={priority}
          />
        </div>
        <div className="oi-train-split-copy">{children}</div>
      </div>
    </div>
  );
}

export function OdooHostingContent() {
  return (
    <main className="svc-page">
      <section className="oi-hero-lux" aria-labelledby="oi-host-hero-title">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">odoo</div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Odoo ERP services</div>
          </div>
          <h1 id="oi-host-hero-title" className="oi-hero-lux-h rev">
            <span className="ln">Odoo</span>
            <span className="ln">
              <span className="ai">Hosting</span>
            </span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Compare Odoo Online, Odoo.sh, managed cloud, and on-premise hosting—before implementation locks in your operating model.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Chat now</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </a>
            <a className="oi-hero-lux-secondary" href="#support">
              Odoo support
            </a>
          </div>
        </div>
      </section>

      <section className="oi-host-intro-band" aria-label="Introduction">
        <div className="oi-host-intro-band-inner rev">
          <p>
            Hosting is crucial to the platform&apos;s operational performance capabilities. In fact, it is an aspect of Odoo implementation that you should consider before proceeding.
          </p>
          <a className="oi-host-intro-cta" href="#contact">
            Chat now
          </a>
        </div>
      </section>

      <section className="oi-rmap" id="why-hosting">
        <div className="oi-rmap-inner">
          <HostingSplit
            imageSrc="/odoo/hosting/odoo_migration_1.webp"
            imageW={683}
            imageH={496}
            imageAlt="Odoo hosting overview"
            priority
          >
            <h2 className="oi-train-h4">Why hosting?</h2>
            <p className="oi-int-split-lead">
              Odoo is not one of the standard software solutions or applications that can be downloaded and installed. However, for it to be effective, it needs its own set of planning, development, implementation, and hosting resources. Depending on the mode, medium, and edition of Odoo you use, there are various options for Odoo hosting. It is possible to host Odoo online, on a cloud server, or in your own data centre, depending on your requirements.
            </p>
          </HostingSplit>

          <HostingSplit imageSrc="/odoo/hosting/odoo_migration_2.webp" imageW={683} imageH={496} imageAlt="Choosing Odoo hosting">
            <h3 className="oi-train-h4">Choosing the right host is crucial.</h3>
            <p className="oi-int-split-lead">
              Odoo can be hosted in a variety of ways, depending on the type of enterprise solution you need for your business. Therefore, it&apos;s critical that you carefully consider all of your options before settling on one.
            </p>
            <p className="oi-int-split-lead oi-host-cta-lead">
              <a className="oi-host-inline-link" href="#contact">
                Contact us
              </a>{" "}
              to discuss performance, cost, and the right hosting model for your edition.
            </p>
            <HostingHighlightList items={CHOOSING_POINTS} />
          </HostingSplit>
        </div>
      </section>

      <section className="oi-meth" id="odoo-online">
        <div className="oi-meth-inner oi-host-prose-wrap">
          <h2 className="oi-train-h4">Odoo Online</h2>
          <p className="oi-int-split-lead">
            One of the primary and basic models of the Odoo enterprise edition can be obtained by hosting the platform online and subscribing with a subscription key.
          </p>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">SaaS Model</h3>
          <p className="oi-int-split-lead">
            Odoo software can be used in a SaaS (Software as a Service) model when hosted online. Odoo takes care of all maintenance and server issues, so you don&apos;t have to worry about anything.
          </p>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">No server fees</h3>
          <p className="oi-int-split-lead">
            Online hosting means that there are no server fees. To get started, all you need is an internet connection and an Odoo account.
          </p>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">No server maintenance charges</h3>
          <p className="oi-int-split-lead">
            Odoo Online is the only hosting option that does not require any server or cloud maintenance.
          </p>
        </div>
      </section>

      <section className="oi-rmap" id="online-concerns">
        <div className="oi-rmap-inner">
          <HostingSplit imageSrc="/odoo/hosting/odoo_migration_4.webp" imageW={683} imageH={496} imageAlt="Odoo Online considerations">
            <h2 className="oi-train-h4">What is the concern?</h2>
            <h3 className="oi-host-h6">Low Customization</h3>
            <p className="oi-int-split-lead">
              It&apos;s unlikely that every company will operate in the same way. This is why ERP customization is so important for running the business. One of the drawbacks of using the platform is that you can only customise things to a small extent with the Studio application, which is a major drawback of the platform itself. Customization options for the platform are currently limited.
            </p>
            <HostingHighlightList items={ONLINE_CONCERNS} />
          </HostingSplit>
        </div>
      </section>

      <section className="oi-meth" id="odoo-sh-cloud">
        <div className="oi-meth-inner oi-host-prose-wrap">
          <h2 className="oi-train-h4">Odoo.Sh</h2>
          <p className="oi-int-split-lead">
            Odoo.Sh. is one of Odoo&apos;s most advanced and frequently used forms. It has the ability to fully customise a product while it&apos;s still in development. Organisations with a specific business model will benefit the most from this.
          </p>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">Odoo is the provider</h3>
          <p className="oi-int-split-lead">
            Odoo provides the server cloud service because the service provider knows what is best for their product, making it one of the most widely used hosting models. Because it supports full-fledged customization of the Odoo software, you will be able to craft and develop the platform to your specifications with this model.
          </p>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">Less downtime</h3>
          <p className="oi-int-split-lead">
            Downtime on operations will be minimal because software development, maintenance, and modifications can be performed from the back end without disrupting operations. Furthermore, a backup of all the operations described on your platform will be available on the Odoo server.
          </p>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">Dual-accessibility: shared server and dedicated server</h3>
          <p className="oi-int-split-lead">
            A dedicated server is ideal for businesses with more than 150 internal users. If you have a small number of internal users, you can use a shared server.
          </p>
          <HostingHighlightList items={ODOO_SH_POINTS} />

          <h3 className="oi-train-h4 oi-int-eyebrow-tight">Cloud-based hosting</h3>
          <p className="oi-int-split-lead">You will host Odoo on a dedicated cloud server or a local server at your company.</p>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">Remote accessibility (cloud-based hosting)</h3>
          <p className="oi-int-split-lead">
            If you have access to or a subscription to a cloud-based server, you can access it remotely. This is beneficial for both field service and remote operations.
          </p>
          <HostingHighlightList items={CLOUD_BULLETS} />

          <h3 className="oi-train-h4 oi-int-eyebrow-tight">Most suited cloud services</h3>
          <HostingHighlightList items={CLOUD_PROVIDERS} />

          <h3 className="oi-train-h4 oi-int-eyebrow-tight">On-Premise hosting</h3>
          <p className="oi-int-split-lead">
            On-premises servers are set up and maintained where Odoo will be hosted. Large establishments with in-house operations can benefit from a dedicated structure.
          </p>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">Operating system</h3>
          <p className="oi-int-split-lead">
            The Odoo platform can be installed on any operating system that is used on computers, laptops, or other smart devices. Operations in Odoo are supported by:
          </p>
          <HostingHighlightList items={OS_LIST} />
          <p className="oi-int-split-lead">
            In general, Odoo is best suited for use with Ubuntu-based Linux, but it can also be used with other Linux-based operating systems. Consider which Odoo applications you plan to use before deciding whether to run your business on Windows or MacOS. The reason for this is that some third-party applications used in business may require additional packages that may not be available for Windows and Mac OS.
          </p>
        </div>
      </section>

      <section className="oi-supp" id="support">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Odoo support</div>
            <h2>
              Odoo <span>Support</span>
            </h2>
            <p>
              Odoo Support is a central point of contact to talk to any time you have a business question. The customer support teams are available 24/7 - we are here to help you whenever and wherever, take a look at our customer service page.
            </p>
          </div>

          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live">
                <span className="oi-supp-status-v2-dot" />
                Online now
              </span>
              <div className="oi-supp-icon-v2">
                <MailIcon />
              </div>
              <div className="oi-supp-label">Email &amp; Chat Support.</div>
              <a className="oi-supp-title-v2" href="#contact">
                Contact form
              </a>
              <p className="oi-supp-body-v2">For written enquiries through the site contact flow.</p>
              <a className="oi-supp-cta-v2" href="#contact">
                Open contact form <ArrowRightIcon />
              </a>
            </div>

            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent">
                <span className="oi-supp-status-v2-dot" />
                Urgent issues
              </span>
              <div className="oi-supp-icon-v2">
                <PhoneCallIcon />
              </div>
              <div className="oi-supp-label">Phone Number</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">
                +91 99041 22699
              </a>
              <p className="oi-supp-body-v2">Production-down incidents and time-sensitive decisions.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">
                Call now <ArrowRightIcon />
              </a>
            </div>

            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring">
                <span className="oi-supp-status-v2-dot" />
                We&apos;re hiring
              </span>
              <div className="oi-supp-icon-v2">
                <BriefcaseIcon />
              </div>
              <div className="oi-supp-label">Career</div>
              <a className="oi-supp-title-v2" href="#contact">
                Careers enquiry
              </a>
              <p className="oi-supp-body-v2">
                Hiring and career enquiries. You can also reach the team by phone at +91 85115 93381.
              </p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">
                +91 85115 93381 <ArrowRightIcon />
              </a>
            </div>
          </div>

          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item">
              <CheckIcon /> Senior-led only
            </span>
            <span className="oi-supp-commit-item">
              <ClockIcon /> SLA in writing
            </span>
            <span className="oi-supp-commit-item">
              <ShieldIcon /> NDA-protected
            </span>
            <span className="oi-supp-commit-item">
              <HeartIcon /> 90-day hypercare
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
