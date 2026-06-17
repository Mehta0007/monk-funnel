import Image from "next/image";

const clients = [
  "NovaSpark", "Scalr Labs", "Orbitly", "Fyndr.io", "Launchpad HQ",
  "Driftwave", "Crestline", "TechVeda",
];

const services = [
  {
    num: "01",
    title: "Search Engine Optimisation",
    desc: "Rank higher, get found faster. We build topical authority and technical foundations that deliver sustainable organic visibility — not just traffic spikes.",
  },
  {
    num: "02",
    title: "Meta Ads",
    desc: "Laser-targeted Facebook and Instagram campaigns that reach the right people at the right moment. Every rupee tracked, every creative tested.",
  },
  {
    num: "03",
    title: "Google Ads",
    desc: "Intent-driven search and display campaigns built for high-quality leads. We optimise for ROAS, not vanity metrics.",
  },
  {
    num: "04",
    title: "Social Media Marketing",
    desc: "Content strategies that engage, educate, and convert. We turn your brand's feed into a revenue channel.",
  },
  {
    num: "05",
    title: "Sales Funnel Building",
    desc: "High-performing funnels that move prospects through every stage — landing pages, email sequences, retargeting, and close.",
  },
  {
    num: "06",
    title: "Website Design & Development",
    desc: "Conversion-optimised websites built on Next.js. No templates — every page is a sales asset engineered to turn visitors into leads.",
  },
];

const process = [
  { step: "Audit", detail: "We dissect your current funnel and find every leak." },
  { step: "Strategy", detail: "A 90-day roadmap tied to your growth goals." },
  { step: "Execute", detail: "Our team ships — no hand-holding required from you." },
  { step: "Optimise", detail: "Weekly data reviews, monthly strategy sessions." },
];

const testimonials = [
  {
    quote: "Monk Funnel took our Google Ads from a money pit to our #1 acquisition channel. ROAS went from 1.2x to 5.4x in three months.",
    name: "Priya Sharma",
    role: "Co-founder, Scalr Labs",
  },
  {
    quote: "We were invisible on Google. Six months later we rank page one for our top 12 keywords. The SEO work speaks for itself.",
    name: "Arjun Mehra",
    role: "Head of Growth, NovaSpark",
  },
  {
    quote: "The landing page they built converted at 11%. Our previous agency's best was 3.2%. Numbers don't lie.",
    name: "Sneha Bose",
    role: "Founder, Orbitly",
  },
];

export default function BelowFold() {
  return (
    <div style={{ backgroundColor: "#F5F5F1" }}>
      {/* ── Clients strip ───────────────────────────────────────── */}
      <section className="border-b border-gray-200/70 px-6 py-10 sm:py-14">
        <p className="text-center text-[11px] tracking-widest text-gray-400 uppercase mb-8">
          Trusted by startups and tech brands across India
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {clients.map((name) => (
            <span key={name} className="text-sm font-medium text-gray-400 tracking-wide">
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
        <div className="mb-14">
          <p className="text-[11px] tracking-widest text-gray-400 uppercase mb-3">What we do</p>
          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 leading-tight tracking-tight max-w-lg">
            Full-stack growth.<br />One team.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200/60">
          {services.map((s) => (
            <div key={s.num} className="bg-[#F5F5F1] p-8">
              <span className="text-[11px] text-gray-400 tracking-widest">{s.num}</span>
              <h3 className="mt-3 text-base font-medium text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────── */}
      <section className="border-t border-gray-200/70 px-6 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] tracking-widest text-gray-400 uppercase mb-3">How it works</p>
          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 tracking-tight mb-14">
            Simple. Transparent.<br />Results-first.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={p.step}>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-400 mb-4">
                  {i + 1}
                </div>
                <div className="text-base font-medium text-gray-900 mb-1">{p.step}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section className="border-t border-gray-200/70 px-6 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] tracking-widest text-gray-400 uppercase mb-14 text-center">
            What clients say
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col gap-4">
                <p className="text-sm text-gray-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-auto">
                  <div className="text-sm font-medium text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="border-t border-gray-200/70 px-6 py-20 sm:py-28">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 tracking-tight leading-tight mb-6">
            Let&apos;s grow your<br />business together.
          </h2>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Book a free 30-minute audit. We&apos;ll show you exactly where your funnel is leaking and what to fix first.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+918810326598"
              className="bg-gray-900 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Call +91 88103 26598
            </a>
            <a
              href="mailto:monkfunnel0@gmail.com"
              className="text-gray-700 text-sm font-medium px-8 py-3 rounded-full ring-1 ring-gray-300 hover:bg-gray-100 transition-colors"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
