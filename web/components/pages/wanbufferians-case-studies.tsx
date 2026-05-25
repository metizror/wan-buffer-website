"use client";

import { useState } from "react";
import Image from "next/image";

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

interface PortfolioCase {
  image: string;
  category: string;
  title: string;
  info: string;
}

const PORTFOLIO: PortfolioCase[] = [
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722853194/cs-tire-lease_pckley.webp",
    category: "Logistics (Transportation)",
    title: "TireLease Central",
    info: "An enterprise client, a pioneer in tire leasing services in Arizona, approached us to digitalize and streamline their paper-based operations. Our innovative solution, TireLease Central, transformed their manual processes into an efficient, automated system. We named the project TireLease Central due to an NDA protecting the client's brand.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722861984/cs-educatry_evsyje.webp",
    category: "Education & Learning",
    title: "Educatry",
    info: "Educatry is an app developed for the book enthusiasts, as it presents its users a diverse collection of books, teaching aids and office supplies at affordable prices across Kuwait. This app covers an entire range of new and old books, and hundreds of office supplies, along with the teaching aids for kids and adults.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722853198/cs-medical-encyclopedia_zgmd1s.webp",
    category: "Healthcare & Wellness",
    title: "Medical Encyclopedia",
    info: "An Android Application where you can find the answers of all your medical problems with online consultation. Medical Encyclopedia is an Android App that offers online consultation with the doctors by chatting with them, from any part of India. Getting expert advice has never been this easier before.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722861980/cs-sea-leave_fdecb5.webp",
    category: "Education",
    title: "Sea Leave",
    info: "Sea Leave is an Android Application where the users can get every detail about various sea activities. From renting out the chalets to subscribing to various training courses, SeaLeave is an application that teaches you everything regardless of your knowledge about the depth of sea.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722861982/cs-toolbox_n5cohx.webp",
    category: "Home Services",
    title: "Toolbox",
    info: "Toolbox is an Android Application where you can avail a number of housing services across Qatar. All you have to do is to search for the services you are looking for and book your appointment. Toolbox is divided across two apps: 1) Toolbox Buyer and 2) Toolbox Saller.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722853195/cs-yahaal_oqfcno.webp",
    category: "E-Commerce",
    title: "Yahaal",
    info: "An Mobile app that specializes in kids products, spread across a wide range from baby food, nursing, gears, health and skin care products, to diapers, baby wipes across Kuwait. Pamper your baby by ordering the best range of products for your kids at great discounts and everyday value deals.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1744191940/logistic-optimization_bgzuex.webp",
    category: "Logistics (Transportation)",
    title: "Logistics Optimization",
    info: "A leading logistics firm in the UAE transformed its operations with Odoo ERP, enhancing fleet management, warehouse efficiency, and real-time tracking. The integrated solution streamlined order processing, reducing delays and improving service reliability. With Odoo's automation, the company achieved seamless coordination, driving efficiency and growth.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1744191940/improved-hr-efficiency_zbtofa.webp",
    category: "Manufacturing (HR Management)",
    title: "HR Digitalization",
    info: "A leading manufacturing company in Saudi Arabia faced challenges in managing workforce operations due to manual HR processes and inefficient payroll management. Wan Buffer Services implemented a customized Odoo HRMS solution, automating attendance tracking, payroll processing, and employee record management. This digital transformation resulted in streamlined HR workflows, reduced errors, and improved overall efficiency, allowing the company to focus on business growth.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1744781759/logistics-automation_fnb6ju.webp",
    category: "Logistics & Supply Chain",
    title: "Logistics Automation",
    info: "Wan Buffer helped a logistics firm in the UAE enhance their operations by implementing a customized Odoo ERP system. The solution unified inventory, order tracking, and fleet management into one streamlined platform. This reduced operational delays, minimized errors, and improved overall efficiency by over 45%, enabling smarter logistics management.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1745582173/GCC-Retailer-Sales-process_iico3c.webp",
    category: "Retail & E-commerce",
    title: "CRM Integration",
    info: "Wan Buffer empowered a leading GCC retailer by implementing Odoo CRM to streamline their sales process. The customized solution centralized customer data, automated lead tracking, and improved follow-up efficiency. This led to a 60% boost in sales team productivity and a significant increase in conversion rates across their retail channels.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1746074439/AI-Driven-Quality-Check_tsa2lr.webp",
    category: "Manufacturing & Quality Control",
    title: "AI Quality Boost",
    info: "Wan Buffer implemented an AI-driven quality check solution for a manufacturing client, enhancing their product inspection process. The system enabled real-time defect detection and reduced human error, leading to a 20% improvement in overall product quality. This automation also accelerated production timelines and minimized rework costs.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1746532297/manufacturing-company-in-saudi-arabia_h3ykvu.webp",
    category: "Manufacturing & Automation",
    title: "Process Automation",
    info: "Wan Buffer deployed a customized Odoo ERP solution for a Saudi-based manufacturing company to automate key business processes. From procurement to production and inventory, the integrated system reduced manual workload and improved operational accuracy. The result was a 35% boost in efficiency and faster decision-making across departments.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1747228922/How_Odoo_Helped_a_Saudi_Logistics_Firm_Optimize_Fleet_Management_webp_c6afe9.webp",
    category: "Logistics & Fleet Management",
    title: "Fleet Optimization",
    info: "Wan Buffer implemented Odoo ERP for a Saudi logistics firm to optimize their fleet management operations. The solution enabled real-time tracking, automated maintenance scheduling, and improved route planning. This resulted in a 40% reduction in fuel costs and downtime, enhancing overall fleet efficiency and service delivery.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1747808115/a-uae-based-retailer_s-journey-with-odoo-ecommerce_ixsnyc.webp",
    category: "Retail & eCommerce",
    title: "eCommerce Transformation",
    info: "Wan Buffer partnered with a UAE-based retailer to launch and scale their online business using Odoo eCommerce. The integrated platform streamlined product listings, order management, and customer engagement. As a result, the retailer saw a 3x increase in online sales and significantly improved user experience across digital channels.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1748495366/odoo-hr-management_hjlqvt.webp",
    category: "Human Resources & ERP",
    title: "HR Transformation",
    info: "Wan Buffer implemented a comprehensive Odoo HR solution for a GCC-based company to streamline and digitize their human resource operations. The platform automated payroll, attendance, and performance tracking, reducing manual effort and errors. This transformation led to a 50% improvement in HR efficiency and better employee experience.",
  },
  {
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1748928515/real-estate-odoo_y27ugt.webp",
    category: "Real Estate & Property Management",
    title: "Digital Transformation",
    info: "Wan Buffer helped a real estate firm in Kuwait digitize their operations using Odoo ERP. The customized solution streamlined property listings, lease management, and client communications. This digital shift reduced administrative workload by 45% and improved service delivery across their property portfolio.",
  },
];

const VISIBLE_DESKTOP = 3;
const ALL_CASES_URL = "/case-studies";

export function WanbufferiansCarousel() {
  const [idx, setIdx] = useState(0);
  const max = Math.max(0, PORTFOLIO.length - VISIBLE_DESKTOP);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(max, i + 1));

  return (
    <section className="wb-cs-section section">
      <div className="wb-cs-inner">
        <div className="wb-cs-hdr rev">
          <div>
            <div className="eyebrow">Our Work</div>
            <h2 className="sec-h">
              Case <span className="acc">Studies</span>
            </h2>
          </div>
          <a href={ALL_CASES_URL} className="wb-cs-all-btn">
            All Cases
          </a>
        </div>

        <div className="wb-cs-track-wrap">
          <div
            className="wb-cs-track"
            style={{
              transform: `translateX(calc(-${idx} * (clamp(260px, 28.5vw, 360px) + 24px)))`,
            }}
          >
            {PORTFOLIO.map((cs) => (
              <a
                key={cs.title}
                href={ALL_CASES_URL}
                className="wb-cs-card"
              >
                <div className="wb-cs-card-img-wrap">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    width={800}
                    height={450}
                    className="wb-cs-card-img"
                    sizes="(max-width: 768px) 85vw, 360px"
                  />
                </div>
                <div className="wb-cs-card-body">
                  <span className="wb-cs-card-badge">{cs.category}</span>
                  <h3 className="wb-cs-card-title">{cs.title}</h3>
                  <p className="wb-cs-card-excerpt">{cs.info}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="wb-cs-nav">
          <button className="wb-cs-nav-btn" onClick={prev} disabled={idx === 0} aria-label="Previous">
            <ChevronLeftIcon />
          </button>
          <button className="wb-cs-nav-btn" onClick={next} disabled={idx >= max} aria-label="Next">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
