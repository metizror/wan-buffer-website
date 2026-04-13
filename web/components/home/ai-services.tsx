export function HomeAiServices() {
  return (
    <section className="ai-services" id="ai-services">
      <div className="ai-mesh" />
      <div className="ai-serv-inner">
        <div className="ai-serv-hdr rev">
          <div>
            <div className="eyebrow ai">AI &amp; Automation</div>
            <h2 className="sec-h light">
              Intelligent Services
              <br />
              <span className="ai">Built for ERP</span>
            </h2>
          </div>
          <div className="ai-serv-hdr-r">
            <p className="sec-p light">
              We design, build, and deploy AI agents, automation workflows, and predictive analytics — integrating
              natively with your ERP to eliminate manual work, surface real-time intelligence, and drive measurable
              operational outcomes across every business function.
            </p>
            <a className="btn-ai" href="/#contact" style={{ width: "fit-content", marginTop: 16 }}>
              <span>Discuss Your AI Needs →</span>
            </a>
          </div>
        </div>

        <div className="ai-serv-grid rev">
          <div className="ai-serv-card">
            <span className="as-icon">🤖</span>
            <div className="as-cat">Core Service</div>
            <div className="as-title">AI Agents for ERP</div>
            <p className="as-body">
              Autonomous agents that monitor, decide, and act inside your Odoo modules — from auto-generating purchase
              orders when stock hits reorder points, to resolving invoice discrepancies without human intervention.
            </p>
            <div className="as-tags">
              <span className="as-tag">LangChain</span>
              <span className="as-tag">OpenAI</span>
              <span className="as-tag">Odoo API</span>
              <span className="as-tag">Python</span>
            </div>
          </div>
          <div className="ai-serv-card">
            <span className="as-icon">⚡</span>
            <div className="as-cat">Core Service</div>
            <div className="as-title">Workflow Automation</div>
            <p className="as-body">
              Map, analyse, and automate your most time-consuming ERP processes. From multi-step approval chains to
              cross-module data synchronisation — zero-touch, zero-error.
            </p>
            <div className="as-tags">
              <span className="as-tag">RPA</span>
              <span className="as-tag">Odoo Automation</span>
              <span className="as-tag">Python</span>
              <span className="as-tag">Zapier/Make</span>
            </div>
          </div>
          <div className="ai-serv-card">
            <span className="as-icon">📊</span>
            <div className="as-cat">Core Service</div>
            <div className="as-title">Predictive Analytics &amp; ML</div>
            <p className="as-body">
              Custom ML models trained on your ERP data — demand forecasting, churn prediction, production yield
              optimisation, and anomaly detection that surface insights before issues occur.
            </p>
            <div className="as-tags">
              <span className="as-tag">TensorFlow</span>
              <span className="as-tag">Scikit-learn</span>
              <span className="as-tag">FastAPI</span>
              <span className="as-tag">Odoo BI</span>
            </div>
          </div>
          <div className="ai-serv-card">
            <span className="as-icon">💬</span>
            <div className="as-cat">Advanced Service</div>
            <div className="as-title">AI Copilots &amp; Chatbots</div>
            <p className="as-body">
              Natural language interfaces for ERP — let your team query inventory, create sales orders, or check
              financials using plain English. Embedded inside Odoo or as standalone assistants.
            </p>
            <div className="as-tags">
              <span className="as-tag">GPT-4o</span>
              <span className="as-tag">RAG</span>
              <span className="as-tag">Vector DB</span>
              <span className="as-tag">Odoo Chat</span>
            </div>
          </div>
          <div className="ai-serv-card">
            <span className="as-icon">📄</span>
            <div className="as-cat">Advanced Service</div>
            <div className="as-title">Intelligent Document Processing</div>
            <p className="as-body">
              AI-powered OCR that reads, validates, and processes invoices, POs, delivery notes, and contracts —
              automatically pushing structured data into the right Odoo fields.
            </p>
            <div className="as-tags">
              <span className="as-tag">OCR</span>
              <span className="as-tag">NLP</span>
              <span className="as-tag">Document AI</span>
              <span className="as-tag">Odoo</span>
            </div>
          </div>
          <div className="ai-serv-card">
            <span className="as-icon">🔗</span>
            <div className="as-cat">Integration</div>
            <div className="as-title">ERP &amp; AI Integration Architecture</div>
            <p className="as-body">
              Design and build the data pipelines, APIs, and middleware that connect your ERP to AI services, third-party
              platforms, IoT sensors, and external intelligence sources.
            </p>
            <div className="as-tags">
              <span className="as-tag">REST API</span>
              <span className="as-tag">Kafka</span>
              <span className="as-tag">AWS</span>
              <span className="as-tag">Docker</span>
            </div>
          </div>
        </div>

        <div className="ai-use-wrap rev">
          <div className="ai-use-header">
            <div className="ai-use-label">AI Use Cases Across Industries</div>
            <div className="ai-use-count">08 Proven Applications</div>
          </div>
          <div className="ai-use-grid">
            <div className="ai-use-card">
              <div className="auc-num">01</div>
              <div className="auc-icon-box">📦</div>
              <div className="auc-title">Smart Inventory Replenishment</div>
              <p className="auc-body">
                AI agent monitors stock levels, predicts demand, and raises purchase orders autonomously — zero manual
                intervention.
              </p>
              <span className="auc-module">Odoo Purchase · Inventory</span>
            </div>
            <div className="ai-use-card">
              <div className="auc-num">02</div>
              <div className="auc-icon-box">💰</div>
              <div className="auc-title">Automated Invoice Processing</div>
              <p className="auc-body">
                OCR + AI validates vendor invoices, flags anomalies, and posts to accounting without human touch. 300+
                invoices/day.
              </p>
              <span className="auc-module">Odoo Accounting</span>
            </div>
            <div className="ai-use-card">
              <div className="auc-num">03</div>
              <div className="auc-icon-box">🏭</div>
              <div className="auc-title">Predictive Maintenance</div>
              <p className="auc-body">
                ML models analyse equipment sensor data and auto-create maintenance work orders before breakdowns
                occur.
              </p>
              <span className="auc-module">Odoo Maintenance · MRP</span>
            </div>
            <div className="ai-use-card">
              <div className="auc-num">04</div>
              <div className="auc-icon-box">🚛</div>
              <div className="auc-title">AI Route Optimisation</div>
              <p className="auc-body">
                Real-time delivery route optimisation integrated with Odoo logistics — reducing fuel costs and
                improving SLA compliance.
              </p>
              <span className="auc-module">Odoo Inventory · Delivery</span>
            </div>
            <div className="ai-use-card">
              <div className="auc-num">05</div>
              <div className="auc-icon-box">👥</div>
              <div className="auc-title">Intelligent HR Automation</div>
              <p className="auc-body">
                AI-driven onboarding flows, leave approval bots, and payroll anomaly detection inside Odoo HR modules.
              </p>
              <span className="auc-module">Odoo HR · Payroll</span>
            </div>
            <div className="ai-use-card">
              <div className="auc-num">06</div>
              <div className="auc-icon-box">📈</div>
              <div className="auc-title">Sales Forecasting &amp; CRM AI</div>
              <p className="auc-body">
                Predictive lead scoring, churn risk alerts, and AI-generated follow-up recommendations in Odoo CRM.
              </p>
              <span className="auc-module">Odoo CRM · Sales</span>
            </div>
            <div className="ai-use-card">
              <div className="auc-num">07</div>
              <div className="auc-icon-box">🔍</div>
              <div className="auc-title">Quality Control Automation</div>
              <p className="auc-body">
                Computer vision + AI flags defects on production lines and updates Odoo quality checks in real time.
              </p>
              <span className="auc-module">Odoo Quality · MRP</span>
            </div>
            <div className="ai-use-card">
              <div className="auc-num">08</div>
              <div className="auc-icon-box">📊</div>
              <div className="auc-title">Executive AI Dashboard</div>
              <p className="auc-body">
                Ask your ERP questions in plain English and receive instant AI-generated insights — no SQL, no waiting.
              </p>
              <span className="auc-module">Odoo BI · Reporting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

