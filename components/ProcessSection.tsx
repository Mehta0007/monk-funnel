import { Search, Layers, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "Audit",
    detail: "We dissect your current funnel and find every leak — from traffic sources to conversion bottlenecks.",
    icon: Search,
  },
  {
    step: "Strategy",
    detail: "A 90-day growth roadmap tied directly to your revenue goals. No fluff, no guesswork.",
    icon: Layers,
  },
  {
    step: "Execute",
    detail: "Our team ships fast and stays accountable. No hand-holding required from your end.",
    icon: Zap,
  },
  {
    step: "Optimise",
    detail: "Weekly data reviews, monthly strategy sessions. We compound gains, not just maintain them.",
    icon: TrendingUp,
  },
];

export default function ProcessSection() {
  return (
    <section className="border-t border-gray-200/70 px-6 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-widest text-gray-400 uppercase mb-3">How it works</p>
        <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 tracking-tight mb-16 leading-tight">
          Simple. Transparent.<br />Results-first.
        </h2>

        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Horizontal connector line */}
          <div className="hidden sm:block absolute top-5 left-5 right-5 h-px bg-gray-200/80" />

          {steps.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.step} className="relative">
                {/* Icon circle — sits on top of the line */}
                <div className="relative z-10 w-10 h-10 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 flex items-center justify-center mb-5">
                  <Icon className="w-4 h-4 text-gray-500" />
                </div>
                {/* Decorative large step number */}
                <div className="text-[52px] sm:text-[64px] font-light text-gray-100 leading-none -mt-2 mb-3 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-base font-medium text-gray-900 mb-2">{p.step}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{p.detail}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
