import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-visible">
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
    h-[28vh]
    sm:h-[38vh]
    lg:h-[55vh]
    xl:h-[65vh]
    max-h-[720px]
    w-auto
  "
/>
      <Image
        src="/footer-bg-cofounder-co.png"
        alt=""
        width={2048}
        height={122}
        priority
        className="w-full h-auto block"
        style={{ imageRendering: "pixelated" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-3 gap-1.5">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href="/privacy-policy"
            className="text-[11px] text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
            style={{ textShadow: "0 1px 0 rgba(255,255,255,.5)" }}
          >
            Privacy Policy
          </a>
          <span className="text-[#1a1a1a]/40 text-[11px]">·</span>
          <a
            href="/terms"
            className="text-[11px] text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
            style={{ textShadow: "0 1px 0 rgba(255,255,255,.5)" }}
          >
            Terms
          </a>
          <span className="text-[#1a1a1a]/40 text-[11px]">·</span>
          <a
            href="/refund"
            className="text-[11px] text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
            style={{ textShadow: "0 1px 0 rgba(255,255,255,.5)" }}
          >
            Refund Policy
          </a>
          <span className="text-[#1a1a1a]/40 text-[11px]">·</span>
          <a
            href="/contact"
            className="text-[11px] text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
            style={{ textShadow: "0 1px 0 rgba(255,255,255,.5)" }}
          >
            Contact
          </a>
        </div>
        <span
          className="text-[12px] tracking-wide text-[#1a1a1a]"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,.5)" }}
        >
          © 2026 Monk Funnel. Delhi, India.
        </span>
      </div>
    </footer>
  );
}
