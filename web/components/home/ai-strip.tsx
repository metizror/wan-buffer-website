export function HomeAiStrip() {
  return (
    <div className="ai-strip">
      <div className="ai-strip-inner rev">
        <div className="ai-strip-left">
          <div className="ai-strip-label">Our Positioning</div>
          <h2 className="ai-strip-h">
            We Bring <span className="ai">AI Intelligence</span>
            <br />
            to Every <span className="red">ERP Workflow</span>
          </h2>
        </div>

        <div className="ai-strip-right">
          <div className="ai-pillar" data-n="01">
            <div className="ai-pillar-icon">🤖</div>
            <div className="ai-pillar-t">AI Agents Inside ERP</div>
            <div className="ai-pillar-s">
              Autonomous agents that monitor, decide, and act inside your Odoo modules — from auto-generating POs to
              resolving invoice discrepancies without human touch.
            </div>
          </div>
          <div className="ai-pillar" data-n="02">
            <div className="ai-pillar-icon">⚡</div>
            <div className="ai-pillar-t">Process Automation</div>
            <div className="ai-pillar-s">
              Zero-touch workflows across every department. Map, analyse, and automate your most time-consuming ERP
              processes — approvals, syncs, alerts and more.
            </div>
          </div>
          <div className="ai-pillar" data-n="03">
            <div className="ai-pillar-icon">📊</div>
            <div className="ai-pillar-t">Predictive Decision Support</div>
            <div className="ai-pillar-s">
              Custom ML models trained on your ERP data — demand forecasting, anomaly detection, yield optimisation —
              surfacing insights before problems occur.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

