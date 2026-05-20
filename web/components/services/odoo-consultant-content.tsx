/* Odoo consultant — content from wanbuffer.com/odoo/odoo-consultant.php (no extra sections). */

import type { ReactNode } from "react";
import Image from "next/image";

import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckIcon,
  MailIcon,
  PhoneCallIcon,
  StarIcon,
} from "./odoo-service-icons";

const CONSULTING_SERVICES = [
  "Analysis of requirements",
  "Enhance your company's operations",
  "Personalized mapping",
  "Testing",
  "Quality check and control",
  "Changes to the operational aspects",
  "Feasibility analysis",
  "Quick implementation",
  "Assistance and instruction",
] as const;

const CONSULTANT_VALUE = [
  "They can provide a better perspective based on their previous experiences with various companies.",
  "They are highly skilled employees, and you do not need to recruit new hires.",
  "They always provide a hassle-free safe zone for challenging projects.",
  "They provide an in-depth report on Odoo ERP for a business.",
] as const;

function ConsultantHighlightList({ items }: { items: readonly string[] }) {
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

interface ConsultantSplitProps {
  imageSrc: string;
  imageW: number;
  imageH: number;
  imageAlt: string;
  priority?: boolean;
  children: ReactNode;
}

function ConsultantSplit({ imageSrc, imageW, imageH, imageAlt, priority, children }: ConsultantSplitProps) {
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

export function OdooConsultantContent() {
  return (
    <main className="svc-page">
      <section className="oi-hero-lux" aria-labelledby="oi-consult-hero-title">
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
          <h1 id="oi-consult-hero-title" className="oi-hero-lux-h rev">
            <span className="ln">Odoo</span>
            <span className="ln">
              <span className="ai">Consultant</span>
            </span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Expert functional and technical consultants for design, development, implementation, and ongoing Odoo support—before you take the leap.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Chat now</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </a>
            <a className="oi-hero-lux-secondary" href="#consulting">
              Our consulting services
            </a>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">We offer</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">Functional</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Technical</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Implementation</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Training &amp; support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="oi-host-intro-band" aria-label="Introduction">
        <div className="oi-host-intro-band-inner rev">
          <p>
            Odoo allows users to manage their entire business from a single platform. The design is complex, and customising it for layman&apos;s use can be difficult. This requires Odoo consultants, who help with design, development, and implementation. These consultants gather input from employees and managers to analyse your company&apos;s needs and design and develop your Odoo platform to meet your operations. They&apos;ll also train your employees on how to use the platform and provide ongoing support and maintenance.
          </p>
          <a className="oi-host-intro-cta" href="#contact">
            Chat now
          </a>
        </div>
      </section>

      <section className="oi-rmap" id="consulting">
        <div className="oi-rmap-inner">
          <ConsultantSplit
            imageSrc="/odoo/consultant/odoo_migration_1.webp"
            imageW={683}
            imageH={496}
            imageAlt="Odoo consulting overview"
            priority
          >
            <h2 className="oi-train-h4">Why choose us?</h2>
            <p className="oi-int-split-lead">
              Your business&apos;s Odoo ERP implementation will be governed by our strict set of guidelines. All of your business operations can be completed within the given time frame with help from our functional and technical consulting services.
            </p>
          </ConsultantSplit>

          <ConsultantSplit
            imageSrc="/odoo/consultant/odoo_migration_2.webp"
            imageW={683}
            imageH={496}
            imageAlt="Functional consultant for Odoo"
          >
            <h2 className="oi-train-h4">Functional Consultant for Odoo</h2>
            <p className="oi-int-split-lead">
              We have a long history of working with Odoo and can provide you with consulting services to help you keep your business running smoothly. In order to make the platform more user-friendly for its customers, our team of experts will use their knowledge and abilities to design and configure the platform. We have a thorough understanding of any industry&apos;s operations and business flow. Whether it&apos;s during operations or integration, we&apos;ve got you covered with a variety of solutions.
            </p>
          </ConsultantSplit>

          <ConsultantSplit
            imageSrc="/odoo/consultant/odoo_migration_3.webp"
            imageW={683}
            imageH={496}
            imageAlt="Technical consultant for Odoo"
          >
            <h2 className="oi-train-h4">Technical Consultant for Odoo</h2>
            <p className="oi-int-split-lead">
              We are able to design and develop the platform in accordance with the demands and specifications of your business. It is possible to bridge the gap between the Odoo platform and business. Flexibility and adaptability are key features of the platform. Coding is an area of expertise that our consultants are well versed in. These experts can create and customise a user&apos;s application modules. In addition, we test the platform&apos;s dependability and operational capabilities.
            </p>
          </ConsultantSplit>

          <ConsultantSplit
            imageSrc="/odoo/consultant/odoo_migration_4.webp"
            imageW={683}
            imageH={496}
            imageAlt="Odoo consulting services list"
          >
            <h2 className="oi-train-h4">Among our consulting services are:</h2>
            <ConsultantHighlightList items={CONSULTING_SERVICES} />
          </ConsultantSplit>
        </div>
      </section>

      <section className="oi-meth" id="why-consultant">
        <div className="oi-meth-inner oi-host-prose-wrap">
          <h2 className="oi-train-h4">Why do you require the services of an Odoo Consultant?</h2>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">Detailed Business Analysis</h3>
          <p className="oi-int-split-lead">
            An Odoo consultant has extensive experience in providing precise business analysis. Furthermore, Odoo consultants keep up to date with new business standards and technological aspects of the world. They also understand the business flow and topology of employment in a company, which simplifies planning and development operations.
          </p>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">Using Odoo to map your requirements</h3>
          <p className="oi-int-split-lead">
            Odoo consultants are subject matter experts with extensive experience and skills in overcoming obstacles in Odoo business operations. Furthermore, they can synchronise and map Odoo to meet your business requirements. Moreover, these individuals have expertise in Odoo customisation, which allows users to run Odoo on their terms.
          </p>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">Best practises for your business</h3>
          <p className="oi-int-split-lead">
            Profits and productivity may be declining, but Odoo consultants can bring you the right Odoo operational model, which can be the right leap for your company&apos;s growth. Furthermore, the proper Odoo business practises for the company&apos;s operations can simplify tasks, reduce budgets spent, increase productivity, and raise the standard of income generation.
          </p>
          <h3 className="oi-train-h4 oi-int-eyebrow-tight">Effortless installation</h3>
          <p className="oi-int-split-lead">
            An Odoo consultant will handle the design, development, and implementation of the platform for your company in accordance with your business standards. Additionally, this is done with extreme precision and configuration to avoid failures during implementation and operation.
          </p>
        </div>
      </section>

      <section className="oi-rmap" id="consultant-value">
        <div className="oi-rmap-inner">
          <ConsultantSplit
            imageSrc="/odoo/consultant/odoo_migration_4.webp"
            imageW={683}
            imageH={496}
            imageAlt="Value of Odoo consultants"
          >
            <h2 className="oi-train-h4">Value of Odoo Consultants</h2>
            <ConsultantHighlightList items={CONSULTANT_VALUE} />
          </ConsultantSplit>
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
        </div>
      </section>
    </main>
  );
}
