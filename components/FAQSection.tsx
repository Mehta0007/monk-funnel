"use client";

import { useState } from "react";

const SERIF  = "'Cormorant Garamond', Georgia, serif";
const BORDER = "#d6cfc6";

const faqs = [
  {
    q: "What services does Monk Funnel offer?",
    a: "We cover the full growth stack — SEO, paid ads (Google & Meta), conversion-focused website design and development, landing pages, and funnel strategy. Think of us as the team that turns traffic into revenue.",
  },
  {
    q: "How long does a website project take?",
    a: "Most sites go from brief to live in 2–4 weeks. Complex builds with custom features or e-commerce can run 5–8 weeks. We'll give you a clear timeline before we start — and stick to it.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes, and it's some of our favourite work. We know how to move fast on lean budgets. Whether you need a launch site or your first paid acquisition channel, we'll scope what's right for your stage.",
  },
  {
    q: "What does your pricing look like?",
    a: "Projects are scoped and quoted fixed-price so you never get a surprise invoice. Ongoing retainers for ads and SEO are month-to-month — no 12-month lock-ins. Book a free audit call and we'll give you exact numbers.",
  },
  {
    q: "Can I see results before signing a long-term contract?",
    a: "Absolutely. We often start with a one-off audit or a 30-day sprint so you can see the quality of our work before committing. We'd rather earn a long relationship than demand one upfront.",
  },
  {
    q: "Who owns the work after the project?",
    a: "You do — entirely. All code, design files, ad accounts, and content belong to you from day one. We don't hold your assets hostage, ever.",
  },
  {
    q: "What makes Monk Funnel different from other agencies?",
    a: "We don't traffic in vanity metrics. Every decision is tied to revenue — more leads, lower cost-per-acquisition, higher ROAS. Small enough to care about your business, experienced enough to know what works.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="px-6 sm:px-12 lg:px-20 py-20 sm:py-28"
      style={{ background: "#F5F5F1" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2
          className="text-center font-normal leading-tight mb-16"
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(36px, 5vw, 60px)",
            color: "#1e180f",
          }}
        >
          Frequently asked questions
        </h2>

        {/* Accordion */}
        <div style={{ borderTop: `1px solid ${BORDER}` }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7a6a58]/30 focus-visible:ring-offset-1 rounded-sm"
                  style={{ outline: "none" }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[15px] sm:text-[16px] font-medium leading-snug"
                    style={{ color: "#1e180f" }}
                  >
                    {faq.q}
                  </span>

                  {/* +/− icon */}
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      border: `1px solid ${BORDER}`,
                      color: "#7a6a58",
                      transition: "border-color 0.2s",
                    }}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </span>
                </button>

                {/* Smooth CSS-grid accordion — avoids max-height choppiness */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <p
                      className="pb-6 text-[14px] leading-relaxed"
                      style={{
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        color: "#7a6a58",
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom footnote */}
        <p
          className="mt-12 text-center text-[13px]"
          style={{ fontFamily: SERIF, fontStyle: "italic", color: "#a09080" }}
        >
          Still have questions?{" "}
          <a
            href="mailto:monkfunnel0@gmail.com"
            className="underline underline-offset-2"
            style={{ color: "#7a6a58" }}
          >
            Drop us a line.
          </a>
        </p>

      </div>
    </section>
  );
}
