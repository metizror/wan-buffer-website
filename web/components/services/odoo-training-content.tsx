/* Odoo training — content from odoo-training.php; layout uses shared oi-* patterns (no extra marketing sections). */

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
  StarIcon,
} from "./odoo-service-icons";

const PILLARS = [
  {
    img: "/odoo/training/hp-service-1.webp",
    w: 120,
    h: 126,
    alt: "Functional training",
    title: "Functional",
    titleAccent: "Training",
    body: "This training is designed to educate end-users, partners, business analysts, & consultants about the many functionalities of Odoo modules.",
  },
  {
    img: "/odoo/training/hp-service-2.webp",
    w: 95,
    h: 123,
    alt: "Technical training",
    title: "Technical",
    titleAccent: "Training",
    body: "The primary focus of technical training is to help developers learn how to customise and extend the Odoo platform with new ideas.",
  },
  {
    img: "/odoo/training/hp-service-3.webp",
    w: 139,
    h: 120,
    alt: "Corporate training",
    title: "Corporate",
    titleAccent: "Training",
    body: "Corporate training is geared toward corporations already using Odoo or those contemplating a full switch to Odoo as their backend system.",
  },
] as const;

const FUNCTIONAL_INCLUDES = [
  "Increase the productivity of your business while saving time and money.",
  "Learn about the latest Odoo editions & versions.",
  "Install, manage, and configure the basic modules.",
  "Create and customise with Odoo Studio",
  "In-depth instruction from industry experts on all of Odoo's functional modules.",
] as const;

const ENROLLMENT_FUNCTIONAL = [
  "Choose your training package.",
  "Initiate the payment.",
  "Set up a time that works for you.",
  "Begin learning.",
  "You can get in touch with us via e-mail, live chat, or WhatsApp.",
] as const;

const SIGNIFICANCE_FUNCTIONAL = [
  "Your ability to reduce & correct functional errors will be enhanced.",
  "Maximise efficiency in business operations.",
  "Take care of the functional aspects of the platform.",
  "Operate in accordance with the best practices for achieving desired outcomes.",
] as const;

const TECH_ENROLL = [
  "Send us a message or use WhatsApp to get in touch...",
  "Initiate the payment.",
  "Set up a schedule that works for you.",
  "Begin the process of learning.",
  "Make a decision regarding the type of instruction you want to receive.",
] as const;

const TECH_SIGNIFICANCE = [
  "You must operate and function on the Odoo platform.",
  "Error detection and correction are critical for the platform.",
  "It can be beneficial to your professional development.",
  "Odoo is a large programme that requires specialised training.",
] as const;

const CORP_ENROLL = [
  "Inquiries can be made via e-mail, phone, or WhatsApp.",
  "Decide on the training package.",
  "Initiate the payment.",
  "Set up a routine that works for you.",
  "Begin the process of learning.",
] as const;

const CORP_SIGNIFICANCE = [
  "Having the appropriate functional tool will not only aid in business operations, but it will also encourage the platform's users to receive proper training.",
  "Acquiring a working knowledge of standard operating procedures.",
  "Correct problems before they become life-threatening.",
  "The likelihood of data misunderstandings is reduced, and the performance and output of employees using Odoo software is boosted.",
] as const;

const TECH_PACKAGES = [
  {
    img: "/odoo/training/odoo-training-box-1.webp",
    iw: 134,
    ih: 134,
    title: "Odoo",
    small: "Installation",
    body: "The training focuses on providing candidates with basic Odoo information. They are also taught how to install Odoo and its associated add-ons. It is the best suited for platform newcomers.",
  },
  {
    img: "/odoo/training/odoo-training-box-2.webp",
    iw: 124,
    ih: 123,
    title: "Odoo",
    small: "Beginner",
    body: "It is best suited for platform newcomers with prior knowledge of Python and XML. It also explains how to create custom modules and configure them to be operational.",
  },
  {
    img: "/odoo/training/odoo-training-box-3.webp",
    iw: 132,
    ih: 132,
    title: "Odoo",
    small: "Intermediate",
    body: "Designed for candidates with prior experience operating the platform. To fully comprehend the sessions, one must have prior knowledge of Python, XML, and PostgreSQL.",
  },
  {
    img: "/odoo/training/odoo-training-box-4.webp",
    iw: 122,
    ih: 135,
    title: "Odoo",
    small: "Advanced",
    body: "Suitable for users with extensive platform experience. In the ORM aspects of Odoo, the candidates will be described in addition to the contents of the Odoo intermediate package.",
  },
  {
    img: "/odoo/training/odoo-training-box-5.webp",
    iw: 130,
    ih: 130,
    title: "Odoo",
    small: "Website Development",
    body: "Candidates must have prior knowledge of Python, XML, PostgreSQL, and JQuery. They will be instructed on the technical aspects of Odoo website building and configuration.",
  },
  {
    img: "/odoo/training/odoo-training-box-6.webp",
    iw: 176,
    ih: 129,
    title: "Odoo",
    small: "POS Development",
    body: "The sessions are open to candidates who have extensive knowledge of Python, XML, PostgreSQL, OWL, JS, and BackboneJS. The sessions focus on setting up PoS operations on the platform.",
  },
] as const;

function TrainingHighlightList({ items }: { items: readonly string[] }) {
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

interface TrainingSplitProps {
  imageSrc: string;
  imageW: number;
  imageH: number;
  imageAlt: string;
  priority?: boolean;
  children: ReactNode;
  /** Desktop: `"start"` = image left; `"end"` = image right. Alternate consecutive splits for a zig-zag layout. */
  mediaPosition?: "start" | "end";
}

function TrainingSplit({
  imageSrc,
  imageW,
  imageH,
  imageAlt,
  priority,
  children,
  mediaPosition = "start",
}: TrainingSplitProps) {
  const rowClass =
    mediaPosition === "end"
      ? "oi-meth-intro oi-int-meth-intro oi-train-split--media-end rev"
      : "oi-meth-intro oi-int-meth-intro rev";

  return (
    <div className="oi-train-split-wrap">
      <div className={rowClass}>
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

export function OdooTrainingContent() {
  return (
    <main className="svc-page">
      <section className="oi-hero-lux" aria-labelledby="oi-train-hero-title">
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
          <h1 id="oi-train-hero-title" className="oi-hero-lux-h rev">
            <span className="ln">Odoo</span>
            <span className="ln">
              <span className="ai">Training</span>
            </span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Implementing and managing your ERP system successfully is easier if you have the guidance of ERP experts. Make sure you&apos;re up to date on the latest developments in your field. We offer a comprehensive educational experience that includes adequate instruction.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Contact us</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </a>
            <a className="oi-hero-lux-secondary" href="#pillars">
              Training tracks
            </a>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">We offer</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">Functional</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Technical</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Corporate</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Tailored modules</span>
            </div>
          </div>
        </div>
      </section>

      <section className="oi-meth" id="pillars">
        <div className="oi-meth-inner">
          <ul className="oi-train-pillars">
            {PILLARS.map((p) => (
              <li key={p.title} className="oi-train-pillar">
                <div className="oi-train-pillar-img-wrap">
                  <Image src={p.img} alt={p.alt} width={p.w} height={p.h} className="oi-train-pillar-img" />
                </div>
                <h3 className="oi-train-pillar-title">
                  {p.title} <small>{p.titleAccent}</small>
                </h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="oi-rmap" id="functional-intro">
        <div className="oi-rmap-inner">
          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-1.webp"
            imageW={692}
            imageH={599}
            imageAlt="Odoo functional training"
            mediaPosition="start"
            priority
          >
            <h3 className="oi-train-h4">Functional</h3>
            <p className="oi-int-split-lead">
              Clients, infrastructure providers, and end-users who want a deeper functional understanding of Odoo are the target audience for this functional training. Functional training includes:
            </p>
            <TrainingHighlightList items={FUNCTIONAL_INCLUDES} />
          </TrainingSplit>
        </div>
      </section>

      <section className="oi-meth" id="functional">
        <div className="oi-meth-inner">
          <div className="oi-train-section-title rev">
            <h2 className="sec-h">
              Odoo <span className="acc">Functional Training</span>
            </h2>
            <p className="sec-p">
              Do you want to learn more about Odoo&apos;s functional aspects? You can attend our training sessions on specific Odoo module operations.
            </p>
          </div>

          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-2.webp"
            imageW={646}
            imageH={630}
            imageAlt="Enrollment procedures"
            mediaPosition="end"
          >
            <h3 className="oi-train-h4">Enrollment Procedures</h3>
            <p className="oi-int-split-lead">
              Our training modules are tailored to the needs of the candidates. Furthermore, the modules can be chosen based on your needs &amp; capabilities. To register for one of our training sessions, please follow the steps below:
            </p>
            <TrainingHighlightList items={ENROLLMENT_FUNCTIONAL} />
          </TrainingSplit>

          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-3.webp"
            imageW={814}
            imageH={580}
            imageAlt="Knowledge requirement"
            mediaPosition="start"
          >
            <h3 className="oi-train-h4">Knowledge Requirement</h3>
            <p className="oi-int-split-lead">
              A basic understanding of Odoo&apos;s operations will be helpful, even if the functional training is focused on the platform&apos;s functional operational aspects. Knowledge of the company&apos;s operations is also necessary if using the platform in your own business.
            </p>
          </TrainingSplit>

          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-4.webp"
            imageW={596}
            imageH={600}
            imageAlt="Functional training significance"
            mediaPosition="end"
          >
            <h3 className="oi-train-h4">Functioning Training&apos;s Significance</h3>
            <p className="oi-int-split-lead">
              You won&apos;t get the results you expect if you run your business with the best tool available. To maximise results, the people who use the tools must be trained to operate in the most efficient manner possible. Odoo functional training is necessary for the platform&apos;s use.
            </p>
            <TrainingHighlightList items={SIGNIFICANCE_FUNCTIONAL} />
          </TrainingSplit>

          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-5.webp"
            imageW={814}
            imageH={580}
            imageAlt="Functional training target audience"
            mediaPosition="start"
          >
            <h3 className="oi-train-h4">Target Audience</h3>
            <p className="oi-int-split-lead">
              People who want a thorough grounding in the operational modules of Odoo&apos;s functionality can take advantage of the functional training offered by the company. Odoo training packages are designed to provide candidates with the necessary knowledge and experience to implement the best operational practises of Odoo into their company&apos;s processes. The packages can be chosen according to the requirements of the modules they are part of.
            </p>
          </TrainingSplit>
        </div>
      </section>

      <section className="oi-rmap" id="technical">
        <div className="oi-rmap-inner">
          <div className="oi-train-section-title rev">
            <h2 className="sec-h">
              Odoo <span className="acc">Technical Training</span>
            </h2>
            <p className="sec-p">
              Are you interested in advancing your career by mastering the technical aspects of Odoo? Here is a reliable source of information for all of your questions and concerns.
            </p>
          </div>

          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-6.webp"
            imageW={794}
            imageH={488}
            imageAlt="Technical training packages"
            mediaPosition="end"
          >
            <h3 className="oi-train-h4">Technical Training Packages</h3>
            <p className="oi-int-split-lead">
              Based on your level of expertise with Odoo, you can select a training module that best suits your needs. There is also the option of training tailored to a specific application.
            </p>
          </TrainingSplit>

          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-7.webp"
            imageW={716}
            imageH={668}
            imageAlt="How to enroll in technical training"
            mediaPosition="start"
          >
            <h3 className="oi-train-h4">How To Enroll</h3>
            <p className="oi-int-split-lead">
              Our modules are customised to meet the requirements of each candidate. Furthermore, you can select the modules that best suit your needs and abilities.
            </p>
            <TrainingHighlightList items={TECH_ENROLL} />
          </TrainingSplit>

          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-8.webp"
            imageW={680}
            imageH={544}
            imageAlt="Significance of technical training"
            mediaPosition="end"
          >
            <h3 className="oi-train-h4">Significance Of Technical Training</h3>
            <p className="oi-int-split-lead">
              So, why is Odoo technical training so important? Why is it required for professionals working in it?
            </p>
            <TrainingHighlightList items={TECH_SIGNIFICANCE} />
          </TrainingSplit>
        </div>
      </section>

      <section className="oi-meth" id="technical-packages">
        <div className="oi-meth-inner">
          <div className="oi-train-section-title rev">
            <h3 className="oi-train-h4 oi-train-h4-center">Target Audience</h3>
            <p className="sec-p">
              Our Odoo technical training packages are designed to be beneficial to candidates based on their knowledge of Odoo&apos;s technical aspects. So, before you choose a package, make sure you fall into the correct category.
            </p>
          </div>
          <ul className="oi-train-pack-grid">
            {TECH_PACKAGES.map((pkg) => (
              <li key={pkg.small} className="oi-train-pack">
                <Image
                  src={pkg.img}
                  alt=""
                  width={pkg.iw}
                  height={pkg.ih}
                  className="oi-train-pack-img"
                />
                <h4 className="oi-train-pack-title">
                  {pkg.title} <small>{pkg.small}</small>
                </h4>
                <p>{pkg.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="oi-rmap" id="corporate">
        <div className="oi-rmap-inner">
          <div className="oi-train-section-title rev">
            <h2 className="sec-h">
              Odoo <span className="acc">Corporate Training</span>
            </h2>
            <p className="sec-p">
              If your company uses Odoo, we can help you and your employees get the most out of the Odoo platform. We are here to provide your employees with functional training on various aspects of the platform&apos;s operation.
            </p>
          </div>

          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-9.webp"
            imageW={790}
            imageH={488}
            imageAlt="Corporate training packages"
            mediaPosition="start"
          >
            <h3 className="oi-train-h4">Corporate Training Packages</h3>
            <p className="oi-int-split-lead">
              Your employees will benefit from the Odoo corporate training by learning how to run their company&apos;s operations in the most efficient manner possible using Odoo.
            </p>
          </TrainingSplit>

          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-10.webp"
            imageW={716}
            imageH={630}
            imageAlt="Corporate training enrolling"
            mediaPosition="end"
          >
            <h3 className="oi-train-h4">Enrolling</h3>
            <p className="oi-int-split-lead">
              The content of our courses is tailored to meet the requirements of the individuals who will be taking them. Furthermore, you can select the modules that best suit your needs and abilities.
            </p>
            <TrainingHighlightList items={CORP_ENROLL} />
          </TrainingSplit>

          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-11.webp"
            imageW={596}
            imageH={664}
            imageAlt="Corporate training significance"
            mediaPosition="start"
          >
            <h3 className="oi-train-h4">Significance Of Odoo Corporate Training</h3>
            <p className="oi-int-split-lead">
              It can be difficult to use Odoo in accordance with your company&apos;s needs unless you have a thorough understanding of the platform.
            </p>
            <TrainingHighlightList items={CORP_SIGNIFICANCE} />
          </TrainingSplit>

          <TrainingSplit
            imageSrc="/odoo/training/odoo-training-12.webp"
            imageW={790}
            imageH={528}
            imageAlt="Corporate training target audience"
            mediaPosition="end"
          >
            <h3 className="oi-train-h4">Target Audience</h3>
            <p className="oi-int-split-lead">
              Odoo corporate training outlined the functional aspects of Odoo for employees of a company. They can come in groups as needed, and packages can be selected based on the number of required hours. A fundamental understanding of a company&apos;s operations will suffice as a prerequisite.
            </p>
          </TrainingSplit>
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
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="#contact">
                Careers enquiry
              </a>
              <p className="oi-supp-body-v2">Hiring and career enquiries. You can also reach the team by phone.</p>
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
