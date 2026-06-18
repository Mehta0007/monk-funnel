const steps = [
  {
    num: "01",
    title: "Discover",
    body: "Before we design anything, we find the one outcome this site has to drive and the one person it has to convince. That answer becomes the headline.",
    accent: "#6366f1",
  },
  {
    num: "02",
    title: "Wireframe",
    body: "Structure before style — we map every page so nothing is left to chance.",
    accent: "#8b5cf6",
  },
  {
    num: "03",
    title: "Design",
    body: "Your brand given form — typography, colour, and space working as one.",
    accent: "#ec4899",
  },
  {
    num: "04",
    title: "Build",
    body: "Pixel-perfect code — fast, accessible, and built to last beyond the trend cycle.",
    accent: "#f59e0b",
  },
  {
    num: "05",
    title: "Launch",
    body: "We hand over the keys — and stay close if you need us to drive.",
    accent: "#10b981",
  },
];

export default function WebsiteFactorySection() {
  return (
    <section
      className="px-6 sm:px-12 lg:px-20 py-20 sm:py-28"
      style={{ background: "#F5F5F1" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight mb-5"
          style={{ color: "#1a1a1a" }}
        >
          How a 21-day build<br />actually works.
        </h2>

        {/* Badge */}
        <div className="mb-14">
          <span
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full"
            style={{ background: "#1a1a1a", color: "#ffffff" }}
          >
            Brief to live in 21 days — every time
          </span>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative flex gap-5 rounded-2xl px-6 py-6"
              style={{
                background: "#ffffff",
                borderLeft: `4px solid ${step.accent}`,
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              {/* Step number */}
              <span
                className="shrink-0 text-xs font-mono font-semibold mt-1"
                style={{ color: step.accent, minWidth: "2rem" }}
              >
                {step.num}
              </span>

              {/* Content */}
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2 leading-snug"
                  style={{ color: "#1a1a1a" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#5a5a5a" }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
