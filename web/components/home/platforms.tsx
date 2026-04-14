export function HomePlatforms() {
  return (
    <section className="platforms" id="platforms">
      <div className="plat-hdr rev">
        <div>
          <div className="eyebrow">Multi-Platform Expertise</div>
          <h2 className="sec-h">
            Beyond Odoo — Comprehensive <span className="acc">Platform Coverage</span>
          </h2>
        </div>
        <div>
          <div className="plat-note">★ Primary Platform: Odoo ERP</div>
          <p className="sec-p" style={{ margin: 0 }}>
            We also implement, customise, and integrate Zoho, Salesforce, Magento, Shopify, and Razorpay — giving you
            a complete digital operations stack.
          </p>
        </div>
      </div>

      <div className="plat-grid rev">
        <div className="plat-card p-odoo">
          <div className="plat-primary-badge">Primary Platform</div>
          <div className="plat-logo-mark" aria-hidden="true">
            <img className="plat-logo-img" src="/platform-logos/odoo.svg" alt="" loading="lazy" />
          </div>
          <div className="plat-name">Odoo ERP</div>
          <div className="plat-body">
            Our core expertise. Odoo 16, 17 &amp; 18 implementation, customisation, migration, AI integration, and
            ongoing support.
          </div>
          <div className="plat-services">
            <span className="plat-svc">Implementation</span>
            <span className="plat-svc">AI Integration</span>
            <span className="plat-svc">Migration</span>
            <span className="plat-svc">Custom Modules</span>
          </div>
        </div>

        <div className="plat-card p-zoho">
          <div className="plat-logo-mark" aria-hidden="true">
            <img className="plat-logo-img" src="/platform-logos/zoho.svg" alt="" loading="lazy" />
          </div>
          <div className="plat-name">Zoho Suite</div>
          <div className="plat-body">
            Zoho CRM, Books, Inventory, and the full Zoho One ecosystem — implementation and integration with existing
            systems.
          </div>
          <div className="plat-services">
            <span className="plat-svc">CRM Setup</span>
            <span className="plat-svc">Zoho Books</span>
            <span className="plat-svc">Integration</span>
          </div>
        </div>

        <div className="plat-card p-rp">
          <div className="razorpay-badge">Official Partner</div>
          <div className="plat-logo-mark" aria-hidden="true">
            <img className="plat-logo-img" src="/platform-logos/razorpay.svg" alt="" loading="lazy" />
          </div>
          <div className="plat-name">Razorpay</div>
          <div className="plat-body">
            As an Official Razorpay Partner, we integrate secure, scalable payment solutions into Odoo, custom apps,
            and any web platform — supporting all major payment methods across India.
          </div>
          <div className="plat-services">
            <span className="plat-svc">Odoo Integration</span>
            <span className="plat-svc">Subscriptions</span>
            <span className="plat-svc">POS Integration</span>
            <span className="plat-svc">Auto-reconciliation</span>
          </div>
        </div>

        <div className="plat-card p-sp">
          <div className="plat-logo-mark" aria-hidden="true">
            <img className="plat-logo-img" src="/platform-logos/shopify.svg" alt="" loading="lazy" />
          </div>
          <div className="plat-name">Shopify</div>
          <div className="plat-body">
            Shopify Plus store setup and native Shopify–Odoo connector for real-time product, stock, and order
            synchronisation.
          </div>
          <div className="plat-services">
            <span className="plat-svc">Shopify Plus</span>
            <span className="plat-svc">Odoo Sync</span>
            <span className="plat-svc">Theme Dev</span>
          </div>
        </div>

        <div className="plat-card p-mg">
          <div className="plat-logo-mark" aria-hidden="true">
            <img className="plat-logo-img" src="/platform-logos/magento.svg" alt="" loading="lazy" />
          </div>
          <div className="plat-name">Magento</div>
          <div className="plat-body">
            Magento 2 store development and Magento–Odoo integration for unified inventory, orders, and customer data.
          </div>
          <div className="plat-services">
            <span className="plat-svc">Magento 2</span>
            <span className="plat-svc">Odoo Bridge</span>
            <span className="plat-svc">Customisation</span>
          </div>
        </div>

        <div className="plat-card p-sf">
          <div className="plat-logo-mark" aria-hidden="true">
            <img className="plat-logo-img" src="/platform-logos/salesforce.svg" alt="" loading="lazy" />
          </div>
          <div className="plat-name">Salesforce</div>
          <div className="plat-body">
            Sales Cloud, Service Cloud, and custom Salesforce development — including bi-directional Odoo ↔ Salesforce
            sync.
          </div>
          <div className="plat-services">
            <span className="plat-svc">Sales Cloud</span>
            <span className="plat-svc">Odoo Sync</span>
            <span className="plat-svc">Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

