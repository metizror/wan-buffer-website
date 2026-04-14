"use client";

const contactFaq = [
  {
    q: "How can I contact Wan Buffer?",
    a: "You can contact us via the contact form, or by email, or call us at +91 99041 22699.",
  },
  {
    q: "What information should I provide in the contact form?",
    a: "Please provide your full name, email address, phone number, and a detailed message describing your inquiry or issue. This will help us assist you more effectively.",
  },
  {
    q: "What are your office hours?",
    a: "Our office hours are Monday through Friday, from 10:00 AM to 7:00 PM. We are closed on weekends and public holidays.",
  },
  {
    q: "How quickly can I expect a response to my inquiry?",
    a: "We strive to respond to all inquiries within 24 to 48 hours during business days. If you have an urgent matter, please indicate this in your message.",
  },
  {
    q: "Can I schedule a consultation through the contact form?",
    a: "Yes, you can schedule a consultation by indicating your preferred date and time in your message. We will confirm the appointment based on availability.",
  },
  {
    q: "Do you offer support for existing customers?",
    a: "Yes, we provide support for existing customers. Please use the contact form or email us directly for assistance with any issues or questions you may have.",
  },
  {
    q: "What should I do if I experience problems with the contact form?",
    a: "If you experience problems with the contact form, please email us directly or call us at +91 99041 22699 for assistance.",
  },
] as const;

export function ContactFaq() {
  return (
    <section className="faq-section" itemScope itemType="https://schema.org/FAQPage" id="contact-faq">
      <div className="faq-inner">
        <div className="faq-left rev">
          <div className="eyebrow">Frequently Asked Questions</div>
          <h2 className="sec-h">
            Contact <span className="acc">FAQs</span>
          </h2>
          <p className="sec-p">Answers about contacting us, response times, and scheduling consultations.</p>
        </div>

        <div className="faq-list rev" id="faqList">
          {contactFaq.map((item, idx) => (
            <div
              key={item.q}
              className={`faq-item${idx === 0 ? " open" : ""}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button className="faq-q" type="button" onClick={(e) => (window as any).toggleFaq?.(e.currentTarget)}>
                <span className="faq-q-text" itemProp="name">
                  {item.q}
                </span>
                <span className="faq-arrow">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <span itemProp="text">{item.a}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

