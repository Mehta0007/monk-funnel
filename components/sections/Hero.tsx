"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../layout/Navbar";
import ScaledDashboard from "../widgets/ScaledDashboard";
import DashboardMockup from "../widgets/DashboardMockup";

const BG_URL =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260611_133301_d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.png&w=1280&q=85";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url("${BG_URL}")` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Spacer: navbar → content */}
      <div className="flex-1 min-h-8 sm:min-h-12 lg:min-h-16 shrink-0" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Badge */}
        <div
          className="animate-fade-down mb-4 inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md ring-1 ring-gray-200 px-4 py-1.5"
        >
          <span className="text-[11px] tracking-widest text-gray-500 uppercase">Conversion-First Websites · Shipped in 21 days</span>
        </div>

        {/* Headline */}
        <h1 className="text-gray-900 font-normal leading-[1.05] tracking-tight text-[40px] min-[400px]:text-[44px] sm:text-6xl lg:text-7xl xl:text-[80px]">
          <span className="block animate-fade-up">Your website should be</span>
          <span
            className="block animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            your best salesperson.
          </span>
        </h1>

        {/* Description */}
        <p
          className="animate-fade-up mt-4 sm:mt-5 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg"
          style={{ animationDelay: "220ms" }}
        >
          Most startup sites explain the product. We build the one that sells the decision —
          rebuilt around one outcome, one message, one action, and shipped in 21 days.
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "340ms" }}
        >
          <a
            href="/contact"
            style={{
              background: "#1e180f",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 24px",
              borderRadius: "999px",
              display: "inline-block",
            }}
          >
            Get a free homepage teardown
          </a>
          <Link
            href="/#services"
            style={{
              color: "#374151",
              fontSize: "14px",
              fontWeight: 400,
              display: "inline-block",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            See how it works
          </Link>
        </div>
      </div>

      {/* Spacer: content → dashboard */}
      <div className="flex-1 min-h-10 sm:min-h-12 lg:min-h-16 shrink-0" />

      {/* Dashboard mockup — z-[5]: above back grass (bg image), below front grass strip */}
      <div
        className="animate-hero-rise relative z-[5] w-[92%] sm:w-[84%] lg:w-[72%] max-w-4xl mx-auto shrink-0 -mb-10 sm:-mb-20 lg:-mb-32"
        style={{ animationDelay: "500ms" }}
      >
        <div className="rounded-t-2xl overflow-hidden bg-[#1a1a1c] shadow-[0_-20px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10 text-left">
          <ScaledDashboard>
            <DashboardMockup />
          </ScaledDashboard>
        </div>
      </div>

      {/* Front grass — z-10: in front of card, sandwiches the card bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none">
        <Image
          src="https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png"
          alt=""
          aria-hidden={true}
          width={1440}
          height={300}
          className="w-full h-auto block"
          priority
        />
      </div>
    </section>
  );
}
