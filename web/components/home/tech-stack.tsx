export function HomeTechStack() {
  return (
    <section className="techstack">
      <div className="ts-hdr rev">
        <div className="eyebrow">Technology Expertise</div>
        <h2 className="sec-h">
          Our <span className="acc">ERP</span> + <span className="ai">AI</span> Arsenal
        </h2>
      </div>

      <div className="ts-grid rev" id="tsGrid">
        <div className="ts-grp">
          <div className="ts-glabel">ERP &amp; CRM</div>
          <div className="ts-pills">
            <span className="ts-pill">Odoo 16</span>
            <span className="ts-pill">Odoo 17</span>
            <span className="ts-pill">Odoo 18</span>
            <span className="ts-pill">Odoo SaaS</span>
            <span className="ts-pill">Zoho CRM</span>
            <span className="ts-pill">Salesforce</span>
          </div>
        </div>

        <div className="ts-grp ai-grp">
          <div className="ts-glabel">AI &amp; Automation ⚡</div>
          <div className="ts-pills">
            <span className="ts-pill">LangChain</span>
            <span className="ts-pill">OpenAI GPT-4o</span>
            <span className="ts-pill">Claude API</span>
            <span className="ts-pill">TensorFlow</span>
            <span className="ts-pill">Scikit-learn</span>
            <span className="ts-pill">FastAPI</span>
            <span className="ts-pill">Zapier / Make</span>
            <span className="ts-pill">LlamaIndex</span>
          </div>
        </div>

        <div className="ts-grp">
          <div className="ts-glabel">Mobile &amp; Frontend</div>
          <div className="ts-pills">
            <span className="ts-pill">Flutter</span>
            <span className="ts-pill">React Native</span>
            <span className="ts-pill">ReactJS</span>
            <span className="ts-pill">Next.js</span>
            <span className="ts-pill">Vue.js</span>
            <span className="ts-pill">Swift iOS</span>
          </div>
        </div>

        <div className="ts-grp">
          <div className="ts-glabel">Cloud &amp; Backend</div>
          <div className="ts-pills">
            <span className="ts-pill">Python</span>
            <span className="ts-pill">Django</span>
            <span className="ts-pill">Node.js</span>
            <span className="ts-pill">AWS</span>
            <span className="ts-pill">GCP</span>
            <span className="ts-pill">Docker</span>
            <span className="ts-pill">Kafka</span>
            <span className="ts-pill">PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

