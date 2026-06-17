"use client";

import { useState, useEffect, useRef } from "react";

const MESSAGES = [
  "You talk to the founders. Not an account manager.",
  "We treat every ad rupee like it's our own.",
  "Your competitors are already running ads. Just saying.",
  "No retainer until you've seen what we can do.",
  "Delhi-based. Global-minded. Results-obsessed.",
  "We don't pitch decks. We pitch outcomes.",
  "Funnels, ads, SEO — one team. Not three agencies.",
  "We grew up online. Marketing online is just natural.",
  "Built different. Works different.",
  "We don't outsource. Your brand stays with us.",
  "No fluff. No jargon. Just numbers.",
  "Growth isn't a buzzword here. It's the only metric.",
  "Our average client ROAS is 4.8x. Ask us how.",
  "We've tested more creatives than most agencies have clients.",
  "We fire clients who ghost feedback rounds.",
  "Most agencies charge for strategy. We charge for outcomes.",
  "Your brand deserves better than generic templates.",
  "We don't do boring campaigns. Ever.",
  "We built our first funnel at 19. It worked.",
  "One team. Full stack. No middlemen.",
  "Retargeting alone can double your conversion rate.",
  "If your landing page is slow, the ads are just burning money.",
  "We report weekly. You always know where every rupee went.",
  "Good copy outperforms good design. We do both.",
  "Most brands underestimate how much bad UX costs them.",
  "We don't believe in vanity metrics. Impressions don't pay salaries.",
  "Consistency beats virality. Every single time.",
  "We've seen 3x leads just from fixing a contact form.",
  "Your next customer is already searching for you. Let's make sure they find you.",
  "We obsess over your metrics so you don't have to.",
  "The best time to start SEO was a year ago. Second best? Today.",
  "We don't just run ads. We build systems that scale.",
  "Every brand has a story. We make sure it converts.",
  "Small budgets can win big. Strategy is the multiplier.",
  "Your audience is online 6+ hours a day. We make every second count.",
  "We're not a vendor. We're an extension of your team.",
  "Strategy without execution is just a slide deck.",
  "Most agencies disappear after onboarding. We show up every week.",
  "The difference between good and great is in the data.",
  "We think like your customers, not like marketers.",
  "We've seen brands go from 0 to 10k leads in 90 days.",
  "A/B testing isn't optional. It's how we make every decision.",
  "We work best with founders who are obsessed with growth.",
  "Transparency is non-negotiable. You see everything we see.",
  "We don't do cookie-cutter. Every strategy is built from scratch.",
  "Branding is what people say about you when you leave the room.",
  "We don't stop at launch. That's actually where we start.",
  "Your growth ceiling is usually a strategy problem, not a budget one.",
];

function pickRandom(arr: string[], exclude?: string): string {
  const pool = arr.filter((m) => m !== exclude);
  return pool[Math.floor(Math.random() * pool.length)];
}

const INTERVAL_MS = 9000;

export default function FloatingNPC() {
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState("");
  const [tick, setTick] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setMessage((prev) => pickRandom(MESSAGES, prev));
      setTick((t) => t + 1);
    }, INTERVAL_MS);
  }

  useEffect(() => {
    setMounted(true);
    setMessage(pickRandom(MESSAGES));
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick() {
    setMessage((prev) => pickRandom(MESSAGES, prev));
    setTick((t) => t + 1);
    startTimer(); // reset the 9s countdown on manual click
  }

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @keyframes npc-bob {
          0%, 100% { transform: scaleX(-1) translateY(0px); }
          50%       { transform: scaleX(-1) translateY(-6px); }
        }
        @keyframes npc-pop {
          0%   { opacity: 0; transform: scale(0.88) translateY(5px); }
          65%  { transform: scale(1.03) translateY(-1px); }
          100% { opacity: 1; transform: scale(1)    translateY(0); }
        }
        .npc-mario-sprite {
          display: block;
          animation: npc-bob 1.2s ease-in-out infinite;
          cursor: pointer;
          image-rendering: pixelated;
        }
        .npc-dialog-pop {
          animation: npc-pop 0.24s ease-out both;
        }
      `}</style>

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-end gap-2 sm:gap-3">

        {/* Dialog box */}
        <div
          key={tick}
          className="npc-dialog-pop relative"
          style={{
            background: "#ffffff",
            border: "2px solid #1a1a1a",
            boxShadow: "4px 4px 0px #1a1a1a",
            borderRadius: "4px",
            padding: "10px 14px",
            maxWidth: "min(220px, calc(100vw - 88px))",
            flexShrink: 0,
            fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "1.6",
            color: "#1a1a1a",
            letterSpacing: "-0.01em",
          }}
        >
          <p style={{ margin: 0 }}>{message}</p>

          {/* Speech tail border */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-9px",
              bottom: "18px",
              width: 0,
              height: 0,
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
              borderLeft: "9px solid #1a1a1a",
            }}
          />
          {/* Speech tail fill */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-6px",
              bottom: "19px",
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: "8px solid #ffffff",
            }}
          />
        </div>

        {/* Mario */}
        <button
          onClick={handleClick}
          aria-label="Talk to NPC"
          title="Click for a new message"
          style={{ background: "none", border: "none", padding: 0 }}
        >
          <i className="nes-mario npc-mario-sprite" />
        </button>
      </div>
    </>
  );
}
