"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    fetch("/api/404-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: window.location.pathname + window.location.search,
        referrer: document.referrer || null,
      }),
    }).catch(() => {});
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "8rem",
            fontWeight: 900,
            lineHeight: 1,
            margin: 0,
            background: "linear-gradient(135deg, #e11d48, #f43f5e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 700,
            margin: "0.5rem 0 1rem",
            color: "#e2e8f0",
          }}
        >
          Page Not Found
        </h2>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "1rem",
            maxWidth: "420px",
            margin: "0 auto 2rem",
            lineHeight: 1.6,
          }}
        >
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "0.75rem 2rem",
            background: "#e11d48",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.9375rem",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#be123c")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#e11d48")}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
