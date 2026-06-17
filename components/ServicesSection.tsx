import { TrendingUp, Target, Search, Users, Layers, Monitor } from "lucide-react";

const services = [
  {
    num: "01",
    icon: TrendingUp,
    title: "Search Engine Optimisation",
    desc: "Rank higher, get found faster. We build topical authority and technical foundations that deliver sustainable organic visibility — not just traffic spikes.",
  },
  {
    num: "02",
    icon: Target,
    title: "Meta Ads",
    desc: "Laser-targeted Facebook and Instagram campaigns that reach the right people at the right moment. Every rupee tracked, every creative tested.",
  },
  {
    num: "03",
    icon: Search,
    title: "Google Ads",
    desc: "Intent-driven search and display campaigns built for high-quality leads. We optimise for ROAS, not vanity metrics.",
  },
  {
    num: "04",
    icon: Users,
    title: "Social Media Marketing",
    desc: "Content strategies that engage, educate, and convert. We turn your brand's feed into a revenue channel.",
  },
  {
    num: "05",
    icon: Layers,
    title: "Sales Funnel Building",
    desc: "High-performing funnels that move prospects through every stage — landing pages, email sequences, retargeting, and close.",
  },
  {
    num: "06",
    icon: Monitor,
    title: "Website Design & Development",
    desc: "Conversion-optimised websites built on Next.js. No templates — every page is a sales asset engineered to turn visitors into leads.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
      <div className="mb-14">
        <p className="text-[11px] tracking-widest text-gray-400 uppercase mb-3">What we do</p>
        <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 leading-tight tracking-tight max-w-lg">
          Full-stack growth.<br />One team.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="group relative bg-white rounded-2xl p-7 ring-1 ring-gray-100 hover:ring-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-9 h-9 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Icon className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-[11px] text-gray-200 tracking-widest font-mono">{s.num}</span>
              </div>
              <h3 className="text-base font-medium text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
