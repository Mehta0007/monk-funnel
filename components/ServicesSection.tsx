import { TrendingUp, Target, Search, Layers, Monitor } from "lucide-react";

const growthServices = [
  {
    icon: Search,
    title: "SEO",
    desc: "Topical authority and technical foundations for organic visibility that compounds.",
  },
  {
    icon: Target,
    title: "Google Ads",
    desc: "Intent-driven campaigns optimised for qualified leads, not vanity clicks.",
  },
  {
    icon: TrendingUp,
    title: "Meta Ads",
    desc: "Targeted Facebook and Instagram campaigns, every creative tested.",
  },
  {
    icon: Layers,
    title: "Funnels",
    desc: "Landing pages, email sequences, and retargeting that move prospects to a yes.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
      <div className="mb-14">
        <p className="text-[11px] tracking-widest text-gray-400 uppercase mb-3">What we do</p>
        <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 leading-tight tracking-tight max-w-lg">
          We build the website first.<br />Then we help it grow.
        </h2>
      </div>

      {/* Primary service — featured */}
      <div className="mb-10 rounded-2xl bg-white p-8 sm:p-10 ring-1 ring-gray-100 shadow-sm">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center shrink-0">
            <Monitor className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <span className="text-[11px] tracking-widest text-gray-400 uppercase">Primary Service</span>
            <h3 className="text-lg font-medium text-gray-900 mt-0.5">Conversion-First Website Design &amp; Build</h3>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
          Every page engineered as a sales asset — not a brochure. Built on Next.js, no templates,
          structured around the one action that matters. Brief to live in 21 days.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-flex items-center text-sm font-medium text-gray-900 underline underline-offset-4"
        >
          Get a free homepage teardown →
        </a>
      </div>

      {/* Secondary services */}
      <p className="text-[11px] tracking-widest text-gray-400 uppercase mb-5">
        When you&apos;re ready to scale traffic
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {growthServices.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-6 ring-1 ring-gray-100 hover:ring-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors flex items-center justify-center mb-4">
                <Icon className="w-3.5 h-3.5 text-gray-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1.5">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
