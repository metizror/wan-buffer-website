"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  label: string;
  image: string;
  name: string;
  role: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    label: "MA",
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722499892/murtaza-ali-profile_daildq.webp",
    name: "Murtaza Shamoon Ali",
    role: "CMO, MicroSolution Kuwait",
    quote:
      "Working with Wan Buffer on our Odoo CRM custom development project was a truly exceptional experience. From the outset, their team exhibited a high level of professionalism, expertise, and dedication. They took the time to understand our specific requirements and objectives, and translated them into a customised CRM solution that surpassed our expectations. Throughout the project, Wan Buffer maintained transparent communication, provided regular updates, and addressed any challenges promptly. Their commitment to delivering high-quality results was evident in every aspect of the project.",
  },
  {
    label: "MA",
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722856228/omahat_ooaolp.png",
    name: "Maryam Alkhamees",
    role: "Co-Founder, Omahat, Kuwait",
    quote:
      "Working with Wanbuffer has been an incredible pleasure for the last six years. Our website and mobile application have been completely revamped thanks to their outstanding technical know-how and creative solutions, substantially increasing our online presence. The Wanbuffer team constantly meets our expectations and produces excellent outcomes that are in line with our business objectives. They have proven to be an excellent partner in our digital journey thanks to their expertise, dedication, and proactive approach. I heartily urge anyone looking for a dependable and exceptional technical partner to check out Wanbuffer.",
  },
  {
    label: "NM",
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722849203/neelesh-misra_iekzty.jpg",
    name: "Neelesh Misra",
    role: "Co-Founder, The Slow App",
    quote:
      "Working with Wanbuffer has been an amazing experience for me. Their innovative ideas and technical know-how have been crucial to the development of my smartphone app, The Slow App. It is really amazing how well the team was able to comprehend and carry out difficult requirements. Their inventiveness, commitment, and professionalism have continuously surpassed my expectations. Wanbuffer is a dependable and essential partner because of their dedication to producing high-quality work. I heartily endorse their offerings to anyone in need of excellent technical assistance.",
  },
  {
    label: "MH",
    image: "https://res.cloudinary.com/dghplu26l/image/upload/v1722849202/moiz-hakimi_fmnmuq.png",
    name: "Moiz Hakimi",
    role: "Co-Founder, Innova Technologies, Kuwait",
    quote:
      "Over the years, working with Wanbuffer has been an amazing experience. Their proficiency with mobile applications, websites, incorporated custom solutions, and ERP systems is really astounding. The Wanbuffer team constantly provides creative, superior solutions that are customized to meet our unique requirements, improving our online presence and operational effectiveness. Their unwavering dedication to quality, promptness, and cooperative spirit have rendered them an essential collaborator in our technological pursuits. Because of Wanbuffer's excellent service and technological know-how, I heartily recommend them.",
  },
];

export function WanbufferiansTestimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="wb-discuss-sec section">
      <div className="wb-discuss-inner">

        {/* Left — Let's Discuss */}
        <div className="wb-discuss-form-col">
          <div className="eyebrow">Get in touch</div>
          <h2 className="wb-discuss-h">Let&apos;s Discuss</h2>
          <p className="wb-discuss-desc">
            Leave a request — our experts will analyse your current situation and help you choose an
            effective solution for scaling your business.
          </p>
          <form
            className="wb-discuss-form"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/contact-us";
            }}
          >
            <input type="email" name="email" placeholder="Email *" required className="wb-discuss-input" />
            <input type="tel" name="phone" placeholder="Phone Number" className="wb-discuss-input" />
            <p className="wb-discuss-privacy">
              We will add your information to our CRM for contacting you regarding your request. For more
              details, please consult our{" "}
              <a href="https://wanbuffer.com/privacy-policy.php" target="_blank" rel="noreferrer">
                privacy policy
              </a>
              .
            </p>
            <button type="submit" className="wb-discuss-btn">
              Order A Consultation
            </button>
          </form>
        </div>

        {/* Right — What Clients Say */}
        <div className="wb-discuss-test-col">
          <div className="eyebrow">Social proof</div>
          <h2 className="wb-discuss-h">What Clients Say</h2>

          <div className="wb-discuss-test-card rev">
            <div className="wb-discuss-test-author">
              <div className="wb-discuss-test-avatar">
                <span className="wb-discuss-test-label">{t.label}</span>
                <Image
                  src={t.image}
                  alt={t.name}
                  width={65}
                  height={65}
                  className="wb-discuss-test-img"
                />
              </div>
              <div>
                <div className="wb-discuss-test-name">{t.name}</div>
                <div className="wb-discuss-test-role">{t.role}</div>
              </div>
            </div>

            <div className="wb-discuss-test-body">
              <span className="wb-discuss-test-quote-icon">&ldquo;&ldquo;</span>
              <p className="wb-discuss-test-text">{t.quote}</p>
            </div>
          </div>

          <div className="wb-discuss-test-pagination">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`wb-discuss-test-page${active === i ? " is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
