"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Services", href: "/#services" },
  { label: "Process",  href: "/#process"  },
  { label: "Why Us",   href: "/#about"    },
  { label: "Pricing",  href: "/#pricing"  },
  { label: "FAQ",      href: "/#faq"      },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const brandColor = scrolled ? "#1e180f" : "#ffffff";
  const itemColor  = scrolled ? "rgba(30,24,15,0.75)" : "rgba(255,255,255,0.85)";
  const sepColor   = scrolled ? "rgba(0,0,0,0.10)"    : "rgba(255,255,255,0.22)";
  const pillBg     = scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.14)";
  const pillBorder = scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.28)";
  const pillShadow = scrolled
    ? "0 4px 20px rgba(0,0,0,0.07)"
    : "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.18)";
  const darkBtnBg  = scrolled ? "rgba(30,24,15,0.88)" : "rgba(0,0,0,0.38)";

  return (
    <nav className="fixed top-0 inset-x-0 z-[100]">

      {/* ── Desktop (md+) ─────────────────────────────── */}
      <div className="hidden md:flex items-center h-[70px] px-8 lg:px-14">

        {/* Left — brand */}
        <div className="flex-none w-44">
          <Link
            href="/"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "20px",
              fontWeight: 400,
              color: brandColor,
              transition: "color 0.3s",
            }}
          >
            Monk Funnel
          </Link>
        </div>

        {/* Center — glass nav pill */}
        <div className="flex-1 flex justify-center">
          <div
            className="flex items-center rounded-full px-1 py-1"
            style={{
              background: pillBg,
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: pillBorder,
              boxShadow: pillShadow,
              transition: "background 0.3s, border 0.3s, box-shadow 0.3s",
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <div key={item.label} className="flex items-center">
                {i > 0 && (
                  <span
                    className="w-px h-3.5 shrink-0"
                    style={{ background: sepColor, transition: "background 0.3s" }}
                  />
                )}
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-1.5 text-[13px] font-medium"
                  style={{ color: itemColor, transition: "color 0.2s, background 0.2s" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      scrolled ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      scrolled ? "#1e180f" : "#ffffff";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = itemColor;
                  }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right — action buttons */}
        <div className="flex-none w-44 flex items-center justify-end gap-2">
          <a
            href="mailto:monkfunnel0@gmail.com"
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-white"
            style={{
              background: darkBtnBg,
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.12)",
              transition: "background 0.3s",
            }}
          >
            Contact
          </a>
          <Link
            href="/contact"
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-gray-900 bg-white"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.13), 0 0 0 0.5px rgba(0,0,0,0.06)" }}
          >
            Get a teardown
          </Link>
        </div>
      </div>

      {/* ── Mobile (< md) ─────────────────────────────── */}
      <div className="md:hidden px-4 pt-3">
        <div
          className="flex items-center justify-between rounded-full px-3 py-1.5"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.09)",
            border: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "17px",
              color: "#1e180f",
            }}
          >
            Monk Funnel
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="rounded-full px-3 py-1 text-[11px] font-medium text-white"
              style={{ background: "#1e180f" }}
            >
              Get teardown
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#1e180f]"
            >
              {open ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div
            className="mt-2 mx-1 overflow-hidden rounded-2xl text-sm"
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              border: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-[14px] text-[#1e180f]"
                style={{ borderBottom: i < NAV_ITEMS.length - 1 ? "1px solid #f0ece7" : "none" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="p-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full py-2.5 text-[13px] font-medium text-white"
                style={{ background: "#1e180f" }}
              >
                Get a free teardown
              </Link>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
}
