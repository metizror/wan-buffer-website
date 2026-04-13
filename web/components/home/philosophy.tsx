export function HomePhilosophy() {
  return (
    <section className="phil-stats">
      <div className="phil-left">
        <div className="phil-ring phil-ring1" />
        <div className="phil-ring phil-ring2" />
        <div className="phil-eyebrow rev">Our Founding Principle</div>

        <div className="phil-quote rev" id="philQuote">
          <span className="ph-line">
            <span className="ph-inner">A Deed Is a</span>
          </span>
          <span className="ph-line">
            <span className="ph-inner">
              <span className="hollow">Speakable</span>
            </span>
          </span>
          <span className="ph-line">
            <span className="ph-inner">Act.</span>
          </span>
        </div>

        <div className="phil-attr rev">
          <div className="phil-line" />
          <div className="phil-t">
            <strong>सर्वे कर्मवशा वयम् — We are all under the power of our actions.</strong>
            This is why we measure ourselves by results alone — whether that result is a faster production cycle, an
            AI agent that saves 200 hours a month, or a system that never breaks at 2 AM.
          </div>
        </div>
      </div>

      <div className="phil-right">
        <div className="rec-header rev">
          <div className="rec-eyebrow">By the Numbers</div>
          <h2 className="rec-h">
            Proven at <span className="acc">Scale</span>
          </h2>
          <p className="rec-sub-txt">
            7 years of consistent ERP + AI delivery across 20+ countries — measured in real client outcomes.
          </p>
        </div>

        <div className="rec-stats" id="recStats">
          <div className="rec-stat">
            <div className="rec-num">
              <span id="r1">0</span>
              <sup>+</sup>
            </div>
            <div className="rec-lbl">Projects Delivered</div>
          </div>
          <div className="rec-stat">
            <div className="rec-num">
              <span id="r2">0</span>
              <sup>+</sup>
            </div>
            <div className="rec-lbl">Nations Served</div>
          </div>
          <div className="rec-stat">
            <div className="rec-num">
              <span id="r3">0</span>
              <sup>%</sup>
            </div>
            <div className="rec-lbl">On-Time Delivery</div>
          </div>
          <div className="rec-stat">
            <div className="rec-num">
              <span id="r4">0</span>
              <sup>+</sup>
            </div>
            <div className="rec-lbl">Certified Engineers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

