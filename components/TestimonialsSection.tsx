const testimonials = [
  {
    quote:
      "Monk Funnel took our Google Ads from a money pit to our #1 acquisition channel. ROAS went from 1.2x to 5.4x in three months.",
    name: "Priya Sharma",
    role: "Co-founder, Scalr Labs",
    initial: "P",
    color: "bg-amber-500",
  },
  {
    quote:
      "We were invisible on Google. Six months later we rank page one for our top 12 keywords. The SEO work speaks for itself.",
    name: "Arjun Mehra",
    role: "Head of Growth, NovaSpark",
    initial: "A",
    color: "bg-indigo-500",
  },
  {
    quote:
      "The landing page they built converted at 11%. Our previous agency's best was 3.2%. Numbers don't lie.",
    name: "Sneha Bose",
    role: "Founder, Orbitly",
    initial: "S",
    color: "bg-emerald-500",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="border-t border-gray-200/70 px-6 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-widest text-gray-400 uppercase mb-3 text-center">
          Client stories
        </p>
        <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 tracking-tight mb-14 text-center leading-tight">
          Results that speak<br />for themselves.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 flex flex-col gap-5 shadow-sm ring-1 ring-gray-100 hover:shadow-md hover:ring-gray-200 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-8 h-8 rounded-full ${t.color} flex items-center justify-center shrink-0`}
                >
                  <span className="text-xs font-medium text-white">{t.initial}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
