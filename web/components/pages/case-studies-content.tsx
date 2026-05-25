import Link from "next/link";
import Image from "next/image";
import { HomeLogoBar } from "@/components/home/logo-bar";

const PORTFOLIO = [
  // 1
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1748928515/real-estate-odoo_y27ugt.webp",
    category: "Real Estate & Property Management",
    title: "Digital Transformation",
    info: "Wan Buffer helped a real estate firm in Kuwait digitize their operations using Odoo ERP. The customized solution streamlined property listings, lease management, and client communications. This digital shift reduced administrative workload by 45% and improved service delivery across their property portfolio.",
  },
  // 2
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1748495366/odoo-hr-management_hjlqvt.webp",
    category: "Human Resources & ERP",
    title: "HR Transformation",
    info: "Wan Buffer implemented a comprehensive Odoo HR solution for a GCC-based company to streamline and digitize their human resource operations. The platform automated payroll, attendance, and performance tracking, reducing manual effort and errors. This transformation led to a 50% improvement in HR efficiency and better employee experience.",
  },
  // 3
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1747808115/a-uae-based-retailer_s-journey-with-odoo-ecommerce_ixsnyc.webp",
    category: "Retail & eCommerce",
    title: "eCommerce Transformation",
    info: "Wan Buffer partnered with a UAE-based retailer to launch and scale their online business using Odoo eCommerce. The integrated platform streamlined product listings, order management, and customer engagement. As a result, the retailer saw a 3x increase in online sales and significantly improved user experience across digital channels.",
  },
  // 4
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1747228922/How_Odoo_Helped_a_Saudi_Logistics_Firm_Optimize_Fleet_Management_webp_c6afe9.webp",
    category: "Logistics & Fleet Management",
    title: "Fleet Optimization",
    info: "Wan Buffer implemented Odoo ERP for a Saudi logistics firm to optimize their fleet management operations. The solution enabled real-time tracking, automated maintenance scheduling, and improved route planning. This resulted in a 40% reduction in fuel costs and downtime, enhancing overall fleet efficiency and service delivery.",
  },
  // 5
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1746532297/manufacturing-company-in-saudi-arabia_h3ykvu.webp",
    category: "Manufacturing & Automation",
    title: "Process Automation",
    info: "Wan Buffer deployed a customized Odoo ERP solution for a Saudi-based manufacturing company to automate key business processes. From procurement to production and inventory, the integrated system reduced manual workload and improved operational accuracy. The result was a 35% boost in efficiency and faster decision-making across departments.",
  },
  // 6
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1746074439/AI-Driven-Quality-Check_tsa2lr.webp",
    category: "Manufacturing & Quality Control",
    title: "AI Quality Boost",
    info: "Wan Buffer implemented an AI-driven quality check solution for a manufacturing client, enhancing their product inspection process. The system enabled real-time defect detection and reduced human error, leading to a 20% improvement in overall product quality. This automation also accelerated production timelines and minimized rework costs.",
  },
  // 7
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1745582173/GCC-Retailer-Sales-process_iico3c.webp",
    category: "Retail & E-commerce",
    title: "CRM Integration",
    info: "Wan Buffer empowered a leading GCC retailer by implementing Odoo CRM to streamline their sales process. The customized solution centralized customer data, automated lead tracking, and improved follow-up efficiency. This led to a 60% boost in sales team productivity and a significant increase in conversion rates across their retail channels.",
  },
  // 8
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1744781759/logistics-automation_fnb6ju.webp",
    category: "Logistics & Supply Chain",
    title: "Logistics Automation",
    info: "Wan Buffer helped a logistics firm in the UAE enhance their operations by implementing a customized Odoo ERP system. The solution unified inventory, order tracking, and fleet management into one streamlined platform. This reduced operational delays, minimized errors, and improved overall efficiency by over 45%, enabling smarter logistics management.",
  },
  // 9
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1744191940/improved-hr-efficiency_zbtofa.webp",
    category: "Manufacturing (HR Management)",
    title: "HR Digitalization",
    info: "A leading manufacturing company in Saudi Arabia faced challenges in managing workforce operations due to manual HR processes and inefficient payroll management. Wan Buffer Services implemented a customized Odoo HRMS solution, automating attendance tracking, payroll processing, and employee record management. This digital transformation resulted in streamlined HR workflows, reduced errors, and improved overall efficiency.",
  },
  // 10
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1744191940/logistic-optimization_bgzuex.webp",
    category: "Logistics (Transportation)",
    title: "Logistics Optimization",
    info: "A leading logistics firm in the UAE transformed its operations with Odoo ERP, enhancing fleet management, warehouse efficiency, and real-time tracking. The integrated solution streamlined order processing, reducing delays and improving service reliability. With Odoo's automation, the company achieved seamless coordination, driving efficiency and growth.",
  },
  // 11
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722853195/cs-yahaal_oqfcno.webp",
    category: "E-Commerce",
    title: "Yahaal",
    info: "A Mobile app that specializes in kids products, spread across a wide range from baby food, nursing, gears, health and skin care products, to diapers, baby wipes across Kuwait. Pamper your baby by ordering the best range of products for your kids at great discounts and everyday value deals.",
  },
  // 12
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722861982/cs-toolbox_n5cohx.webp",
    category: "Home Services",
    title: "Toolbox",
    info: "Toolbox is an Android Application where you can avail a number of housing services across Qatar. All you have to do is to search for the services you are looking for and book your appointment. Toolbox is divided across two apps: 1) Toolbox Buyer and 2) Toolbox Saller.",
  },
  // 13
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722861980/cs-sea-leave_fdecb5.webp",
    category: "Education",
    title: "Sea Leave",
    info: "Sea Leave is an Android Application where the users can get every detail about various sea activities. From renting out the chalets to subscribing to various training courses, SeaLeave is an application that teaches you everything regardless of your knowledge about the depth of sea.",
  },
  // 14
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722853198/cs-medical-encyclopedia_zgmd1s.webp",
    category: "Healthcare & Wellness",
    title: "Medical Encyclopedia",
    info: "An Android Application where you can find the answers of all your medical problems with online consultation. Medical Encyclopedia is an Android App that offers online consultation with the doctors by chatting with them, from any part of India. Getting expert advice has never been this easier before.",
  },
  // 15
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722861984/cs-educatry_evsyje.webp",
    category: "Education & Learning",
    title: "Educatry",
    info: "Educatry is an app developed for the book enthusiasts, as it presents its users a diverse collection of books, teaching aids and office supplies at affordable prices across Kuwait. This app covers an entire range of new and old books, and hundreds of office supplies, along with the teaching aids for kids and adults.",
  },
  // 16
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722853194/cs-tire-lease_pckley.webp",
    category: "Logistics (Transportation)",
    title: "TireLease Central",
    info: "An enterprise client, a pioneer in tire leasing services in Arizona, approached us to digitalize and streamline their paper-based operations. Our innovative solution, TireLease Central, transformed their manual processes into an efficient, automated system. We named the project TireLease Central due to an NDA protecting the client's brand.",
  },
] as const;

export function CaseStudiesContent() {
  return (
    <main className="svc-page">
      {/* HERO */}
      <section className="csh-hero">
        <div className="csh-hero-inner">

          {/* floating tags — left column */}
          <div className="csh-tags csh-tags-left">
            <span className="csh-tag">Web Application</span>
            <span className="csh-tag">Application Development</span>
            <span className="csh-tag">AI Solutions</span>
            <span className="csh-tag">Support and Maintenance</span>
          </div>

          {/* centre content */}
          <div className="csh-centre rev">
            <h1 className="csh-h1">
              Case Studies of<br /><span style={{whiteSpace:"nowrap"}}>Wan Buffer</span>
            </h1>

            {/* Clutch badge */}
            <div className="csh-clutch">
              <div className="csh-clutch-left">
                <span className="csh-clutch-reviewed">REVIEWED ON</span>
                <span className="csh-clutch-brand">Clutch</span>
              </div>
              <div className="csh-clutch-right">
                <span className="csh-clutch-stars">★★★★★</span>
                <span className="csh-clutch-rating">5.0 RATING</span>
              </div>
            </div>

            <p className="csh-desc">
              Since 2018, we&apos;ve turned innovative ideas into effective software solutions for web, mobile, and SaaS
              platforms. Our case studies highlight successful client collaborations and our dedication to user-focused applications.
            </p>

            <a
              className="csh-cta-btn"
              href="https://book-a-demo-wanbuffer-odoo-expert.odoo.com/book/WanBufferians"
              target="_blank"
              rel="noreferrer"
            >
              Book A Meeting
            </a>
          </div>

          {/* floating tags — right column */}
          <div className="csh-tags csh-tags-right">
            <span className="csh-tag">Odoo Solutions</span>
            <span className="csh-tag">Odoo Implementation India</span>
            <span className="csh-tag">Odoo Implementation USA</span>
            <span className="csh-tag">Odoo Implementation UK</span>
          </div>
        </div>

        {/* circular badge */}
        <a
          className="csh-circle-badge"
          href="https://book-a-demo-wanbuffer-odoo-expert.odoo.com/book/WanBufferians"
          target="_blank"
          rel="noreferrer"
          aria-label="Let's Discuss your Project"
        >
          <svg viewBox="0 0 120 120" className="csh-circle-text-svg" aria-hidden="true">
            <path id="csh-circle-path" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none"/>
            <text className="csh-circle-text">
              <textPath href="#csh-circle-path" startOffset="0%">Let&apos;s Discuss • your Project •&nbsp;</textPath>
            </text>
          </svg>
          <span className="csh-circle-arrow" aria-hidden="true">↗</span>
        </a>
      </section>

      {/* LOGO BAR */}
      <HomeLogoBar />

      {/* ALL CASE STUDIES GRID */}
      <section className="cs-portfolio-section section">
        <div className="cs-portfolio-inner">
          <div className="cs-portfolio-hdr rev">
            <div>
              <div className="eyebrow">All case studies</div>
              <h2 className="sec-h">
                Success stories with <span className="acc">details</span>
              </h2>
            </div>
            <Link className="btn-r" href="/contact-us">
              <span>Start a project</span>
            </Link>
          </div>

          <div className="cs-portfolio-grid rev">
            {PORTFOLIO.map((cs) => (
              <div key={cs.title} className="cs-portfolio-card">
                <div className="cs-portfolio-card-img-wrap">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    width={800}
                    height={450}
                    className="cs-portfolio-card-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="cs-portfolio-card-overlay">
                    <span className="cs-portfolio-card-view">View Project</span>
                  </div>
                </div>
                <div className="cs-portfolio-card-body">
                  <span className="cs-portfolio-card-badge">{cs.category}</span>
                  <h3 className="cs-portfolio-card-title">{cs.title}</h3>
                  <p className="cs-portfolio-card-info">{cs.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
