import { ArrowRightIcon } from "@/components/services/odoo-service-icons";

export function CookiePolicyContent() {
  return (
    <main className="svc-page">
      <section className="oi-hero-lux legal-hero-center" aria-labelledby="cp-hero-title">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">
          cookies
        </div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Legal</div>
          </div>
          <h1 id="cp-hero-title" className="oi-hero-lux-h rev">
            Cookie <span className="ai">Policy</span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Understand how we use cookies to enhance your experience on our website.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Contact us</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="pp-body" aria-label="Cookie policy content">
        <div className="pp-body-inner">

          <div className="pp-section rev">
            <p>
              This Cookie Policy explains how WanBuffer Services and its affiliates (referred to as
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;WanBuffer&rdquo;) use cookies, the types of data we
              collect, and the purposes for which this data is utilised. It also provides information on how you can
              manage your cookie preferences.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">What Are Cookies</h2>
            <p>
              Cookies are small text files or pieces of data that are stored on your computer or other devices when you
              visit a website. They are widely used to make websites work more efficiently, provide a better browsing
              experience, and supply information to website owners. Cookies enable websites to recognise returning
              visitors, remember preferences, and improve the overall user experience.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Why WanBuffer Uses Cookies</h2>
            <p>
              WanBuffer collects cookie data to improve your experience on our website. Specifically, we use cookies for
              the following purposes:
            </p>
            <ul className="pp-list">
              <li>To recognise you when you return to our website</li>
              <li>To improve website navigation and usability</li>
              <li>To remember your preferences and settings</li>
              <li>To display content that is relevant to you</li>
              <li>To enhance our marketing efforts, email campaigns, and advertising strategies</li>
            </ul>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Types of Cookies We Use</h2>

            <h3 className="pp-h3">Strictly Necessary Cookies</h3>
            <p>
              These cookies are essential for the core functionality of our website. They enable basic features such as
              page navigation and access to secure areas of the site. Without these cookies, the website cannot function
              properly.
            </p>

            <h3 className="pp-h3">Performance Cookies</h3>
            <p>
              Performance cookies collect information about how visitors use our website, such as which pages are visited
              most often and how users arrived at the site. These cookies help us understand and improve the performance
              of our website. All data collected by these cookies is aggregated and anonymous.
            </p>

            <h3 className="pp-h3">Session Cookies</h3>
            <p>
              Session cookies are temporary cookies that are stored on your device only for the duration of your browsing
              session. They are automatically deleted when you close your browser. These cookies are used to maintain your
              session as you navigate through different pages on our website.
            </p>

            <h3 className="pp-h3">Targeting Cookies</h3>
            <p>
              Targeting cookies are used to analyse your site usage and serve advertisements that are relevant to your
              interests. These cookies may also be used to limit the number of times you see a particular advertisement
              and to help measure the effectiveness of advertising campaigns.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Third-Party Cookies</h2>
            <p>
              WanBuffer allows third-party services to place performance and targeting cookies on our website. These
              third-party services include, but are not limited to:
            </p>
            <ul className="pp-list">
              <li><strong>Google AdWords</strong> — for advertising and conversion tracking</li>
              <li><strong>Google Analytics</strong> — for website traffic analysis and performance monitoring</li>
              <li><strong>Facebook Pixel</strong> — for social media advertising and audience insights</li>
            </ul>
            <p>
              These third-party cookies are subject to the respective privacy policies of those services.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Who Has Access to the Data</h2>
            <p>
              Only WanBuffer has access to the data collected via cookies on our website. We take all necessary measures
              to protect this data in accordance with our privacy guidelines and applicable data protection regulations.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Personal Information</h2>
            <p>
              For details on the personal information we collect and how it is used, please refer to
              our <a href="/privacy-policy" className="pp-link">Privacy Policy</a>.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Disabling Cookies</h2>
            <p>
              You can modify your browser settings at any time to delete all cookies that have already been stored on
              your device and to block future cookies from being placed. Please note that if you choose to disable
              cookies, some parts of our website may not function properly or may become inaccessible.
            </p>
            <p>
              Most web browsers allow you to control cookies through their settings. You can usually find these settings
              in the &ldquo;Options&rdquo; or &ldquo;Preferences&rdquo; menu of your browser.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy or would like us to delete any data we&apos;ve
              collected, please <a href="/contact-us" className="pp-link">contact us</a>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
