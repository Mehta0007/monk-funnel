const steps = [
  {
    num: "01",
    title: "Discover",
    body: "We listen before we sketch — goals, audience, and the story only you can tell.",
  },
  {
    num: "02",
    title: "Wireframe",
    body: "Structure before style — we map every page so nothing is left to chance.",
  },
  {
    num: "03",
    title: "Design",
    body: "Your brand given form — typography, colour, and space working as one.",
  },
  {
    num: "04",
    title: "Build",
    body: "Pixel-perfect code — fast, accessible, and built to last beyond the trend cycle.",
  },
  {
    num: "05",
    title: "Launch",
    body: "We hand over the keys — and stay close if you need us to drive.",
  },
];

const BORDER  = "#d6cfc6";
const SERIF   = "'Cormorant Garamond', Georgia, serif";

export default function WebsiteFactorySection() {
  return (
    <section
      className="px-6 sm:px-12 lg:px-20 py-20 sm:py-28"
      style={{ background: "#F5F5F1" }}
    >
      {/* Responsive column dividers — border-top on mobile, border-left on sm+ */}
      <style>{`
        .process-col + .process-col { border-top: 1px solid ${BORDER}; }
        @media (min-width: 640px) {
          .process-col + .process-col {
            border-top: none;
            border-left: 1px solid ${BORDER};
            padding-left: 1.75rem;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <p className="text-[11px] tracking-widest uppercase mb-5" style={{ color: "#9a8c7e" }}>
          Our Process
        </p>

        {/* Heading */}
        <h2
          className="font-normal leading-[1.05] tracking-tight mb-16"
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(42px, 5.5vw, 76px)",
            color: "#1e180f",
          }}
        >
          From first word<br />to final pixel.
        </h2>

        {/* Grid */}
        <div style={{ borderTop: `1px solid ${BORDER}` }}>
          <div className="grid grid-cols-1 sm:grid-cols-5">
            {steps.map((step) => (
              <div key={step.num} className="process-col py-10 pr-6">

                {/* Ghost number */}
                <p
                  aria-hidden="true"
                  className="select-none leading-none mb-8"
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(72px, 8vw, 120px)",
                    color: "#7a6a58",
                    opacity: 0.25,
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </p>

                {/* Step title */}
                <h3
                  className="text-[16px] font-semibold tracking-tight mb-3"
                  style={{ color: "#1e180f" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ fontFamily: SERIF, fontStyle: "italic", color: "#7a6a58" }}
                >
                  {step.body}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom rule + footnote */}
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
          <p
            className="text-[13px]"
            style={{ fontFamily: SERIF, fontStyle: "italic", color: "#a09080" }}
          >
            Typically 2–4 weeks from brief to live site.
          </p>
        </div>

      </div>
    </section>
  );
}
