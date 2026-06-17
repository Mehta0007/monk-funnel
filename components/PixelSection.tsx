const pillars = [
  {
    bold: "You approve every move.",
    body: "Nothing goes live without your sign-off. Full control, zero surprises.",
  },
  {
    bold: null,
    body: "SEO, paid ads, funnels, and web running in parallel — one team, full coverage.",
  },
  {
    bold: null,
    body: "Weekly data reports. Real numbers. No vanity metrics, no agency fluff.",
  },
];

const metrics = [
  { label: "ROAS", value: "4.8x", sub: "avg. return" },
  { label: "LEADS", value: "12.4k", sub: "generated" },
  { label: "CAMPAIGNS", value: "40+", sub: "live now" },
];

export default function PixelSection() {
  return (
    <section id="about" className="relative overflow-hidden flex flex-col items-center justify-center min-h-[110svh] py-28 px-4">

      {/* Blue sky background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/blue-background.avif"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Top pixel border */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/carousel-top.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-0 w-full z-5"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Left tree + land — h-full, object-contain anchored bottom-left */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
  src="/left-decor.png"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    select-none
    absolute
    bottom-0
    left-0
    z-10
    h-[65%]
    sm:h-[72%]
    lg:h-[80%]
    w-auto
  "
/>

      {/* Right top tree — hidden on mobile, extends above section edge */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
   {/* <img
  src="/right-top-decor.webp"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    select-none
    absolute
    right-0
    z-10
    w-[28vw]
    min-w-[260px]
    max-w-[520px]
    h-auto
  "
  style={{ top: "60px" }}
/> */}

      {/* Bottom-right decor — h-full, object-contain anchored bottom-right */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
   <img
  src="/right-small-decor.webp"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    select-none
    absolute
    bottom-0
    right-0
    z-10
    h-[30%]
    sm:h-[36%]
    lg:h-[42%]
    w-auto
  "
/>
      {/* Left cloud — floats in mid-sky on the left */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
  src="/clouds-left.webp"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    select-none
    absolute
    left-0
    z-[8]
    w-[38%]
    sm:w-[28%]
    lg:w-[22%]
    h-auto
  "
  style={{ top: "26%" }}
/>

      {/* Right cloud — floats in mid-sky on the right */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
   <img
  src="/clouds-right.webp"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    select-none
    absolute
    right-0
    z-[8]
    w-[38%]
    sm:w-[28%]
    lg:w-[22%]
    h-auto
  "
  style={{ top: "46%" }}
/>

      {/* Bottom pixel border */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/carousel-bottom.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 w-full z-15"
        style={{ imageRendering: "pixelated", bottom: "-16px" }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-white leading-tight tracking-tight mb-10">
          All the strategy and systems<br />your brand needs.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-14 text-sm text-left w-full">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`py-4 ${i > 0 ? "sm:border-l sm:border-white/15 sm:pl-5" : ""}`}
            >
              {p.bold && (
                <p className="font-semibold text-white mb-1">{p.bold}</p>
              )}
              <p className="text-white/80 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-4xl rounded-2xl bg-white/20 backdrop-blur-xl ring-1 ring-white/30 p-6">
          <div className="text-[10px] text-white/45 uppercase tracking-widest mb-5 text-left">
            Campaign Performance · Live
          </div>
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {metrics.map((m) => (
              <div key={m.label} className="px-3 text-center first:pl-0 last:pr-0">
                <div className="text-[9px] tracking-widest text-white/40 uppercase mb-1.5">
                  {m.label}
                </div>
                <div className="text-2xl font-medium text-white">{m.value}</div>
                <div className="text-[9px] text-white/35 mt-1">{m.sub}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-xs text-white/45">NovaSpark · Google Ads + Meta + SEO running</span>
          </div>
        </div>
      </div>
    </section>
  );
}
