"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "About",    href: "/#about" },
  { label: "Pricing",  href: "/#pricing" },
  { label: "Contact",  href: "/contact" },
];

const LINK_STYLE: React.CSSProperties = {
  color: "#374151",       /* gray-700 */
  fontSize: "13px",
  padding: "6px 14px",
  borderRadius: "999px",
  display: "inline-block",
  transition: "background 0.15s, color 0.15s",
};

const BRAND_STYLE: React.CSSProperties = {
  color: "#111827",       /* gray-900 */
  fontSize: "15px",
  fontWeight: 500,
  letterSpacing: "-0.01em",
};

const CTA_STYLE: React.CSSProperties = {
  color: "#1e180f",
  fontSize: "13px",
  fontWeight: 500,
  padding: "6px 16px",
  borderRadius: "999px",
  display: "inline-block",
  background: "rgba(255,255,255,0.88)",
  border: "1px solid rgba(0,0,0,0.09)",
  boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">

        {/* Brand wordmark */}
        <Link href="/" style={BRAND_STYLE}>
          Monk Funnel
        </Link>

        {/* Desktop: nav links + CTA */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={LINK_STYLE}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,0,0,0.06)";
                e.currentTarget.style.color = "#111827";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#374151";
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/contact" style={{ ...CTA_STYLE, marginLeft: "10px" }}>
            Get a free teardown
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-colors"
          style={{ background: "rgba(255,255,255,0.30)" }}
        >
          {open
            ? <X className="w-[18px] h-[18px]" style={{ color: "#1e180f" }} />
            : <Menu className="w-[18px] h-[18px]" style={{ color: "#1e180f" }} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden mx-4 mt-1 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "14px 20px",
                fontSize: "14px",
                color: "#374151",
                borderBottom: i < navLinks.length - 1 ? "1px solid rgba(0,0,0,0.06)" : undefined,
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="p-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                borderRadius: "999px",
                background: "#1e180f",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 500,
                padding: "12px 0",
              }}
            >
              Get a free teardown
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
