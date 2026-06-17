const stats = [
  { value: "40+", label: "Campaigns live" },
  { value: "18", label: "Active clients" },
  { value: "12.4k", label: "Leads generated" },
  { value: "4.8x", label: "Avg. ROAS" },
];

export default function CTASection() {
  return (
    <section className="border-t border-gray-200/70 px-6 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20 pb-20 border-b border-gray-200/70">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl sm:text-5xl font-light text-gray-900 tracking-tight">
                {s.value}
              </div>
              <div className="text-[11px] text-gray-400 mt-1.5 tracking-widest uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 tracking-tight leading-tight mb-6">
            Let&apos;s grow your<br />business together.
          </h2>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-sm">
            Book a free 30-minute audit. We&apos;ll show you exactly where your
            funnel is leaking and what to fix first.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+918810326598"
              className="bg-gray-900 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-800 hover:shadow-lg transition-all"
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
      </div>
    </section>
  );
}
