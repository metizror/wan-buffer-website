"use client";

export function HomeWanny() {
  return (
    <>
      <div id="wanny-dim" onClick={() => (window as any).closeWanny?.()}></div>

      {/* ── Floating Stack: Wanny + Book CTA ── */}
      <div id="float-stack">
        {/* Row 1: Wanny */}
        <div id="wanny-trigger" onClick={() => (window as any).openWanny?.()}>
          <div className="wanny-ava">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=104&h=104&fit=crop&crop=faces,top"
              alt="Wanny — AI ERP Consultant"
            />
          </div>
          <div className="wanny-trigger-text">
            <span className="wanny-trigger-name">Wanny</span>
            <span className="wanny-trigger-sub">AI ERP Consultant · Online</span>
          </div>
          <div
            className="wanny-trigger-close"
            onClick={(e) => {
              e.stopPropagation();
              const trigger = document.getElementById("wanny-trigger");
              if (trigger) trigger.style.display = "none";
            }}
          >
            ✕
          </div>
        </div>

        {/* Row 2: Book a Free Discovery Call */}
        <a id="float-book-cta" href="/contact-us">
          <span className="fbc-pulse"></span>
          <span className="fbc-label">Book a Free Discovery Call</span>
          <span className="fbc-arrow">→</span>
        </a>
      </div>

      {/* Side panel */}
      <div id="wanny-panel">
        {/* Header */}
        <div className="wp-top">
          <div className="wp-ava">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=88&h=88&fit=crop&crop=face"
              alt="Wanny — Wan Buffer AI ERP Consultant"
            />
          </div>
          <div className="wp-info">
            <div className="wp-name">Wanny</div>
            <div className="wp-status">AI ERP Consultant · Wan Buffer</div>
          </div>
          <button className="wp-close" type="button" onClick={() => (window as any).closeWanny?.()} aria-label="Close">
            ✕
          </button>
        </div>

        {/* Proof ticker inside panel */}
        <div className="wp-proof-bar">
          <div className="wp-proof-track">
            <span className="wp-proof-item">254+ Projects Delivered</span>
            <span className="wp-proof-item">40% Faster Implementation</span>
            <span className="wp-proof-item">84% Client Retention</span>
            <span className="wp-proof-item">80% Less Manual Entry</span>
            <span className="wp-proof-item">20+ Countries Served</span>
            <span className="wp-proof-item">Odoo Partner</span>
            <span className="wp-proof-item">254+ Projects Delivered</span>
            <span className="wp-proof-item">40% Faster Implementation</span>
          </div>
        </div>

        {/* Messages */}
        <div className="wp-msgs" id="wannyMsgs"></div>

        {/* Quick-reply chips */}
        <div className="w-chips" id="wannyChips"></div>

        {/* Input */}
        <div className="wp-input-row">
          <input
            className="wp-input"
            id="wannyInput"
            type="text"
            placeholder="Type your message…"
            onKeyDown={(e) => {
              if (e.key === "Enter") (window as any).wannySend?.();
            }}
          />
          <button className="wp-send" type="button" onClick={() => (window as any).wannySend?.()} aria-label="Send">
            →
          </button>
        </div>
        <div className="wp-branding">Powered by Wanny · Wan Buffer AI</div>
      </div>
    </>
  );
}

